import React, { Component } from 'react'

let ReactDOM = require('react-dom')
import { Link } from 'react-router-dom'
import Header from './Header'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            infoCopy: 'This is info',
        }
    }

    render() {
        return (
            <div className="route__item-wrapper">

                <Header showSearch="no" />

                {/*<h3>1: {this.state.infoCopy}</h3>*/}
                {/*<h3>2: {this.props.name}</h3>*/}

                <p>
                    Hello world <Link to="/details/ecp">Euro Car Parts</Link> sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    <Link to="/work">see all work</Link>
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat
                </p>

                <div className="about__container">
                    <header>header</header>
                    <nav>nav</nav>
                    <aside>aside</aside>

                    <main>
                        <div className="a">
                            <div>a1</div>
                            <div>a2</div>
                            <div>a3</div>
                            <div>a4</div>
                        </div>
                        <div className="b">b</div>
                        <div className="c">c</div>
                        <div className="d">d</div>
                        <div className="e">e</div>
                        <div className="f">f</div>
                        <div className="g">g</div>
                        <div className="h">h</div>
                    </main>

                    <footer>footer</footer>
                </div>

                <div>
                    INTERSPERSE div eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad
                </div>

                <div>
                    <p>
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute{' '}
                    </p>
                </div>
            </div>
        )
    }
}

export default About
