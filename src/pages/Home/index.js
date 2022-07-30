import { countersSelectors } from "../ReduxCounters/Selectors/selectors";
import { useSelector } from "react-redux/es/exports";

const Home = () => {
  const counterOfCounters = useSelector(countersSelectors);
  return (
    <div>
      <h1>Home</h1>
      <h2>Counters Value:{counterOfCounters.length} </h2>
    </div>
  );
};

export default Home;
