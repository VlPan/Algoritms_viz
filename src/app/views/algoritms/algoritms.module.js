"use strict";
exports.__esModule = true;
// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
var angular = require("angular");
/**
 * Import Module Components
 */
var add_contact_form_component_1 = require("../../components/add-contact-form/add-contact-form.component");
var contact_list_component_1 = require("../../components/concreate-algoritm/concreate-algoritm.component");
/**
 * Import Module Containers
 */
var contacts_container_1 = require("../../components/contacts/contacts.container");
var add_contact_container_1 = require("../../components/add-contact/add-contact.container");
/**
 * Import Module Services
 */
var contacts_service_1 = require("../../services/contacts.service");
/**
 * Import Module Routing
 */
var contacts_routes_1 = require("./algoritms.routes");
exports.moduleName = angular.module('application.contacts', [
    'ui.router'
])
    .component(add_contact_form_component_1.AddContactForm.selector, add_contact_form_component_1.AddContactForm)
    .component(contact_list_component_1.ContactList.selector, contact_list_component_1.ContactList)
    .component(contacts_container_1.ContactsContainer.selector, contacts_container_1.ContactsContainer)
    .component(add_contact_container_1.AddContactContainer.selector, add_contact_container_1.AddContactContainer)
    .service(contacts_service_1.ContactsService.selector, contacts_service_1.ContactsService)
    .config(contacts_routes_1.routing)
    .name;
//# sourceMappingURL=algoritms.module.jsjs.map