var ImageActions = require('../actions/image_actions');

var ImageUtils = {
	fetchImages: function () {
		$.ajax({
			type: 'GET',
			url: 'api/images',
			dataType: 'json',
			success: function (data) {
				ImageActions.getImages(data);
			},
			error: function () {
				console.log("The images couldn't be fetched.");
			}
		});
	},

	createImage: function () {
		$.ajax({
			type: 'POST',
			url: 'api/images',
			dataType: 'json',
			success: function (data) {
				ImageActions.addNewImage(data);
			},
			error: function () {
				console.log("Image didn't go in, sir.");
			}

		});
	}


};





module.exports = ImageUtils;
