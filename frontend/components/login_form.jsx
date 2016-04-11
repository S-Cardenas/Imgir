var React = require('react');
var SessionUtil = require('../util/session_utils');
var SessionStore = require('../stores/session_store');
var Link = require('react-router').Link;
var UserUtil = require('../util/user_utils');

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

	componentDidMount: function() {
		this.SessionStoreToken = SessionStore.addListener(this._checkUser);
	},

	_checkUser: function () {
		if (SessionStore.currentUser()) {
			this.context.router.push("/images");
		}
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
					<a className='facebook-signin' href="/auth/facebook"><i className="fa fa-facebook"></i></a>
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
		UserUtil.createAccount(this.state, function(credentials) {
			SessionUtil.login(credentials, function () {
				router.push("/images");
			});
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
