import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Success from './Success'


export class OnlinePhone extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep(Success);
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep('BookOnline');
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
          <div style={{float: 'right'}}>
            <Button style={{width: '120px', background: 'red', color :'#fff'}}
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

export default OnlinePhone;