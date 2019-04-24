import React, { Component } from "react";
import "./App.css";
import ItemCard from "./Components/ItemCard/ItemCard.js";
import SearchForm from "./Components/SearchForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchForm />
       
      </div>
    );
  }
}

export default App;
