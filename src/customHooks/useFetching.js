import { useCallback, useEffect, useState } from "react";

export const useFetching = (async, initialValue, isLoad = true) => {
  const [data, setData] = useState(initialValue);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const delay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const hundleDataLoad = useCallback(async () => {
    try {
      setLoad(true);
      await delay(2000);
      const response = await async();
      setData(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoad(false);
    }
  }, []);

  const handleReset = () => {
    return setData([]);
  };

  useEffect(() => {
    isLoad && hundleDataLoad();
  }, [isLoad]);

  return { data, load, error, hundleDataLoad, handleReset };
};
