import React from 'react'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Nav, Card, Button, Form, Container} from 'react-bootstrap'
import Head from '../components/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

const Forum  = () => {
    return(
        <Layout>
        <Head title="Forum"/>
            <Row style={{paddingTop:'130px', textAlign: 'center'}}>
                <Col>
                    <div>
                        <h3 style={{color: 'green', fontFamily: 'initial'}}>MindShaper is ready to help on your physical or mental <br/> health issues in this lockdown situation.</h3>
                        <Button style={{width: '20%', background: '#55b44c'}}>Ask your question And get answer from experts</Button>
                        
                        <h4 style={{color: 'green', fontFamily: 'initial', marginTop :'50px'}}>MindShaper connects you to doctors, mental health counsellors and wellbeing experts <br/> anonymously, 24/7.</h4>

                       <Form>
                            <FontAwesomeIcon icon= {faSearch} style={{color:'green', marginRight:'10px'}}/>
                            <input type ='text'></input>
                       </Form>
                    </div>
                </Col>
            </Row>
            <Row style={{marginLeft:'15px', marginRight: '5px'}}>
                <Col md='3'>
                    <img src= '../../app.jpg' style={{boxShadow: '0px 0px 12px 4px #3c3c3c'}}/>
                    <img src='../../googlePlay.png' style={{boxShadow: '0px 0px 12px 4px #3c3c3c'}}/> 
                </Col>
                <Col md='6'>
                    <Card style={{ boxShadow : '0 1px 6px 0 rgba(32, 33, 36, .28)', background:' #fff', height: '400px'}}>
                    </Card>
                </Col>
                <Col md='3' >                    
                    <Card style={{ boxShadow : '0 1px 6px 0 rgba(32, 33, 36, .28)', background:' rgba(85, 180, 76, 0.5)', height: '400px'}}>
                        <h3 style={{textAlign: 'center', color:'green'}}>Important Information </h3>
                        <hr style={{background: '#fff'}}/>
                    </Card>
                </Col>
            </Row>
        </Layout>
    )
}

export default Forum