import React from 'react'
import style from './contact.module.scss'

import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import {Col, Row, Container, Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowAltCircleUp, faSearchLocation, faVoicemail, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Head from '../components/head'
 
const contact = () => {
    return (

        <Layout>
            <Head title="Contact"/>
            <section className={style.background_image}>
                <Container>
                    <Row style={{height:'100%', paddingTop:'120px', paddingBottom:'50px'}}>  
                        <Col md='2'></Col>              
                        <Col md='3' className={style.contact_card__left} style={{padding:'0'}}>
                            <div style={{marginTop:'7rem'}}>
                                <h3 className={style.text_h1}>Our Contacts</h3>
                                <p className={style.text_p}> 
                                    <FontAwesomeIcon icon={faSearchLocation} style={{color:'green', marginRight:'10px'}}/>                                                    
                                    58 Lake Circus Road,
                                    Kalabagan, Dhanmondi,
                                    Dhaka-1209,Bangladesh
                                </p>
                                <p className={style.text_p}>
                                    <FontAwesomeIcon icon={faPhone} style={{color:'green', marginRight:'10px'}}/>
                                    +88 096 66 77 12 12 <br/>
                                    &nbsp; +88 01773328092
                                </p>
                                <p className={style.text_p}>
                                    <FontAwesomeIcon icon={faMailBulk} style={{color:'green', marginRight:'10px'}}/>
                                    <a href="mailto:mindshaper.life@gmail.com" style={{color:'green'}}> mindshaper.life@gmail.com</a>
                                </p>
                            </div>
                        </Col>
                        <Col md='5' style={{padding:'0'}}>
                            <div className={style.contact_card__right }>
                                <h3 className={style.text_h1}>Get in Touch!</h3>
                                <p className={style.text_p}>Contact us for help, or to join the team</p>
                                <Form style={{margin:'10px', paddingTop:'15px'}}>
                                    <Row style={{marginBottom:'20px'}}>
                                        <Col>
                                        <Form.Control placeholder="First name" />
                                        </Col>
                                        <Col>
                                        <Form.Control placeholder="Last name" />
                                        </Col>
                                    </Row>
                                    <Row  style={{marginBottom:'20px'}}>
                                        <Col>
                                        <Form.Control placeholder="E-mail Address" />
                                        </Col>
                                        <Col>
                                        <Form.Control placeholder="Contact Number" />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <textarea rows="4" cols="3" placeholder='write your message' style={{width:'94%', borderRadius:'5px', marginLeft:'15px'}}></textarea>
                                    </Row>
                                    <button className={style._button}>send</button>
                                </Form>
                    
                            </div>
                        </Col>                
                    </Row>
                </Container>
            </section>

        </Layout>
    )
}

export default contact