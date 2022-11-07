import styles from "./index.module.scss";

const CalculatorComponent = ({
  screen,
  totalValue,
  buttons,
  handleSetTotalValue,
  handleCalculatorValue,
  handleResetScreen,
  handleRemoveTheLastCharacter,
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
                onClick={() => {
                  if (typeof item === "number") {
                    handleCalculatorValue(item);
                  } else if (typeof screen[0] === "number") {
                    handleCalculatorValue(item);
                  }
                }}
              >
                {item}
              </button>
            );
          })}
          <button onClick={handleSetTotalValue}>=</button>
          <button onClick={handleResetScreen}>C</button>
          <button onClick={handleRemoveTheLastCharacter}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorComponent;
