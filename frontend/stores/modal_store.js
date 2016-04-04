var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var ModalStore = new Store(AppDispatcher);
var ModalConstants = require('../constants/modal_constants');

var _modal = null;


ModalStore.__onDispatch = function (payload) {
	switch (payload.actionType) {
		case ModalConstants.MODAL_RECEIVED:
		_modal = payload.modal;
		this.__emitChange();
		break;
	}
};

ModalStore.modal = function () {
	return _modal ? Object.assign({}, _modal) : null;
};



module.exports = ModalStore;
