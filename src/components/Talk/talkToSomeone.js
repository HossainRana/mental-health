import React, { Component } from 'react';
import Home from './home';
import FindFriend from './findFriend';
import FindListener from './findListener'
import Confirm from './Confirm';
import Success from './Success';

export class TalktoSomeone extends Component {
  state = {
    step: 'talkToSomeoneHome',
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
      case 'talkToSomeoneHome':
        return (
          <Home
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'findFriend':
        return (
          <FindFriend
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'findListener':
        return (
          <FindListener
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default TalktoSomeone;