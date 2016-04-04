var React = require('react');
var ImageUtils = require('../util/api_utils');
var ModalAction = require('../actions/modal_action');

var ImageForm = React.createClass({

	getInitialState: function() {
		return {
			imageUrl: null
		};
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	executeSubmit: function (e) {
		e.preventDefault();
		var formData = new FormData();
		formData.append("image[img]", this.state.imageFile);
		ImageUtils.createImage(formData);
		ModalAction.setModal(null);
	},

	handleFileChange: function (e) {
		var reader = new FileReader();
		var file = e.currentTarget.files[0];
		reader.onloadend = function () {
			this.setState({ imageUrl: reader.result, imageFile: file});
		}.bind(this);

		if (file) {
			reader.readAsDataURL(file);
		} else {
			this.setState({ imageUrl: null, imageFile: null});
		}
	},

	handleModalClick: function () {
		ModalAction.setModal(null);
	},

	stopProp: function (e) {
		e.stopPropagation();
	},

	render: function() {
		var imageThumb = function () {
			if (this.state.imageUrl) {
				return(
					<div className="preview-and-submit">
						<button type='submit'>Begin Upload</button>
						Preview:
						<img className="preview-image-thumb" src={this.state.imageUrl}></img>
					</div>
				);
			} else {
				return(
					<div />
				);
			}
		};
		return (
			<div className='modal' onClick={this.handleModalClick}>
				<form className='image-upload-form' onClick={this.stopProp}  onSubmit={this.executeSubmit}>
					<h2>Upload images</h2>
					<label className="image-upload-button"> Upload from your Computer
						<input className='actual-upload' type='file' onChange={this.handleFileChange}></input>
					</label>
					{imageThumb.call(this)}
				</form>
			</div>

		);
	}

});

module.exports = ImageForm;
