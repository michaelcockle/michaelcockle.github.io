import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
class Generic extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="route__item-wrapper">
                <h1>skjfdh</h1>
                {/*<h3>Menu : {this.props.match.params.id}</h3>*/}
            </div>
        )
    }
}

export default Generic
