var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ImageStore = new Store(AppDispatcher);
var ImageConstants = require('../constants/image_constants');

var _images = [];

var resetImages = function (newImages) {
	_images = newImages;
};

ImageStore.__onDispatch =  function (payload) {
	switch(payload.actionType) {
		case ImageConstants.IMAGES_FETCHED:
			_images = payload.images;
			this.__emitChange();
			break;

		case ImageConstants.IMAGE_ACKNOWLEDGED:
			_images.push(payload.image);
			this.__emitChange();
			break;
	}
};

ImageStore.all = function () {
	return _images.slice(0);
};


module.exports = ImageStore;
