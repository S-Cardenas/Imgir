var React = require('react');
var ReactDOM = require('react-dom');

var CommentForm = React.createClass({

	componentDidMount: function() {
		if (this.props.onOutsideClick) {
			document.addEventListener("click", this.props.onOutsideClick);
		}
	},

	componentWillUnmount: function() {
		document.removeEventListener("click", this.props.onOutsideClick);
	},


	render: function() {
		var parent = (this.props.parent) ?	 this.props.parent.id :	null;
    var parent_image_id;
    if (parent) {
      image_id = <input type="hidden"
      name="comment[parent_image_id]"
      value={this.props.parent.image_id}
      >
      </input>;
    } else {
      image_id = <div></div>;
    }
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
        {image_id}
				<button>Save</button>
			</div>
		);
	}

});

module.exports = CommentForm;
