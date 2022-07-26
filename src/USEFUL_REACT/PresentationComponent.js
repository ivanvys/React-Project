import PropTypes from "prop-types";

import styles from "./index.module.scss";

import { memo } from "react";
import { Link } from "react-router-dom";
import ROUTE_NAMES from "../../router/routeNames";

const Counter = ({ startValue, plus, minus, reset }) => {
  console.log("Render");
  return (
    <div className={styles.wrapper}>
      <div
        className={styles.screen}
        style={{ background: startValue % 2 === 0 ? "red" : "yellow" }}
      >
        {startValue}
      </div>
      <div className={styles.evenOrOddScreen}>
        {startValue % 2 === 0 ? "Чётное" : "Нечетное"}
      </div>
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
      <Link to={ROUTE_NAMES.HOME}>HOME</Link>
    </div>
  );
};

Counter.propTypes = {
  startValue: PropTypes.number.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
export default memo(Counter);
