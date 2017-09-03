let React               = require('react');
let ReactDOM            = require('react-dom');
let {Link, IndexLink}   = require('react-router');

//import React from 'react'
//import ReactDOM from 'react-dom'
//import Link, IndexLink  from 'react-router'
//import {Link, IndexLink} from 'react-router'



let Nav = React.createClass({
    render: function () {
        return (
            <div>
                <ul className="nav">
                    <li>
                        <IndexLink to='/' activeClassName='active'>Home</IndexLink>
                    </li>
                    <li>
                        <IndexLink to='about' activeClassName='active'>About</IndexLink>
                    </li>
                    <li>
                        <IndexLink to='examples' activeClassName='active'>Work</IndexLink>
                    </li>
                </ul>
            </div>
        )
    }
});

module.exports = Nav;
//export default Nav