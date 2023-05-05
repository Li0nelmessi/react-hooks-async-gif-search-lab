import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state.query);
  }

  handleChange = event => {
    this.setState({
      query: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{marginLeft:'1000px'}}>
          <label>Enter a Search Name</label>
          <input type="text" value={this.state.query} onChange={this.handleChange} /><br></br>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
