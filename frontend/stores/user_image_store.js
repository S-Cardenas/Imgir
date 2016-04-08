var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserImageStore = new Store(AppDispatcher);
var UserConstants = require('../constants/user_constants');
var ImageConstants = require('../constants/image_constants');

var _images = [];

var resetImages = function (newImages) {
	_images = newImages;
};

var replaceImage = function (image) {
	var replaced = false;
	_images = _images.map( function(el) {
		if (el.id === image.id) {
			replaced = true;
			return image;
		} else {
			return el;
		}
	});
	if (!replaced) {
		_images.push(image);
	}
};

UserImageStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case UserConstants.IMAGES_RECEIVED:
		resetImages(payload.user.images);
		this.__emitChange();
		break;
		case ImageConstants.IMAGE_RECEIVED:
		replaceImage(payload.image);
		this.__emitChange();
		break;

	}
};

UserImageStore.all = function () {
	return _images.slice(0);
};



module.exports = UserImageStore;
