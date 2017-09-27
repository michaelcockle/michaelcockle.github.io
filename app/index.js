import React from 'react'
import {render} from 'react-dom'
//import App from './App'
import BasicExample from './components/BasicExample'
require('./styles/app.scss');

const renderApp = () => {
    render(<BasicExample/>, document.getElementById('app'));
}

renderApp()

if (module.hot) {
    module.hot.accept('./components/BasicExample', () => {
       renderApp();
    });
}

