import React from 'react'
import Header from './Header'


const Details = props => {
    const { title, description, year, poster, trailer } = props.show
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

            <hr />
            <pre>
                <code>{JSON.stringify(props, null, 4)}</code>
            </pre>
        </div>
    )
}

export default Details
