import React from 'react'
import ReactDOM from 'react-dom'
import preload from '../../data/data-netflix.json'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

let Examples = React.createClass({
    render: function () {
        return (
            <div className='component-examples'>
                <p>Work</p>
                <pre><code>{JSON.stringify(preload, null, 4)}</code></pre>
            </div>
        )
    }
});

export default Examples