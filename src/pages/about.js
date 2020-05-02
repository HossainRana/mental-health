import React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layout'
import style from './about.module.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Nav, Card, Button, Form, Container} from 'react-bootstrap'
import Head from '../components/head'



const aboutPage = () => {
    return (

        <Layout>
            <Head title="About"/>
            <Container>
                <Row  style={{paddingTop:'130px'}}>
                    <Col md='6'>
                        <h1 className={style.h1text}>Making the world a better place by just a phone call</h1>
                    </Col>
                    <Col md='6'>
                        <p className={style.textStyle}>Our mission is to ensure customers satisfaction by 
                        understanding their problems. We always try to be with our customers whenever they 
                        need it. We work hard every day to make Mindshaper the Nation’s most respected 
                        phycological disorder Solution Company.</p>
                    </Col>
                </Row>
                <Row md='12' style={{textAlign:'center', paddingTop:'70px'}}>
                    <Col md='4'>
                        <div>
                            <h1 className={style.htext}>850+</h1>
                            <p className={style.textStyle}>employees</p>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div>
                            <h1 className={style.htext}>2550</h1>
                            <p className={style.textStyle}>partners</p>
                        </div>
                    </Col>
                    <Col md='4'>
                        <div>
                            <h1 className={style.htext}>4.5 million</h1>
                            <p className={style.textStyle}>users</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{paddingTop:'70px'}}>
                    <Col md='4'>
                        <h1 className={style.h1text}>If I can do, You can too.</h1>
                    </Col>
                    <Col md='8'>
                        <div>
                            <p className={style.textStyle}>Mindshaper provides phycological illness solution that 
                            offers excellent visibility with mental issues of all types of people. We deliver 
                            result-driven service and offer alluring user experiences. Mindshaper helps them to 
                            realize the actual value of life. Our value-added services include consulting, end to 
                            end counselling, Personal session, couple session, child therapy and meditation therapy.</p>
                            <p className={style.textStyle}>There are a lot of people who have an idea about the 
                            kind of people who suffer from anxiety, and The reality is that it can happen to 
                            anyone. It does. Mental illness is not discrimination. If we just take the time 
                            to understand ourselves, our diseases and the people around us, we can live a 
                            more energetic, better and brighter life together.</p>
                        </div>
                        <Row>
                            <Col md='6'>
                                <img src='../../women.png'/>
                            </Col>
                            <Col md='6'>
                                <img src='../../mental-health-2310825_640.png'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{paddingTop:'70px'}}>
                    <Col style={{textAlign:'center'}}><p className={style.h1text} >What makes MindShaper <strong>different?</strong></p></Col>
                </Row>
                <Row style={{paddingTop:'20px'}}>
                   <Col md='6'>
                    <p className={style.textStyle}>Our moral value makes us different from others. We work to 
                    change the vision of our society. Because in our community, many educated people also 
                    believe that people behave abnormally because of the presence of genes. There is no more 
                    difficult task than bringing someone back from this belief. </p>
                    <p className={style.textStyle}>. If we cannot overcome superstition, the cure for mental 
                    illness will not be possible in any way. But it is also true that war against this 
                    superstition cannot be declared. Awareness needs to be raised for this. Besides, proper 
                    treatment should be arranged by identifying the disease. If we fail to do so, the same 
                    situation will remain after ten years.</p>
                   </Col>
                   <Col md='6'>
                        <img src='../../img1.jpg' style={{height:'350px',width:'100%', textAlign:'right'}}/>
                   </Col>   
                </Row>
                <Row style={{paddingTop:'70px'}}>
                    <Col style={{textAlign:'center'}}><p className={style.h1text} >Meet the Executive Team</p></Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <Row style={{paddingBottom:'20px'}}>
                            <Col md='3'>
                                    <div>
                                        <img className={style.img} src='../../portrait5.jpg'/>
                                    </div>
                            </Col>
                            <Col md='9'>
                                <div style={{marginLeft:'10px', width:'70%'}}>
                                    <p className={style.headingText}>Mohammad Shahriar Khan  • CEO</p>
                                    <p className={style.textStyle}>CEO of this company, Shahriar khan is the one who is courageous to take risk for accomplishing company’s growth. He has a vast contribution in this company. He plays an important role in making major corporate decisions, managing the overall operations and resources of a company, acting as the main point of communication between the board of directors (the board) and corporate.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom:'20px'}}>
                            <Col md='3'>
                                    <div>
                                        <img className={style.img} src='../../portrait3.jpg'/>
                                    </div>
                            </Col>
                            <Col md='9'>
                                <div style={{marginLeft:'10px', width:'70%'}}>
                                    <p className={style.headingText}>Mrs. Afifa Khan • CMO</p>
                                    <p className={style.textStyle}>Mrs. Afifa trusts that the aim of marketing is to understand the customer so well that the service fits him and sell itself. She is generally responsible for planning, developing, implementing and monitoring the overall business marketing strategy. Some of the duties may include market research, pricing, product marketing, marketing communications, advertising and public relations. </p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom:'20px'}}>
                            <Col md='3'>
                                    <div>
                                        <img className={style.img} src='../../portrait4.jpg'/>
                                    </div>
                            </Col>
                            <Col md='9'>
                                <div style={{marginLeft:'10px', width:'70%'}}>
                                    <p className={style.headingText}>Md. Imrul Kayes  • Head of Growth</p>
                                    <p className={style.textStyle}> Imrul worked with several startups and Big Corporate in Marketing and Operation. He has 2.5 years of domain expertise of working in the mental health tech industry. He is trying to break the stigma about mental health and going ahead to make this service accessible to anybody. He watches how all the pieces in a customer acquisition funnel are working together toward the overall goal of growing a company.</p>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingBottom:'20px'}}>
                            <Col md='3'>
                                    <div>
                                        <img className={style.img} src='../../portrait2.jpg'/>
                                    </div>
                            </Col>
                            <Col md='9'>
                                <div style={{marginLeft:'10px', width:'70%'}}>
                                    <p className={style.headingText}>Ms. Tasnuva Ahsan   • Business Development Associate</p>
                                    <p className={style.textStyle}>Tasnuva believes that limitation is only our imagination. So she is doing the best for the company with her full efforts and knowledge. She helps to boost growth of the company. She conducts market research, develop business strategies, build client relationships, and identify new business opportunities.</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md='6'>
                        <Row style={{paddingBottom:'20px'}}>
                            <Col md='3'>
                                    <div>
                                        <img className={style.img} src='../../portrait3.jpg'/>
                                    </div>
                            </Col>
                            <Col md='9'>
                                <div style={{marginLeft:'10px', width:'70%'}}>
                                    <p className={style.headingText}>Mrs. Laila Farjana Suchi  • COO</p>
                                    <p className={style.textStyle}>Mrs. Laila thinks that instead of focusing on the competition, we should focus on the customer. She is a senior executive tasked with overseeing the day-to-day administrative and operational functions of a business. Her main responsibilities include Designing and implementing business operations, establishing policies that promote company culture and vision, Overseeing operations of the company and the work of executives.</p>
                                </div>
                            </Col>
                        </Row>              
                        <Row style={{paddingBottom:'20px'}}>
                            <Col md='3'>
                                    <div>
                                        <img className={style.img} src='../../portrait6.jpeg'/>
                                    </div>
                            </Col>
                            <Col md='9'>
                                <div style={{marginLeft:'10px', width:'70%'}}>
                                    <p className={style.headingText}>Md. Ferdous Hasan Rifat   • Research & Development Associate</p>
                                    <p className={style.textStyle}>Ferdous, with his experience helps us easily understand the numbers and how to improve them. He participates in research and development activities. Utilizes established mathematical and scientific techniques to compile and analyze data. Being a Research and Development Associate he writes technical reports detailing procedures, outcomes, and observations.</p>
                                </div>
                            </Col>
                        </Row>              
                        <Row style={{paddingBottom:'20px'}}>
                            <Col md='3'>
                                    <div>
                                        <img className={style.img} src='../../portrait2.jpg'/>
                                    </div>
                            </Col>
                            <Col md='9'>
                                <div style={{marginLeft:'10px', width:'70%'}}>
                                    <p className={style.headingText}>Ms. Natasha Islam  • Business Development Manager</p>
                                    <p className={style.textStyle}>For Natasha, growth is never by mere chance, it is the result of forces working together. Her main role is to contacting potential clients to establish rapport and arrange meetings. Planning and overseeing new marketing initiatives. Researching organizations and individuals to find new opportunities. Increasing the value of current customers while attracting new ones.</p>
                                </div>
                            </Col>
                        </Row>            
                    </Col>
                </Row>
                <Row style={{paddingTop:'70px'}}>
                    <Col md='6' style={{textAlign:'center'}}>
                        <div>
                            <img src='../../cranium-2028555_1280.png' height='200px'/>
                        </div>
                    </Col>
                    <Col md='6'>
                        
                        <div style={{display:'flex'}}>
                            <div style={{background:'green', width:'10%', height:'2px', marginTop:'12px', marginRight:'5px'}}> </div>
                            <p className={style.headingText}>Know Who We Are</p>
                        </div>
                        <div className={style.textStyle}>
                            <p>Mental problems are many. It is the job of psychologists to search & solve problems 
                            in the world of the conscious and the subconscious. A psychologist can act as a counsellor. 
                            The number of clinical psychologists in Bangladesh is deficient. Statistics show that there 
                            is only one psychologist for every one million people in the world. As a rule, a registered 
                            clinical psychologist can give psychotherapy to a mentally ill patient. However, their number 
                            is less in this country.</p>
                            <p>We work for people with serious mental illness. We do in-house counselling. When 
                            we talk to the patient, we reach deep into his mind to find a solution to his problem. 
                            Later, counselling is needed for issues such as adjustment disorders, depression, lack 
                            of faith, etc. That’s why we say <b>“Mindshaper, Care for yours”</b>.</p>
                        </div>
                    </Col>
                </Row>
                
                <Row style={{paddingTop:'50px'}}>
                    <Col md='6'>
                        
                        <div style={{display:'flex'}}>
                            <div style={{background:'green', width:'10%', height:'2px', marginTop:'12px', marginRight:'5px'}}> </div>
                            <p className={style.headingText}>How we Work</p>
                        </div>
                        <div className={style.textStyle}>
                            <p>It’s an approach that brings together the best of financial planning and the best of investment management.</p>
                            <p>A business strategy is the means by which it sets out to achieve desired ends. You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like you.</p>
                            <p>A business strategy is the means by which it sets out to achieve desired ends. You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like you.</p>
                        </div>
                    </Col>
                    <Col md='6' style={{textAlign:'center'}}>
                        <div className={style.imgDiv}>
                            <img src='../../mental-illness-4364348_1280.png' style={{height:'100%', justifyContent:'cover'}}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>

    )
}


export default aboutPage