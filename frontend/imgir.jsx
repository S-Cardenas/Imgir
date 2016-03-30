var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var root = document.getElementById("content");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var ImageForm = require('./components/image_form');
var ImageIndex = require('./components/index');
var ImageShow = require('./components/image_show');
var ImageEditForm = require('./components/image_edit_form');

var Imgir = React.createClass({

	render: function() {
		return (
			<div>
				<h1>Imgir: Rise of Gir</h1>
				<br></br>
				{this.props.children}
			</div>
		);
	}

});

var routes = (
		<Route path= "/" component={Imgir}>
			<Route path= "images" component={ImageIndex} />
			<Route path= "images/new" component={ImageForm} />
			<Route path= "images/:id" component={ImageShow} />
			<Route path= "images/:id/edit" component={ImageEditForm}/>
		</Route>
);

$(document).ready(function () {
	ReactDOM.render(
		<Router history={hashHistory}>{routes}</Router>,
		$("#content")[0]
	);


});
