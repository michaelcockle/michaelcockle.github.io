import React, { Component } from 'react'
import Header from './Header'
import Spinner from './Spinner'


function parse(url) {
    let urlNoProtocol = url
    .replace(/^https?:\/\//i, "")
    .replace(/\/$/, "");
    return urlNoProtocol;
}



class Details extends Component {

    componentDidMount() {
        console.log('Details: Component Did Mount');

    }

    render() {

        const {
            title,
            description,
            year,
            poster,
            trailer,
            url,
            info
        } = this.props.show


        let newUrl = parse(url);
        console.log(newUrl);

        return (
            <div className="route__item-wrapper">

                <Header showSearch="back" />

                {/*<Spinner />*/}

                <section className="show-card__details">

                    <div className="show-card__details-img">
                        <img
                            src={`/dist/img/posters/${poster}`}
                            alt={`project is ${title} `}
                        />
                    </div>

                    <div className="show-card__details-info">
                        <h1>{title}</h1>
                        <h2>({year})</h2>
                        <p>{description}</p>
                        <p>{info}</p>
                        <p>
                            <a target="_blank" href={url}>
                                {newUrl}
                            </a>
                        </p>
                    </div>
                </section>

                {/*<pre>*/}
                {/*<code>{JSON.stringify(this.props, null, 4)}</code>*/}
                {/*</pre>*/}
            </div>
        )
    }
}
export default Details
