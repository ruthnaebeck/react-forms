import React from 'react';
import NewPlaylist from '../components/NewPlaylist';
import axios from 'axios';

export default class NewPlaylistContainer extends React.Component{
 constructor(props){
 	super(props);

 	this.state = {
 		inputValue: '',
		handleButton: true,
		warningMessage: '',
		alertClass: ''
 	};
 	this.collectInput = this.collectInput.bind(this);
 	this.handleSubmit = this.handleSubmit.bind(this);
 }

// componentDidMount(){
// 	let state = this.state.inputValue
// 	console.log("PROPS CONTENT", this.props)
// 	axios.post('/api/playlists', {content: "boop"})
// 	  .then(res => res.data)
// 	  .then(result => {
// 	    console.log("HERE ARE THE RESULTS", result) // response json from the server!
// 	  });
// }


collectInput(evt){
    const value = evt.target.value;
    this.setState({ inputValue: value},
			() => {
				let len = this.state.inputValue.length;
				// console.log('len2', len, 'val', this.state.inputValue);
				if(len > 0 && len < 17) this.setState({ handleButton: false, alertClass: '', warningMessage: '' });
				if (len > 16) this.setState({ handleButton: true, alertClass: 'alert alert-warning', warningMessage: 'Please enter a name less than 17 characters' });
				if(len === 0) this.setState({ handleButton: true, alertClass: 'alert alert-warning', warningMessage: 'Please enter a name' });
			}

		);
  }

 createPlaylist(evt){
 	console.log("WHAT WE LOOK FOR", this.state.inputValue)
 	axios.post('/api/playlists', {name: this.state.inputValue})
	  .then(res => res.data)
	  .then(result => {
	    console.log("HERE ARE THE RESULTS", result) // response json from the server!
	  })
}

handleSubmit(e){
	e.preventDefault();
	console.log('WE HAVE UPDATED THE STATE AS', this.state.inputValue);
	this.createPlaylist(e)
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
			warningMessage={this.state.warningMessage}
			alertClass={this.state.alertClass}
			createPlaylist={this.createPlaylist}
			/>
		</div>
		);
}


}
