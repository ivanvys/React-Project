import { useState, useEffect, useCallback } from "react";
import Counter from "../../components/counterPresentation";

const FunctionalCounterContainer = () => {
  const [counterState, setCounterState] = useState(0); //   первый агрумент - текущее состояние, второй - функция setState (изменение состояния)

  useEffect(() => {
    console.log("Did Mount"); //ComponentDidMount();
  }, []); // <------ в [] ничего нету

  useEffect(() => {
    console.log("Did Update"); //ComponentDidUpdate(); в хуках он срабатывает всегда!
  }, [counterState]); // <------ есть зависимость

  useEffect(() => {
    console.log("GO"); //будет реагировать на всё и срабатывать
  });

  useEffect(() => {
    return () => {
      console.log("GoodBy"); //ComponentWillUnmount()
    };
  }, []);

  const hundlePlus = useCallback(() => {
    // useCallback позволяет мемоизировать эти функции;
    setCounterState(counterState + 1); //если много полей надо, то обязатьно использовать ...и забирать эти поля
  }, [counterState]); //если будет пустой массив зависимостей, то создастся только 1 раз

  const hundleMinus = useCallback(() => {
    if (counterState > 0) {
      setCounterState(counterState - 1);
    }
  }, [counterState]);

  const hundleReset = () => {
    setCounterState(0);
  };
  return (
    <>
      <Counter
        startValue={counterState}
        plus={hundlePlus}
        minus={hundleMinus}
        reset={hundleReset}
      />
      <button>GO</button>
    </>
  );
};

export default FunctionalCounterContainer;
