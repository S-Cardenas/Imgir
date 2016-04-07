var AlbumActions = require('../actions/album_actions');

var AlbumUtils = {
	createAlbum: function (e) {
		$.ajax({
			type: 'POST',
			url: '/api/albums',
			data: {album: {title: e[0].value, description: e[1].value}},
			dataType: 'json',
			success: function (data) {
				AlbumActions.workWithAlbum(data);
			},
			error: function () {
				console.log("But no album!");
			}
		});
	}
};

module.exports = AlbumUtils;
