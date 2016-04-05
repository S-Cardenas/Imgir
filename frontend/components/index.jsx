var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');
var Link = require('react-router').Link;
var ImageIndexItem = require('./image_index_item');

var React = require('react');

var ImageIndex = React.createClass({
	getInitialState: function() {
		return { images: ImageStore.all()};
	},

	componentDidMount: function() {
		ImageUtils.fetchImages();
		this.ImageStoreToken = ImageStore.addListener(this._onChange);
	},

	componentWillUnmount: function() {
		this.ImageStoreToken.remove();
	},

	_onChange: function () {
		this.setState({ images: ImageStore.all()});
	},

	render: function() {
		var images = this.state.images.map( function (image) {
			var uploader = (image.user ? image.user.username : "");
			var showUrl = "/images/" + image.id;
			return(
				<div className='image-index-item' key={image.id}>
					<div className='image-index-title'>{image.title}</div>
					<div className='index-no-overflow'>
						<Link to={showUrl}>< ImageIndexItem image={image.image_url} /> </Link>

					</div>
				</div>
			);
		});
		return (
			<div className='image-index group'>
				{images}
			</div>
		);
	}

});

module.exports = ImageIndex;
