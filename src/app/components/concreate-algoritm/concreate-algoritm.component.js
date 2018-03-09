"use strict";
exports.__esModule = true;
/**
 * Import the Component styles
 */
require("./concreate-algoritm.component.scss");
var ContactListController = (function () {
    function ContactListController() {
    }
    ContactListController.prototype.remove = function (contact) {
        this.contactRemoved({
            $event: {
                id: contact.id
            }
        });
    };
    return ContactListController;
}());
var ContactList = (function () {
    function ContactList() {
    }
    return ContactList;
}());
ContactList.selector = 'contactList';
ContactList.bindings = {
    contacts: '<',
    contactRemoved: '&'
};
ContactList.controller = ContactListController;
ContactList.template = require('./concreate-algoritm.component.html');
exports.ContactList = ContactList;
//# sourceMappingURL=concreate-algoritm.component.jsjs.map