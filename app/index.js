import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import BasicExample from './components/BasicExample'

require('./styles/app.scss');

ReactDOM.render(<BasicExample/>, document.getElementById('app'))

//import ReactDOM from 'react-dom'
//import MapFilterReduce from './MapFilterReduce'
//export default Home

//let React                                    = require('react');
//let ReactDOM                                 = require('react-dom');
//let {Route, Router, IndexRoute, hashHistory} = require('react-router');
// App css
/*
 * Components
 * */

//let Main     = require('./components/Main');
//let Template = require('./components/Home');
//let About    = require('./components/About');
//let Examples = require('./components/Examples');

//ReactDOM.render(
//    <Router history={hashHistory}>
//        <Route path={'/'} component={Main}>
//            <Route path="about" component={About}/>
//            <Route path="examples" component={Examples}/>
//            <IndexRoute component={Template}/>
//        </Route>
//    </Router>,
//    document.getElementById('app')
//);

/*
 * ---------
 * */




