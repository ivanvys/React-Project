import { useCallback, useState } from "react";
import CalculatorComponent from "../CalculatorComponent";

const CalculatorContainer = () => {
  const [screen, setScreen] = useState(["0"]);
  const [totalValue, setTotalValue] = useState(0);
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
      const newState = state.filter((item) => item !== "0");
      return [...newState, data];
    });
  }, []);

  const result = () => {
    const copyUnitedNumber = [...unitedNumber];

    const copyUnitedNumberReverse = copyUnitedNumber.reverse();

    let onTheLeftOfEquation = "";
    let operator = "";
    let onTheRightOfEquation = "";

    for (let i = 0; i <= unitedNumber.length; i++) {
      if (typeof unitedNumber[i] === "number") {
        onTheLeftOfEquation += unitedNumber[i];
      } else {
        operator = unitedNumber[i];
        break;
      }
    }

    for (let i = 0; i <= copyUnitedNumberReverse.length; i++) {
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
    result()[1] === "+" &&
      setTotalValue(() =>
        screen.length < 3
          ? totalValue + result()[2]
          : (totalValue || result()[0]) + result()[2]
      );

    result()[1] === "-" &&
      setTotalValue(() =>
        screen.length < 3
          ? totalValue - result()[2]
          : (totalValue || result()[0]) - result()[2]
      );

    result()[1] === "*" &&
      setTotalValue(() => (totalValue || result()[0]) * result()[2]);

    result()[1] === "/" &&
      setTotalValue(() => (totalValue || result()[0]) / result()[2]);
  }, [screen]);

  const handleResetScreen = useCallback(() => {
    setScreen(["0"]);
    setTotalValue(0);
    setUnitedNumber([]);
  }, []);

  return (
    <div>
      <CalculatorComponent
        screen={screen}
        totalValue={totalValue}
        buttons={buttons}
        handleSetTotalValue={handleSetTotalValue}
        handleCalculatorValue={handleCalculatorValue}
        handleResetScreen={handleResetScreen}
      />
    </div>
  );
};

export default CalculatorContainer;
