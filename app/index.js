import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Match,
} from 'react-router-dom'

import {fetchPosts, getData } from './components/cntful';
fetchPosts();


console.log('------- ****** -------');

console.log('fetchPosts = ', fetchPosts.value);

console.log('getData ===== ', getData);


console.log('------- ****** -------');


//getData.forEach(function(item){
//    console.log(item);
//});

console.log('------- ¢¢¢¢¢¢¢ -------');


const renderApp = () => {
    render( <Router><App/></Router>, document.getElementById('app'))
}

renderApp()

if (module.hot) {
    module.hot.accept('./components/App', () => {
       renderApp();
    });
}

