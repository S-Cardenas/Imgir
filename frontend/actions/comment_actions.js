var AppDispatcher = require('../dispatcher/dispatcher');
var CommentConstants = require('../constants/comment_constants');

var CommentActions = {
	getComments: function (comments) {
		var action = {
			actionType: CommentConstants.COMMENTS_RECEIVED,
			comments: comments
		};
		AppDispatcher.dispatch(action);
	},

	addComment: function (comment) {
		var action = {
			actionType: CommentConstants.NEW_COMMENT_RECEIVED,
			comment: comment
		};
		AppDispatcher.dispatch(action);
	}
};

module.exports = CommentActions;
