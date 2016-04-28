var AppDispatcher = require('../dispatcher/dispatcher');
var SearchResultActions = require('../actions/search_result_actions');

var SearchUtil = {

  search: function (query, page) {
    $.ajax({
      type: "GET",
      url: "/api/searches",
      dataType: "json",
      data: {query: query, page: page},
      success: function (results) {
        SearchResultActions.receiveResults(results);
      },
      error: function () {
        console.log("It just couldn't be found. It's time to move on.");
      }
    });
  }



};


module.exports = SearchUtil;
