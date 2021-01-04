import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SelectedGif from './SelectedGif';
import GifList from './GifList';
import { GiphyFetch } from '@giphy/js-fetch-api';

const giphy = require('giphy-api')('dSQXi3komwfcJt3mca7cXUJcdYOEVbJJ');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGif: "QCJqrutxd2cDs2ii6X",
      gifIdList: ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]
    };
    this.fetchGiphy("star wars");
  }

  fetchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({ gifIdList: res.data.map(gif => gif.id) });
    });
  }

  changeSelectGif = (newSelectedGifId) => {
    this.setState({ selectedGif: newSelectedGifId });
  }

  render() {
    const { selectedGif, gifIdList } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchForm fetchGiphy={this.fetchGiphy} />
          <div className="selected-gif">
            <SelectedGif gifId={selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifIdList={gifIdList} changeSelectGif={this.changeSelectGif} />
        </div>
      </div>
    );
  }
}

export default App;
