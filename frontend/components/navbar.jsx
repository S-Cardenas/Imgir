var React = require('react');
var SessionStore = require('../stores/session_store');
var SessionUtil = require('../util/session_utils');
var Link = require('react-router').Link;
var ImageForm = require('./image_form');
var ModalAction = require('../actions/modal_action');
var Search = require('./search');

var Navbar = React.createClass({
	getInitialState: function() {
		return {
			currentUser: SessionStore.currentUser()
		};
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	componentDidMount: function() {
		this.sessionStoreToken = SessionStore.addListener(this._onChange);
		SessionUtil.fetchCurrentUser( function () {
			this.setState({currentUser: SessionStore.currentUser()});
		}.bind(this));
	},

	_onChange: function () {
		this.setState({currentUser: SessionStore.currentUser()});
	},

	componentWillUnmount: function() {
		this.sessionStoreToken.remove();
	},

	handleClickImageForm: function (e) {
		ModalAction.setModal(<ImageForm />);
	},

	render: function() {
		var signOut = function () {
			SessionUtil.logout();
			this.context.router.push('/login');
		};
		var navAccount = function () {
			if (!this.state.currentUser) {
				return (
					<div className='signin group'>
						<Link to='/login'>Sign In </Link>
						<Link to='/users/new'>Sign Up</Link>
						< Search />
					</div>
				);
			} else {
				return (
					<div className='signin group'>
						<div className='nav-account-name'>
							{this.state.currentUser.username}
							<ul className='nav-account-options'>
								<li>
									<Link to={"/users/" + this.state.currentUser.id}>Your Images</Link>
								</li>
								<li>
									<div className="nav-account-options-bottom">
										<button onClick={signOut.bind(this)}>Sign Out</button>
									</div>
								</li>

							</ul>
						</div>
						< Search />



					</div>
				);
			}
		};
		return (
			<div className='header-nav group'>
				<div className='nav-left group'>
					<Link  to='/images'>
						<img className='logo' src='/imgir_logo.png'>

						</img>

						</Link>

					<div className='new-image-button-container'>
						<button className='new-image' onClick={this.handleClickImageForm}>upload images</button>
					</div>
				</div>
				{navAccount.call(this)}
			</div>
		);
	}

});

module.exports = Navbar;
