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

            //getData.data = data;
            getData.data = jsonData;

            //console.log(typeof getData);
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
}

export {fetchPosts, getData}