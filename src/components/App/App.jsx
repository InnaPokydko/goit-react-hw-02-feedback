import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  countTotalFeedback = ([ good, bad, neutral ] = this.state) => {
    return this.state.lenght;
  }

  render() {
    const {good, neutral, bad} = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        <Statistics good={good} neutral={neutral} bad={bad} />
      <div><span>Total: countTotalFeedback()</span></div>
      </div>
    );
  }
}

export default App
