import React, { Component } from 'react';

class Gif extends Component {
  render() {
    return (
      <img src={`https://media.giphy.com/media/${this.props.id}/giphy.gif`} />
      );
  }
}

export default Gif;
