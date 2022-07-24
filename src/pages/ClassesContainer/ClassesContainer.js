import React, { PureComponent } from "react";

import Counter from "../../components/counterPresentation";

class CounterContainer extends PureComponent {
  constructor() {
    super();
    this.state = {
      startValue: 0,
      isEven: true,
    };
  }

  componentDidMount() {
    console.log("Did mount?");
  }

  componentDidUpdate(_, prevState) {
    if (prevState.startValue !== this.state.startValue) {
      //обязательно нужно ограничивать!
      this.setState({
        isEven: this.state.startValue % 2 === 0,
      });
    }
  }

  componentWillUnmount() {}

  shouldComponentUpdate() {
    return true;
  }

  hundlePlus = () => {
    this.setState((prevstate) => {
      const plusValue = prevstate.startValue + 1;
      return {
        startValue: plusValue,
      };
    });
  };

  hundleMinus = () => {
    if (this.state.startValue > 0) {
      this.setState((prevstate) => {
        const minusValue = prevstate.startValue - 1;
        return { startValue: minusValue };
      });
    }
  };
  hundleReset = () => {
    this.setState(() => ({
      startValue: 0,
    }));
  };

  render() {
    console.log("rendered");
    return (
      <>
        <Counter
          startValue={this.state.startValue}
          plus={this.hundlePlus}
          minus={this.hundleMinus}
          reset={this.hundleReset}
          isEven={this.state.isEven}
        />
      </>
    );
  }
}
export default CounterContainer;
