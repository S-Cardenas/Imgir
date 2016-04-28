var AppDispatcher = require('../dispatcher/dispatcher');
var SearchResultConstants = require('../constants/search_result_constants');

var SearchResultActions = {
  receiveResults: function (results) {
    var action = {
      actionType: SearchResultConstants.SEARCH_RESULTS_RECEIVED,
      searchResults: results.search_results,
      meta: results.meta
    };
    AppDispatcher.dispatch(action);
  }

};

module.exports = SearchResultActions;
