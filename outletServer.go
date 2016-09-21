package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os/exec"
	"regexp"
	"strings"
	"time"
)

type SetupOutlets struct {
	Count    int
	Complete bool
	Outlets  []Outlets
}
type Outlets struct {
	Name        string
	Position    bool
	Description string
}

var validPath = regexp.MustCompile("^/(edit|save|view)/([a-zA-Z0-9]+)$")

func makeHandler(fn func(http.ResponseWriter, *http.Request)) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		fn(w, r)

	}
}

func outletHandler(w http.ResponseWriter, r *http.Request) {
	signal := strings.SplitAfter(fmt.Sprint(r.URL), "=")
	isON := signal[2]
	signalSplit := strings.Split(signal[1], "&")
	outletNum := signalSplit[0]
	fmt.Println(signal)
	fmt.Println(isON)
	fmt.Println(signalSplit)
	fmt.Println(outletNum)
	var o string
	if isON != "true" {
		o = "off"
	} else {
		o = "on"
	}
	s := fmt.Sprint(o + outletNum + "outlet")
	cmd := exec.Command(s)
	err := cmd.Start()
	if err != nil {
		fmt.Println(err)
	}
}

//SendOutlets sends the desire number of outlets to setup
func SendOutlets(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "*")

	u := SetupOutlets{
		Count:    5,
		Complete: true,
		Outlets: []Outlets{
			{Name: "power", Description: "Over 9000!!!", Position: false},
			{Name: "glip", Position: true, Description: "glop!"},
		},
	}

	x, err := json.Marshal(u)
	if err != nil {
		fmt.Println(err)
	}
	w.Write(x)
}

func Serve() {
	//load page
	fmt.Println("server")
	http.HandleFunc("/getOutlets", SendOutlets)
	s := &http.Server{
		Addr:           ":9873",
		Handler:        nil,
		ReadTimeout:    10 * time.Second,
		WriteTimeout:   10 * time.Second,
		MaxHeaderBytes: 1 << 20,
	}
	log.Fatal(s.ListenAndServe())

}
func main() {
	fmt.Println("hello")
	Serve()
	//log.Fatal(http.ListenAndServe(":8181", http.FileServer(http.Dir("./"))))
	//log.Fatal(http.ListenAndServe("/dist", http.FileServer(http.Dir("./dist"))))
}
