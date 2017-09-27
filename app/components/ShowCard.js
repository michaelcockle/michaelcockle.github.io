import React from 'react'

//import {shape, string} from 'prop-types'
//const { string } = React.PropTypes

const ShowCard = React.createClass({

    //propTypes: {
    //    poster: string,
    //    title: string,
    //    year: string,
    //    description: string
    //},

    render() {
        const { poster, title, year, description } = this.props
        return (
            <div className="show-card">
                <div className="show-card-img-wrap">
                    <img src={`/dist/img/posters/${poster}`} alt={`${title}`} />
                </div>
                <div className="show-copy-wrap">
                    <h3>{title}</h3>
                    <h3>{year}</h3>
                    <p>{description}</p>
                </div>
            </div>
        )
    },
})

export default ShowCard
