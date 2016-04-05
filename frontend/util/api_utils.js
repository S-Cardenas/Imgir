var ImageActions = require('../actions/image_actions');

var ImageUtils = {
	fetchImages: function () {
		$.ajax({
			type: 'GET',
			url: '/api/images',
			dataType: 'json',
			success: function (data) {
				ImageActions.getImages(data);
			},
			error: function () {
				console.log("The images couldn't be fetched.");
			}
		});
	},

	fetchOneImage: function (id) {
		$.ajax({
			type: 'GET',
			url: '/api/images/' + id,
			dataType: 'json',
			success: function (data) {
				ImageActions.workWithImage(data);
			},
			error: function () {
				console.log("That image couldn't be fetched");
			}

		});
	},

	createImage: function (formData) {
		$.ajax({
			type: 'POST',
			url: '/api/images',
			processData: false,
			contentType: false,
			data: formData,
			dataType: 'json',
			success: function (data) {
				ImageActions.workWithImage(data);
			},
			error: function () {
				console.log("Image didn't go in, sir.");
			}

		});
	},

	editImage: function (e, id) {
		$.ajax({
			type: 'PATCH',
			url: "/api/images/" + id,
			data: {image: {title: e[0].value, description: e[1].value}},
			dataType: 'json',
			success: function (data) {
				ImageActions.workWithImage(data);
			},
			error: function () {
				console.log("Image failed to update");
			}
		});
	},

	updatePrivacy: function (e, id) {
		$.ajax({
			type: 'PATCH',
			url: "/api/images/" + id,
			data: {image: {private: false}},
			dataType: 'json',
			success: function (data) {
				ImageActions.workWithImage(data);
			},
			error: function () {
				console.log("Image failed to update");
			}
		});
	},

	deleteImage: function (id) {
		$.ajax({
			type: 'DELETE',
			url: "/api/images/" + id,
			dataType: 'json',
			success: function (data) {
				ImageActions.deleteImage(data);
			},
			error: function () {
				console.log("Image failed to delete");
			}
		});
	}


};





module.exports = ImageUtils;
