import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

export default class NewPlaylistContainer extends React.Component{
 constructor(props){
 	super(props);

 	this.state = {
 		inputValue: '',
		handleButton: true
 	};
 	this.collectInput = this.collectInput.bind(this);
 	this.handleSubmit = this.handleSubmit.bind(this);
 }

collectInput(evt){
    const value = evt.target.value;
		let len = this.state.inputValue.length;
    this.setState({ inputValue: value});
		if(len) this.setState({ handleButton: false });
		if(len > 16) this.setState({ handleButton: true });
  }

handleSubmit(e){
	e.preventDefault();
	console.log('WE HAVE UPDATED THE STATE AS', this.state.inputValue);
	this.setState({ inputValue: '', handleButton: true });
}

render(){
	return(
		<div>
			<NewPlaylist
			collectInput={this.collectInput}
			handleSubmit={this.handleSubmit}
			inputValue={this.state.inputValue}
			handleButton={this.state.handleButton}
			/>
		</div>
		);
}


}
