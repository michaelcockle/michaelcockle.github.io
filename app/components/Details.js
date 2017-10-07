import React, { Component } from 'react'
import Header from './Header'
import Spinner from './Spinner'

class Details extends Component {

    render() {
        const { title, description, year, poster, trailer } = this.props.show
        return (
            <div className="show-card__details">
                <Header />
                <Spinner />
                <h2>Details</h2>

                <section>
                    <h1>{title}</h1>
                    <h2>({year})</h2>
                    <p>{description}</p>
                    <div className="show-card__details-img">
                        <img
                            src={`/dist/img/posters/${poster}`}
                            alt={`project is ${title} `}
                        />
                    </div>
                </section>

                <pre>
                    <code>{JSON.stringify(this.props, null, 4)}</code>
                </pre>
            </div>
        )
    }
}
export default Details
