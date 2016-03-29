var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var root = document.getElementById("content");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Imgir = React.createClass({

	render: function() {
		return (
			<div />
		);
	}

});

var routes = (
		<Route path= "/" component={Imgir}>

		</Route>
);

$(document).ready(function () {
	ReactDOM.render(
		<Router history={hashHistory}>{routes}</Router>,
		$("#content")[0]
	);


});
