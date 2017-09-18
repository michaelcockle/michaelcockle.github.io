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




