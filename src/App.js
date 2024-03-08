import { Component } from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import { robots } from "./robots";

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
    const filteredRobots = this.state.robots.filter((r) => {
      return r.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    this.setState({ robots: filteredRobots });
  };

  render() {
    return (
      <div className="tc">
        <h1>Robot Search</h1>
        <SearchBar searchChange={this.handleSearch} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
