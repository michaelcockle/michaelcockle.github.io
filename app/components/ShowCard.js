import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
    //color: black;
`

const Image = styled.img`
    //width: 100%;
`

class ShowCard extends React.Component {
    shouldComponentUpdate() {
        return false
    }

    props: {
        poster: string,
        title: string,
        year: string,
        description: string,
        projectID: string,
        url: string
    }

    render() {
        return (
            <Wrapper className="show-card" to={`/details/${this.props.projectID}`}>
                <Image
                    alt={`${this.props.title} Show Poster`}
                    src={`/dist/img/posters/${this.props.poster}`}
                />
                <div className="show-card__content-wrap">
                    <h3 className="show-card__title">{this.props.title}</h3>
                    <h4 className="show-card__year">({this.props.year})</h4>
                    <p className="show-card__description">{this.props.description}</p>
                </div>
            </Wrapper>
        )
    }
}

export default ShowCard
