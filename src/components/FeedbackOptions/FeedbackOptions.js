import PropTypes from 'prop-types';
import { FeetbackBtn, FeetbackBtnBlock } from './FeedbackOption.style';
function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <FeetbackBtnBlock>
      {options.map((option, index) => (
        <FeetbackBtn
          type="button"
          key={index}
          name={option}
          onClick={onLeaveFeedback}
        >
          {option}
        </FeetbackBtn>
      ))}
    </FeetbackBtnBlock>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
