import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: 'Startnig value'
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={ event => this.setState({
          term: event.target.value
        })}/>
        V:{this.state.term}
      </div>
    )
  }

}


export default SearchBar;
