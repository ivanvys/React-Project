import { useCallback, useEffect, useState } from "react";

export const useFetching = (asyncallBack, initialValue, isLoad = true) => {
  const [data, setData] = useState(initialValue);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const delay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const hundleDataLoad = useCallback(async (info) => {
    try {
      setLoad(true);
      await delay(1000);
      const response = await asyncallBack(info);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoad(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    return setData([]);
  }, []);

  useEffect(() => {
    isLoad && hundleDataLoad();
  }, [isLoad]);

  return { data, load, error, hundleDataLoad, handleReset };
};
