import { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import SectionTitle from 'components/SectionTitle/SectionTitle';
import { FeetbackBlock } from './Featback.style';

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
        <SectionTitle title="Please leave feedback!">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.addValue}
          />
        </SectionTitle>

        <SectionTitle title="Statistic">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </SectionTitle>
      </FeetbackBlock>
    );
  }
}

export default Feedback;
