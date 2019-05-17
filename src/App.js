import React, { Component } from "react";
import "./App.css";
import ItemCard from "./Components/ItemCard/ItemCard.js";
import SearchForm from "./Components/SearchForm";
class App extends Component {
  state = {
searchResults: undefined,
displayResults: false,
  };

  handleSubmit = (jsonResponse) => {
    this.setState({
      searchResults: jsonResponse,
      displayResults: true,
    });
  };

  render() {
    const { displayResults, searchResults } = this.state;
    const modifiedSearchBar = displayResults ? 'modified-search-panel' : '' ;
    const classesPanelContainer = `search-panel ${modifiedSearchBar}`
    return (
      <div className="App">
        <div className="panel-container">
          <div className={classesPanelContainer}>
            <SearchForm onSubmitSuccess={this.handleSubmit}/>
          </div>         
            {displayResults && (
              <div className="results">
          {searchResults.map((volume) => (
                  <ItemCard 
                  key={volume.id} 
                  volumeInfo={volume.volumeInfo} 
                  />
                ))}
                </div>
                )}
            </div>
      </div>
    );
  }
}

export default App;
