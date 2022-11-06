import styles from "./index.module.scss";
import { memo } from "react";

const MyTimerComponent = ({
  count,
  timers,
  // sortTimers,
  handleStartCount,
  handleResetTimer,
  handleTimerStop,
  handleResetTimers,
  handleStopCount,
}) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.timerWrapper}>
          <div className={styles.timerCount}>{count}</div>
        </div>
        <div>
          {count === 0 ? (
            <button onClick={handleStartCount}>Start</button>
          ) : (
            <button onClick={() => handleTimerStop(count)}>
              intermediate result
            </button>
          )}
          <button onClick={handleResetTimer}>Reset</button>
          <button onClick={handleStopCount}>Stop</button>
          <button onClick={handleResetTimers}>Remove all results</button>
          {/* <button onClick={sortTimers}>SOrt</button> */}
        </div>
      </div>

      <div>
        {timers.map((item) => {
          return (
            <div key={item.id} className={styles.wrapper}>
              <div>{item.countValue}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(MyTimerComponent);
