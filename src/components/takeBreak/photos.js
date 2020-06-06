import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import 'bootstrap/dist/css/bootstrap.css'
import { Row, Col, Card, Container} from 'react-bootstrap'
import Exercise_next from './exercise'

export class Photos extends Component {
  PhotosMakeHappy = e => {
    e.preventDefault();
    this.props.nextStep('PhotosMakeHappy');
  };
  FunnyVideos = e => {
    e.preventDefault();
    this.props.nextStep('FunnyVideos');
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
          <section>
            <div style={{marginBottom: '20px'}}>
            <h3 style={{textAlign: 'left', color: 'green', fontFamily: 'initial'}}>Photos & Videos</h3>
            </div>
              <Row>
                  <Col>
                      <Card style={{border: 'none'}}>
                          <Card.Text>
                            <Button style={{background: 'green', border: 'none'}}
                            color="primary"
                            variant="contained"
                            onClick={this.PhotosMakeHappy}
                            >
                              <p style={{ fontFamily: 'initial'}}>Photos That Make You Happy</p>
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
                            onClick={this.FunnyVideos}
                            >
                            <p style={{fontFamily: 'initial'}}>Funny Videos</p></Button>
                          </Card.Text>
                      </Card>
                  </Col>
              </Row> 
          </section>
        <br/>
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

export default Photos;