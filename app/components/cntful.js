//import axios from 'axios';
//export const FETCH_POSTS = 'FETCH_POSTS';
//const API_BASE_URL = 'https://cdn.contentful.com';
//const API_SPACE_ID = 'xq9fh8s1o76v';
//const API_KEY = 'f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee';
//export function fetchPosts() {
//    const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=post`);
//    return {
//        type: FETCH_POSTS,
//        payload: request
//    };
//}

let getData = {};

function fetchPosts() {

    let request = new XMLHttpRequest();

    request.open('GET', 'https://cdn.contentful.com/spaces/xq9fh8s1o76v/entries?access_token=f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee', true);


    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {

            let data = JSON.parse(request.responseText);
            let jsonData = JSON.stringify(data);
            //console.log('1: = ', typeof jsonData);

            //getData.data = data;
            getData.data = jsonData;
            //console.log('2: = ', typeof getData.data);

            //console.log(elemData);

        } else {
            console.log('reached our target server, but it returned an error');

        }
    };

    request.onerror = function () {
        console.log('Connection Error');
        // There was a connection error of some sort
    };

    request.send();
    //console.log('getData = ', data);


    // ------------
const url = "https://cdn.contentful.com/spaces/xq9fh8s1o76v/entries?access_token=f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee";

    function get(url) {
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            let req = new XMLHttpRequest();
            req.open('GET', url);

            req.onload = function() {
                // This is called even on 404 etc
                // so check the status
                if (req.status === 200) {
                    // Resolve the promise with the response text
                    resolve(req.response);
                }
                else {
                    // Otherwise reject with the status text
                    // which will hopefully be a meaningful error
                    reject(Error(req.statusText));
                }
            };

            // Handle network errors
            req.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            req.send();
        });
    }

    // Use it!
    get(url).then(function(response) {
        //console.log("Success!", response);
        console.log('PROMISE');

        let data2 = JSON.parse(response);
        let jsonData2 = JSON.stringify(data2);
        //console.log('xxxxx: = ', typeof jsonData2);

        //getData.data = data;
        getData.data2 = jsonData2;

        //console.log(jsonData2);
        //console.log(jsonData2['sys']);
        //console.log(typeof jsonData2);

        //data2.forEach(function(item){
        //    console.log(item);
        //});

        console.log(data2);
        console.log(data2.includes.Asset["0"].fields);
        console.log(data2.items["0"].fields.shortDescription);



    }, function(error) {
        console.error("Failed!", error);
    });
}

export {fetchPosts, getData}