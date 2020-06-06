import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'

export class Home extends Component {
  online = e => {
    e.preventDefault();
    this.props.nextStep('BookOnline');
  };
  offline = e => {
    e.preventDefault();
    this.props.nextStep('BookOffline');
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <section>
            <div id='pan-1'>
              <div>
                <p style={{fontSize: '25px', color:'green', fontFamily: 'initial'}}>Hey, You can talk professional licensed Therapist in our Network</p>
                <p style={{fontSize: '25px', color:'green', fontFamily: 'initial'}}>How do you want to take session?</p>
              </div>
              <div style={{marginTop:'50px'}}>
                <br />
                  <Row style={{justifyContent: 'center'}}>
                    <Button style={{background: 'green', border: 'none', width:'120px'}}
                    color="primary"
                    variant="contained"
                    onClick={this.online}
                    >Online</Button>
                  </Row>
                  <Row style={{justifyContent: 'center', marginTop:'20px'}}>
                    <Button style={{background: 'green', border: 'none', width:'120px'}}
                    color="primary"
                    variant="contained"
                    onClick={this.offline}
                    >Offline</Button>
                  </Row>
              </div>
            </div>
          </section>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Home;