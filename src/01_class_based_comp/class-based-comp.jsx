import React from "react";

class ClassBasedComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  increment = () => {
    this.setState((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  };

  render() {
    return (
      <div>
        <div>Counter: {this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default ClassBasedComp;
