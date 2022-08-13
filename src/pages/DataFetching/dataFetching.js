import { useFetching } from "../../customHooks/useFetching";
import Spinner from "../../components/Spinner";
import { getPoke } from "./api/api";
import PokemonCard from "../../components/PokemonCard/PokemonCard";
const DataFetching = () => {
  const { data, load, error, hundleDataLoad, handleReset } = useFetching(
    getPoke,
    [],
    false
  );

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
