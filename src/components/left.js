import React,  { useContext } from "react"
import { GlobalDispatchContext } from "../provider/provider"
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Nav, Card, Button, Form, Container} from 'react-bootstrap'
import indexstyle from '../pages/index.module.scss'

const Left = () => {
    const dispatch = useContext(GlobalDispatchContext);
    return (
        <div>
            <Container>
                <Row>
                    <Col md='6' style={{display:'flex', padding:'0'}}>
                        <Col>
                            <button className={indexstyle.serviceButton} style={{border:'none', padding:'0'}} onClick={
                                () => {
                                    dispatch({type: "You want to book an Appoinment", title: "Book An Appointment"});
                                }
                            }>
                                <Card className={`${indexstyle.serviceCard} ${indexstyle.left_servicecard}`} >
                                    <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                                        <div style={{background:'transparent', height:'122px', width:'122px', borderRadius:'50%', border:'1px solid #0080001a', textAlign:'center', padding:'10px'}}>
                                            <div style={{background:'transparent', height:'101px', width:'101px', borderRadius:'50%', border:'1px solid #00800059', textAlign:'center', padding:'10px'}}>
                                                <div>
                                                    <img src='../../mental-health-2310825_640.png' style={{height:'80px', width:'80px', objectFit:'contain', borderRadius:'50%', textAlign:'center' }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div> 
                                    <Card.Body>
                                        <Card.Title className={indexstyle.serviceCard_title}>Book An Appointment</Card.Title>
                                        <Card.Text className={indexstyle.serviceCard_text}>
                                        In the private session, you will get a one-hour session conducting by an experienced physiologist
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </button>
                            <button className={indexstyle.serviceButton} style={{border:'none', padding:'0'}} onClick={
                                () => {
                                    dispatch({type: "Let's Take a Break", title: "Take a Break"});
                                }
                            }>
                                <Card  className={`${indexstyle.serviceCard} ${indexstyle.left_servicecard}`}>
                                    <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                                        <div style={{background:'transparent', height:'122px', width:'122px', borderRadius:'50%', border:'1px solid #0080001a', textAlign:'center', padding:'10px'}}>
                                            <div style={{background:'transparent', height:'101px', width:'101px', borderRadius:'50%', border:'1px solid #00800059', textAlign:'center', padding:'10px'}}>
                                                <div>
                                                    <img src='../../mindshaper6.png' style={{height:'80px', width:'80px', objectFit:'contain', borderRadius:'50%', textAlign:'center' }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div> 
                                    <Card.Body>
                                        <Card.Title className={indexstyle.serviceCard_title}>Take a Break</Card.Title>
                                        <Card.Text className={indexstyle.serviceCard_text}>
                                        Are you facing bad times in your relationship? Just attend a session with our experienced physiologist.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </button>
                        </Col>
                    </Col>
                    <Col style={{marginTop:'2rem', padding:'0'}}>
                        <Col>
                            <button className={indexstyle.serviceButton} style={{border:'none', padding:'0'}} onClick={
                                () => {
                                    dispatch({type: "You want to Talk to Someone", title:"Talk to Someone"});
                                }
                            }>
                                <Card  className={`${indexstyle.serviceCard} ${indexstyle.left_servicecard}`}>
                                    <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                                        <div style={{background:'transparent', height:'122px', width:'122px', borderRadius:'50%', border:'1px solid #0080001a', textAlign:'center', padding:'10px'}}>
                                            <div style={{background:'transparent', height:'101px', width:'101px', borderRadius:'50%', border:'1px solid #00800059', textAlign:'center', padding:'10px'}}>
                                                <div>
                                                    <img src='../../mental-health-3350778_1280.png' style={{height:'80px', width:'80px', objectFit:'contain', borderRadius:'50%', textAlign:'center' }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div> 
                                    <Card.Body>
                                        <Card.Title className={indexstyle.serviceCard_title}>Talk to Someone</Card.Title>
                                        <Card.Text className={indexstyle.serviceCard_text}>
                                        Do your child began to act “out of character”? Has your child experienced any serious trauma recently?
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </button>

                            <button className={indexstyle.serviceButton} style={{border:'none', padding:'0'}} onClick={
                                () => {
                                    dispatch({type: "Hear some Relaxation Music", title: "Relaxation Music"});
                                }
                            }>
                                <Card  className={`${indexstyle.serviceCard} ${indexstyle.left_servicecard}`}>
                                    <div style={{display:'flex', justifyContent:'center', marginTop:'10px'}}>
                                        <div style={{background:'transparent', height:'122px', width:'122px', borderRadius:'50%', border:'1px solid #0080001a', textAlign:'center', padding:'10px'}}>
                                            <div style={{background:'transparent', height:'101px', width:'101px', borderRadius:'50%', border:'1px solid #00800059', textAlign:'center', padding:'10px'}}>
                                                <div>
                                                    <img src='../../anatomy-2952567_640.png' style={{height:'80px', width:'80px', objectFit:'contain', borderRadius:'50%', textAlign:'center' }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                        </div>
                                    </div> 
                                    <Card.Body>
                                        <Card.Title className={indexstyle.serviceCard_title}>Relaxation Music</Card.Title>
                                        <Card.Text className={indexstyle.serviceCard_text}>
                                        Meditation is helpful for those who are struggling with a generalized anxiety disorder. If you face anxiety disorder, just make a phone call to us.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Left