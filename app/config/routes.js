let React       = require('react');
let ReactRouter = require('react-router');
let Router      = ReactRouter.Router;
let Route       = ReactRouter.Route;
let hashHistory = ReactRouter.hashHistory;
let IndexRoute  = ReactRouter.IndexRoute;
let Main        = require('../components/Main');

let routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Xxxx}>
            <IndexRoute component={Xxxx}/>
        </Route>
    </Router>
);

module.exports = routes;