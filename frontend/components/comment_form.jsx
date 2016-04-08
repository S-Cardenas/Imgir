var React = require('react');

var CommentForm = React.createClass({

	render: function() {
		var parent = (this.props.parent) ?	 this.props.parent.id :	null;
		return (
			<div className="comment-form-fields group">
				<textarea
					name="comment[body]"
					placeholder="Submit a comment"
					>
				</textarea>
				<input
					type="hidden"
					name="comment[parent_comment_id]"
					value={parent}
					>
				</input>
				<button>Save</button>
			</div>
		);
	}

});

module.exports = CommentForm;
