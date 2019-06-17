/*
    EASY HTTP LIBRARY
*/
class easyHTTP {
    constructor(http) {
        this.http = new XMLHttpRequest();
    }

    get(url, callback) {
        this.http.open('GET', url, true);
        this.http.onload = () => {
            if(this.http.status == 200) {
                return callback(null, this.http.responseText); 
            }
            else {
                return callback('Error: ' + this.http.status);
            }
        }
 
        this.http.send()
    }
    // Make an HTTP GET Request

    // Make an HTTP POST Request

    // Make an HTTP PUT Request

    // Make an HTTP DELETE Request
}

