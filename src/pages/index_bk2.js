import React,{Component} from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import style from './home.module.scss'
import Layout from '../components/layout'
import indexstyle from './index.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Nav, Card, Button, Form, Container} from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import 'typeface-source-sans-pro'
import 'typeface-orbitron'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone } from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => {

    return (
        
        <Layout style={{overflowX:'hidden'}}>

            <Row>
                <Col md='6'></Col>
                <Col md='6'></Col>
            </Row>

            <div className={indexstyle.header_background}>
                <Row style={{marginLeft:'5px', marginRight:'5px',paddingTop:'15%'}}>
                    <Col md='4'>
                        <div>
                            <h5 style={{color:'green'}}>POWERFUL AND TRANSFORMATIVE, JUST LIKE YOU</h5>
                            <p style={{color:'black', fontSize:'14px', fontWeight:'700'}}>The work health and wellness professionals are called to do is powerful and transformative – for the individual and the world. The mission of SimplePractice is deeply rooted in helping our customers tend to their clients and that is what drives our team every single day.</p>
                        </div>
                        <div className={indexstyle.leftside_input} style={{border:'1px solid green'}}>
                            <input className={indexstyle.inputstyle} style={{height:'100%', border:'none'}} type='text'></input>
                            <FontAwesomeIcon icon={faSearch} style={{color:'green'}}/>
                            <button className={indexstyle._button} style={{width:'170px'}}>Find Here</button>
                        </div>
                    </Col>
                    <Col md='8'>
                        <Carousel controls={false} indicators={false}>
                            <Carousel.Item >
                                <div style={{display:'flex', maxWidth:'100%', height:'300px'}}>
                                    <div style={{width:'40%', }}>
                                        <img
                                        className="d-block w-100"
                                        src="../../mindshaper2.jpg"
                                        alt="First slide" height="100%"  width="100%"
                                        style={{objectFit:'cover'}}
                                        />
                                    </div>
                                    <div style={{width:'60%', background:'#9292989e'}}>
                                        <p className={indexstyle.right_sideslide_text}>Mental health difficulties like anxiety, depression, and post-traumatic stress disorder can lead to substance abuse problems and, conversely, using substances can worsen mental health conditions in some people. Dual-diagnosis treatment can help address both issues simultaneously.</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item indicators='false'>
                                <div style={{display:'flex', maxWidth:'100%', height:'300px'}}>
                                    <div style={{width:'40%'}}>
                                        <img
                                        className="d-block w-100"
                                        src="../../mindshaper3.jpg"
                                        alt="First slide" height="100%"  width="100%"
                                        style={{objectFit:'cover'}}
                                        />
                                    </div>
                                    <div style={{width:'60%',background:'#9292989e'}}>
                                        <p className={indexstyle.right_sideslide_text}>Mental health difficulties like anxiety, depression, and post-traumatic stress disorder can lead to substance abuse problems and, conversely, using substances can worsen mental health conditions in some people. Dual-diagnosis treatment can help address both issues simultaneously.</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item indicators='false'>
                                <div style={{display:'flex', maxWidth:'100%', height:'300px'}}>
                                    <div style={{width:'40%'}}>
                                        <img
                                        className="d-block w-100"
                                        src="../../mindshaper4.jpg"
                                        alt="First slide" height="100%" width="100%"
                                        style={{objectFit:'cover'}}
                                        />
                                    </div>
                                    <div style={{width:'60%',background:'#9292989e'}}>
                                        <p className={indexstyle.right_sideslide_text}>Mental health difficulties like anxiety, depression, and post-traumatic stress disorder can lead to substance abuse problems and, conversely, using substances can worsen mental health conditions in some people. Dual-diagnosis treatment can help address both issues simultaneously.</p>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
            <section className={indexstyle.sectionbackground}>
                <div>
                    <Row style={{marginLeft:'5px', marginRight:'5px'}}>
                        <h1 style={{width:'100%', textAlign:'center', color:'#fff'}}>Features</h1>  
                        <div>
                            <Row style={{marginRight:'10px'}}>
                                <Col md='3'>
                                    <div className={indexstyle.feature_card1}>
                                        <Card className={indexstyle.card}>
                                            <Card.Img variant="top" src='../../Little-girl.jpg' style={{height:'200px', width:'100%', objectFit:'cover'}} />
                                            <Card.Body>
                                                <Card.Title className={indexstyle.card_title}>Card Title</Card.Title>
                                                <Card.Text className={indexstyle.card_text}>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Button className={indexstyle._button} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md='6'>
                                    <div className={indexstyle.feature_card2}>
                                        <Card className={indexstyle.card}>
                                            <Card.Img variant="top" src='../../meditation.jpg' style={{height:'200px', width:'100%', objectFit:'cover'}}/>
                                            <Card.Body>
                                                <Card.Title className={indexstyle.card_title}>Card Title</Card.Title>
                                                <Card.Text className={indexstyle.card_text}>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Button className={indexstyle._button} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                                <Col md='3'>
                                    <div className={indexstyle.feature_card3}>
                                        <Card className={indexstyle.card}>
                                        <Card.Img variant="top" src='../../276217.jpg' style={{height:'200px', width:'100%', objectFit:'cover'}}/>
                                            <Card.Body>
                                                <Card.Title className={indexstyle.card_title}>Card Title</Card.Title>
                                                <Card.Text className={indexstyle.card_text}>
                                                    Some quick example text to build on the card title and make up the bulk of
                                                    the card's content.
                                                </Card.Text>
                                                <Button className={indexstyle._button} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                </div>
            </section>

            <section className={indexstyle.sectionBackground2}>
                <Row>
                    <Col ></Col>
                </Row>
            </section>

            <section>
                <Row>
                    <h1 className={indexstyle.heading}>About Us</h1>
                    <Col md='6'>
                        <div style={{marginTop:'30px',padding:'10px'}}>
                            <p className={indexstyle.aboutus_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                            <p className={indexstyle.aboutus_text}> but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button className={indexstyle._button}> Learn More</button>
                        </div>
                    </Col>
                    <Col md='6'>
                        <img src='../../us.jpg'/>
                    </Col>
                </Row>
            </section>

            <section className={indexstyle.sectionBackground3}>
                <Row>
                    <Col ></Col>
                </Row>
            </section>


            <section>
                <div className={indexstyle.heading}>
                    <h1>Drope Us a Line</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <Container>
                    <Form>
                        <Form.Group>
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter your name"  />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>   
                        <Form.Group>
                            <Form.Label></Form.Label>
                            <textarea rows="10" cols="50" style={{width:'100%'}}></textarea>
                        </Form.Group>   
                    </Form>
                    <button className={indexstyle._button} style={{width:'170px'}}> Submit</button>
                </Container>
            </section>

            <section className={indexstyle.sectionBackground4}>
                <Container>
                    <h1 className={indexstyle.heading}>Our Psychiatrist </h1>
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <div className={indexstyle.Carousel_div}>
                                <div>
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                </div>
                                <div> 
                                    <img src='../../girl.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={indexstyle.Carousel_div}>
                                <div>
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                </div>
                                <div> 
                                    <img src='../../girl.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={indexstyle.Carousel_div}>
                                <div>
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                </div>
                                <div> 
                                    <img src='../../girl.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={indexstyle.Carousel_div}>
                                <div>
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                </div>
                                <div> 
                                    <img src='../../girl.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={indexstyle.Carousel_div}>
                                <div>
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                                </div>
                                <div> 
                                    <img src='../../girl.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>
        </Layout>
        
    )
}

export default IndexPage