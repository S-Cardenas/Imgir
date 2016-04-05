var React = require('react');
var SessionUtil = require('../util/session_utils');
var Link = require('react-router').Link;

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
				<form className='signin-form' onSubmit={this.executeSubmit}>
					<h1>Looking to Sign In?</h1>
					<h2>Doom doom doom doom...</h2>

					<input onChange={this.updateUsername}
						type="text"
				 		value={this.state.username}
						placeholder='Username' />
					<input onChange={this.updatePassword}
						type="password"
						value={this.state.password}
						placeholder='Password' />
					<Link className='account-signup-link'
						to="/users/new">Need an account?
					</Link>
					<button className='signin-submit'>Sign In</button>
					<Link className='guest-login' onClick={this.executeGuestLogin} to='images'>Sign in as a guest</Link>
				</form>
			</div>
		);
	},

	executeGuestLogin: function (e) {
		e.preventDefault();
		var router = this.context.router;

		this.state.username = "Guest";
		this.state.password = "1234567";
		SessionUtil.login(this.state, function () {
			router.push("/images");
		});
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
