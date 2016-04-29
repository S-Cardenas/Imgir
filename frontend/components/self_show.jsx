var React = require('react');
var UserImageStore = require('../stores/user_image_store');
var UserCommentStore = require('../stores/user_comment_store');
var ImageShow = require('./image_show');
var ImageIndexItem = require('./image_index_item');
var ModalAction = require('../actions/modal_action');
var UserUtil = require('../util/user_utils');
var Link = require('react-router').Link;
var AlbumForm = require('./album_form');
var SessionStore = require('../stores/session_store');
var SessionUtil = require('../util/session_utils');


var SelfShow = React.createClass({
	getInitialState: function() {
    return {
			images: UserImageStore.all(),
		};
	},

	componentDidMount: function() {
		UserUtil.fetchImages(this.props.id);
		this.userImagesToken = UserImageStore.addListener(this._onChange);
	},

  componentWillReceiveProps: function(nextProps) {
    UserUtil.fetchImages(nextProps.id);
  },

	componentWillUnmount: function() {
		this.userImagesToken.remove();
	},

	_onChange: function () {
		this.setState({images: UserImageStore.all()});
	},

	executeOpen: function (image, e) {
			e.preventDefault();
			var preppedModal = function (image) {
				return(
					<div className='modal' onClick={this.handleModalClick}>
						<div onClick={this.stopProp}>
						< ImageShow imageid={image.id} editable={true}/>
						</div>
					</div>
				);
			};
			ModalAction.setModal(preppedModal.call(this, image));
	},

	handleModalClick: function () {
		ModalAction.setModal(null);
	},

	stopProp: function (e) {
		e.stopPropagation();
	},

	executeAlbumCreate: function (e) {
		e.preventDefault();
		var preppedModal = function () {
			return(
				<div className='modal' onClick={this.handleModalClick}>
					<div onClick={this.stopProp}>
					< AlbumForm />
					</div>
				</div>
			);
		};
		ModalAction.setModal(preppedModal());
	},


	render: function() {
		var images = this.state.images.map( function (image) {
			var showUrl = "/images/" + image.id;
			return(
				<div className='image-index-item' key={image.id}>
					<div className='image-index-title'>{image.title}</div>
					<div className='index-no-overflow'>
						<a onClick={this.executeOpen.bind(this, image)} href='#'>< ImageIndexItem image={image.image_url} /></a>

					</div>
				</div>
			);
		}.bind(this));
		if (images.length === 0) {
			images = (
					<div className="no-images-show">
						No Images
					</div>
				);
		}
    return (
			<div className='user-images-display group'>
				<div className='image-index user-index group'>
				{images}
				</div>
				<div className='user-index-sidebar'>
					<button className='create-album-button image-show-privacy'
						onClick={this.executeAlbumCreate}>Create album</button>
				</div>
			</div>
	  );

	}

});

module.exports = SelfShow;
