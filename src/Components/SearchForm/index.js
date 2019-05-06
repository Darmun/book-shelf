import React from "react";

export default class extends React.Component {
  state = {
    searchPhrase: "",
    showErrorInfo: false
  };

  handleChange = e => {
    const value = e.target.value;
    this.setState({
      searchPhrase: value
    });
  };

  submitData = e => {
    e.preventDefault();
    if (this.state.showErrorInfo) {
      this.setState({
        showErrorInfo: false
      });
    }
    this.fetchBookData();
  };

  fetchBookData = () => {
    const apiKey = "AIzaSyApxdtD6sWc7fSsKZZiFb6p7b-q14yby3I";
    const url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.searchPhrase
    }&key=${apiKey}`;

    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        this.setState({
          showErrorInfo: true
        });
        return false;
      })
      .then(jsonResponse => {
        if (jsonResponse) {
          this.props.onSubmitSuccess(jsonResponse.items);
        }
      });
  };

  render() {
    return (
      <form className="panel-form">
        <input
          type="text"
          className="text-input is-rounded"
          placeholder="Search phrase.."
          onChange={this.handleChange}
          value={this.state.searchPhrase}
        />
        <button className="btn submit is-rounded" onClick={this.submitData}>
          Search
        </button>
        {this.state.showErrorInfo && (
          <div className="error-info">No results found.</div>
        )}
      </form>
    );
  }
}
