import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Videolist from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyAa3FTkOO98-JP0Jn-iLYndD9b5QJKLap8';

class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch ({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoDetail video={this.state.videos[0]}/>
        <Videolist videos={this.state.videos} />
      </div>
    )
  }
}


ReactDOM.render(<App />,
  document.querySelector('.container'));
