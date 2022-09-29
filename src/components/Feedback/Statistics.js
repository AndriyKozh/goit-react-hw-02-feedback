function Statistic(props) {
  const { good, neutral, bad, total, positivePercentage } = props;

  return (
    <div>
      {good + neutral + bad !== 0 ? (
        <div>
          <p>Good:{good}</p>
          <p>Neutral:{neutral}</p>
          <p>Bad:{bad}</p>
          <p>Total:{total}</p>
          <p>
            Positive feedback:
            {positivePercentage}%
          </p>
        </div>
      ) : (
        'No feedback give'
      )}
    </div>
  );
}

export default Statistic;
