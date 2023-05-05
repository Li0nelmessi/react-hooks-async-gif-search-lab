import React, { Component } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

class GifListContainer extends Component {
  constructor() {
    super();

    this.state = {
      gifs: []
    };
  }

  componentDidMount() {
    this.fetchGifs();
  }

  fetchGifs = (query = 'dolphin') => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=eqAXwa8mlQOLxD8cD6DjRDBQ3PfBSFwz&rating=g`)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({
          gifs: data.slice(0, 3)
        });
      });
  }

  handleSearch = (query) => {
    this.fetchGifs(query);
  }

  render() {
    return (
      <div>
        <GifSearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
