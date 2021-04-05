import styles from "./Section.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => (
  <div className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

Section.defaultProps = {
  title: " "
};

Section.propTypes = {
  title: PropTypes.string.isRequired
};

export default Section;
