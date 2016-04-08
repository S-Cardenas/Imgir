var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var CommentStore = new Store(AppDispatcher);
var CommentConstants = require('../constants/comment_constants');

var _comments = [];

var resetComments = function (newComments) {
	_comments = newComments;
};

CommentStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case CommentConstants.COMMENTS_RECEIVED:
			resetComments(payload.comments);
			this.__emitChange();
			break;

		case CommentConstants.NEW_COMMENT_RECEIVED:
			_comments.unshift(payload.comment);
			this.__emitChange();
			break;
	}
};

CommentStore.all = function () {
	return _comments.slice(0);
};

CommentStore.find = function (id) {
	return _comments.find( function (el) {
		return (el.id === parseInt(id));
	});
};

module.exports = CommentStore;
