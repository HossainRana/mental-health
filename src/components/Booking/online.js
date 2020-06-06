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

export class Online extends Component {
  phone = e => {
    e.preventDefault();
    this.props.nextStep('OnlinePhone');
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep('BookHome');
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <AppBar title="Enter Personal Details" />
            <section>
              <Card style={{border: 'none'}}>
                <h3 style={{textAlign: 'left', color: 'green', fontFamily: 'initial'}}>Online</h3>
                  <Card.Body>
                    <Card.Text>
                      <Row>
                        <Col><FontAwesomeIcon icon={faPhone} style={{color:'green', marginRight:'10px'}}/>
                          <Button style={{background: 'green', width:'120px'}}
                          color="primary"
                          variant="contained"
                          onClick={this.phone}
                          >Phone</Button>                                                  
                        </Col>
                      </Row>
                      <Row style={{marginTop: '20px'}}>
                        <Col> <FontAwesomeIcon icon={faVideo} style={{color:'green', marginRight:'10px'}}/>
                          <Button  style={{background: 'green', width:'120px'}}
                          color="primary"
                          variant="contained"
                          onClick={this.continue}
                          >Video</Button>                                                  
                        </Col>
                      </Row>
                      <Row style={{marginTop: '20px'}}>
                        <Col> <FontAwesomeIcon icon={faEnvelopeOpenText} style={{color:'green', marginRight:'10px'}}/>
                          <Button  style={{background: 'green', width:'120px'}}
                          color="primary"
                          variant="contained"
                          onClick={this.continue}
                          >Chat</Button>                                                   
                        </Col>
                      </Row>
                    </Card.Text>
                  </Card.Body>
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

export default Online;