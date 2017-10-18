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



const renderApp = () => {
    render( <Router><App/></Router>, document.getElementById('app'))
}

renderApp()

if (module.hot) {
    module.hot.accept('./components/App', () => {
       renderApp();
    });
}

