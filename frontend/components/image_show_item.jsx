var React = require('react');
var ReactDOM = require('react-dom');

var ImageShowItem = React.createClass({

	getInitialState: function() {
		return {
			classname: ""
		};
	},

	componentDidMount: function() {
		ReactDOM.findDOMNode(this.refs.image);
	},


	determineClassName: function () {
		var node = ReactDOM.findDOMNode(this.refs.image);
		if (node.height > node.width) {
			this.setState({classname: 'image-show-item-tall'});
		} else {
			this.setState({classname: 'image-show-item-wide'});
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


module.exports = ImageShowItem;
