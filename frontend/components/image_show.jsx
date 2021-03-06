var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');
var ImageEditForm = require('./image_edit_form');
var SessionStore = require('../stores/session_store');
var ImageShowItem = require('./image_show_item');
var Comments = require('./comments');
var ModalAction = require('../actions/modal_action');


var Link = require('react-router').Link;

var ImageShow = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},


	getInitialState: function() {
		var imageId = this.props.imageid || this.props.params.id;
		return { image: ImageStore.find(imageId)};
	},

	componentDidMount: function() {
		var imageId = this.props.imageid || this.props.params.id;
    this.ImageStoreToken = ImageStore.addListener(this._onChange);
		ImageUtils.fetchOneImage(imageId);
	},

  componentWillReceiveProps: function(nextProps) {
    ImageUtils.fetchOneImage(nextProps.params.id);
  },

	componentWillUnmount: function() {
		this.ImageStoreToken.remove();
	},

	_onChange: function () {
		var imageId = this.props.imageid || this.props.params.id;
		this.setState({ image: ImageStore.find(imageId)});
	},

	executeDelete: function (image, e) {
		e.preventDefault();
		ImageUtils.deleteImage(image.id);
		this.context.router.push("/images");
		ModalAction.setModal(null);
	},

	makePublic: function (image,e) {
		e.preventDefault();
		ImageUtils.updatePrivacy(e, image.id);
		this.context.router.push("/images");
		ModalAction.setModal(null);
	},

	stopProp: function (e) {
		e.stopPropagation();
	},

	executeEditOpen: function (image, e) {
			e.preventDefault();
			var preppedModal = function (image) {
				return(
					<div className='modal' onClick={this.handleModalClick}>
						<div onClick={this.stopProp}>
						< ImageEditForm image={image}/>
						</div>
					</div>
				);
			};
			ModalAction.setModal(preppedModal.call(this, image));
	},

	handleModalClick: function () {
		ModalAction.setModal(null);
	},

	render: function() {
		var image = this.state.image;
		var currentUser = SessionStore.currentUser();
		if (image) {
			if (this.props.editable) {
				if (image.user.id === (currentUser && currentUser.id)) {
					var EditTitleUrl = "/images/" + image.id + "/edit";
					var privacy = (image.private ?  <Link className='image-show-privacy' to="#" onClick={this.makePublic.bind(this,image)}>Share with the community</Link> : <div /> );
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
										<Link to={EditTitleUrl} onClick={this.executeEditOpen.bind(this, image)}>Edit Title/Description</Link>
									</div>
								</div>
								<div className='image-show-user-sidebar group'>
									{privacy}
									<Link className="delete-image-button" to="butts, california" onClick={this.executeDelete.bind(this,image)}>Delete this Image</Link>
								</div>

								</div>
							</div>
						</div>
					);
				}
			} else {
				var uploader = (image.user ? image.user.username : "");
				var uploaderShow = (image.user ? ("/users/" + image.user.id) : "");
				return (
					<div className='image-show-content'>
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
						<div className='comments-section image-show'>
							<Comments params={this.props.params} parentType={"image"} />
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
