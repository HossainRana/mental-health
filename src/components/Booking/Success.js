import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import AppBar from '@material-ui/core/AppBar'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>

            <AppBar title="Success" />
            <h1>Thank You For Your Submission</h1>
            <p>You will get an email with further instructions.</p>
            <p>For more download the application of mindShaper and explore.</p>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Success;