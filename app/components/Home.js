import React from 'react'
import ReactDOM from 'react-dom'
import ShowCard from './ShowCard'
import preload from '../../data/data-netflix.json'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

let Home = React.createClass({
    render: function () {
        return (
            <div>
                <Link to='/topics'>Link to Map</Link> {preload.shows.map((show) => {
                return (
                    <ShowCard key={show.imdbID} show={show}/>
                )
            })}
            </div>
        )
    }
});

export default Home

//{<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>}
