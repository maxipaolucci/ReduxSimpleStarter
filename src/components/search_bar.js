import React, {Component} from 'react'; //this is the same to do const Component = React.Component (we are extracting component from React into a variable called Component).
                                  //Then in our class we can replace React.Component by just Compunent

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term : '' }; //only here we can set state value like this, in other places we must use this.setState(...)
                              //every time we change the state the component call render()
  }

  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}  //we grab the value from the state.term (updated in the onChange event)
          onChange={event => this.onInputChange(event.target.value)} //we change the state and we rerender the component
        />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;