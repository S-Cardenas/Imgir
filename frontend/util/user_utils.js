var UserActions = require('../actions/user_actions');

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

	fetchImages: function(id) {
		$.ajax({
			type: 'GET',
			url: "/api/users/" + id,
			dataType: "json",
			success: function (data) {
				UserActions.imagesReceived(data);
			},
			error: function () {
				console.log("User's images couldn't be fetched");
			}
		});
	}

};

module.exports = UserUtil;
