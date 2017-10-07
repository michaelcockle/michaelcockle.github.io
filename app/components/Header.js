import React from 'react'
import { Link } from 'react-router-dom'

//console.log('Props = ', props);

const Header = (props) => {

    let utilSpace

    if (props.showSearch) {
        utilSpace = <p>lol</p>
    } else {
        utilSpace = (
            <h2>
                <Link to="/"> Back </Link>
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
    showSearch: true
}
export default Header
