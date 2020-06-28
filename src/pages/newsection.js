import React,{Component} from 'react'
import Layout from '../components/layout'
import indexstyle from './index.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Nav, Card, Button, Form, Container, Modal, ModalBody, ModalDialog, ModalFooter} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Head from '../components/head'

const Modal_Section = () => {

    return(
        <Layout>
        <Head title="Undefined"/>
            <Container style={{paddingTop: '130px'}}>
                <h1 className={indexstyle.heading_deasign}>We'll match you to a counselor that can help with...</h1>
                <Row>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>Depression</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/depression.jpg?v=25'/>
                        </div>
                    </Col>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>Stress</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/stress.jpg?v=25'/>
                        </div>
                    </Col>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>Anxiety</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/anxiety.jpg?v=25'/>
                        </div>
                    </Col>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>Self-Esteem</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/self-esteem.jpg?v=25'/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>Anger</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/anger.jpg?v=25'/>
                        </div>
                    </Col>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>Relationships</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/relationships.jpg?v=25'/>
                        </div>
                    </Col>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>Grief</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/grief.jpg?v=25'/>
                        </div>
                    </Col>
                    <Col md='3' style={{height: '285px', padding: '20px'}}>
                        <div>
                            <div  className={indexstyle.issue_name_design}>
                                <span className={indexstyle.text_design}>...and more</span>
                            </div>
                            <img className={indexstyle.img_responsive} src='//dy7glz37jgl0b.cloudfront.net/funnel/issue-test/much-more.jpg?v=25'/>
                        </div>
                    </Col>
                </Row>
            </Container>

            <section style={{margin: '0 auto'}}>
                
                    <Col>
                        <ul style={{position: 'relative', height: '800px', width: '1140px', margin: '0 auto'}}>
                            <li style={{position: 'absolute', left: '0', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                                <img className={indexstyle.mosaic_grid__img}src='https://static.pxlecdn.com/photos/241018154/medium/a786fdd25f198f313d2f.jpg' />
                            </li>
                            
                            <li style={{position: 'absolute', left: '190px', top: '0', height: '370px', width: '370px', listStyleType: 'none'}}>
                                <img className={indexstyle.mosaic_grid__img} src='https://static.pxlecdn.com/photos/308751433/medium/33c0e97ea330eafa73c1.jpg' />
                            </li>

                            <li style={{position: 'absolute', left: '570px', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                                <img className={indexstyle.mosaic_grid__img} src='https://static.pxlecdn.com/photos/295990323/medium/608702d59e732e697aed.jpg' />
                            </li>

                            <li style={{position: 'absolute', left: '760px', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                                <img className={indexstyle.mosaic_grid__img} src='https://static.pxlecdn.com/photos/228156418/medium/fa5aca47703177b35d8a.jpg' />
                            </li>

                            <li style={{position: 'absolute', left: '950px', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                                <img className={indexstyle.mosaic_grid__img} src='https://static.pxlecdn.com/photos/191530665/medium/fb688324ec9619136517.jpg' />
                            </li>
                        
                        </ul>
                    </Col>
            </section>
        </Layout>
    )
      
}

export default Modal_Section
