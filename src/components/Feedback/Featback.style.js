import styled from 'styled-components';

export const FeetbackBlock = styled.div`
  border: 1px solid #000;
  height: 1000px;
  width: 100%;
  padding: 20px;
`;

export const FeetbackTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
`;

export const FeetbackStatisticTitle = styled.h2`
  font-size: 40px;
  font-weight: bold;
`;
export const FeetbackBtn = styled.button`
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  margin-right: 10px;
  border-radius: 10px;
  border: 0;
  font-weight: bold;
  cursor: pointer;

  &:active {
    background-color: #0000ff;
    color: #fff;
  }
`;
// import { Component } from 'react';
// import {
//   FeetbackBlock,
//   FeetbackTitle,
//   FeetbackStatisticTitle,
//   FeetbackBtn,
// } from './Featback.style';

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleGood = () => {
//     this.setState(resState => ({
//       good: resState.good + 1,
//     }));
//   };
//   handleNeutral = () => {
//     this.setState(resState => ({
//       neutral: resState.neutral + 1,
//     }));
//   };
//   handleBad = () => {
//     this.setState(resState => ({
//       bad: resState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round(
//       (this.state.good /
//         (this.state.good + this.state.neutral + this.state.bad)) *
//         100
//     );
//   };

//   render() {
//     return (
//       <FeetbackBlock>
//         <FeetbackTitle>Please leave feedback</FeetbackTitle>
//         <FeetbackBtn onClick={this.handleGood}>Good</FeetbackBtn>
//         <FeetbackBtn onClick={this.handleNeutral}>Neutral</FeetbackBtn>
//         <FeetbackBtn onClick={this.handleBad}>Bad</FeetbackBtn>
//         <FeetbackStatisticTitle>Statistic</FeetbackStatisticTitle>

//         {this.state.good + this.state.neutral + this.state.bad !== 0 ? (
//           <div>
//             <p>Good:{this.state.good}</p>
//             <p>Neutral:{this.state.neutral}</p>
//             <p>Bad:{this.state.bad}</p>
//             <p>Total:{this.countTotalFeedback()}</p>
//             <p>
//               Positive feedback:
//               {this.countPositiveFeedbackPercentage()}%
//             </p>
//           </div>
//         ) : (
//           'No feedback give'
//         )}
//       </FeetbackBlock>
//     );
//   }
// }

// export default Feedback;
// ///////////////////////////////////////////////////////////////////////////////////////

// import { Component } from 'react';
// import Statistics from './Statistics';
// import FeedbackOptions from './FeedbackOptions';
// import {
//   FeetbackBlock,
//   FeetbackTitle,
//   FeetbackStatisticTitle,
//   FeetbackBtn,
// } from './Featback.style';

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleGood = () => {
//     this.setState(resState => ({
//       good: resState.good + 1,
//     }));
//   };
//   handleNeutral = () => {
//     this.setState(resState => ({
//       neutral: resState.neutral + 1,
//     }));
//   };
//   handleBad = () => {
//     this.setState(resState => ({
//       bad: resState.bad + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <FeetbackBlock>

//         <FeetbackTitle>Please leave feedback</FeetbackTitle>
//         <FeetbackBtn onClick={this.handleGood}>Good</FeetbackBtn>
//         <FeetbackBtn onClick={this.handleNeutral}>Neutral</FeetbackBtn>
//         <FeetbackBtn onClick={this.handleBad}>Bad</FeetbackBtn>
//         <FeetbackStatisticTitle>Statistic</FeetbackStatisticTitle>

//         <Statistics
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           total={this.countTotalFeedback()}
//           positivePercentage={this.countPositiveFeedbackPercentage()}
//         ></Statistics>
//       </FeetbackBlock>
//     );
//   }
// }

// export default Feedback;
