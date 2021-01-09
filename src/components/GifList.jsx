import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  return (
    <div className="gif-list">
      { props.gifs.map(gifId => <Gif id={gifId} key={gifId} change={props.change} />) }
    </div>
  );
};

export default GifList;
