var React = require('react');
var Link = require('react-router').Link;

var CommentUtils = require('../util/comment_utils');
var CommentStore = require('../stores/comment_store');
var CommentForm = require('./comment_form');
var Comment = require('./comment');

var ImageResizer = require('./image_resizer');

var UserUtils = require('../util/user_utils');
var UserCommentStore = require('../stores/user_comment_store');

var SessionUtil = require('../util/session_utils');
var SessionStore = require('../stores/session_store');

var Comments = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	getInitialState: function() {
    var utils;
    var store;
    if (this.props.parentType === "user") {
      utils = UserUtils;
      store = UserCommentStore;
    } else {
      utils = CommentUtils;
      store = CommentStore;
    }
		return {
			comments: store.all(), replyComment: null, utils: utils, store: store
		};
	},

	componentDidMount: function() {
		this.storeToken = this.state.store.addListener(this._onChange);
		this.state.utils.fetchComments(this.props.params.id);
	},

	componentWillUnmount: function() {
		this.storeToken.remove();
	},

	_onChange: function () {
		this.setState({comments: this.state.store.all()});
	},


	executeSubmit: function (close, e) {
		e.preventDefault();
		e = e.currentTarget;
		var comment = {body: e[0].value, parent_comment_id: e[1].value};
    var image_id;
    if (e[2]) {
      imageId = e[2].value;
    }
		e.reset();
    if (SessionStore.currentUser()) {
      if (this.props.parentType === "image") {
        CommentUtils.createNewComment(comment, this.props.params.id);
      } else if (this.props.parentType === "user"){
        CommentUtils.createNewComment(comment, imagId);
      }
    } else {
      this.context.router.push("/login");
    }
    this.state.utils.fetchComments(this.props.params.id);
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
				<CommentForm parent={comment} onOutsideClick={this._onOutsideClick}/>
			</form>
			);
		} else {
			return null;
		}
	},

	_onOutsideClick: function (e) {
		var set = true;
		for (var i = 0; i < e.path.length; i++) {
			if (e.path[i].className === "comment-form-fields group") {
				set = false;
			}
		}
		if (set) {
			this.setState({replyComment:null});
		}
	},


	render: function() {
    var thumb;
		var comments = this.state.comments.map( function (comment) {
      var floaters;
      if (this.props.parentType === "image") {
        thumb = <div></div>;
          floaters = false;
        } else {
          var showUrl = "images/" + comment.image.id;
          thumb = <div className="comment-thumb">
              <Link
              to={showUrl}>
                <ImageResizer
                image={comment.image.image_url}
                class1="image-index-item-tall"
                class2="image-index-item-wide"/>
              </Link>
            </div>;
          floaters = true;
      }

			return (
				<div key={comment.id} className="comment group">
          {thumb}
					<Comment comment={comment}
          params={this.props.params}
          addForm={this.toggleForm}
          replyForm={this.replyForm}
          floaters={floaters}
          />

				</div>
			);
		}.bind(this));
    var commentDisplay;
    if (this.props.parentType === "image") {
      commentDisplay =
      <div>
        <form className='comment-form' onSubmit={this.executeSubmit.bind(this, null)}>
          <CommentForm />
        </form>
        {comments}
      </div>
      ;
    } else {
      commentDisplay = <div className="user-show-comments">{comments}</div>;
    }
		return (
			<div>
        {commentDisplay}
			</div>
		);
	}

});


module.exports = Comments;
