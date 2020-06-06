import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faArrowAltCircleUp, faSearchLocation, faVoicemail, faMailBulk, faVideo, faEnvelopeOpenText, faImage } from '@fortawesome/free-solid-svg-icons'

export class ExerciseNext extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep('PhotosVideos');
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
            <AppBar title="Enter Personal Details" />
            <section>
              <Card style={{border: 'none'}}>
                <h3 style={{textAlign: 'left', color: 'green', fontFamily: 'initial'}}>Photos That Make You Happy</h3>
                  <Card.Body>
                    <Card.Text>
                      <Row>
                        <ul>
                         <div style={{display: 'flex', listStyleType: 'none', marginBottom: '10px'}}>
                            <FontAwesomeIcon icon={faImage} style={{color:'green', marginRight:'10px'}}/><p style={{marginTop:'-3px'}}>Image Title</p>
                         </div>
                         <div style={{display: 'flex', listStyleType: 'none', marginBottom: '10px'}}>
                            <FontAwesomeIcon icon={faImage} style={{color:'green', marginRight:'10px'}}/><p style={{marginTop:'-3px'}}>Image Title</p>
                         </div>
                         <div style={{display: 'flex', listStyleType: 'none', marginBottom: '10px'}}>
                            <FontAwesomeIcon icon={faImage} style={{color:'green', marginRight:'10px'}}/><p style={{marginTop:'-3px'}}>Image Title</p>
                         </div>
                         <div style={{display: 'flex', listStyleType: 'none', marginBottom: '10px'}}>
                            <FontAwesomeIcon icon={faImage} style={{color:'green', marginRight:'10px'}}/><p style={{marginTop:'-3px'}}>Image Title</p>
                         </div>
                         <div style={{display: 'flex', listStyleType: 'none', marginBottom: '10px'}}>
                            <FontAwesomeIcon icon={faImage} style={{color:'green', marginRight:'10px'}}/><p style={{marginTop:'-3px'}}>Image Title</p>
                         </div>
                         <div style={{display: 'flex', listStyleType: 'none', marginBottom: '10px'}}>
                            <FontAwesomeIcon icon={faImage} style={{color:'green', marginRight:'10px'}}/><p style={{marginTop:'-3px'}}>Image Title</p>
                         </div>
                         <div style={{display: 'flex', listStyleType: 'none', marginBottom: '10px'}}>
                            <FontAwesomeIcon icon={faImage} style={{color:'green', marginRight:'10px'}}/><p style={{marginTop:'-3px'}}>Image Title</p>
                         </div>
                        </ul>
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

export default ExerciseNext;