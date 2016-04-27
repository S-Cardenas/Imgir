var React = require('react');
var ReactDOM = require('react-dom');

var ImageResizer = React.createClass({

	getInitialState: function() {
		return {
			classname1: ""
		};
	},

	componentDidMount: function() {
		ReactDOM.findDOMNode(this.refs.image);
	},


	determineClassName: function () {
		var node = ReactDOM.findDOMNode(this.refs.image);
		if (node.height > node.width) {
			this.setState({classname: this.props.class1});
		} else {
			this.setState({classname: this.props.class2});
		}
	},

	render: function() {
		return (

			<img className={this.state.classname}
				onLoad={this.determineClassName}
				src={this.props.image} ref="image" />

	);
	}


});


module.exports = ImageResizer;
