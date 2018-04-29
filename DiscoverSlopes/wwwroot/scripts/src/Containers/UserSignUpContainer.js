"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserSignUpComponent_1 = require("../Components/UserSignUpComponent");
var Actions = require("../Actions/UserSignUpActions");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var signUpError = _a.signUpError, isPasswordRevealed = _a.isPasswordRevealed;
    return {
        signUpError: signUpError,
        isPasswordRevealed: isPasswordRevealed,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    //findThis
    return {
        revealPassword: function () { return dispatch(Actions.revealPassword()); },
        signUp: function () { return dispatch(Actions.signUp()); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(UserSignUpComponent_1.default);
//# sourceMappingURL=UserSignUpContainer.js.map