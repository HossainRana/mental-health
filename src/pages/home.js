import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import style from './home.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout'
import { Row, Col} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import 'typeface-source-sans-pro'
import 'typeface-orbitron'



const IndexPage = () => {

    
    
    const  data = useStaticQuery(graphql`
        query {
            allRestApiPosts(filter: {endpointId: {lt:10}}){
                edges {
                  node {
                        endpointId
                        title
                        body
                    }
                }
            }
            allRestApiUsers(filter: {email: {eq: "Karley_Dach@jasper.info"},})  {
                edges {
                    node {
                        name
                        phone
                        email
                        username
                        website
                    }
                }
            }
            singleImage : allRestApiPhotos(filter: {url: {eq: "https://via.placeholder.com/600/d4212b"}})  {
                edges {
                    node {
                        url
                        thumbnailUrl
                    }
                }
            }
            thumbnail : allRestApiPhotos(filter: {endpointId: {lt: 4}})  {
                edges {
                    node {
                        url
                        thumbnailUrl
                        title
                    }
                }
            }
        }
    `)
    return (
        <Layout>      
        <Row style={{marginLeft:'10px', marginRight:'10px'}}>

            <Row className={style.padding}>
                <Col md="2">

                </Col>

                <Col style={{paddingLeft:'0',paddingRight:'0'}}>
                    <p><strong>Today's</strong> Headlines</p>
                    <Row>
                        <Col md='8'>
                            <div className={style.feature_card}>
                                {data.singleImage.edges.map(edge => {
                                    return (
                                        <div>
                                            <img src={edge.node.url} height='250px'  width='100%'/>
                                        </div>
                                    );
                                })}
                            </div>
                            <div>
                                {data.thumbnail.edges.map(edge =>{
                                    return (
                                        <Link to={`/articles/${edge.node.title}`}>
                                            <div style={{marginTop:'10px', display:'flex'}}> 
                                                <img src={edge.node.thumbnailUrl} height='100px' width='150px'/>
                                                <p style={{marginLeft:'5px',fontSize:'16px',height:'20px'}}>{edge.node.title}</p>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </Col>
                        <Col md='4'>
                            <p style={{background:'red',paddingLeft:'10px'}}>Headlines</p>
                            {data.allRestApiPosts.edges.map(edge => {
                                return (
                                    <div>
                                        <ul style={{listStyle:'none', marginLeft:'0', borderBottom:'1px solid #c1c1c1', marginBottom:'0', marginTop:'0'}}>
                                            <Link className={style.headlineList} to={`/articles/${edge.node.endpointId}`}>
                                                <li ><p style={{fontSize:'14px'}}>{edge.node.title}</p></li>
                                            </Link>
                                            
                                        </ul>
                                    </div>
                                );
                            })}
                        </Col>
                    </Row>
                </Col>
                <Col md="2">
                    <div className={style.card_design_one}>
                        <div>
                            <h4 style={{textAlign:'center',color:'gray'}}>Happening Now</h4>
                        </div>
                        <img src='../../ran.jpg'/>
                        <p style={{fontSize:'12px', color:'green'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                    </div>
                    <div className={style.card_design_one}>
                        <img src='../../test.gif'/>
                    </div>
                </Col>
                <Col md="2">

                </Col>
            </Row>
            <Row>
                <Col className={style.container_card1} md='6' >
                    <img src='../../Capture.PNG' alt='Desk' width='100%' height='100%'/>
                </Col>
                <Col md='6'>
                    <div className={style.container_card2_diplay}>
                        <div className={style.container_card2}>
                            <img src='../../Capture2.PNG' alt='Desk' width='100%' height='100%'/>
                        </div>
                        <div className={style.container_card2}>
                            <img src='../../test4.gif' alt='Desk' width='100%' height='100%'/>
                        </div>
                    </div>
                    <div className={style.container_card2_diplay}>
                        <div className={style.container_card2}>
                            <img src='../../test3.gif' alt='Desk' width='100%' height='100%'/>
                        </div>
                        <div className={style.container_card2}>
                            <img src='../../test2.gif' alt='Desk' width='100%' height='100%'/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Col md='12' style={{paddingTop:"50px", paddingLeft:'0', paddingRight:'0'}}>
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../WhatsNews.png"
                        alt="First slide" height="300px" width="600px"
                        style={{objectFit:'cover'}}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../post_test_img.jpg"
                        alt="Third slide" height="300px" width="600px"
                        style={{objectFit:'cover'}}
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="../../recent_demo2.jpg"
                        alt="Third slide" height="300px" width="600px"
                        style={{objectFit:'cover'}}
                    />
                    </Carousel.Item>
                </Carousel>
            </Col>

            <section  id="root" className={style.featureSection}>
                    <Row>
                        <Col md='4'>
                            <div>
                                <h3><strong>Conversations, organized</strong></h3>
                                <p>Instead of a single overstuffed inbox, conversations in Slack happen in dedicated spaces called channels.</p>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div>
                                <h3><strong>Get looped in, not out</strong></h3>
                                <p>Slack makes it simple to follow conversations or find important information in an easily searchable archive.</p>
                            </div>
                        </Col>
                        <Col md='4'>
                            <div>
                                <h3><strong>Give focus a chance</strong></h3>
                                <p>Unlike email, Slack lets you choose which conversations are most important — and which can wait.</p>
                            </div>
                        </Col>
                    </Row>
            </section>

            <section className={style.content}>
                <div className={style.contentGrid}>
                    <div className={style.contentGridItems}>
                        <div>
                            <h2>Make the change to channels</h2>
                            <p>Productive teamwork happens in channels — organized spaces for everything related to 
                                a project, topic or team.
                            </p>
                            <Link to='/'><p>Learn more about channels</p></Link>
                        </div>

                    </div>
                    <div className={style.contentGridItems}>
                        <video loop="" autoplay="" muted  src='../../demov.mp4' width='100%'>
                        
                        </video>
                    </div>
                </div>
            </section>

            <section className={style.content}>
                <div className={style.contentGrid}>
                    <div className={style.contentGridItems}>
                        <video loop="" autoplay="" muted  src='../../demov.mp4' width='100%'></video>
                    </div>
                    <div className={style.contentGridItems}>
                        <div>
                            <h2>Shared channels bring companies together</h2>
                            <p>Now channels can help you work as closely with external partners
                            and clients as you do with teams down the hall.
                            </p>
                            <Link to='/'><p>Learn more about channels</p></Link>
                        </div>
                    </div>
                </div>
            </section>
        </Row>
    </Layout>
    )
}

export default IndexPage