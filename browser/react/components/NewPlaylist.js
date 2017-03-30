import React from 'react';

const NewPlaylist = function (props) {
	const handleSubmit = props.handleSubmit;
	// let handleButton = disabled;
	return (
		<div className="well">
		  <form className="form-horizontal" onSubmit={handleSubmit}>
		    <fieldset>
		      <legend>New Playlist</legend>
		      <div className="form-group">
		        <label className="col-xs-2 control-label">Name</label>
		        <div className="col-xs-10">
		          <input
									className="form-control"
									type="text"
									onChange={props.collectInput}
									value={props.inputValue}
									/>
		        </div>
		      </div>
		      <div className="form-group">
		        <div className="col-xs-10 col-xs-offset-2">
		          <button
							type="submit"
							className="btn btn-success"
							disabled={props.handleButton}
							>Create Playlist</button>
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>
)}


export default NewPlaylist;
