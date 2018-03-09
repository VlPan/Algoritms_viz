"use strict";
exports.__esModule = true;
// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
var angular = require("angular");
/**
 * Import Module Components
 */
var signin_component_1 = require("../../components/home/home.component");
/**
 * Import Module Containers
 */
/**
 * Import Module Services
 */
/**
 * Import Module Routing
 */
var home_routes_1 = require("./home.routes");
exports.moduleName = angular.module('application.signin', [
    'ui.router'
])
    .component(signin_component_1.Home.selector, signin_component_1.Home)
    .config(home_routes_1.routing)
    .name;
//# sourceMappingURL=home.module.js.map