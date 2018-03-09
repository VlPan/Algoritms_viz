"use strict";
exports.__esModule = true;
/**
 * Import the polyfills and vendor files
 */
require("./polyfills");
require("./vendor");
/**
 * Import the global styles
 */
require("./css-settings/index.scss");
/**
 * Temporary Import angular
 * see: https://github.com/Microsoft/TypeScript/issues/10178
 */
var angular = require("angular");
/**
 *  Import module to be bootstrapped
 */
var app_module_1 = require("./app/app.module");
/**
 * Bootstrap the application using the imported moduleName
 */
var bootstrapModuleName = angular.module('application.bootstrap', [
    app_module_1.moduleName
]).name;
//# sourceMappingURL=index.js.map