let React = require('react')
let ReactDOM = require('react-dom')
import { Link } from 'react-router-dom'
import Header from './Header'

const About = () => (
    <div className="route__item-wrapper">
        <Header />

        <h2>About</h2>

        <p>
            Adipisicing elit, <Link to="/details/ecp">Euro Car Parts</Link> sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure {' '}
            <Link to="/work">see all work</Link> dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat
        </p>

        <div className="about__container">
            <header>header</header>
            <nav>nav</nav>
            <main>main</main>
            <footer>footer</footer>
        </div>

        <div>
            INTERSPERSE div eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad
        </div>

        <div>
            <p>
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute{' '}
            </p>
        </div>
    </div>
)

export default About
