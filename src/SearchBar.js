import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {
  static propTypes = {
    onSearch: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {name: ''};
  }

  handleInputChange(name) {
    this.setState({name: name});
    this.props.onSearch(name);
  }

  render() {
    return (
      <div className="App-search-bar">
        <input
          value={this.state.name}
          onChange={event => this.handleInputChange(event.target.value)}
          placeholder="search"
        />
      </div>
    );
  }
}

export default SearchBar;
