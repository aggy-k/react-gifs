import React, { Component } from 'react';

class SearchBar extends Component {
  handleChange = (e) => {
    console.log(e.target.value);
    this.props.searchFunction(e.target.value);
  }

  render() {
    return (
      <input type="text" placeholder="Search for Pika.." className="search" onChange={this.handleChange}/>
      );
  }
}

export default SearchBar;
