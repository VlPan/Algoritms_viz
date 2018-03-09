"use strict";
exports.__esModule = true;
var app_component_1 = require("./components/app/app.component");
exports.routing = function ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('app', {
        abstract: true,
        url: '/app',
        component: app_component_1.App.selector
    });
    $urlRouterProvider.otherwise('/app/contact');
};
//# sourceMappingURL=core.routes.js.map