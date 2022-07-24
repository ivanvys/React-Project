import { useCallback, useState } from "react";

const useCounter = (defaultValue, allowNegative) => {
  const [count, setCount] = useState(defaultValue);

  const hundlePlus = useCallback(() => {
    setCount((state) => state + 1);
  }, []);

  const hundleMinus = useCallback(() => {
    setCount((state) => {
      if (state > 0 || allowNegative) {
        return state - 1;
      }
      return (state = defaultValue);
    });
  }, []);

  const hundleReset = useCallback(() => {
    setCount(defaultValue);
  });

  return {
    count,
    hundlePlus,
    hundleMinus,
    hundleReset,
  };
};

export default useCounter;
