import React from 'react'
import {Link} from 'react-router-dom'

import {FaQuestion} from 'react-icons/fa'

function AboutIconLink() {
    return (
        <div className='about-link'>
            <Link to='/about'>
                <FaQuestion siz={30} />
            </Link>
        </div>
    )
}

export default AboutIconLink
