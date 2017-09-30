import React from 'react'
console.log('Details.js')

const Details = props => {
    const { title, description, year, poster, trailer } = props.show
    return (
        <div className="details">
            <h1>Details</h1>

            <header>
                <h1>Project</h1>
            </header>

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
