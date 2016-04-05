var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var root = document.getElementById("content");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Link = ReactRouter.Link;

var SessionStore = require("./stores/session_store");
var LoginForm = require("./components/login_form.jsx");
var SessionUtil = require('./util/session_utils');
var SignupForm = require('./components/signup_form');

var NavBar = require('./components/navbar');

var ModalStore = require('./stores/modal_store');

var ImageForm = require('./components/image_form');
var ImageIndex = require('./components/index');
var ImageShow = require('./components/image_show');
var ImageEditForm = require('./components/image_edit_form');


var Imgir = React.createClass({

	getInitialState: function() {
		return {
			modal: null
		};
	},

	componentDidMount: function() {
		var modalStoreToken = ModalStore.addListener(this._onChange);
	},

	_onChange: function () {
		this.setState({modal: ModalStore.modal()});
	},


	render: function() {

		return (
			<div>
				< NavBar />
				{this.state.modal}
				{this.props.children}
			</div>
		);
	}

});


$(document).ready(function () {
	ReactDOM.render(
		<Router history={browserHistory}>
			<Route path= "/" component={Imgir}>
				<Route path= "images" component={ImageIndex} onEnter={_requireLoggedIn} />
				<Route path= "images/new" component={ImageForm} />
				<Route path= "images/:id" component={ImageShow}>
					<Route path= "edit" component={ImageEditForm} />
				</Route>
				<Route path= "users/new" component={SignupForm} />
				<Route path="login" component={LoginForm}/>
			</Route>
		</Router>,
		$("#content")[0]
	);


});


function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    SessionUtil.fetchCurrentUser(_redirectIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }

  function _redirectIfNotLoggedIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }

    asyncCompletionCallback();
  }
}
