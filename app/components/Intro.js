import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const Intro = props => {
    return (
        <div className="route__item-wrapper">
            <p>Intro = {props.earl}</p>
        </div>
    )
}

export default Intro
