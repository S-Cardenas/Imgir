var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');
var ImageEditForm = require('./image_edit_form');
var SessionStore = require('../stores/session_store');
var ImageShowItem = require('./image_show_item');


var Link = require('react-router').Link;

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
			if (image.user.id === SessionStore.currentUser().id) {
				var EditTitleUrl = "/images/" + image.id + "/edit";
				var privacy = (image.private ?  <Link className='image-show-privacy' to="#">Share with the community</Link> : <div /> );
				return (
					<div>
						{this.props.children}
						<div className='image-show-user'>
							<div className='image-show-user-content group'>

								<div className='image-show-image-container'>
									<div className='image-show-image-user'>
										< ImageShowItem image={image.image_url} />
									</div>
									<div className='image-details-bar group'>
										<ul className='image-details'>
											<li className='image-details-user-title'>
												{image.title}
											</li>
											<li className='image-details-user-description'>
												{image.description}
											</li>
										</ul>
									<Link to={EditTitleUrl}>Edit Title/Description</Link>
								</div>
							</div>
							<div className='image-show-user-sidebar'>
								{privacy}
								<Link className="delete-image-button" to="butts, california" onClick={this.executeDelete}>Delete this Image</Link>
							</div>

							</div>
						</div>
					</div>
				);
			} else {
				var uploader = (image.user ? image.user.username : "");
				var uploaderShow = (image.user ? ("users/" + image.user.id) : "");
				return (
					<div>
						{this.props.children}
						<div className='image-show'>
							<div className='image-show-header'>
								<div className='image-details-title'>
									{image.title}
								</div>
								<div className='image-details-uploader'>
								 	by <Link to={uploaderShow}>{uploader}</Link>
							 	</div>
							</div>
							<div className='image-show-image'>
								< ImageShowItem image={image.image_url} />
							</div>
							<div className='image-details-description'>
								{image.description}
							</div>
						</div>
					</div>
				);
			}
		} else {
			return (
				<div />
			);
		}
	}

});

module.exports = ImageShow;
