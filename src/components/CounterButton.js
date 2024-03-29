import { PureComponent } from "react";

export default class CounterButton extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState((state) => {
      return { count: this.state.count + 1 };
    });
  };

  render() {
    console.log("CounterButton");
    return (
      <button id="counter" color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    );
  }
}
