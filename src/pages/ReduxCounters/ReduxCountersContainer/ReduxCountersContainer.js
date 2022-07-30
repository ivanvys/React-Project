import { useDispatch, useSelector } from "react-redux";
import {
  CREATE_COUNTER,
  PLUS_COUNTER,
  RESET_COUNTERS,
  MINUS_COUNTER,
  RESET_COUNTER,
  REMOVE_COUNTER,
} from "../actions";
import Counter from "../../../components/counterPresentation/index";
import { countersSelectors } from "../Selectors/selectors";
import { totalRevenue } from "../Selectors/selectors";

const ReduxCountersContainer = () => {
  const dispatch = useDispatch();
  const counterOfCounters = useSelector(countersSelectors);
  const handleCounterCreate = () => {
    dispatch(CREATE_COUNTER());
  };
  const handleCounterPlus = (id) => {
    dispatch(PLUS_COUNTER(id));
  };
  const handleCountersReset = () => {
    dispatch(RESET_COUNTERS());
  };
  const handleCountersMinus = (id) => {
    dispatch(MINUS_COUNTER(id));
  };

  const handleResetCounter = (id) => {
    dispatch(RESET_COUNTER(id));
  };
  const handleCounterRemove = (id) => {
    dispatch(REMOVE_COUNTER(id));
  };

  const total = useSelector(totalRevenue);

  return (
    <div>
      <button onClick={handleCounterCreate}>Create</button>
      <button onClick={handleCountersReset}>Reset</button>
      <h2>{total}</h2>

      <div>
        {counterOfCounters.map(({ id, countValue }) => {
          return (
            <Counter
              id={id}
              startValue={countValue}
              key={id}
              plus={handleCounterPlus}
              minus={handleCountersMinus}
              reset={handleResetCounter}
              remove={handleCounterRemove}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ReduxCountersContainer;
