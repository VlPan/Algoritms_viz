"use strict";
exports.__esModule = true;
// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
var angular = require("angular");
/**
 * Import Application Modules
 */
var core_module_1 = require("./views/core/core.module");
var contacts_module_1 = require("./views/statistics/contacts.module");
var home_module_1 = require("./views/home/home.module");
exports.moduleName = angular.module('application', [
    core_module_1.moduleName,
    home_module_1.moduleName,
    contacts_module_1.moduleName,
])
    .name;
//# sourceMappingURL=app.module.js.map