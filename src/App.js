import React, { Component } from "react";
import "./App.css";
import ItemCard from "./Components/ItemCard/ItemCard.js";
import SearchForm from "./Components/SearchForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="panel-container">
          <div className="searchPanel">
            <SearchForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
