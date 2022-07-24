import styles from "../CounterOfCountersComponents/StylesCounterOfCountersPresentation.module.scss";
import FunctionalCounterContainer from "../../FunctionalCounter/FunctionalContainer";

const CounterOfCountersPresentation = ({
  vision,
  handleCounterAdd,
  handleCounterReset,
  handleCounterDelete,
  stateOfCounters,
  sayhello,
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
        <p>Number of counters: {stateOfCounters} </p>
        <p>Counters value:</p>
      </div>
      {vision.map((item, index) => {
        return (
          <FunctionalCounterContainer
            onDelete={() => handleCounterDelete(index)}
            key={index}
            sayhello={sayhello}
          />
        );
      })}
    </div>
  );
};

export default CounterOfCountersPresentation;
