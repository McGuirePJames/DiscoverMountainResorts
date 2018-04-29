"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserLoginComponent_1 = require("../Components/UserLoginComponent");
var Actions = require("../Actions/UserLoginActions");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var loginError = _a.loginError, isPasswordRevealed = _a.isPasswordRevealed;
    return {
        loginError: loginError,
        isPasswordRevealed: isPasswordRevealed,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        login: function () { return dispatch(Actions.loginAsync()); },
        revealPassword: function () { return dispatch(Actions.revealPassword()); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UserLoginComponent_1.default);
//# sourceMappingURL=UserLoginContainer.js.map