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
              if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById("nav_header").style.padding = "5px 10px";
                document.getElementById("nav_header").style.boxShadow = "0 3px 5px 0 rgba(154,160,185,.05), 0 10px 20px 0 rgba(166,173,201,.2)";
                document.getElementById("nav_header").style.background = "rgba(255, 255, 255, 255)";
              } else {
                document.getElementById("nav_header").style.padding = "15px 10px";
                document.getElementById("nav_header").style.boxShadow = "none";
                document.getElementById("nav_header").style.background = "rgba(255, 255, 255,255)";
              }
            }
        }



    return (

        <header id="nav_header" className={headerStyle.header}>        
        <Row>
            <Col md='2' style={{height: '86px', width: '120px', margin: 'auto', textAlign: 'center'}}>
                <Link to='/'><img id='logo' src='../../mindShaper.png' style={{height: '100%', width: '90px', }}/></Link>
                <p className={headerStyle.header_logo__subtitle}>The Shape of Happiness</p>
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
                            <Link className = {headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to='/contact'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </Col>
            <Col md='4' className={headerStyle.list_div} style={{justifyContent: 'flex-end'}}>
                <ul className={headerStyle.navList} style={{paddingTop: '10px'}}>
                    <li >
                        <button className={headerStyle.header_button__design}><Link activeClassName={headerStyle.activeNavItem}  to ='/' style={{color: 'purple', textDecoration: 'none'}}>SIGN IN</Link></button>
                    </li>
                    <li>
                        <button className={headerStyle.header_button__design}><Link activeClassName={headerStyle.activeNavItem} to ='/' style={{color: 'purple', textDecoration: 'none'}}>SIGN UP</Link></button>
                    </li>
                </ul>
            </Col>
        </Row>

        </header>
    )
}
export default Header