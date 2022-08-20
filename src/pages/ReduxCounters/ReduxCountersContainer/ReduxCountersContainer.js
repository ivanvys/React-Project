import { useDispatch, useSelector } from "react-redux";
// import {
//   CREATE_COUNTER,
//   PLUS_COUNTER,
//   RESET_COUNTERS,
//   MINUS_COUNTER,
//   RESET_COUNTER,
//   REMOVE_COUNTER,
// } from "../actions";
import Counter from "../../../components/counterPresentation/index";
import { countersSelectors } from "../Selectors/selectors";
import {
  createCounter,
  resetCounter,
  counterPlus,
  counterMinus,
  counterReset,
  removeCounter,
} from "../reducers";

const ReduxCountersContainer = () => {
  const dispatch = useDispatch();

  const counterOfCounters = useSelector(countersSelectors);

  const handleCounterCreate = () => {
    dispatch(createCounter());
  };
  const handleCounterPlus = (id) => {
    dispatch(counterPlus(id));
  };
  const handleCountersReset = () => {
    dispatch(resetCounter());
  };
  const handleCountersMinus = (id) => {
    dispatch(counterMinus(id));
  };
  const handleResetCounter = (id) => {
    dispatch(counterReset(id));
  };
  const handleCounterRemove = (id) => {
    dispatch(removeCounter(id));
  };

  return (
    <div>
      <button onClick={handleCounterCreate}>Create</button>
      <button onClick={handleCountersReset}>Reset</button>
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
