import React, { PureComponent } from "react";

import Counter from "../components/counter/index";

class CounterContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      startValue: 0,
      isEven: "This number is even!",
    };
  }

  hundlePlus = () => {
    this.setState((prevstate) => {
      if (this.state.startValue % 2 === 0) {
        return {
          startValue: prevstate.startValue + 1,
          isEven: "This number is odd!",
        };
      } else {
        return {
          startValue: prevstate.startValue + 1,
          isEven: "This number is even!",
        };
      }
    });
  };

  hundleMinus = () => {
    this.setState((prevstate) => {
      if (this.state.startValue <= 0) {
        return { isEven: "Forbidden!!!" };
      } else if (this.state.startValue % 2 === 0) {
        return {
          startValue: prevstate.startValue - 1,
          isEven: "This number is odd!",
        };
      } else {
        return {
          startValue: prevstate.startValue - 1,
          isEven: "This number is even!",
        };
      }
    });
  };

  hundleReset = () => {
    this.setState(() => ({
      startValue: 0,
      isEven: "This number is even!",
    }));
  };

  render() {
    return (
      <Counter
        startValue={this.state.startValue}
        plus={this.hundlePlus}
        minus={this.hundleMinus}
        reset={this.hundleReset}
        isEven={this.state.isEven}
      />
    );
  }
}
export default CounterContainer;
