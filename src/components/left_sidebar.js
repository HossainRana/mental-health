import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import style from './sidebar.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container, } from 'react-bootstrap'


const Sidebar = () =>{

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
        <Nav>
            <Row>
                <Col md="2">
                    <div className={style.left_sidebar}>
                        <ul className={style.list_item}>
                            <h1 className={style.h1}>Category</h1>
                            <Link to='/'><li className={style.link}>Politics</li></Link>
                            <Link to='/'><li className={style.link}>National</li></Link>
                            <Link to='/'><li className={style.link}>International</li></Link>
                            <Link to='/'><li className={style.link}>Regulation</li></Link>
                            <Link to='/'><li className={style.link}>Business</li></Link>
                            <Link to='/'><li className={style.link}>Finance</li></Link>
                            <Link to='/'><li className={style.link}>Technology</li></Link>
                            <Link to='/'><li className={style.link}>Jobs</li></Link>
                            <Link to='/'><li className={style.link}>Finance</li></Link>
                            <Link to='/'><li className={style.link}>Health Care</li></Link>
                            <Link to='/'><li className={style.link}>Administration</li></Link>
                            <Link to='/'><li className={style.link}>Kids</li></Link>
                            <Link to='/'><li className={style.link}>Sports</li></Link>
                            <Link to='/'><li className={style.link}>Game</li></Link>
                            <Link to='/'><li className={style.link}>Future</li></Link>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Nav>
    )
}

export default Sidebar