var CommentActions = require('../actions/comment_actions');

var CommentUtils = {
	fetchComments: function (id) {
		$.ajax({
			type: 'GET',
			url: '/api/images/' + id + '/comments',
			dataType: 'json',
			success: function (data) {
				CommentActions.getComments(data);
			},
			error: function () {
				console.log("The comments couldn't be fetched");
			}
		});
	},

	createNewComment: function (comment, id, callback) {
		$.ajax({
			type: 'POST',
			url: '/api/images/' + id + '/comments',
			data: {comment: comment},
			dataType: 'json',
			success: function (data) {
				CommentActions.addComment(data);
				callback && callback();
			},
			error: function () {
				console.log("comment didn't stick");
			}
		});
	}
};


module.exports = CommentUtils;
