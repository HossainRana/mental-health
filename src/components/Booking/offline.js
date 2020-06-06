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
import Calendar from 'react-calendar'
export class Offline extends Component {
  phone = e => {
    e.preventDefault();
    this.props.nextStep();
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
                <h3 style={{textAlign: 'left', color: 'green', fontFamily: 'initial'}}>Offline</h3>
                  <Card.Body>
                    <Card.Text>
                      <div> 
                        <Calendar />
                      </div>
                      <div>
                        <form>
                          <div style={{marginLeft: '-50px', marginTop: '8px'}}>
                            <label>
                            <input type="radio" id='MalePsychologist' value="MalePsychologist"/>                              
                              Male Psychologist
                            </label>
                            <label>
                              <input type="radio" id='FemalePsychologist' value="FemalePsychologist" />
                              Female Psychologist
                            </label>
                          </div>
                        </form>
                      </div>
                      <textarea rows="4" cols="3" placeholder='write your message' style={{width:'90%', borderRadius:'5px', marginLeft:'-36px'}}></textarea>
                    </Card.Text>
                  </Card.Body>
              </Card>
              </section>
            <br />

            <div style={{float: 'right'}}>
            <Button style={{background: 'red', width:'120px' ,float: 'right'}}
              color="primary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            <Button style={{background: 'green', color:'#fff', marginLeft: '5px'}}
            variant="contained"
            onClick={this.continue}
            >Book Appointment</Button>
          </div>


        </>
      </MuiThemeProvider>
    );
  }
}

export default Offline;