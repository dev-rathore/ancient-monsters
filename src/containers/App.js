import React, { Component } from "react"; // ES6 Syntax for {Component}
import CardList from "../components/card-list";
import SearchBox from "../components/search-box";
import "./App.css";
import swordImg from "./sword.png";
import ErrorBoundry from "../components/error-boundry";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    const { monsters, searchInput } = this.state;
    const updateMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchInput.toLowerCase());
    });

    return !monsters.length ? (
      <h1>Loading...</h1>
    ) : (
      <div className="tc">
        <h1>
          <span className="mr2">Ancient</span>
          <img
            alt="sand-clock"
            src={swordImg}
            width="40"
            className="spin mh2"
          />
          <span className="ml2">Monsters</span>
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <ErrorBoundry>
          <CardList monsters={updateMonsters} />
        </ErrorBoundry>
      </div>
    );
  }
}

export default App;
