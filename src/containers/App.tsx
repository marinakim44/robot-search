import { useState, useEffect, ChangeEvent, memo } from "react";
import SearchBar from "../components/SearchBar";
import CardList from "../components/CardList";
import Scroll from "../components/Scroll";
import "./App.css";
import Typescript from "./Typescript";
import { getData } from "../utils/data.utils";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [robots, setRobots] = useState<Monster[]>([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setRobots(users);
    };

    fetchUsers();
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchField(e.target.value);
  };

  const filteredRobots = robots.filter((r) => {
    return r.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="tc">
      <Header />
      <Typescript />
      <SearchBar searchChange={handleSearch} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
