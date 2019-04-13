import React, { Component } from "react";
import "./App.css";
import ItemCard from "./Components/ItemCard/ItemCard.js";
class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemCard />
      </div>
    );
  }
}

export default App;
