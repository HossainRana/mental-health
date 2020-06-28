import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import 'bootstrap/dist/css/bootstrap.css'
import { Dropdown,Nav } from 'react-bootstrap'
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
                document.getElementById("nav_header").style.padding = "10px 10px";
                document.getElementById("logo").style.fontSize = "25px";
              } else {
                document.getElementById("nav_header").style.padding = "20px 10px";
                document.getElementById("logo").style.fontSize = "35px";
              }
            }
        }



    return (

        <header className={headerStyle.header} id="nav_header">
            <Nav>
                <div>
                    <Link to='/'><img id='logo' style={{margin: '5px'}} src ={'../../mindShaper.png'} alt="Logo" height="70px" width="100px"/></Link>
                </div>
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
            </Nav>
        </header>
    )
}
export default Header