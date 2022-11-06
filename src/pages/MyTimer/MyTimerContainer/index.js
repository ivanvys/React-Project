import { useCallback, useMemo, useState } from "react";
import MyTimerComponent from "../MyTimerComponent";
import { v4 as uuid } from "uuid";

const MyTimerContainer = () => {
  const [count, setCount] = useState(0);
  const [timers, setTimers] = useState([]);

  let interval;

  const handleStartCount = useCallback(() => {
    interval = setInterval(() => setCount((state) => state + 1), 1000);
  }, []);

  const handleResetTimer = useCallback(() => {
    clearInterval(interval);
    setCount(0);
  }, []);

  const handleTimerStop = useCallback((time) => {
    setTimers((state) => {
      const objCount = {
        id: uuid(),
        countValue: time,
      };
      return [...state, objCount];
    });
  }, []);

  const handleStopCount = useCallback(() => {
    clearInterval(interval);
  }, []);

  //   const sortTimers = useMemo(() => {
  //     const r = timers.sort((a, b) => b.countValue + a.countValue);
  //     console.log(r);
  //   }, []);

  const handleResetTimers = useCallback(() => {
    setTimers([]);
  }, []);

  return (
    <div>
      <MyTimerComponent
        count={count}
        timers={timers}
        // sortTimers={sortTimers}
        handleStartCount={handleStartCount}
        handleResetTimer={handleResetTimer}
        handleTimerStop={handleTimerStop}
        handleResetTimers={handleResetTimers}
        handleStopCount={handleStopCount}
      />
    </div>
  );
};

export default MyTimerContainer;
