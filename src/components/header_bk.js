import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container,Dropdown } from 'react-bootstrap'


import headerStyle from './header.module.scss'
import { NavDropdown } from 'react-bootstrap'

const Header = () =>{

    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)


    return (

        
        <header className={headerStyle.header} >
            <h1 className={headerStyle.head}>
                <i><Link className={headerStyle.title} to='/'>
                <img src ={'../../demologo.png'} alt="Logo" width="300" height="80px"/>
                </Link></i>
            </h1>
            <nav className={headerStyle.nav}>
                <ul className={headerStyle.navList} >
                    <li >
                        <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ='/about'>About</Link>
                    </li>
                    <li>
                        <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ='/services'>Services</Link>
                    </li>
                    <li>
                        <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/contact'>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header