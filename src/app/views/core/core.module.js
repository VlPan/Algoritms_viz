"use strict";
exports.__esModule = true;
// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
var angular = require("angular");
/**
 * Import Module Components
 */
var app_component_1 = require("./components/app/app.component");
var root_component_1 = require("./components/root/root.component");
/**
 * Import Module Configuration
 */
var core_configuration_1 = require("./core.configuration");
var core_routes_1 = require("./core.routes");
exports.moduleName = angular.module('application.core', [
    'ui.router'
])
    .component(app_component_1.App.selector, app_component_1.App)
    .component(root_component_1.Root.selector, root_component_1.Root)
    .config(core_configuration_1.configuration)
    .config(core_routes_1.routing)
    .name;
//# sourceMappingURL=core.module.js.map