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
        
        <Layout style={{overflowX:'hidden'}}>
            <Head title="Home"/>
            <section style={{paddingTop: '90px'}}>
                <Row>
                    <Col>
                        <div>
                            <Carousel controls={false} indicators={false} interval={10000}>
                                <Carousel.Item>
                                    <img className={indexstyle.banner_slider__img} src='../../banner/img5.jpg'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={indexstyle.banner_slider__img} src='../../banner/img4.jpg'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={indexstyle.banner_slider__img} src='../../banner/img1.jpg'/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className={indexstyle.banner_slider__img} src='../../banner/img3.jpg'/>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div style={{marginLeft:'15px', width:'40%', position: 'absolute', top: '20%'}}>
                            <div>
                                <h5 className={indexstyle.banner_heading__text} ><p>Be Calm.</p><p>Life is tough,</p><p>But so you are.</p>                            </h5>
                                <p className={indexstyle.banner_subtitel__text}>Everyone has a phycological break down in some way. Mindshaper is here to help you realize that you are not alone on your road to recovery. Start feeling better with a single phone call.</p>
                            </div>
                        </div>

                    </Col>
                </Row>
            </section>
            <section style={{background:'#F5D312', margin: '5px auto'}}>
                <Row>
                    <Col md='6'>
                        <div style={{display:'flex',}}>
                            <p style={{fontSize:'20px',marginBottom:'0',fontWeight:'600',marginLeft:'10px', fontFamily:'initial'}}>Notice:</p>
                            <div className={indexstyle.banner_bottom__noticetext}> 
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Col>
                    <Col md='6' style={{textAlign:'center',}}>
                        <div>
                            <div style={{display:'flex', paddingTop:'10px', justifyContent:'center'}}>
                                <img className={indexstyle.baner_bottom__img} src='//dy7glz37jgl0b.cloudfront.net/start/nytimes.png?v=25'/>
                                <Link to='/newsection' >
                                    <img className={indexstyle.baner_bottom__img} src='//dy7glz37jgl0b.cloudfront.net/start/wsj.png?v=25'/>
                                </Link>
                                <Link to='/' >
                                    <img className={indexstyle.baner_bottom__img} src='//dy7glz37jgl0b.cloudfront.net/start/self.png?v=25'/>
                                </Link>
                                <Link to='/' >
                                    <img className={indexstyle.baner_bottom__img} src='//dy7glz37jgl0b.cloudfront.net/start/fox.png?v=25'/>
                                </Link>
                                <Link to='/' >
                                    <img className={indexstyle.baner_bottom__img} src='//dy7glz37jgl0b.cloudfront.net/start/chicagotribune.png?v=25'/>
                                </Link>
                                <Link to='/' >
                                    <img className={indexstyle.baner_bottom__img} src='//dy7glz37jgl0b.cloudfront.net/start/entrepeneur.png?v=25'/>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </section>
            <section style={{margin: '0 auto'}}  className={indexstyle.background_color__even}>
                <Col className={indexstyle.section_heading__col}>
                    <div>
                        <h1 className={indexstyle.section_heading__design}>Section</h1>
                    </div>
                </Col>
                <Col>
                    <ul style={{position: 'relative', height: '800px', width: '1140px', margin: '0 auto'}}>
                        <li id= 'ip' className={indexstyle.li_view} style={{position: 'absolute', left: '0', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img}src='../../grid/img1.jpg' />
                            <div className={indexstyle.mosaic_info__holder}>
                                <h1>Hello</h1>
                            </div>
                        </li>
                        
                        <li style={{position: 'absolute', left: '190px', top: '0', height: '370px', width: '370px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img5.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '570px', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img4.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '760px', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img8.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '950px', top: '0', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img2.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '0', top: '190px', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img6.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '0', top: '380px', height: '370px', width: '370px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img3.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '570px', top: '190px', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img10.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '760px', top: '190px', height: '370px', width: '370px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img4.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '380px', top: '380px', height: '370px', width: '370px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img7.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '760px', top: '570px', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img11.jpg' />
                        </li>

                        <li style={{position: 'absolute', left: '950px', top: '570px', height: '180px', width: '180px', listStyleType: 'none'}}>
                            <img className={indexstyle.mosaic_grid__img} src='../../grid/img9.jpg' />
                        </li>
                    
                    </ul>
                </Col>
            </section>
            <section className={indexstyle.background_color__even}>
                <Col className={indexstyle.section_heading__col}>
                    <div>
                        <h1 className={indexstyle.section_heading__design}>SERVICES</h1>
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

            <section className={indexstyle.background_color__odd}>
                <Col className={indexstyle.section_heading__col}>
                    <div>
                        <h1 className={indexstyle.section_heading__design}>ARTICLES</h1>
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
            <section className={indexstyle.background_color__even}>
                <Col>
                    <div className={indexstyle.section_heading__col}>
                        <h1 className={indexstyle.section_heading__design}>WRITE US</h1>
                    </div>
                </Col>
                
                <Container style={{padding: '50px 0 '}}>
                    <Row>
                        <Col className={`${indexstyle.contact_1stCard__Design}`}>
                            <div className={`${indexstyle.contact_card__text}`}>
                                <h2 style={{color: 'black'}}>Press</h2>
                                <p>Are you interested in our latest news or working on a Grammarly story and need to get in touch?</p>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <button className={indexstyle.cantact_card__button}>Visit Press Page</button>
                            </div>
                        </Col>
                        <Col>
                            <div className={`${indexstyle.contact_2ndCard__Design}`}>
                                <div className={`${indexstyle.contact_card__textMiddle}`}>
                                    <h2 style={{color: 'black'}}>Help & Support</h2>
                                    <p>Our support team is spread across the globe to give you answers fast.</p>
                                </div>
                                <div style={{textAlign: 'center'}}>
                                    <button className={indexstyle.cantact_card__button} style={{background: '#5fc49b', color: '#fff', border: '1px solid #5fc49b'}}>Visit Support Page</button>
                                    <p style={{color: '#5fc49b', fontSize: '10px', marginTop: '5px', fontWeight: 'bold'}}>SUBMIT A REQUEST</p>
                                </div>
                            </div>                            
                        </Col>
                        <Col className={`${indexstyle.contact_1stCard__Design}`}>
                            <div className={`${indexstyle.contact_card__text}`}>
                                <h2 style={{color: 'black'}}>Sales</h2>
                                <p>Get in touch with our sales team to see how we can work together.</p>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                <Link to='/contact'><button className={indexstyle.cantact_card__button}>Contact Sales</button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className={indexstyle.sectionBackground5} style={{padding:'0',}}>
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
                            
            <section className={indexstyle.background_color__even}>
                <Col>
                    <div className={indexstyle.section_heading__col}>
                        <h1 className={indexstyle.section_heading__design}>CUSTOMER TESTIMONIALS</h1>
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