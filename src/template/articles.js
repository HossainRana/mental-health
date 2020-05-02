import React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../components/layout'
import templateStyle from './template.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Container } from 'react-bootstrap'
import Icon from 'react-bootstrap-icons'
import Head from '../components/head'


const Blog = (props) =>{
    return(
        <Layout>
            <Head title="Blog Posts"/>
            <Row className={templateStyle.padding}>
                <Col md='2' >
                    <div>
                        <img src='../../blackBoard.png'/>
                    </div>
                    <div>
                        <img src='../../e-commerce.png'/>
                    </div>
                    <div>
                        <img src='../../nex.png'/>
                    </div>
                </Col>
                <Col md= '5' className={templateStyle.post_background}>
                    <p className={templateStyle.p_tag}>By <strong>Reporter Name, </strong> Staff Writter. February 2020</p>

                    <h3 className={templateStyle.h3_tag}>Quarantined passengers disembark ship in Japan; new China coronavirus cases fall</h3>

                    <img src='../../post_test_img.jpg' height='400px' width='100%'/>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
                    electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.</p> 
                </Col>
                <Col md='2'>
                    <div style={{background:'#fff', height:'20rem'}}>
                    
                    </div>
                </Col>
                <Col md= '3'>
                    <div className={templateStyle.searchbar}>
                        <input className={templateStyle.searchbar_input}  placeholder='search posts here...'></input>
                    </div>
                    <div className={templateStyle.card_design}>
                        <ul className={templateStyle.list_item}>
                            <h1 className={templateStyle.h1}>Category</h1>
                            <Link to='/'><li className={templateStyle.link}>Politics</li></Link>
                            <Link to='/'><li className={templateStyle.link}>National</li></Link>
                            <Link to='/'><li className={templateStyle.link}>International</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Regulation</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Business</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Finance</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Technology</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Jobs</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Finance</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Health Care</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Administration</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Kids</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Sports</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Game</li></Link>
                            <Link to='/'><li className={templateStyle.link}>Future</li></Link>
                        </ul>
                    </div>
                    <div className={templateStyle.card_design}>
                            <h1 className={templateStyle.h1}>Recent Posts</h1>
                        <Link>
                            <div className={templateStyle.recent_post}>
                                <img src='../../recent_demo.jpg' height='90px' width='40%'/>
                                <p className={templateStyle.recent_post_text} >Lorem Ipsum is simply dummy text</p>
                            </div>
                        </Link>
                        <Link>
                            <div className={templateStyle.recent_post}>
                                <img src='../../recent_demo2.jpg' height='90px' width='40%'/>
                                <p className={templateStyle.recent_post_text} >Lorem Ipsum is simply dummy text</p>
                            </div>
                        </Link>
                        <Link>
                            <div className={templateStyle.recent_post}>
                                <img src='../../recent_demo3.jpg' height='90px' width='40%'/>
                                <p className={templateStyle.recent_post_text} >Lorem Ipsum is simply dummy text</p>
                            </div>
                        </Link>
                    </div>
                </Col>
            </Row>
                <Row>
                    <Col md='6' style={{marginLeft:'24%'}}>
                        <h3>Comment</h3>
                        <textarea placeholder='Write your comment' style={{  height: "150px"},{width:"100%"} }></textarea>
                        <button style={{margin: "20px"}}>Save</button>
                    </Col>
                </Row>
        </Layout>
    )
}

export default Blog