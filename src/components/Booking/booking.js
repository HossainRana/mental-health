import React, { Component } from 'react';
import Home from './home';
import Online from './online';
import Offline from './offline'
import Confirm from './Confirm';
import Success from './Success';
import OnlinePhone from './onlinePhone';

export class UserForm extends Component {
  state = {
    step: 'BookHome',
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
      case 'BookHome':
        return (
          <Home
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'BookOnline':
        return (
          <Online
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'BookOffline':
        return (
          <Offline
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'OnlinePhone':
        return (
          <OnlinePhone
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case Success:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;