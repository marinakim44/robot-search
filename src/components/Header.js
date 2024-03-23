import "../containers/App.css";
import { PureComponent } from "react";
import CounterButton from "./CounterButton";

class Header extends PureComponent {
  render() {
    console.log("header component");
    return (
      <div>
        <CounterButton color={"red"} />
        <h1 className="f1">ROBOTBOOK</h1>
      </div>
    );
  }
}

export default Header;
