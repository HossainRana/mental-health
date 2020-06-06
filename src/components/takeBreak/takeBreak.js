import React, { Component } from 'react';
import Home from './home';
import Exercise from './exercise';
import ExerciseNext from './exerciseNext'
import Photos from './photos'
import PhotosMakeHappy from './photosMakeHappy'
import FunnyVideos from './funnyVideo'
import Confirm from './Confirm';
import Success from './Success';

export class TakeBreak extends Component {
  state = {
    step: 'takeBreakHome',
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
      case 'takeBreakHome':
        return (
          <Home
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'Exercise':
        return (
          <Exercise
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'ExerciseNext':
        return (
          <ExerciseNext
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'PhotosVideos':
        return (
          <Photos
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'PhotosMakeHappy':
        return (
          <PhotosMakeHappy
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'FunnyVideos':
        return (
          <FunnyVideos
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 'Success':
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default TakeBreak;