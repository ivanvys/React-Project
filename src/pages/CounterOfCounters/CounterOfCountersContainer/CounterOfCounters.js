import CounterOfCountersPresentation from "../CounterOfCountersComponents/CounterOfCountersPresentation";
import FunctionalCounterContainer from "../../FunctionalCounter/FunctionalContainer";

import { useCallback, useState } from "react";

const CounterOfCounters = () => {
  const [startCounter, setCounter] = useState([]);
  const [numberOfCount, setnumberOfCount] = useState(0);
  const [count, setCount] = useState(0);
  const handleCounterAdd = useCallback(() => {
    setnumberOfCount((state) => state + 1);
    setCounter((state) => {
      const functionalCounterContainerCopy = [...state];
      const newContainer = <FunctionalCounterContainer />;
      functionalCounterContainerCopy.push(newContainer);
      return functionalCounterContainerCopy;
    });
  }, []);

  const handleCounterDelete = useCallback((index) => {
    setnumberOfCount((state) => state - 1);
    setCounter((state) => {
      const functionalCounterContainerCopy = [...state];
      functionalCounterContainerCopy.splice(index, 1);
      return functionalCounterContainerCopy;
    });
  }, []);

  const handleCounterReset = useCallback(() => {
    setnumberOfCount((state) => (state = 0));
    setCounter(() => {
      return startCounter;
    });
  }, []);

  // const sayhello = (value) => {
  //   console.log(value);
  // };

  return (
    <CounterOfCountersPresentation
      vision={startCounter}
      handleCounterAdd={handleCounterAdd}
      handleCounterReset={handleCounterReset}
      handleCounterDelete={handleCounterDelete}
      stateOfCounters={numberOfCount}
      // sayhello={sayhello}
    />
  );
};

export default CounterOfCounters;
