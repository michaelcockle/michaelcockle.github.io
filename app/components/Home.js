let React           = require('react');
let ReactDOM        = require('react-dom');
let MapFilterReduce = require('./MapFilterReduce');

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