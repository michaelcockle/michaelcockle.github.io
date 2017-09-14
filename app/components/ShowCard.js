import React from 'react'

const {string} = React.PropTypes

const ShowCard = React.createClass({

    propTypes: {
            poster:      string,
            title:       string,
            year:        string,
            description: string
    },

    render() {
        const {poster, title, year, description} = this.props
        return (
            <div className='show-card'>
                <h3>{title}</h3>
                <h3>{year}</h3>
                <p>{description}</p>
                <img src={`/dist/img/posters/${poster}`}/>
            </div>
        )
    }
})

export default ShowCard