var React = require('react');
var SessionUtil = require('../util/session_utils');

var LoginForm = React.createClass({
	contextTypes : {
		router: React.PropTypes.object.isRequired
	},

	getInitialState: function() {
		return {
			username: "",
			password: ""
		};
	},

	render: function() {
		return (
			<div>
				<h1>Looking to Sign In?</h1>
				<h2>Doom doom doom doom...</h2>
				<form onSubmit={this.executeSubmit}>
					<label htmlFor="username">Username:</label>
					<input onChange={this.updateUsername} type="text" value={this.state.username} />

				<label htmlFor="password">Password:</label>
				<input onChange={this.updatePassword} type="password" value={this.state.password} />

			<button>Submit</button>
			</form>

			</div>
		);
	},

	executeSubmit: function(e) {
		e.preventDefault();
		var router = this.context.router;

		SessionUtil.login(this.state, function() {
			router.push("/images");
		});
	},

	updateUsername: function(e) {
		this.setState({ username: e.currentTarget.value });
	},

	updatePassword: function(e) {
		this.setState({ password: e.currentTarget.value });
	}

});

module.exports = LoginForm;
