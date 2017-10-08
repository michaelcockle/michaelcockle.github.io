import React, { Component } from 'react'
import Header from './Header'
import Spinner from './Spinner'

class Details extends Component {

    render() {
        const { title, description, year, poster, trailer, url } = this.props.show
        return (
            <div className="route__item-wrapper">

                <Header />

                {/*<Spinner />*/}

                <section className="show-card__details">
                    <h1>{title}</h1>
                    <h2>({year})</h2>
                    <p>{description}*</p>
                    <p><a target="_blank" href={url}>{url}</a></p>
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
