var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ImageStore = new Store(AppDispatcher);
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

ImageStore.__onDispatch =  function (payload) {
	switch(payload.actionType) {
		case ImageConstants.IMAGES_FETCHED:
			resetImages(payload.images);
			this.__emitChange();
			break;

		case ImageConstants.IMAGE_RECEIVED:
			replaceImage(payload.image);
			this.__emitChange();
			break;


	}
};

ImageStore.all = function () {
	return _images.slice(0);
};

ImageStore.find = function (id) {
	return _images.find( function (el) {
		return (el.id === parseInt(id));
	});
};


module.exports = ImageStore;
