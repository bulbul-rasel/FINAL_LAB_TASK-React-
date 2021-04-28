import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <Link to='/'>Home</Link> ||
            <Link to='/add'>add</Link> ||
            <Link to='diarylist'>Diary List</Link>
            <hr/>
        </div>
    )
}

export default Navbar
