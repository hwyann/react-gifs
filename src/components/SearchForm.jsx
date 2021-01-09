import React, { Component } from 'react';

class SearchForm extends Component {
  handleUpdate = (event) => {
    const { search } = this.props;
    search(event.currentTarget.value);
  }

  render() {
    return (
      <input
        className="form-search form-control"
        type="text"
        placeholder="Search for a gif"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchForm;
