var AppDispatcher = require('../dispatcher/dispatcher');
var ImageConstants = require('../constants/image_constants');

var ImageActions = {
	getImages: function (images) {
		var fetch = {
			actionType: ImageConstants.IMAGES_FETCHED,
			images: images
		};
		AppDispatcher.dispatch(fetch);
	},

	workWithImage: function (image) {
		var newImage = {
			actionType: ImageConstants.IMAGE_RECEIVED,
			image: image
		};
		AppDispatcher.dispatch(newImage);
	},

	deleteImage: function (image) {
		var deathRow = {
			actionType: ImageConstants.IMAGE_SENTENCED,
			image: image
		};
		AppDispatcher.dispatch(deathRow);
	}

};

module.exports = ImageActions;
