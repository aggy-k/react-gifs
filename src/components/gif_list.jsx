import React, { Component } from 'react';
import Gif from './gif.jsx';

class GifList extends Component {
  handleClick = (e) => {
    console.log(e.currentTarget.dataset.id);
    this.props.selectGif(e.currentTarget.dataset.id)
  }

  renderList = () => {
    return this.props.gifs.map(gif => {
      return <img src={`https://media.giphy.com/media/${gif.id}/giphy.gif`} key={gif.id} className="gif-image" onClick={this.handleClick} data-id={gif.id}/>
    });
    // console.log(this.props.gifs)
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
      );
  }
}

export default GifList;
