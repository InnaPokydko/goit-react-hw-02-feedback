import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <Title>Please leave feedback</Title>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default App
