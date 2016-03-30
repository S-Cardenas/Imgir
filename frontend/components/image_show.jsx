var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');

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
			return (
				<div>
					<div className='image-index-item'>
						<div>Image Id: {image.id}</div>
						<div>Uploader: {uploader}</div>
						<div>Title: {image.title}</div>
						<div>Description: {image.description}</div>
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
