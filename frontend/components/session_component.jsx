var React = require('react');
var SessionStore = require('../stores/session_store');
var SessionUtil = require('../util/session_utils');

var SessionComponent = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			currentUser: null
		};
	},

	componentDidMount: function() {
		this.sessionStoreToken = SessionStore.addListener(this.handleChange);
		this.handleChange();
	},

	componentWillUnmount: function() {
		this.sessionStoreToken.remove();
	},

	render: function() {
		var button, message;
		if (this.state.currentUser) {
			button = <button onClick={ApiUtil.logout}>Sign Out</button>;
			message = <h2> Welcome, {this.state.currentUser.username} </h2>;
		}

		return (
			<div>
				{button}
				{message}

			</div>
		);
	},

	handleChange: function () {
		if (SessionStore.isLoggedIn()) {
			this.setState({ currentUser: SessionStore.currentUser()});
		} else {
			this.context.router.push("/login");
		}
	}

});

module.exports = SessionComponent;
