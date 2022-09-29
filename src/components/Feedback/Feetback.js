import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import {
  FeetbackBlock,
  FeetbackTitle,
  FeetbackStatisticTitle,
} from './Featback.style';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addValue = ev => {
    const increaseValue = ev.target.name;

    this.setState(preventState => ({
      [increaseValue]: (preventState[increaseValue] += 1),
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <FeetbackBlock>
        <FeetbackTitle>Please leave feedback!</FeetbackTitle>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.addValue}
        />

        <FeetbackStatisticTitle>Statistic</FeetbackStatisticTitle>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </FeetbackBlock>
    );
  }
}

export default Feedback;
