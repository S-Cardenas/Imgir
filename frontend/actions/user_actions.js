var React = require('react');
var UserConstants = require('../constants/user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');


var UserActions = {
	imagesReceived: function (user) {
		var action = {
			actionType: UserConstants.IMAGES_RECEIVED,
			user: user
		};
		AppDispatcher.dispatch(action);
	},

  commentsReceived: function (user) {
    var action = {
      actionType: UserConstants.USER_COMMENTS_RECEIVED,
      user: user
    };
    AppDispatcher.dispatch(action);
  }
};

module.exports = UserActions;
