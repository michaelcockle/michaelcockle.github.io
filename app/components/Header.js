import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {

    let utilSpace

    if (props.showSearch) {
        utilSpace = <p>***</p>
    } else {
        utilSpace = (
            <h2>
                <Link to="/">Back</Link>
            </h2>
        )
    }

    return (
        <header>
            <h1>
                <Link to="/">Header</Link>
            </h1>
            {utilSpace}
        </header>
    )
}

Header.defaultProps = {
    showSearch: false
}
export default Header
