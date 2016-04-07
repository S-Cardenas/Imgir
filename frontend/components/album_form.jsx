var React = require('react');
var ModalAction = require('../actions/modal_action');
var Link = require('react-router').Link;
var AlbumStore = require('../stores/album_store');
var AlbumUtils = require('../util/album_utils');


var AlbumForm = React.createClass({

	handleModalClick: function () {
		ModalAction.setModal(null);
	},

	stopProp: function (e) {
		e.stopPropagation();
	},

	executeSubmit: function (e) {
		e.preventDefault();
		e = e.currentTarget;
		AlbumUtils.createAlbum(e);
		ModalAction.setModal(null);
	},


	render: function() {
		return (
			<div className='modal' onClick={this.handleModalClick}>
				<form className='album-form' onClick={this.stopProp}  onSubmit={this.executeSubmit}>
					<h2>Create an Album</h2>
					<input
						className= 'image-edit-input'
						type='text'
						name='album[title]'
						placeholder='enter title here'
						onChange={this._onChange}
						>
					</input>
					<textarea
						className= 'image-edit-input'
						name='album[description]'
						placeholder='enter a description'
						>
					</textarea>
					<button className= 'signup album-button'>Create!</button>
				</form>
			</div>
		);
	}

});

module.exports = AlbumForm;
