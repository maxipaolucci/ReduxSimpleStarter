import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBcXlxxcUX81YHS0V0e16A0EuYp5LLvDNk';


//Create a new component. This component should produce some HTML
class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos : [],
      selectedVideo : null 
    };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key : API_KEY, term}, (videos) => {
      this.setState({ 
        videos,
        selectedVideo : videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} 
        />
      </div>
    );
  }
}

//Take thsi component's generated HTML and put it on the page (in the DOM)
// App is a class but <App /> or <App></App> is an instance of the App class thanks to JSX
ReactDOM.render(<App />, document.querySelector('.container'));