var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');
var ImageEditForm = require('./image_edit_form');

var ImageShow = React.createClass({
	getInitialState: function() {
		return { image: ImageStore.find(this.props.params.id)};
	},

	componentDidMount: function() {
		ImageUtils.fetchOneImage(this.props.params.id);
		this.ImageStoreToken = ImageStore.addListener(this._onChange);
	},

	componentWillUnmount: function() {
		this.ImageStoreToken.remove();
	},

	_onChange: function () {
		this.setState({ image: ImageStore.find(this.props.params.id)});
	},

	render: function() {
		var image = this.state.image;
		if (image) {
			var uploader = (image.user ? image.user.username : "");
			var EditTitleUrl = "#/images/" + image.id + "/edit";
			return (
				<div>
					{this.props.children}
					<div className='image-show'>
						<div>Image Id: {image.id}</div>
						<div>Uploader: {uploader}</div>
						<div className='image-details-bar group'>
							<div className='image-details'>
								<div>Title: {image.title}</div>
								<div>Description: {image.description}</div>
							</div>

							<a href={EditTitleUrl}>Edit Title/Description</a>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div />
			);
		}
	}

});

module.exports = ImageShow;