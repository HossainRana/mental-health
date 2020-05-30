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
import Booking from '../components/bookingservices'

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
        
        <Layout style={{overflowX:'hidden'}}>
            <Head title="Home"/>

            <Row className={indexstyle.header_background} style={{paddingTop:'10px'}}>
                <Col md='6'>
                    <div style={{marginLeft:'15px', width:'80%', paddingTop:'20%'}}>
                        <div>
                            <h5 style={{color:'#73ff73', fontSize:'3rem'}}><p>Be Calm.</p><p>Life is tough,</p><p>But so you are.</p>                            </h5>
                            <p style={{color:'#fff', fontSize:'14px', fontWeight:'700'}}>Everyone has a phycological break down in some way. Mindshaper is here to help you realize that you are not alone on your road to recovery. Start feeling better with a single phone call.</p>
                        </div>
                        <div className={indexstyle.leftside_input} style={{border:'1px solid green',display:'flex' }}>
                            <input className={indexstyle.inputstyle} style={{height:'100%', border:'none'}} type="text"  placeholder="What are you looking for? " name="srch-term" id="srch-term"></input>
                            <FontAwesomeIcon icon={faSearch} style={{color:'green', marginTop:'12px'}}/>
                            <Link to='/contact'><button className={indexstyle._button} style={{width:'170px', marginLeft:'20px', marginTop:'-1px'}}>Find Here</button></Link>
                        </div>
                    </div>
                </Col>

                <Col md='6'>
                    <img src='../../blance.jpg' height="550px" width="100%" style={{paddingRight:'15px',paddingTop:'20%', objectFit:'cover', opacity:'.6'}}/>
                </Col>
            </Row>
            <Row style={{background:'rgba(255, 255, 255, 0.5)', margin:'-55px 0px 0px 0px', height:'55px'}}>
                <Col md='6'>
                    <div>
                        <div style={{display:'flex', paddingTop:'10px'}}>
                            <p style={{fontSize:'20px',marginBottom:'0',fontWeight:'600',marginLeft:'10px', fontFamily:'initial'}}>Notice:</p>
                            <p style={{fontSize:'14px',fontWeight:'400',marginBottom:'0',marginTop:'7px',marginLeft:'10px', fontFamily:'initial'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </Col>
                <Col md='6' style={{textAlign:'center'}}>
                    <div>
                        <div style={{display:'flex', paddingTop:'10px', justifyContent:'center'}}>
                            <p style={{fontSize:'20px',marginBottom:'0',fontWeight:'600',marginLeft:'10px', fontFamily:'initial'}}>Links:</p>
                            <span style={{marginTop:'7px'}}>
                                <a target="_blank" href='https://www.facebook.com/mindshaper.xyz'><span><img className={indexstyle.social_icon} style={{marginTop:'-4px'}} src="../../social_icon/facebook.svg"/></span></a>
                            </span>
                        </div>
                    </div>
                </Col>
            </Row>
            <section style={{marginTop:'50px'}}>
                <Col style={{textAlign:'center'}}>
                    <div>
                        <h1 style={{fontSize:'3rem', opacity:'.7', color:'#55b44c'}}>SERVICES</h1>
                    </div>
                </Col>


                <Container style={{paddingBottom:'50px'}}>
                    <Row>
                        <Col md='6' style={{display:'flex'}}>
                            <Left />
                        </Col>
                        <Col md='6' className={indexstyle.serviceCard} style={{background:'#fff', transform:'none'}}>
                            <Container  className={`${indexstyle.activeCard}`}  id="Personal_Session" style={{height:'100%'}}>
                                <Right/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Col style={{textAlign:'center'}}>
                    <div>
                        <h1 style={{fontSize:'3rem', opacity:'.7', color:'#55b44c'}}>ARTICLES</h1>
                    </div>
                </Col>
                <Row style={{paddingTop:'20px',margin:'10px'}}>
                   <Col md='6'>
                    <p style={{fontSize:'2rem', fontFamily:'san-sarif',fontWeight:'600', color:'green'}}>Mental illness and superstition</p>
                    <p style={{fontSize:'1.5rem', fontFamily:'san-sarif',fontWeight:'400', color:'green'}}></p>
                    <p className={indexstyle.textStyle}>If we want to eliminate the prejudice on mental health, 
                    we should raise awareness among the people. Everyone must come forward for this. It will be 
                    almost impossible to ensure psychiatric health care if superstitions are not eradicated from
                     society. Mental illness is a problem, just like other diseases. It is curable through 
                     treatment. Mental illness is not a matter of being possessed by any genie or ghost. Medical 
                     science has nothing to do with the superstitions that exist in society.</p>
                    <p className={indexstyle.textStyle}>Just as it is essential to treat people with mental health 
                    problems, it is also necessary to find the reasons behind the problem. Many times, for economic 
                    reasons, some make someone a mental patient. Because, if it is done, he can be legally deprived 
                    of property. People with mental health problems are often isolated from ordinary life. They also 
                    lag behind in family, social or developmental activities. But the overall development of the 
                    country is not possible by excluding a single population.</p>
                   </Col>
                   <Col md='6' style={{height:'450px', border:'1px solid rgba(199, 182, 182, 0.12)', borderRadius:'5px', display:'none'}}>
                        {data.thumbnail.edges.map(edge =>{
                            return (
                                <div style={{marginTop:'5px', width:'100%'}}> 
                                    <div style={{marginTop:'5px'}}>
                                        <img src={edge.node.url} height="300px" width="100%"/>
                                                                            
                                    </div>
                                    <div style={{width:'100%'}}>
                                        <p style={{marginLeft:'5px',fontSize:'16px',height:'20px'}}>{edge.node.title}</p>   
                                        <Link to={`/articles/${edge.node.title}`}><button className={indexstyle._button} style={{float:'right', marginRight:'20px', width:'100px', height:'30px'}}>Read</button></Link>
                                    </div>
                                </div>
                            )
                        })}
                        <Link to='/blog'><button className={indexstyle._button} style={{float:'right', marginRight:'20px', width:'100px', height:'30px'}}>show all</button></Link>
                   </Col>   
                   <Col md='6' style={{height:'450px', border:'1px solid rgba(199, 182, 182, 0.12)', borderRadius:'5px'}}>
                        <div style={{marginTop:'5px', width:'100%'}}> 
                            <div style={{marginTop:'5px'}}>
                                <img src='../../post.jpg' height="300" width="100%"/>
                                              
                            </div>
                            <div style={{width:'100%'}}> 
                                <p style={{marginLeft:'5px',fontSize:'16px',height:'20px'}}>Find Out The Difference Between A Therapist And A Psychologist</p>
                                <Link ><button className={indexstyle._button} style={{float:'right', marginRight:'20px', width:'100px', height:'30px'}}>Read</button></Link>
                            </div>
                        </div>
                        <Link to='/blog'><button className={indexstyle._button} style={{float:'right', marginRight:'20px', width:'100px', height:'30px'}}>show all</button></Link>
                   </Col>   
                </Row>
            </section>
            <section>
                <Col>
                    <div style={{textAlign:'center'}}>
                        <h1 style={{fontSize:'3rem', opacity:'.7', color:'#55b44c'}}>WRITE US</h1>
                    </div>
                </Col>
                <section>
                    <Row style={{margin:'15px'}}>
                        <Col md='5'>
                            <div style={{textAlign:'center', marginTop:'8rem'}}>
                                <h1 style={{fontSize:'3rem', fontFamily:'initial', color:'#008000a8', margin:'0' }}>THANK YOU</h1>
                                <p style={{fontSize:'15xp', fontFamily:'initial', color:'#008000a8', margin:'0' }}>Stay Connected with Us</p>
                            </div>
                        </Col>
                        <Col md='7'>
                            <Form>
                                <Form.Group>
                                    <Form.Control type="name" placeholder="Your name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Your email" />
                                </Form.Group>   
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Contact number" />
                                </Form.Group>   
                                <Form.Group>
                                    <Form.Label></Form.Label>
                                    <textarea rows="10" cols="50" style={{width:'100%'}}></textarea>
                                </Form.Group>   
                            </Form>
                            <button className={indexstyle._button} style={{width:'170px', float:'right'}}> Submit</button>
                        </Col>
                    </Row>
                </section>
            </section>

            <section className={indexstyle.sectionBackground5} style={{padding:'0', marginTop:'50px'}}>
                <Col md='12' style={{background:'#55b44c7a', height:'100%'}}>
                    <Container style={{paddingTop:'100px', paddingLeft:'15px'}}>
                        <div style={{textAlign:'center', color:'#fff'}}>
                            <h1>Always there for you.</h1>
                            <p>The best YOU is closer than you think. Chose any package which suits you best</p>
                            <p></p>
                        </div>
                        <Row>
                            <Col md='4' style={{textAlign:'center'}}>
                                <div className={indexstyle.card_body}>
                                    <div  style={{paddingTop:'50px'}}>
                                        <h3 className={indexstyle.price_card__title }>Standard</h3>
                                    </div>
                                    <div style={{lineHeight:'.1'}}>
                                        <h1 className={indexstyle.price_card__body}><sup>$</sup>99</h1>
                                        <p style={{color:'#fff', marginTop:'-10px', fontFamily:'orbitron'}}>per month</p>
                                        <div style={{fontSize:'14px', color:'black', paddingTop:'30px'}}>
                                            <p>Improve Your Health Care</p>
                                            <p>Experience.</p>
                                        </div>
                                    </div>
                                    <button className={indexstyle.price_card_button}>Get Started</button>
                                </div>
                            </Col>
                            <Col md='4' style={{textAlign:'center'}}>
                                <div className={indexstyle.card_body}>
                                    <div  style={{paddingTop:'50px'}}>
                                        <h3 className={indexstyle.price_card__title }>Professional</h3>
                                    </div>
                                    <div style={{lineHeight:'.1'}}>
                                        <h1 className={indexstyle.price_card__body}><sup>$</sup>120</h1>
                                        <p style={{color:'#fff', marginTop:'-10px', fontFamily:'orbitron'}}>per month</p>
                                        <div style={{fontSize:'14px', color:'black', paddingTop:'30px'}}>
                                            <p>Improve Your Health Care</p>
                                            <p>Experience.</p>
                                        </div>
                                    </div>
                                    <button className={indexstyle.price_card_button}>Get Started</button>
                                </div>
                            </Col>
                            <Col md='4' style={{textAlign:'center'}}>
                                <div className={indexstyle.card_body}>
                                    <div  style={{paddingTop:'50px'}}>
                                        <h3 className={indexstyle.price_card__title }>Premium</h3>
                                    </div>
                                    <div style={{lineHeight:'.1'}}>
                                        <h1 className={indexstyle.price_card__body}><sup>$</sup>150</h1>
                                        <p style={{color:'#fff', marginTop:'-10px', fontFamily:'orbitron'}}>per month</p>
                                        <div style={{fontSize:'14px', color:'black', paddingTop:'30px'}}>
                                            <p>Improve Your Health Care</p>
                                            <p>Experience.</p>
                                        </div>
                                    </div>
                                    <button className={indexstyle.price_card_button}>Get Started</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </section>
                            
            <section className={indexstyle.sectionBackground4}>
                <Col>
                    <div style={{textAlign:'center'}}>
                        <h1 style={{fontSize:'3rem', opacity:'.7', color:'#55b44c'}}>CUSTOMER TESTIMONIALS</h1>
                    </div>
                </Col>
                <Container style={{paddingTop:'3rem'}}>
                    <Carousel controls={false} indicators={false}>
                        <Carousel.Item>
                            <div className={indexstyle.Carousel_div} style={{display:'flex'}}>
                                <div>
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of 
                                    the printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.</h5>
                                    <div>
                                        <p className={indexstyle.Carousel_text__name}><b>TIM NICOLAS</b></p>
                                        <p className={indexstyle.Carousel_text__position}><i>Founding Partner</i></p>
                                    </div>
                                    </div>
                                        <img src='../../portrait3.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                    <div> 
                                </div>
                            </div>
                            <hr style={{marginTop:'30px', marginBottom:'60px'}}/>
                            <div className={indexstyle.Carousel_div} style={{display:'flex'}}>
                                <div>
                                    </div>
                                        <img src='../../portrait5.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                    <div> 
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of 
                                    the printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.</h5>
                                    <div style={{float:'right'}}>
                                        <p className={indexstyle.Carousel_text__name}><b>TIM NICOLAS</b></p>
                                        <p className={indexstyle.Carousel_text__position}><i>Founding Partner</i></p>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className={indexstyle.Carousel_div} style={{display:'flex'}}>
                                <div>
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of 
                                    the printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.</h5>
                                    <div>
                                        <p className={indexstyle.Carousel_text__name}><b>TIM NICOLAS</b></p>
                                        <p className={indexstyle.Carousel_text__position}><i>Founding Partner</i></p>
                                    </div>
                                    </div>
                                        <img src='../../portrait.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                    <div> 
                                </div>
                            </div>
                            <hr style={{marginTop:'30px', marginBottom:'60px'}}/>
                            <div className={indexstyle.Carousel_div} style={{display:'flex'}}>
                                <div>
                                    </div>
                                        <img src='../../portrait5.jpg' height="100%"  className={indexstyle.Carousel_img}/>
                                    <div> 
                                    <h5 className={indexstyle.Carousel_text}>Lorem Ipsum is simply dummy text of 
                                    the printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.Lorem Ipsum is simply dummy text of the 
                                    printing and typesetting industry.</h5>
                                    <div style={{float:'right'}}>
                                        <p className={indexstyle.Carousel_text__name}><b>TIM NICOLAS</b></p>
                                        <p className={indexstyle.Carousel_text__position}><i>Founding Partner</i></p>
                                    </div>
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