import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowAltCircleUp, faSearchLocation, faVoicemail, faMailBulk, faVideo, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'

export class Exercise extends Component {
  Imaginary = e => {
    e.preventDefault();
    this.props.nextStep('ExerciseNext');
  };
  Meditation = e => {
    e.preventDefault();
    this.props.nextStep('ExerciseNext');
  };
  Stress = e => {
    e.preventDefault();
    this.props.nextStep('ExerciseNext');
  };
  Body = e => {
    e.preventDefault();
    this.props.nextStep('ExerciseNext');
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep('takeBreakHome');
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <AppBar title="Enter Personal Details" />
            <section>
              <Card style={{border: 'none'}}>
                <h3 style={{textAlign: 'left', color: 'green', fontFamily: 'initial'}}>Exercise (Yoga, Meditation)</h3>
                  <Row>
                  <Col md='6'>
                      <Card>
                          <Card.Body>
                              <Card.Text>
                                <Button style={{background: 'green', border: 'none'}}
                                color="primary"
                                variant="contained"
                                onClick={this.Imaginary}
                                >Imaginary Relaxation</Button>
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col md='6'>
                      <Card>
                          <Card.Body>
                              <Card.Text>
                                <Button style={{background: 'green', border: 'none'}}
                                color="primary"
                                variant="contained"
                                onClick={this.Meditation}
                                >Guided Meditation</Button>
                              </Card.Text>
                          </Card.Body>
                      </Card>                                            
                  </Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                  <Col md='6'>
                      <Card>
                          <Card.Body>
                              <Card.Text>
                                <Button style={{background: 'green', border: 'none'}}
                                color="primary"
                                variant="contained"
                                onClick={this.Stress}
                                >Stress Management</Button>
                              </Card.Text>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col md='6'>
                      <Card>
                          <Card.Body>
                              <Card.Text>
                                  <Button style={{background: 'green', border: 'none'}}
                                  color="primary"
                                  variant="contained"
                                  onClick={this.Body}
                                  >Body Scan</Button> 
                              </Card.Text>
                          </Card.Body>
                      </Card>                                            
                  </Col>
                </Row>
                <Row style={{marginTop:'20px'}}>
                  <Col>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                                <Button style={{background: 'green', border: 'none'}}
                                color="primary"
                                variant="contained"
                                onClick={this.Body}
                                >More Category</Button> 
                            </Card.Text>
                        </Card.Body>
                    </Card>                                            
                  </Col>
                
                </Row>
              </Card>
              </section>
            <br />

            <Button style={{background: 'red', width:'120px' ,float: 'right'}}
              color="primary"
              variant="contained"
              onClick={this.back}
            >Back</Button>


        </>
      </MuiThemeProvider>
    );
  }
}

export default Exercise;