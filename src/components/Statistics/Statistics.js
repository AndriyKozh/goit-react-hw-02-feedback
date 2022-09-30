import PropTypes from 'prop-types';
import {
  StatisticsContent,
  StatisticsContentBlock,
  StatisticsNoFeatback,
  StatisticsValue,
} from './Statistics.stylt';

function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <StatisticsContentBlock>
      {good + neutral + bad !== 0 ? (
        <div>
          <StatisticsContent>
            Good:<StatisticsValue>{good}</StatisticsValue>
          </StatisticsContent>
          <StatisticsContent>
            Neutral:<StatisticsValue>{neutral}</StatisticsValue>
          </StatisticsContent>
          <StatisticsContent>
            Bad:<StatisticsValue>{bad}</StatisticsValue>
          </StatisticsContent>
          <StatisticsContent>
            Total:<StatisticsValue>{total}</StatisticsValue>
          </StatisticsContent>
          <StatisticsContent>
            Positive feedback:
            <StatisticsValue>{positivePercentage}%</StatisticsValue>
          </StatisticsContent>
        </div>
      ) : (
        <StatisticsNoFeatback> No feedback give</StatisticsNoFeatback>
      )}
    </StatisticsContentBlock>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
