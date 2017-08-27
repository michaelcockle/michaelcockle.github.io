let React    = require('react');
let ReactDOM = require('react-dom');
let Nav      = require('./Nav');

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