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

<p className="lead-para">I am a front end web developer / designer with over 10 years of professional experience and more as a freelancer. I have worked in both the public and private sectors, in house and within agency environments. I have designed and built websites from concept to completion.</p>


                {/*<h3>1: {this.state.infoCopy}</h3>*/}
                {/*<h3>2: {this.props.name}</h3>*/}
                {/*<Link to="/details/ecp">Euro Car Parts</Link>*/}
                {/*<Link to="/work">see all work</Link>*/}


                {/*<div className="about__container">*/}
                    {/*<header>header</header>*/}
                    {/*<nav>nav</nav>*/}
                    {/*<aside>aside</aside>*/}

                    {/*<main>*/}
                        {/*<div className="a">*/}
                            {/*<div>a1</div>*/}
                            {/*<div>a2</div>*/}
                            {/*<div>a3</div>*/}
                            {/*<div>a4</div>*/}
                        {/*</div>*/}
                        {/*<div className="b">b</div>*/}
                        {/*<div className="c">c</div>*/}
                        {/*<div className="d">d</div>*/}
                        {/*<div className="e">e</div>*/}
                        {/*<div className="f">f</div>*/}
                        {/*<div className="g">g</div>*/}
                        {/*<div className="h">h</div>*/}
                    {/*</main>*/}

                    {/*<footer>footer</footer>*/}
                {/*</div>*/}


            </div>
        )
    }
}

export default About
