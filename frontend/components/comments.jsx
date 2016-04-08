var React = require('react');
var CommentUtils = require('../util/comment_utils');
var CommentStore = require('../stores/comment_store');
var CommentForm = require('./comment_form');
var Link = require('react-router').Link;
var Comment = require('./comment');

var Comments = React.createClass({

	getInitialState: function() {
		return {
			comments: CommentStore.all(), replyComment: null
		};
	},

	componentDidMount: function() {
		this.CommentStoreToken = CommentStore.addListener(this._onChange);
		CommentUtils.fetchComments(this.props.params.id);
	},

	componentWillUnmount: function() {
		this.CommentStoreToken.remove();
	},

	_onChange: function () {
		this.setState({comments: CommentStore.all()});
	},


	executeSubmit: function (close, e) {
		e.preventDefault();
		e = e.currentTarget;
		var comment = {body: e[0].value, parent_comment_id: e[1].value};
		e.reset();
		CommentUtils.createNewComment(comment, this.props.params.id);
		CommentUtils.fetchComments(this.props.params.id);
		if (close) {
			this.setState({replyComment:null});
		}
	},

	toggleForm: function (comment) {
		return function (e) {
			this.setState({
				replyComment:comment.id
			});
		}.bind(this);

	},
	replyForm: function (comment) {
		if (this.state.replyComment === comment.id) {
			return(
			<form className='comment-form' onSubmit={this.executeSubmit.bind(this, close)}>
				<CommentForm parent={comment} />
			</form>
			);
		} else {
			return null;
		}
	},


	render: function() {
		var comments = this.state.comments.map( function (comment) {

			return (
				<div key={comment.id}>
					<Comment comment={comment} params={this.props.params} addForm={this.toggleForm} replyForm={this.replyForm}/>

				</div>
			);
		}.bind(this));
		return (
			<div>
				<form className='comment-form' onSubmit={this.executeSubmit}>
					<CommentForm />
				</form>
				<div className='comment-counter'>
					{comments.length} parent comments
				</div>
				{comments}
			</div>
		);
	}

});


module.exports = Comments;
