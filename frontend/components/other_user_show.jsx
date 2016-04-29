var React = require('react');
var UserCommentStore = require('../stores/user_comment_store');
var UserUtil = require('../util/user_utils');
var Comments = require('./comments');



var OtherUserShow = React.createClass({
	getInitialState: function() {
    return {
      comments: null, replyComment: null
		};
	},

	componentDidMount: function() {
    this.userCommentsToken = UserCommentStore.addListener(this._onChange);
    UserUtil.fetchComments(this.props.paramId);
	},

  componentWillReceiveProps: function(nextProps) {
    UserUtil.fetchComments(nextProps.id);
  },

	componentWillUnmount: function() {
		this.userCommentsToken.remove();
	},


  _onChange: function () {
    this.setState({comments: UserCommentStore.all()});
  },



	render: function() {

    var params = {id: this.props.paramId};
    return (

      <div className="comments-section user-show">
        <div className="user-show-comment-header">
          Planetary Comments
        </div>
        <Comments params={params} parentType={"user"}/>
      </div>
    );
  }

});

module.exports = OtherUserShow;
