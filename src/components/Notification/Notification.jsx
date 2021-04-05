import PropTypes from "prop-types";

const Notification = ({ message }) => <p>{message}</p>;

Notification.defaultProps = {
  title: "No feedback given"
};

Notification.propTypes = {
  message: PropTypes.string.isRequired
};

export default Notification;
