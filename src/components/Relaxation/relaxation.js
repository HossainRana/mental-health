import React, { Component } from 'react';
import Home from './relaxationHome';
import Music from './music';
import Confirm from './Confirm';
import Success from './Success';

export class Relaxation extends Component {
  state = {
    step: 'relaxationHome',
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  // Proceed to next step
  nextStep = (s) => {
    const { step } = this.state;
    this.setState({
      step: s
    });
  };

  // Go back to prev step
  prevStep = (s) => {
    const { step } = this.state;
    this.setState({
      step: s
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 'relaxationHome':
        return (
          <Home
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'NextMusic':
        return (
          <Music
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Relaxation;