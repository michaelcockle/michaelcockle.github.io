let React    = require('react');
let ReactDOM = require('react-dom');
let Nav      = require('./Nav');



//import 'styles.css'
//import {render} from 'react-dom'
//import React from 'react'
//import ReactDOM from 'react-dom'
//import Nav from './Nav'


let Main = React.createClass({
    render: function () {
        return (
            <div className="main-wrap">
                <Nav/>
                {this.props.children}
            </div>
        )
    }
});

module.exports = Main;
//export default Main