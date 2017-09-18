import React from 'react'
import MapFilterReduce from './MapFilterReduce'
import Examples from './Examples'
import Home from './Home'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/map">Map</Link>
                </li>
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
            </ul>

            <hr />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/map" component={MapFilterReduce} />
                <Route path="/examples" component={Examples} />
                <Route component={FourOhFour}></Route>
            </Switch>
        </div>
    </Router>
)

const FourOhFour = () => <h1>404</h1>

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}> Components </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}> Props v. State </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample
