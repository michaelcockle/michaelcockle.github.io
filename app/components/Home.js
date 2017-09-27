import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ShowCard from './ShowCard'
import preload from '../../data/data-portfolio-cards.json'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Home extends Component {

    state = {
        searchTerm: ''
    };

    handleSearchTermChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    };

    render() {
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

                <div className="show-card-wrap">
                    {preload.shows
                        .filter(show => {
                            return (
                                `${show.title} ${show.description}`
                                    .toUpperCase()
                                    .indexOf(
                                        this.state.searchTerm.toUpperCase(),
                                    ) >= 0
                            )
                        })
                        .map((show, index) => {
                            return <ShowCard {...show} key={show.imdbID} id={index}/>
                        })}
                </div>
            </div>
        )
    }
}

export default Home


