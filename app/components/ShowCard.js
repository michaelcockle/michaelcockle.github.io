import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled(Link)`
    width: 100%;
    @media all and (min-width: 320px) {
        flex: 0 0 50%;
    }
    @media all and (min-width: 768px) {
        //width: 25%;
        flex: 0 0 25%;
    }
    border-radius: 2px;
    margin-bottom: 25px;
    padding: 10px;
    overflow: hidden;
    text-decoration: none;
    color: black;
`

const Image = styled.img`
    width: 100%;
    display: flex;
    margin-right: 10px;
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
        imdbID: string,
    }

    render() {
        return (
            <Wrapper className="show-card" to={`/details/${this.props.imdbID}`}>
                <Image
                    alt={`${this.props.title} Show Poster`}
                    src={`/dist/img/posters/${this.props.poster}`}
                />
                <div>
                    <h3>{this.props.title}</h3>
                    <h4>({this.props.year})</h4>
                    <p>{this.props.description}</p>
                </div>
            </Wrapper>
        )
    }
}

export default ShowCard
