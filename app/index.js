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

import {fetchPosts, getData} from './components/cntful';

fetchPosts();

const Test = () => {


    return (
        <div className="content-sub__wrap">
            <h2>Hello World*</h2>
        </div>
    )
}

const url = "https://cdn.contentful.com/spaces/xq9fh8s1o76v/entries?access_token=f2b7ef5e7ac493e6714f70081a4d02ce892238ef8546d9e2704247e631f338ee";

fetchPosts(url).then(function (response) {

    let data = JSON.parse(response);

    console.log('data === ', data);
    console.log(data.includes.Asset["0"].fields);
    console.log('BLOG = ', data.items["0"].fields.shortDescription);

    data.items.forEach(function (item) {
        console.log('item == ', item);
        let elem = item.fields.shortDescription;
        console.log('ELEM = ', elem);
        //.fields.title
        //item.fields.forEach(function (elem) {
        //    console.log('elem = ', elem);
        //})
    });
    let passvar = "pass var";
    renderTest(passvar)

}, function (error) {
    console.error("Failed!", error);
});

const renderApp = () => {
    render(<Router><App/></Router>, document.getElementById('app'))
}
renderApp()

const renderTest = ({passvar}) => {
    render(<Test/>, document.getElementById('test'))
}

if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderApp();
    });
}

