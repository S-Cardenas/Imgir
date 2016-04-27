var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');
var Link = require('react-router').Link;
var ImageResizer = require('./image_resizer');
var SessionStore = require('../stores/session_store');

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
			var showUrl = "/images/" + image.id;
			return(
				<div className='image-index-item' key={image.id}>
					<div className='image-index-title'>{image.title}</div>
					<div className='index-no-overflow'>
						<Link to={showUrl}><ImageResizer image={image.image_url} class1="image-index-item-tall" class2="image-index-item-wide"/> </Link>

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
