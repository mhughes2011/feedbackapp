import React from 'react'
import PropTypes from 'prop-types'


function Card({children, reverse}) {
    // The below code shows conditional class rendering
    // return (
    //     <div className={`card ${reverse && 'reverse'}`}>
    //         {children}
    //     </div>
    // )

    // The below code shows conditional styling to accomplish the same things as above.
    return (
        <div className="card" style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            color: reverse ? '#fff' : '#000'
        }}>
            {children}
        </div>
    )
}


Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}

export default Card
