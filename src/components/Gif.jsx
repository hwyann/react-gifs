import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    const { id, change } = this.props;
    change(id);
  }

  render() {
    const { id } = this.props;
    const url = `https://media.giphy.com/media/${id}/giphy.gif`;
    return (
        <img
          src={url}
          alt=""
          className="gif"
          onClick={this.handleClick}
        />
    );
  }
}

export default Gif;
