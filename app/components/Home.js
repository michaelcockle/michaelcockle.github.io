let React           = require('react');
let ReactDOM        = require('react-dom');
let MapFilterReduce = require('./MapFilterReduce');

//import React from 'react'
//import ReactDOM from 'react-dom'
//import MapFilterReduce from './MapFilterReduce'



let Home = React.createClass({
    render: function () {
        return (
            <div>
                <p>Home</p>
                <MapFilterReduce/>
            </div>
        )
    }
});

module.exports = Home;
//export default Home