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

export class Music extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep('relaxationHome');
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <AppBar title="Enter Personal Details" />
            <section>
              <Card style={{border: 'none'}}>
                <h2>Playlist</h2>
                <h3 style={{textAlign: 'left', color: 'green', fontFamily: 'initial'}}>Music</h3>
                  <Card.Body>
                    <Card.Text>
                      <Row>
                        <ol>
                          <li>Tack 1</li>
                          <li>Tack 2</li>
                          <li>Tack 3</li>
                          <li>Tack 4</li>
                          <li>Tack 5</li>
                          <li>Tack 6</li>
                        </ol>
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

export default Music;