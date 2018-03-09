"use strict";
exports.__esModule = true;
var signin_component_1 = require("../../components/home/home.component");
exports.routing = function ($stateProvider) {
    'ngInject';
    $stateProvider
        .state('home', {
        parent: 'app',
        url: '/home',
        component: signin_component_1.Home.selector
    });
};
//# sourceMappingURL=home.routes.js.map