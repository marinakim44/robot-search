import { Component } from "react";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Scroll from "./Scroll";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
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

    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">ROBOTBOOK</h1>
          <SearchBar searchChange={this.handleSearch} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
