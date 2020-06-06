import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'

export class Home extends Component {
  FindFriend = e => {
    e.preventDefault();
    this.props.nextStep('findFriend');
  };
  FindListener = e => {
    e.preventDefault();
    this.props.nextStep('findListener');
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <section>
            <div style={{marginBottom: '20px'}}>
              <p style={{fontSize: '25px', color:'green', fontFamily: 'initial'}}>Hey, You can talk professional licensed Therapist in our Network</p>
              <p style={{fontSize: '25px', color:'green', fontFamily: 'initial'}}>How do you want to take session?</p>
            </div>
            <Row>
                <Col>
                    <img style={{height:'70px', width:'70px'}} src='../../find.png'/>                                                    
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col>
                  <Button style={{background: 'green', border: 'none'}}
                  color="primary"
                  variant="contained"
                  onClick={this.FindFriend}
                  >Find Friend</Button>                                                 
                </Col>
            </Row>
            <Row style={{marginTop: '50px'}}>
                <Col>
                    <img style={{height:'70px', width:'70px'}} src='../../listener.png'/>                                                    
                </Col>
            </Row>
            <Row style={{marginTop: '20px'}}>
                <Col>
                  <Button style={{background: 'green', border: 'none'}}
                  color="primary"
                  variant="contained"
                  onClick={this.FindListener}
                  >Find a Listener</Button>                                                    
                </Col>
            </Row>
            <br />
          </section>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Home;