import React from 'react'
import {Link} from 'gatsby'
import headerStyles from '../styles/header.module.scss'
const Header = () => {
    return (
        <header>
        <h1>Matt Hoffman Photo</h1>
        <nav>
            <ul>
                <li><Link className={headerStyles.link} to="/">Home</Link></li>
                <li><Link to='/about'>About Me</Link></li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact'>Contact Me</Link></li>
            </ul>
        </nav>
    </header>
    )
}


export default Header