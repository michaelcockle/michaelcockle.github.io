import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Match,
} from 'react-router-dom'

import Transition from 'react-transition-group/Transition'
import CSSTransition from 'react-transition-group/CSSTransition';
import Examples from './Examples'
import Home from './Home'
import About from './about'
import Details from './Details'
import preload from '../../data/data-portfolio-cards.json'
import Animation from './Animation';

const FourOhFour = () => <h1>404</h1>

const App = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/details/ecp">Details</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
                <li>
                    <Link to="/animation">Animation</Link>
                </li>
            </ul>

            <hr />

            <Switch>
                <Route exact path="/" component={(props) => <Home shows={preload.shows} {...props} />} />
                <Route
                    path="/details/:id"
                    component={props => {
                        const selectedShow = preload.shows.find(
                            show => props.match.params.id === show.imdbID,
                        )
                        return <Details show={selectedShow} />
                    }}
                />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
                <Route path="/examples" component={Examples} />
                <Route path="/animation" component={Animation} />
                <Route component={FourOhFour} />
            </Switch>
        </div>
    </Router>
)




const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}> Components </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}> Props v. State </Link>
            </li>
        </ul>
        <Route path={`${match.url}/:topicId`} component={Topic} />{' '}
        <Route
            exact
            path={match.url}
            render={() => <h3>Please select a topic</h3>}
        />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default App
