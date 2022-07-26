import Counter from "../../components/counterPresentation";
import useCounter from "../../customHooks/useCounter";

const FunctionalCounterContainer = () => {
  const { count, hundlePlus, hundleMinus, hundleReset } = useCounter(0);
  return (
    <Counter
      startValue={count}
      plus={hundlePlus}
      minus={hundleMinus}
      reset={hundleReset}
    />
  );
};

export default FunctionalCounterContainer;
