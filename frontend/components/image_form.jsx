var React = require('react');
var ImageUtils = require('../util/api_utils');
var ModalAction = require('../actions/modal_action');
var Link = require('react-router').Link;

var ImageForm = React.createClass({

  contextTypes : {
    router: React.PropTypes.object.isRequired
  },

	getInitialState: function() {
		return {
			imageUrl: null
		};
	},

	executeSubmit: function (e) {
		e.preventDefault();
    var router = this.context.router;
		var formData = new FormData();
		formData.append("image[img]", this.state.imageFile);
		ImageUtils.createImage(formData, function (data) {
      router.push("/users/" + data.user_id);
    });
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

	cancelImage: function (e) {
		e.preventDefault();
		this.setState({imageUrl: null});
	},

	render: function() {
		var imageThumb = function () {
			if (this.state.imageUrl) {
				return(
					<div className="preview-and-submit">
						<div className='preview-thumb-container group'>
							<Link className='preview-image-cancel' to='#' onClick={this.cancelImage}>X</Link>
							<img className="preview-image-thumb"
								 src={this.state.imageUrl}></img>
							 <button type='submit'>Begin Upload</button>
						</div>
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
