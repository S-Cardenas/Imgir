var React = require('react');
var ReactDOM = require('react-dom');
var SearchResultsStore = require("../stores/search_results_store");
var SearchUtil = require("../util/search_utils");
var Link = require('react-router').Link;

var Search = React.createClass({

  contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState: function() {
    return {
      query: ""
    };
  },

  componentDidMount: function() {
    this.searchStoreToken = SearchResultsStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.searchStoreToken.remove();
  },

  _onChange: function () {
    this.setState({results: SearchResultsStore.all()});
  },

  handleInputChange: function (e) {
    var query = e.currentTarget.value;
    this.setState({ query: query }, function () {
      if (query.length > 2) {
        this.search();
      } else {
        SearchResultsStore.clear();
      }
    }.bind(this));
  },

  search: function (e) {
    SearchUtil.search(this.state.query, 1);
  },

  nextPage: function () {
    var meta = SearchResultsStore.meta();
    SearchUtil.search(meta.query, meta.page + 1);
  },

  executeSearch: function (result, e) {
    e.preventDefault();
    SearchResultsStore.clear();
    ReactDOM.findDOMNode(this.refs.searchQuery).value = "";
    this.setState({ query: "" });
    this.context.router.push("/images/" + result.id);
  },


  resultList: function () {
    var that = this;
    return SearchResultsStore.all().map(function (result) {
      if (result._type === "Image") {
        return (
          <li key={ result.id + "Image" }>
            <button onClick={that.executeSearch.bind(that, result)}>Image, Title: {result.title}</button>
          </li>
        );
      } else if (result._type === "User") {
        return (
          <li key= { result.id + "User"}>
            <button onClick={that.executeSearch.bind(that, result)}>User, Username: {result.username}</button>
          </li>
        );
      } else if (result._type === "Comment") {
        return (
          <li key= {result.id + "Comment"}>
            <button onClick={that.executeSearch.bind(that, result)}> Comment, Body: {result.body} </button>
          </li>
        );
      }

    });
  },

	render: function() {
    var meta = SearchResultsStore.meta();
    if (!meta.page) {
      meta.page = 0;
    }
    if (!meta.total_pages) {
      meta.total_pages = 1;
    }
    var displayPages = function () {
      if (typeof SearchResultsStore.meta() !== "undefined") {
        return (
          <nav>
            Displaying page { meta.page } of { meta.total_pages }  |
            <button onClick={ this.nextPage }>NEXT PAGE</button>
          </nav>
        );
      } else {
        return <div></div>;
      }
    };
		return (
			<div className= 'search-form'>
				<input type="text"
					placeholder="search" ref="searchQuery" onChange={ this.handleInputChange}></input>
        <button onClick={ this.search }><i className="fa fa-search"></i></button>



        <ul className="search-result-list">
          { this.resultList() }
        </ul>
			</div>
		);
	}

});

module.exports = Search;
