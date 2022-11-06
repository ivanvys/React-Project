import styles from "./index.module.scss";

const CalculatorComponent = ({
  screen,
  totalValue,
  buttons,
  handleSetTotalValue,
  handleCalculatorValue,
  handleResetScreen,
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.screen}>{screen}</div>
        <div className={styles.screen}>{totalValue}</div>
        <div className={styles.buttonsArea}>
          {buttons.map((item) => {
            return (
              <button
                key={item}
                className={styles.buttons}
                onClick={() => handleCalculatorValue(item)}
              >
                {item}
              </button>
            );
          })}
          <button onClick={handleSetTotalValue}>=</button>
          <button onClick={handleResetScreen}>C</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorComponent;
