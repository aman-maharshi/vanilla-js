/*
    EASY HTTP LIBRARY
*/
class easyHTTP {
    constructor(http) {
        this.http = new XMLHttpRequest();
    }
    // Make an HTTP GET Request
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
     // Make an HTTP POST Request
    post(url, data, callback) {
        this.http.open('POST', url, true);
        // here in post we've to set the content type in addition to onload        
        this.http.setRequestHeader('Content-type', 'application/json');
        this.http.onload = () => {
            // no need to check for status as we are posting data
            callback(null, this.http.responseText);
        }

        this.http.send(JSON.stringify(data));

    }
}

