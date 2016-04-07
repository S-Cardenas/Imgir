var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AlbumStore = new Store(AppDispatcher);
var AlbumConstants = require('../constants/album_constants');

var _albums = [];

var replaceAlbum = function (album) {
	var replaced = false;
	_albums = _albums.map( function(el) {
		if (el.id === album.id) {
			replaced = true;
			return album;
		} else {
			return el;
		}
	});
	if (!replaced) {
		_albums.push(album);
	}
};

AlbumStore.__onDispatch =  function (payload) {
	switch(payload.actionType) {
		case AlbumConstants.ALBUM_RECEIVED:
		replaceAlbum(payload.album);
		this.__emitChange();
		break;
	}
};

AlbumStore.find = function (id) {
	return _albums.find( function (el) {
		return (el.id === parseInt(id));
	});
};


module.exports = AlbumStore;
