import React, { Component } from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImagesList from './ImageList';

class App extends Component {

  state = { images: [] };

  async onSubmit(term) {

    const response = await unsplash.get('/search/photos', {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit.bind(this)}/>
        found: {this.state.images.length}
        <ImagesList images={this.state.images}/>
      </div>
    );
  }

};

export default App;
