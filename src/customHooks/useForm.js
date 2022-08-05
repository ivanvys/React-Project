import { useCallback, useState } from "react";

export const useForm = (form) => {
  const [state, setState] = useState(form);

  const hundleFromChange = useCallback((event) => {
    const { value, name } = event.target;
    setState((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  const hundleReset = useCallback(() => {
    setState(form);
  }, []);

  return {
    state,
    hundleFromChange,
    hundleReset,
  };
};
