import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
    let utilSpace

    if (props.showSearch === 'yes') {
        utilSpace = (
            <input
                placeholder="Search"
                value={props.searchTerm}
                onChange={props.handleSearchTermChange}
                type="text"
            />
        )
    } else if (props.showSearch === 'back') {
        utilSpace = <Link to="/work">Back to work</Link>
    } else {
        utilSpace = ''
    }

    return <header>{utilSpace}</header>
}

Header.defaultProps = {
    showSearch: false,
}

export default Header
