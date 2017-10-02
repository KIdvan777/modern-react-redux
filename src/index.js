import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAa3FTkOO98-JP0Jn-iLYndD9b5QJKLap8';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  )
}


ReactDOM.render(<App />,
  document.querySelector('.container'));
