import React, { Component } from 'react'
import Header from './Header'

class Details extends Component {

    //props: {
    //    show: Show,
    //}

    render() {
        const { title, description, year, poster, trailer } = this.props.show
        return (
            <div className="details">
                <Header />
                <h2>Details</h2>

                <section>
                    <h1>{title}</h1>
                    <h2>({year})</h2>
                    <p>{description}</p>
                    <div className="img-project-detail">
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
