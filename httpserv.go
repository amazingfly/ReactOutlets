package main

import (
	"log"
	"net/http"
)

func main() {
	// Simple static webserver:
	log.Fatal(http.ListenAndServe(":8181", http.FileServer(http.Dir("./"))))
	log.Fatal(http.ListenAndServe("/dist", http.FileServer(http.Dir("./dist"))))
}
