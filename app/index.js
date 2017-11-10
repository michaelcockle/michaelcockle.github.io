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

//import { FETCH_POSTS } from './components/cntful';
import {fetchPosts, getData } from './components/cntful';
fetchPosts();


console.log('------- ****** -------');
console.log(getData);
let dt = getData;
//console.log(dt['data']);

console.log('------- ****** -------');


const renderApp = () => {
    render( <Router><App/></Router>, document.getElementById('app'))
}

renderApp()

if (module.hot) {
    module.hot.accept('./components/App', () => {
       renderApp();
    });
}

