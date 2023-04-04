import React, { Component } from 'react';
import css from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(100 * (this.state.good/this.countTotalFeedback()));
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
  
};

