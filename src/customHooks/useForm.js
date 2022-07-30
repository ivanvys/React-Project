import { useCallback, useState } from "react";

export const useForm = (form) => {
  const [state, setState] = useState(form);

  const hundleImput = useCallback((event) => {
    const { value, name } = event.target;
    setState((state) => {
      return { ...state, [name]: value };
    });
  }, []);

  const hundleReset = useCallback(() => {
    console.log(form);
  }, []);

  return {
    state,
    hundleImput,
    hundleReset,
  };
};
