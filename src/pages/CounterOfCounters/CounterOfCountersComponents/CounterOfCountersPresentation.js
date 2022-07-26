import styles from "../CounterOfCountersComponents/StylesCounterOfCountersPresentation.module.scss";
import PropTypes from "prop-types";
import Counter from "../../../components/counterPresentation";

const CounterOfCountersPresentation = ({
  startCounter,
  handleCounterAdd,
  handleCounterPlus,
  handleCounterMinus,
  handleCounterReset,
  handleCounterRemove,
  handleCounterResetCounter,
}) => {
  return (
    <div className={styles.wrapper}>
      <button onClick={handleCounterAdd} className={styles.headerButton}>
        Add Counter
      </button>
      <button onClick={handleCounterReset} className={styles.headerButton}>
        Reset
      </button>
      <div>
        <h1>Numbers of counters: {startCounter.length} </h1>
        <h1>
          Counters value:
          {startCounter.reduce((acc, item) => {
            acc += item.countValue;
            return acc;
          }, 0)}
        </h1>
      </div>
      {startCounter.map(({ id, countValue }) => {
        return (
          <Counter
            id={id}
            startValue={countValue}
            key={id}
            plus={handleCounterPlus}
            minus={handleCounterMinus}
            remove={handleCounterRemove}
            reset={handleCounterResetCounter}
          />
        );
      })}
    </div>
  );
};

CounterOfCountersPresentation.propTypes = {
  startCounter: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string, countValue: PropTypes.number })
  ).isRequired,
};
export default CounterOfCountersPresentation;
