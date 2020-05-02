import React from 'react'
// import {graphql , useStaticQuery} from 'gatsby'
// import {Link} from 'gatsby'
import style from './home.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../components/layout'
import { Row, Col, Container, } from 'react-bootstrap'
// import Carousel from 'react-bootstrap/Carousel'




const demoPage = () => {
    return (

        <Layout>
            <Row style={{paddingTop:'80px'}}>
                <Row>
                    <Col className={style.card_design} md='2'></Col>
                    <Col className={style.card_design}  md='5'></Col>
                    <col className={style.card_design}  md='3'></col>
                </Row>
                <Col className={style.card_design}  md='2'></Col>
            </Row>


        </Layout>

    )
}


export default demoPage