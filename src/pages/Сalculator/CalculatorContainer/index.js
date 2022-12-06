import { useCallback, useState } from "react";
import CalculatorComponent from "../CalculatorComponent";

const CalculatorContainer = () => {
  const [screen, setScreen] = useState(["0"]);
  const [totalValue, setTotalValue] = useState("0");
  const [unitedNumber, setUnitedNumber] = useState([]);
  const [buttons] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "+",
    "-",
    "*",
    "/",
  ]);

  const handleCalculatorValue = useCallback((data) => {
    setUnitedNumber((state) => {
      state.push(data);
      return [...state];
    });

    setScreen((state) => {
      if (
        typeof state[state.length - 1] === "string" &&
        typeof data === "string"
      ) {
        const newArr = state.slice(0, state.length - 1);
        return [...newArr, data];
      } else {
        const stateWithoutZero = state.filter((item) => item !== "0");
        return [...stateWithoutZero, data];
      }
    });
  }, []);

  const fnExpression = () => {
    const copyUnitedNumber = [...unitedNumber];

    const copyUnitedNumberReverse = copyUnitedNumber.reverse();

    let onTheLeftOfEquation = "";
    let operator = "";
    let onTheRightOfEquation = "";

    for (let i = 0; i < unitedNumber.length; i++) {
      if (typeof unitedNumber[i] === "number") {
        onTheLeftOfEquation += unitedNumber[i];
      } else {
        operator = unitedNumber[i];
        break;
      }
    }

    for (let i = 0; i < copyUnitedNumberReverse.length; i++) {
      if (typeof copyUnitedNumberReverse[i] === "number") {
        onTheRightOfEquation += copyUnitedNumberReverse[i];
      } else {
        operator = copyUnitedNumberReverse[i];
        break;
      }
    }

    const uniterEquation = [
      Number(onTheLeftOfEquation),
      operator,
      Number([...onTheRightOfEquation].reverse().join("")),
    ];

    return uniterEquation;
  };

  const handleSetTotalValue = useCallback(() => {
    fnExpression()[1] === "+" &&
      setTotalValue(() =>
        typeof totalValue === "string"
          ? fnExpression()[0] + fnExpression()[2]
          : totalValue + fnExpression()[2]
      );

    fnExpression()[1] === "-" &&
      setTotalValue(() =>
        typeof totalValue === "string"
          ? fnExpression()[0] - fnExpression()[2]
          : totalValue - fnExpression()[2]
      );

    fnExpression()[1] === "*" &&
      setTotalValue(() =>
        typeof totalValue === "string"
          ? fnExpression()[0] * fnExpression()[2]
          : totalValue * fnExpression()[2]
      );

    fnExpression()[1] === "/" &&
      setTotalValue(() =>
        typeof totalValue === "string"
          ? fnExpression()[0] / fnExpression()[2]
          : totalValue / fnExpression()[2]
      );
  }, [screen]);

  const handleResetScreen = useCallback(() => {
    setScreen(["0"]);
    setTotalValue("0");
    setUnitedNumber([]);
  }, []);

  const handleRemoveTheLastCharacter = useCallback(() => {
    if (screen.length > 1) {
      setScreen((state) => state.slice(0, state.length - 1));
      setUnitedNumber((state) => state.slice(0, state.length - 1));
    } else {
      setScreen(["0"]);
    }
  }, [screen]);

  return (
    <>
      <CalculatorComponent
        screen={screen}
        totalValue={totalValue}
        buttons={buttons}
        handleSetTotalValue={handleSetTotalValue}
        handleCalculatorValue={handleCalculatorValue}
        handleResetScreen={handleResetScreen}
        handleRemoveTheLastCharacter={handleRemoveTheLastCharacter}
      />
    </>
  );
};

export default CalculatorContainer;
