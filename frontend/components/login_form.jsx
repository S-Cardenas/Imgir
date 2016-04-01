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
				<h1>Looking to Sign In?</h1>
				<h2>Doom doom doom doom...</h2>
				<form className='signin-form' onSubmit={this.executeSubmit}>

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
