var React = require('react');

var Search = React.createClass({

	executeSubmit: function (e) {
		e.preventDefault();
		e.currentTarget.reset();
	},

	render: function() {
		return (
			<form className= 'search-form' onSubmit={this.executeSubmit}>
				<input type="text"
					placeholder="search"></input>
				<button ><i className="fa fa-search"></i></button>
			</form>
		);
	}

});

module.exports = Search;
