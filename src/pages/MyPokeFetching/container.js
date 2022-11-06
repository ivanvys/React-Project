import { useCallback, useEffect, useState, useMemo } from "react";
import { pokemonLoading } from "./reducers";
import { useDispatch } from "react-redux";
import Poke from "./presentation";
import { deletePoke, resetPoke } from "./reducers";
import { useSelector } from "react-redux";
import { myFetchingSelectors } from "./selectors";
import CircularProgress from "@mui/material/CircularProgress";
import { mytoDoSelectors } from "../MyOwnToDoListOnReduxToolKit/selectors";

const MyFetching = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  const delay = (set) => new Promise((resolve) => setTimeout(resolve, set));
  const dispatch = useDispatch();
  const pokemons = useSelector(myFetchingSelectors);
  const todo = useSelector(mytoDoSelectors);

  useEffect(() => {
    (async () => {
      try {
        setLoad(true);
        await delay(2000);
        dispatch(pokemonLoading());
      } catch (error) {
        setError(error.message);
      } finally {
        setLoad(false);
      }
    })();
  }, []);

  const handlePokeDelete = useCallback((id) => {
    dispatch(deletePoke(id));
  }, []);

  const handleResetPoke = useCallback(async () => {
    try {
      setLoad(true);
      await delay(1000);
      dispatch(pokemonLoading());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoad(false);
    }
  }, []);

  const handleReset = () => {
    dispatch(resetPoke());
  };

  return (
    <div>
      <div>
        <button onClick={handleResetPoke}>Restart poke</button>
        <button onClick={handleReset}>Reset</button>
        <div>
          {load ? (
            <CircularProgress
              style={{ position: "absolute", top: "50%", left: "50%" }}
            />
          ) : (
            pokemons?.map((item) => {
              return (
                <Poke
                  key={item.id}
                  name={item.name}
                  image={item.image}
                  exp={item.experience}
                  id={item.id}
                  handlePokeDelete={handlePokeDelete}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyFetching;


