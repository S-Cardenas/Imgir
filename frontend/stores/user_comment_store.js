var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserCommentStore = new Store(AppDispatcher);
var UserConstants = require('../constants/user_constants');
var CommentConstants = require('../constants/comment_constants');

var _comments = [];

var resetComments = function (newComments) {
	_comments = newComments;
};

UserCommentStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case UserConstants.USER_COMMENTS_RECEIVED:
		resetComments(payload.user.comments);
		this.__emitChange();
		break;

	}
};

UserCommentStore.all = function () {
	return _comments.slice(0);
};



module.exports = UserCommentStore;
