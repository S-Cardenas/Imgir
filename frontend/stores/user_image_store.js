var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserImageStore = new Store(AppDispatcher);
var UserConstants = require('../constants/user_constants');

var _images = [];

var resetImages = function (newImages) {
	_images = newImages;
};

UserImageStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case UserConstants.IMAGES_RECEIVED:
		resetImages(payload.user.images);
		this.__emitChange();
		break;
	}
};

UserImageStore.all = function () {
	return _images.slice(0);
};



module.exports = UserImageStore;
