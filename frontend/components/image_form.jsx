var React = require('react');
var ImageUtils = require('../util/api_utils');

var ImageForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	executeSubmit: function (e) {
		e.preventDefault();
		ImageUtils.createImage();
		this.context.router.push('/');
	},
	render: function() {
		return (
			<form  onSubmit={this.executeSubmit}>
				<input type='submit' value='Upload'></input>
			</form>

		);
	}

});

module.exports = ImageForm;
