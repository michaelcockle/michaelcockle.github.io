import React from 'react'
import ReactDOM from 'react-dom'
import ShowCard from './ShowCard'
import preload from '../../data/data-netflix.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

let Home = React.createClass({
    getInitialState() {
        return {
            searchTerm: 'Default String **',
        }
    },

    handleSearchTermChange(event) {
        this.setState({ searchTerm: event.target.value })
    },

    render: function() {
        return (
            <div>
                <header>
                    <h1>{this.state.searchTerm}</h1>
                    <input
                        onChange={this.handleSearchTermChange}
                        value={this.state.searchTerm}
                        type="text"
                        placeholder="Search"
                    />
                </header>
                <p>
                    <Link to="/topics">Link to Map</Link>
                </p>
                {preload.shows.map(show => {
                    return <ShowCard key={show.imdbID} {...show} />
                })}
            </div>
        )
    },
})

export default Home

//{<pre><code>{JSON.stringify(preload, null, 4)}</code></pre>}
