import { useFetching } from "../../customHooks/useFetching";
import Spinner from "../../components/Spinner";
import { getPoke } from "./api/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { loadPokemons } from "./reducers";

const DataFetching = () => {
  const dispatch = useDispatch();
  // const { data, load, error, hundleDataLoad, handleReset } = useFetching(
  //   getPoke,
  //   [],
  //   false
  // );

  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  const delay = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

  const hundleDataLoad = useCallback(async () => {
    try {
      setLoad(true);
      await delay(2000);
      const { payload } = await dispatch(loadPokemons());
      setData(payload);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoad(false);
    }
  }, []);

  const handleReset = useCallback(() => {
    return setData([]);
  }, []);

  return (
    <div>
      <h2>Data Fetching</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <button onClick={hundleDataLoad}>Load</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      {load ? (
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <Spinner />
        </div>
      ) : (
        <div
          style={{ display: "flow-root", maxWidth: "710px", margin: "0 auto" }}
        >
          {data.map((item) => {
            return (
              <div
                style={{ display: "inline-block", marginLeft: "10px" }}
                key={item.id}
              >
                <PokemonCard
                  name={item.name}
                  image={item.image}
                  experience={item.experience}
                />
              </div>
            );
          })}
        </div>
      )}
      <div>{error}</div>
    </div>
  );
};

export default DataFetching;
