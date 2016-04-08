var React = require('react');
var CommentUtils = require('../util/comment_utils');
var Link = require('react-router').Link;
var moment = require('moment');
var CommentForm = require('./comment_form');



var Comment = React.createClass({

	getInitialState: function() {
		return {
			inception: false
		};
	},


	executeSubmit: function ( e) {
		e.preventDefault();
		e = e.currentTarget;
		var comment = {body: e[0].value, parent_comment_id: e[1].value};
		e.reset();
		var callback = CommentUtils.fetchComments.bind(this, this.props.params.id);
		CommentUtils.createNewComment(comment, this.props.params.id, callback);
	},

	render: function() {
		var childComments;
		var comment = this.props.comment;
		if (this.props.comment.childComments) {
			childComments = this.props.comment.childComments.map( function (child) {
				return(
					<div key={child.id}>
						<Comment comment={child} addForm={this.props.addForm} replyForm={this.props.replyForm} />
					</div>
					);
			}.bind(this));
		}
		var userShowUrl = "/users/" + comment.user.id;
		return (
			<div className='full-comment'>
				<div className='comment-item'  >
					<div className='comment-user-and-reply group'>
						<div className='comment-user comment-link'>
							<Link to={userShowUrl} >{comment.user.username}</Link>
						</div>
						<div>
							{moment(comment.created_at).fromNow()}
						</div>
						<div className='reply comment-link' onClick={this.props.addForm(comment)}>
							reply
						</div>
					</div>
					{comment.body}
				</div>
				{this.props.replyForm(comment)}
				{childComments}
			</div>
		);
	}

});

module.exports = Comment;
