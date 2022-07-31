import { useSelector } from "react-redux";
import { countersSelectors } from "../ReduxCounters/Selectors/selectors";

const Home = () => {
  const some = useSelector(countersSelectors);

  return (
    <div>
      <h1>Home</h1>
      <h2>Number of counters: {some.length}</h2>
      <h2>
        Total counters value:
        {some.reduce((acc, item) => {
          acc += item.countValue;
          return acc;
        }, 0)}
      </h2>
    </div>
  );
};

export default Home;
