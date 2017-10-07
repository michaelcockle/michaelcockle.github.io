import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Match,
} from 'react-router-dom'

import { CSSTransitionGroup } from 'react-transition-group'
import Transition from 'react-transition-group/Transition'
import CSSTransition from 'react-transition-group/CSSTransition'
import TransitionGroup from 'react-transition-group/Transition'
import { AnimatedSwitch, spring, AnimatedRoute } from 'react-router-transition'
import { withRouter } from 'react-router-dom'

import preload from '../../data/data-portfolio-cards.json'

import Work from './Work'
import About from './About'
import Details from './Details'
import Animation from './Animation'

const FourOhFour = () => <h1>404</h1>

// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    }
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 330,
        damping: 22,
    })
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        scale: bounce(1),
    },
}

const App = () => (
    <Router>
        <div>
            <ul className="nav-main__wrap">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
                <li>
                    <Link to="/animation">Animation</Link>
                </li>
            </ul>

            <Switch>
                <AnimatedSwitch
                    atEnter={bounceTransition.atEnter}
                    atLeave={bounceTransition.atLeave}
                    atActive={bounceTransition.atActive}
                    mapStyles={mapStyles}
                    className="route-wrapper"
                >
                    <Route exact path="/" component={About} />

                    <Route
                        path="/work"
                        component={props => (
                            <Work shows={preload.shows} {...props} />
                        )}
                    />
                    <Route
                        path="/details/:id"
                        component={props => {
                            const selectedShow = preload.shows.find(
                                show => props.match.params.id === show.imdbID,
                            )
                            return <Details show={selectedShow} />
                        }}
                    />

                    <Route path="/topics" component={Topics} />
                    <Route path="/animation" component={Animation} />
                    <Route component={FourOhFour} />
                </AnimatedSwitch>
            </Switch>
        </div>
    </Router>
)

const Topics = ({ match }) => (
    <div className="route__item-wrapper">
        <h2>Topics</h2>
        <ul className="nav-sub__wrap">
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
            render={() => <p>Please select a topic</p>}
        />
    </div>
)

const Topic = ({ match }) => (
    <div className="content-sub__wrap">
        <h3>{match.params.topicId}</h3>
    </div>
)

export default App
