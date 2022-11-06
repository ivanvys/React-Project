import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadPokemonsPending } from "./actions";

const Saga = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPokemonsPending());
  }, []);

  return <div></div>;
};

export default Saga;
