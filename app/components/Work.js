import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ShowCard from './ShowCard'
import Header from './Header'
import { BrowserRouter as Router, Route, Link, Match } from 'react-router-dom'

class Work extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: '',
        }
    }

    componentDidMount() {
        console.log('Work: Component Did Mount')
        //console.log(this)
        //console.log('---------------------**  -----')
        //console.log(this.props.match.url)
        //console.log(this.props.match.path);
        //console.log(this.props.abba.isExact)
        //console.log(this.props.history);
    }

    handleSearchTermChange = event => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div className="route__item-wrapper">

                <h1 className="heading-page">Work</h1>

                {/*<h1>{this.props.match.url}</h1>*/}
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
