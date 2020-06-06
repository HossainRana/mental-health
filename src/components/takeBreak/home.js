import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'
import Exercise_next from './exercise'
import PhotosVideos from './photos'

export class Home extends Component {
  exercise = e => {
    e.preventDefault();
    this.props.nextStep('Exercise');
  };
  photosVideo = e => {
    e.preventDefault();
    this.props.nextStep('PhotosVideos');
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
                      <Card style={{border: 'none'}}>
                          <Card.Text>
                            <Button style={{background: 'green', border: 'none'}}
                            color="primary"
                            variant="contained"
                            onClick={this.exercise}
                            >
                              <p style={{ fontFamily: 'initial'}}>Exercise(Yoga, Meditation)</p>
                            </Button>
                          </Card.Text>
                      </Card>
                  </Col>
              </Row> 
              <Row style={{marginTop: '20px'}}>
                  <Col>
                      <Card style={{border: 'none'}}>
                          <Card.Text>
                            <Button style={{background: 'green', border: 'none'}}
                            color="primary"
                            variant="contained"
                            onClick={this.photosVideo}
                            >
                            <p style={{fontFamily: 'initial'}}>Photos & Videos</p></Button>
                          </Card.Text>
                      </Card>
                  </Col>
              </Row> 
          </section>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Home;