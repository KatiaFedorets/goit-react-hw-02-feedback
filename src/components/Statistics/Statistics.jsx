import PropTypes from "prop-types";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    {total === 0 ? (
      <Notification message="No feedback given" />
    ) : (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} %</p>
        <div />
      </div>
    )}
  </div>
);

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};

export default Statistics;
