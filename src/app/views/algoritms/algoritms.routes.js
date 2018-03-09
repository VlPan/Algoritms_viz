"use strict";
exports.__esModule = true;
var add_contact_container_1 = require("../../components/add-contact/add-contact.container");
var contacts_container_1 = require("../../components/contacts/contacts.container");
exports.routing = function ($stateProvider) {
    'ngInject';
    $stateProvider
        .state('add-contact', {
        parent: 'app',
        url: '/contact/add',
        component: add_contact_container_1.AddContactContainer.selector
    })
        .state('contacts', {
        parent: 'app',
        url: '/contact',
        component: contacts_container_1.ContactsContainer.selector
    });
};
//# sourceMappingURL=statistics.routes.jsjs.map