var AppDispatcher = require('../dispatcher/dispatcher');
var AlbumConstants = require('../constants/album_constants');

var AlbumActions = {
	workWithAlbum: function (album) {
		var action = {
			actionType: AlbumConstants.ALBUM_RECEIVED,
			album: album
		};
		AppDispatcher.dispatch(action);
	}
};

module.exports = AlbumActions;
