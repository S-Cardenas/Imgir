var AppDispatcher = require('../dispatcher/dispatcher');
var UserActions = require('../actions/session_actions');

var UserUtil = {
	createAccount: function(credentials, callback) {
		$.ajax({
			type: 'POST',
			url: "/api/users",
			dataType: "json",
			data: {user: credentials},
			success: function (user) {
				// UserActions.userReceived(user);
				callback && callback(credentials);
			}
		});
	},

};

module.exports = UserUtil;
