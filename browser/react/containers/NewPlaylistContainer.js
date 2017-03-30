import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component{
 constructor(props){
 	super(props);

 	this.state = {
 		inputValue:""
 	};
 	this.collectInput = this.collectInput.bind(this);
 	this.handleSubmit = this.handleSubmit.bind(this);
 }

collectInput(evt){
    const value = evt.target.value;
    // console.log('value', value);
    // console.log('evt', evt);
    this.setState({ inputValue: value});
  }

handleSubmit(e){
	e.preventDefault();
	//const value = e.target.value;
	//this.setState({ inputValue: value});
	console.log("WE HAVE UPDATED THE STATE AS", this.state.inputValue);
}

render(){
	return(
		<div>
			<NewPlaylist collectInput={this.collectInput} handleSubmit={this.handleSubmit}/>
		</div>
		)
}





}