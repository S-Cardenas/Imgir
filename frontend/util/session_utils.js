var AppDispatcher = require('../dispatcher/dispatcher');
var SessionActions = require('../actions/session_actions');
var SessionStore = require('../stores/session_store');

var SessionUtil = {
	login: function(credentials, callback) {
		$.ajax({
			type: 'POST',
			url: "/api/session",
			dataType: "json",
			data: {user: credentials},
			success: function (currentUser) {
				SessionActions.currentUserReceived(currentUser);
				callback && callback();
			}
		});
	},

	logout: function() {
		$.ajax({
			type: "DELETE",
			url: "/api/session",
			dataType: "json",
			success: function() {
				SessionActions.logout();
			}
		});
	},

	fetchCurrentUser: function(completion) {
		$.ajax({
			type: 'GET',
			url: "/api/session",
			dataType: "json",
			success: function(currentUser) {
				SessionActions.currentUserReceived(currentUser);
			},
			complete: function() {
				completion && completion();
			}
		});
	}




};

module.exports = SessionUtil;
