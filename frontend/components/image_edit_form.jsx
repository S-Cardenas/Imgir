var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');
var ModalAction = require('../actions/modal_action');
var UserUtil = require('../util/user_utils');


var imageEditForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		var image = this.props.image;
		var imageTitle = (image.title ? image.title : "");
		var imageDescription = (image.description ? image.description : "");
		return {
			title: imageTitle,
			description: imageDescription
		};
	},

	pushURL: function () {
		return ('/users/' + this.props.image.user.id);
	},

	executeSubmit: function (e) {
		e.preventDefault();
		e = e.currentTarget;
		ImageUtils.editImage(e, this.props.image.id);
    UserUtil.fetchImages(this.props.image.user_id, function () {
      ModalAction.setModal(null);
    });
	},

	_onChange: function (e) {
		e = e.currentTarget;
		if (e.name === "image[title]") {
			this.setState({title: e.value});
		} else if (e.name === "image[description]") {
			this.setSTate({description: e.value});
		}
	},



	render: function() {
		return (
				<div className= 'image-edit'>
					<div className= 'image-edit-header group'>
						<h3>Add a title or description</h3>
					</div>
					<form className= 'image-edit-form' onSubmit={this.executeSubmit}>
							<input
								className= 'image-edit-input'
								type='text'
								name='image[title]'
								placeholder='enter title here'
								defaultValue={this.state.title}
								onChange={this._onChange}
								>
							</input>
							<textarea
								className= 'image-edit-input'
								name='image[description]'
								placeholder='enter a description'
								defaultValue={this.state.description}
								>
							</textarea>

						<input
							className="image-edit-submit"
							type='submit'
							value='Save'>

						</input>

					</form>

				</div>
		);
	}

});

module.exports = imageEditForm;
