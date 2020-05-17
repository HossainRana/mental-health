import React from 'react'
import {Link} from "gatsby"
import {gatbyql , useStaticQuery} from 'gatsby'

import footerStyle from './footer.module.scss'
import { Col,Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowAltCircleUp, faSearchLocation, faVoicemail, faMailBulk } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)


    return (
        <footer>
            <Row style={{textAlign:'center', paddingTop:'15px', background:'#55b44c2e'}}>
                <Col>
                    <img src='../../mindshaperQr.png' height="80px" width="80px" style={{marginBottom:'5px'}}/>
                </Col>
                <Col style={{textAlign:'end',padding:'0'}}>
                    <p className={footerStyle.heading} style={{fontSize:'14px', color:'green'}}>MindShaper</p>
                </Col>
                <Col md='1' style={{maxWidth:'5px', padding:'2px'}}>
                    <div  style={{height:'2rem', width:'1px', background:'green', marginTop:'3px'}}></div>
                </Col>
                <Col style={{textAlign:'left',padding:'0'}}>
                    <p className={footerStyle.heading} style={{fontSize:'15px', color:'green', marginTop:'22px', fontWeight:'600'}}>CARING for YOU</p>
                </Col>
                <Col>
                    <h5 style={{fontSize:'15px', color:'green', fontWeight:'600', marginBottom:'5px'}}>Any Query</h5>
                    <p style={{fontSize:'16px', fontFamily:'initial', marginBottom:'5px'}}>
                        <FontAwesomeIcon icon={faPhone} style={{color:'green', marginRight:'10px'}}/>
                        +88 096 66 77 12 12 <br/>
                        &nbsp; +88 01773328092
                    </p>
                </Col>
            </Row>
            <Row style={{textAlign:'center', background:'#55b44c2e'}}>
                <Col className={footerStyle.footer}>
                    <p className={footerStyle.text}>©  MindShaper.All Rights Reserved. </p>
                </Col>
                <Col>
                    <div  className={footerStyle.text}>
                        <span><Link  className={footerStyle.text} to='/contact'>Contact Us</Link></span> | 
                        <span> Our Locations</span> | 
                        <span> Follow Us:</span>
                        <span style={{marginTop:'10px'}}>
                            <a target="_blank" href='https://www.facebook.com/mindshaper.xyz'><span><img className={footerStyle.social_icon} src="../../social_icon/facebook.svg"/></span></a>
                        </span>
                    </div>
                </Col>
                <Col className={footerStyle.footer}>
                    <p className={footerStyle.text}>Developed By <a className={footerStyle.link} target="_blank" href="http://www.nexkraft.com/" >{data.site.siteMetadata.author}</a> 2020 </p>
                </Col>
            </Row>
        </footer>
        
        
    )
}

export default Footer