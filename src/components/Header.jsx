// The below import is no longer needed in modern react if you don't want it.  I'm going to leave it in for clarity sake.
import React from 'react'
import PropTypes from 'prop-types'

function Header({text}) {
    return (
        <header>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Feedback UI'
}

Header.propTypes = {
    text: PropTypes.string
}


export default Header
