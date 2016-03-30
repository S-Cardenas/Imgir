var React = require('react');
var ImageUtils = require('../util/api_utils');

var imageEditForm = React.createClass({

	render: function() {
		return (
			<form action='/api/images' method='POST' onSubmit={this.executeSubmit}>
				<label>Title your image
					<br></br>
					<input type='text' name='image[title]' value=''></input>
				</label>
				<br></br>
				<label>Add a description
					<br></br>
					<input type='textarea' name='image[description]' value=''></input>
				</label>
				<br></br>
				<br></br>
				<input type='submit' value='Save'></input>

			</form>
		);
	}

});

module.exports = imageEditForm;
