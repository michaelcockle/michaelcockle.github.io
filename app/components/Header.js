import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
    let utilSpace

    if (props.showSearch) {
        utilSpace = (
            <input
                onChange={props.handleSearchTermChange}
                value={props.searchTerm}
                type="text"
                placeholder="Search"
            />
        )
    } else {
        utilSpace = <Link to="/work">Back to work</Link>
    }

    return <header>{utilSpace}</header>
}

Header.defaultProps = {
    showSearch: false,
}

export default Header
