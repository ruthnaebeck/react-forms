import React from 'react';
import NewPlaylist from '../components/NewPlaylist';

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
			warningMessage={this.state.warningMessage}
			alertClass={this.state.alertClass}
			/>
		</div>
		);
}


}
