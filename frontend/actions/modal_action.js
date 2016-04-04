var AppDispatcher = require('../dispatcher/dispatcher');
var ModalConstants = require('../constants/modal_constants');

var ModalActions = {
	setModal: function (component) {
		var set = {
			actionType: ModalConstants.MODAL_RECEIVED,
			modal: component
		};
		AppDispatcher.dispatch(set);
	}
};


module.exports = ModalActions;
