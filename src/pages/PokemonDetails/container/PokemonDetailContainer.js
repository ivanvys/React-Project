import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pokemonDetails } from "../reducer";
import { useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { deleteError } from "../reducer";

const PokemonDetailContainer = () => {
  const { pokemonName } = useParams();
  const dispatch = useDispatch();
  const { pokemonInfo, isLoading, error } = useSelector(
    (state) => state.pokemonDetail
  );
  const pokeName =
    pokemonInfo.name[0]?.toUpperCase() +
    pokemonInfo.name.slice(1, pokemonInfo.name.length);

  useEffect(() => {
    dispatch(pokemonDetails(pokemonName));
  }, [pokemonName]);

  useEffect(() => {
    return () => {
      dispatch(deleteError());
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <CircularProgress
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      ) : (
        <div>
          {error === "" ? (
            <div>
              <h1>{`Hello I am ${pokeName}`}</h1>
              <h1>My stats:</h1>
              <div>
                {pokemonInfo.stats.map((stat) => {
                  return (
                    <div
                      key={stat.stat.url}
                    >{`${stat.stat.name}: ${stat.base_stat}`}</div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div style={{ color: "red" }}>{error}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default PokemonDetailContainer;
