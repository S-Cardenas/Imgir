var React = require('react');
var SessionStore = require('../stores/session_store');
var SessionUtil = require('../util/session_utils');
var SelfShow = require('./self_show');
var OtherUserShow = require('./other_user_show');


var UserImagesShow = React.createClass({

  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount: function() {
    this.sessionStoreToken = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.sessionStoreToken.remove();
  },

  _onChange: function () {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  render: function() {
    var currentUser = SessionStore.currentUser();
    if (currentUser && currentUser.id === parseInt(this.props.params.id)) {
      return (
        < SelfShow id={this.props.params.id}/>
      );
    } else {
      return (
        < OtherUserShow id={this.props.params.id}/>
      );
    }
  }

});

module.exports = UserImagesShow;
