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
import { faSearch, faPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Head from '../components/head'
import StepWizard from 'react-step-wizard'
import Left from '../components/left'
import Right from '../components/right'

const IndexPage = () => {

    const  data = useStaticQuery(graphql`
    query {
        allRestApiPosts(filter: {endpointId: {lt:2}}){
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
        thumbnail : allRestApiPhotos(filter: {endpointId: {lt: 2 }})  {
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
        
        <Container style={{overflowX:'hidden'}}>
            <Head title="Home"/>
            <Row style={{textAlign: 'center'}}>
                <Col>
                    <img src='../../mindShaper.png' style={{height: '440px', width: '500px', marginTop: '20px'}} />
                    <div>
                        <h1 style={{color: '#55b34c', fontSize: '3rem', fontFamily: 'serif'}}>'Coming Soon'</h1>
                        <p style={{marginBottom: '0'}}>
                            <a href="mailto:mindshaper.life@gmail.com" style={{color:'green'}}> mindshaper.life@gmail.com</a>
                        </p>
                        <p style={{height: '18px', minWidth: '18px'}}>
                            <FontAwesomeIcon icon={faPhone} style={{color:'green', marginRight:'10px'}}/>
                            +88 096 66 77 12 12
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default IndexPage