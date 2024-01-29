import React from 'react'
import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className='nav'>
            <Link to={'/'} className='logo'>
                <GiKnifeFork />
                Delicious
            </Link>
        </div>
    )
}

export default Nav