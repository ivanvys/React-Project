import Counter from "../../components/counterPresentation";
import useCounter from "../../customHooks/useCounter";

const FunctionalCounterContainer = ({ onDelete, sayhello }) => {
  const { count, hundlePlus, hundleMinus, hundleReset } = useCounter(0);
  return (
    <Counter
      startValue={count}
      sayhello={sayhello}
      plus={hundlePlus}
      minus={hundleMinus}
      reset={hundleReset}
      remove={onDelete}
    />
  );
};

export default FunctionalCounterContainer;
