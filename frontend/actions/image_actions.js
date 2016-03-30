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

	addNewImage: function (image) {
		var creation = {
			actionType: ImageConstants.IMAGE_ACKNOWLEDGED,
			image: image
		};
		AppDispatcher.dispatch(creation);
	}
};

module.exports = ImageActions;
