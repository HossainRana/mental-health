import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown,Nav, Row, Col, Button, Navbar, Form, FormControl } from 'react-bootstrap'
import headerStyle from './header.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleUp, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

const Header = () =>{

    const data = useStaticQuery(graphql`
    query {
        site{
            siteMetadata{
                title
            }

        }
        currentBuildDate {
             currentDate
        }
        allRestApiPosts {
            edges {
                node {
                    userId
                    id
                    title
                    body
                }
            }
        }
    }

    `)


        if (typeof window !== `undefined`) {
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
              if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("nav_header").style.padding = "0 10px";
                document.getElementById("nav_header").style.boxShadow = "0 3px 5px 0 rgba(154,160,185,.05), 0 10px 20px 0 rgba(166,173,201,.2)";
              } else {
                document.getElementById("nav_header").style.padding = "20px 10px";
                document.getElementById("nav_header").style.boxShadow = "none";
              }
            }
        }



    return (

        <header id="nav_header" className={headerStyle.header}>        
        <Row>
            <Col md='2' style={{height: '86px', width: '120px', margin: 'auto', textAlign: 'center'}}>
                <Link to='/'><img id='logo' src='../../mindShaper.png' style={{height: '100%', width: '120px', }}/></Link>
            </Col>
            <Col md='6'>
                <div className={headerStyle.list_div}>
                    <ul className={headerStyle.navList}>
                        <li >
                            <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ='/'>Home</Link>
                        </li>
                        <li>
                            <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to ='/about'>About</Link>
                        </li>
                        <li>
                            <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/contact'>Contact us</Link>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md='4' className={headerStyle.list_div} style={{justifyContent: 'flex-end'}}>
                <ul className={headerStyle.navList} >
                    <li >
                        <button className={headerStyle.header_button__design}><Link activeClassName={headerStyle.activeNavItem}  to ='/' style={{color: 'purple', textDecoration: 'none'}}>Log In</Link></button>
                    </li>
                    <li>
                        <button className={headerStyle.header_button__design}><Link activeClassName={headerStyle.activeNavItem} to ='/' style={{color: 'purple', textDecoration: 'none'}}>Sign Up</Link></button>
                    </li>
                </ul>
            </Col>
        </Row>

        </header>
    )
}
export default Header