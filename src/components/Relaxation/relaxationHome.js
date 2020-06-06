import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'

export class RelaxationHome extends Component {
  online = e => {
    e.preventDefault();
    this.props.nextStep('NextMusic');
  };
  offline = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <section>
            <section>
              <div style={{marginBottom: '20px'}}>
                <p style={{fontSize: '25px', color:'green', fontFamily: 'initial'}}>Hey, You can talk professional licensed Therapist in our Network</p>
                <p style={{fontSize: '25px', color:'green', fontFamily: 'initial'}}>How do you want to take session?</p>
              </div>
              <Row>
                <Col md='6'>
                    <Card>
                        <Card.Body>
                            <Card.Text>
                              <Button style={{background: 'green', border: 'none'}}
                              color="primary"
                              variant="contained"
                              onClick={this.online}
                              >Sleeping Music</Button>
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
                              onClick={this.online}
                              >Cool Music</Button>
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
                              onClick={this.online}
                              >Running Music</Button>
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
                                onClick={this.online}
                                >More Category</Button> 
                            </Card.Text>
                        </Card.Body>
                    </Card>                                            
                </Col>
              </Row>
              
              <h5 style={{marginTop:'50px'}}>15 Days free, No Payment No Credit Card Required</h5>
              <Button style={{background:'green', border:'none'}}>Subscribe</Button>
            </section>
              <br />
          </section>
        </>
      </MuiThemeProvider>
    );
  }
}

export default RelaxationHome;