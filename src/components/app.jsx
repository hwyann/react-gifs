import React, { Component } from 'react';
import giphy from 'giphy-api';
import SearchForm from './SearchForm';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifIdList: [],
      selectedGifId: "xT9IgDEI1iZyb2wqo8"
    };
  }

  search = (query) => {
    giphy('dSQXi3komwfcJt3mca7cXUJcdYOEVbJJ').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifIdList: result.data.map(gif => gif.id)
      });
    });
  }

  changeGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    const { gifIdList, selectedGifId } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchForm search={this.search} />
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifIdList} change={this.changeGif} />
        </div>
      </div>
    );
  }
}

export default App;
