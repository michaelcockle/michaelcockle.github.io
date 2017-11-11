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
const url = "https://cdn.contentful.com/spaces/xq9fh8s1o76v/entries?access_token=f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee";

function fetchPosts() {

    function get(url) {
        // Return a new promise.
        return new Promise(function(resolve, reject) {
            // Do the usual XHR stuff
            let request = new XMLHttpRequest();
            request.open('GET', url);

            request.onload = function() {
                // This is called even on 404 etc so check the status
                if (request.status === 200) {
                    // Resolve the promise with the response text
                    resolve(request.response);
                }
                else {
                    // Otherwise reject with the status text which will hopefully be a meaningful error
                    reject(Error(request.statusText));
                }
            };

            // Handle network errors
            request.onerror = function() {
                reject(Error("Network Error"));
            };

            // Make the request
            request.send();
        });
    }

    get(url).then(function(response) {
        //console.log("Success!", response);
        console.log('PROMISE');

        let data = JSON.parse(response);
        getData.data2 = data;

        console.log(data);
        console.log(data.includes.Asset["0"].fields);
        console.log('BLOG = ', data.items["0"].fields.shortDescription);


    }, function(error) {
        console.error("Failed!", error);
    });
}

export {fetchPosts, getData}