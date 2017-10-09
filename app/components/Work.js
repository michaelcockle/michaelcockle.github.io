import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ShowCard from './ShowCard'
import Header from './Header'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Work extends Component {


    state = {
        searchTerm: '',
    }

    componentDidMount() {
        console.log('Work: Component Did Mount')
    }

    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div className="route__item-wrapper">

                <Header
                    searchTerm={this.state.searchTerm}
                    showSearch="yes"
                    handleSearchTermChange={this.handleSearchTermChange}
                />

                <p>{this.state.searchTerm}</p>

                <div className="show-card-wrap">
                    {this.props.shows
                        .filter(show => {
                            return (
                                `${show.title} ${show.description}${show.metadata}`
                                    .toUpperCase()
                                    .indexOf(
                                        this.state.searchTerm.toUpperCase(),
                                    ) >= 0
                            )
                        })
                        .map((show, index) => {
                            return (
                                <ShowCard
                                    {...show}
                                    key={show.projectID}
                                    id={index}
                                />
                            )
                        })}
                </div>
            </div>
        )
    }
}

export default Work
