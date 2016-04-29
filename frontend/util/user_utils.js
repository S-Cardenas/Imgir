var UserActions = require('../actions/user_actions');

var UserUtil = {
	createAccount: function(credentials, callback) {
		$.ajax({
			type: 'POST',
			url: "/api/users",
			dataType: "json",
			data: {user: credentials},
			success: function (user) {
				callback && callback({username: user.username, password: credentials.password});
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
	},

  fetchComments: function(id) {
    $.ajax({
      type: 'GET',
      url: "/api/users/" + id,
      dataType: "json",
      success: function (user) {
        UserActions.commentsReceived(user);
      },
      error: function () {
        console.log("User's comments couldn't be fetched");
      }

    });
  }

};

module.exports = UserUtil;
