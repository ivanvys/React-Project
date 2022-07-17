import PropTypes from "prop-types";

import styles from "./index.module.scss";

const Counter = ({ startValue, isEven, plus, minus, reset }) => {
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.screen} ${
          startValue % 2 === 0 ? styles.isEven : styles.isOdd
        }`}
      >
        {startValue}
      </div>
      <div className={styles.evenOrOddScreen}>{isEven}</div>
      <div className={styles.buttonsArea}>
        <button onClick={minus} className={styles.buttonStyles}>
          -
        </button>
        <button onClick={reset} className={styles.buttonStyles}>
          Reset
        </button>
        <button onClick={plus} className={styles.buttonStyles}>
          +
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  startValue: PropTypes.number.isRequired,
  isEven: PropTypes.string.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
export default Counter;
