import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';

export default class FilterableArtistsContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputValue: ''
    };
    this.collectInput = this.collectInput.bind(this);
  }

  collectInput(evt){
    const value = evt.target.value;
  
    this.setState({ inputValue: value});
  }

  render(){
    const inputValue = this.state.inputValue;
    const filterArtists = this.props.artists.filter(artist => artist.name.match(inputValue));
    return(
      <div>
        <FilterInput collectInput={this.collectInput} />
        <Artists artists={filterArtists} />
      </div>
    );
  }

}
