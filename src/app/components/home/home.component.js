"use strict";
exports.__esModule = true;
/**
 * Import the Component styles
 */
require("./home.component.scss");
require("./btn.component.scss");
var SignInController = (function () {
    function SignInController() {
        this.name = 'Jane';
    }
    return SignInController;
}());
var SignIn = (function () {
    function SignIn() {
    }
    return SignIn;
}());
SignIn.selector = 'signin';
SignIn.controller = SignInController;
SignIn.template = require('./home.component.html');
exports.SignIn = SignIn;
//# sourceMappingURL=home.component.jsap