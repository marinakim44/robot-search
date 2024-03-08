import { Component } from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import { robots } from "./robots";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchField: "",
    };
  }

  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((r) => {
      return r.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">ROBOTBOOK</h1>
        <SearchBar searchChange={this.handleSearch} />
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
