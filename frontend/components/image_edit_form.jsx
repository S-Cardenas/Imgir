var React = require('react');
var ImageUtils = require('../util/api_utils');
var ImageStore = require('../stores/image_store');


var imageEditForm = React.createClass({
	contextTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState: function() {
		return {
			title: ImageStore.find(this.props.params.id).title,
			description: ImageStore.find(this.props.params.id).description
		};
	},

	pushURL: function () {
		return ('images/' + this.props.params.id);
	},

	executeSubmit: function (e) {
		e.preventDefault();
		e = e.currentTarget;
		ImageUtils.editImage(e, this.props.params.id);
		this.context.router.push(this.pushURL());
	},

	handleModalClick: function () {

		this.context.router.push(this.pushURL());
	},

	stopProp: function (e) {
		e.stopPropagation();
	},

	_onChange: function (e) {
		e = e.currentTarget;
		if (e.name === "image[title]") {
			this.setState({title: e.value});
		} else if (e.name === "image[description]") {
			this.setSTate({description: e.value});
		}
	},



	render: function() {
		return (
			<div className='modal' onClick={this.handleModalClick}>
				<div className= 'image-edit' onClick={this.stopProp}>
					<div className= 'image-edit-header group'>
						<h3>Add a title or description</h3>
					</div>
					<form className= 'image-edit-form' onSubmit={this.executeSubmit}>
							<input
								className= 'image-edit-input'
								type='text'
								name='image[title]'
								placeholder='enter title here'
								defaultValue={this.state.title}
								onChange={this._onChange}
								>
							</input>
							<textarea
								className= 'image-edit-input'
								name='image[description]'
								placeholder='enter a description'
								defaultValue={this.state.description}
								>
							</textarea>

						<input
							className="image-edit-submit"
							type='submit'
							value='Save'>

						</input>

					</form>

				</div>
			</div>
		);
	}

});

module.exports = imageEditForm;
