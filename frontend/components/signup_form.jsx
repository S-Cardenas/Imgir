var React = require('react');
var UserUtil = require('../util/user_utils');
var Link = require('react-router').Link;
var SessionUtil = require('../util/session_utils.js');

var UserForm = React.createClass({
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
					<h1>Sign Up</h1>
					<h2>Bow before the Allmighty Tallest</h2>

					<input onChange={this.updateUsername}
						type="text"
				 		value={this.state.username}
						placeholder='Username' />
					<input onChange={this.updatePassword}
						type="password"
						value={this.state.password}
						placeholder='Password' />
					<Link className='account-signup-link'
						to="/login">Already have an account?
					</Link>
					<button className='signup'>Begin your conquest!</button>
				</form>

			</div>
		);
	},

	executeSubmit: function(e) {
		e.preventDefault();
		var router = this.context.router;

		UserUtil.createAccount(this.state, function(credentials) {
			SessionUtil.login(credentials, function () {
				router.push("/images");
			});
		});
	},

	updateUsername: function(e) {
		this.setState({ username: e.currentTarget.value });
	},

	updatePassword: function(e) {
		this.setState({ password: e.currentTarget.value });
	}

});

module.exports = UserForm;
