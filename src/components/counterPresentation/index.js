import PropTypes from "prop-types";

import styles from "./index.module.scss";

import { memo } from "react";
import { Link } from "react-router-dom";
import ROUTE_NAMES from "../../router/routeNames";

const Counter = ({ id, startValue, plus, minus, reset, remove }) => {
  const isEven = startValue % 2 === 0;
  return (
    <div className={styles.wrapper}>
      <button onClick={() => remove(id)}>Remove </button>
      <div
        className={styles.screen}
        style={{ background: isEven ? "red" : "yellow" }}
      >
        {startValue}
      </div>
      <div className={styles.evenOrOddScreen}>
        {isEven ? "Чётное" : "Нечетное"}
      </div>
      <div className={styles.buttonsArea}>
        <button onClick={() => minus(id)} className={styles.buttonStyles}>
          -
        </button>
        <button onClick={() => reset(id)} className={styles.buttonStyles}>
          Reset
        </button>
        <button onClick={() => plus(id)} className={styles.buttonStyles}>
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
