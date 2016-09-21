var outletUrlBase:string = "http://"+window.location.hostname+":9873/";
var username:string = "publicweb";
var userkey:string = "webaccess1";
//var retryMs:number = 1000;

export function OutletCall(apicall:string, payload:any, resultcb:(result:any)=>void) {
    let request = new XMLHttpRequest();
    let URL = outletUrlBase + apicall;
    let data = JSON.stringify(payload);
    request.open("POST", URL, true);
    //request.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + userkey))
    request.send(data);
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            let resp = JSON.parse(request.response);
            if (resp.Complete) {
                resultcb(resp);
            } 
        } else{
            console.log("darn");
        }
    }
}
