import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackButton = ({ feedback, onLeaveFeedback }) => {
  return (
    <button
      className={s.btn}
      type="button"
      key={feedback}
      name={feedback}
      onClick={() => onLeaveFeedback(feedback)}
    >
      {feedback}
    </button>
  );
};

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option =>
    FeedbackButton({ feedback: option, onLeaveFeedback }),
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
