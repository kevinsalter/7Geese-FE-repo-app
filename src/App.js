import React, { Component } from 'react';
import SearchBar from './SearchBar.js';
import RepoList from './RepoList.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {repos: [], originalList: []};

    fetch('https://api.github.com/orgs/7geese/repos').then(response => {
      return response.json().then(json => {
        this.setState({repos: json, originalList: json});
        return json;
      });
    });
  }

  search(name) {
    const fillteredList = this.state.originalList.filter(repo => {
      return repo.name.toLowerCase().includes(name.toLowerCase());
    });
    this.setState({repos: fillteredList});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>7Geese Github Repos</h2>
        </div>
        <SearchBar onSearch={name => this.search(name)} />
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default App;
