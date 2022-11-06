import { useFetching } from "../../customHooks/useFetching";
import Spinner from "../../components/Spinner";
import { getPoke } from "./api/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
import { useDispatch } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { loadPokemons } from "./reducers";
import { useSelector } from "react-redux";
import { FetchingSelector } from "./selector";
import { deletePokemon, resetPokemons } from "./reducers";
import { useNavigate } from "react-router-dom";
import ROUTE_NAMES from "../../router/routeNames";

const DataFetching = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { data, load, error, hundleDataLoad, handleReset } = useFetching(
  //   getPoke,
  //   [],
  //   false
  // );

  const { pokemonsы, isLoading, error } = useSelector(FetchingSelector);

  useEffect(() => {
    dispatch(loadPokemons());
  }, []);

  // const hundleDataLoad = useCallback(() => {
  //   dispatch(loadPokemons());
  // }, []);

  const handleDeletePokemon = useCallback((id) => {
    dispatch(deletePokemon(id));
  }, []);

  const handleReset = useCallback(() => {
    dispatch(resetPokemons());
  }, []);

  const handlePokemonsDetail = (pokemonName) => {
    navigate(`${ROUTE_NAMES.pokemons_REDUX_THUNK}/${pokemonName}`);
  };

  return (
    <div>
      <h2>Data Fetching</h2>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        {/* <button onClick={hundleDataLoad}>Load</button> */}
        <button onClick={handleReset}>Reset</button>
      </div>

      {isLoading ? (
        <div style={{ position: "absolute", top: "50%", left: "50%" }}>
          <Spinner />
        </div>
      ) : (
        <div
          style={{ display: "flow-root", maxWidth: "710px", margin: "0 auto" }}
        >
          <h1 style={{ position: "absolute", top: "50%", left: "50%" }}>
            {error}
          </h1>
          {pokemonsы?.map((item) => {
            return (
              <div
                style={{ display: "inline-block", marginLeft: "10px" }}
                key={item.id}
              >
                <PokemonCard
                  name={item.name}
                  image={item.image}
                  experience={item.experience}
                  handleDeletePokemon={handleDeletePokemon}
                  id={item.id}
                  handlePokemonsDetail={handlePokemonsDetail}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DataFetching;
