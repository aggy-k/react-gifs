import React, { Component } from 'react';
import Gif from './gif.jsx';
import SearchBar from './search_bar.jsx';
import GifList from './gif_list.jsx';

import giphy from 'giphy-api';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "NS7gPxeumewkWDOIxi",
      gifs: []
    }
  }

  selectGif = (gif) => {
    this.setState({
      selectedGif: gif
    });
  }

  search = (query) => {
    giphy('NmR2Fvc7tsj4tftBqDJKF5QGipoaJgiu').search({
      q: query,
      rating: 'g',
      limit: 6
      }, (err, res) => {
        const gif = res.data[0];
        this.setState({
          gifs: res.data,
          selectedGif: gif.id
        });
    });
  }


  render() {
    const gifListProps = {
      gifs: this.state.gifs,
      selectGif: this.selectGif
    }
    return (
      <div className="row">
        <div className="left-scene">
          <div>
            <SearchBar searchFunction={this.search}/>
          </div>
          <div className="gif">
            <Gif id={this.state.selectedGif}/>
          </div>
        </div>
        <div className="right-scene">
          <GifList {...gifListProps}/>
        </div>
      </div>
      );
  }
}

export default App;
