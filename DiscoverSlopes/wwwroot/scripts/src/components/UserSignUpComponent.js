"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var UserSignUpComponent = /** @class */ (function (_super) {
    __extends(UserSignUpComponent, _super);
    function UserSignUpComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserSignUpComponent.prototype.render = function () {
        var _a = this.props, signUpError = _a.signUpError, isPasswordRevealed = _a.isPasswordRevealed, revealPassword = _a.revealPassword, signUp = _a.signUp;
        return (React.createElement("div", { id: "UserSignUpComponent" },
            React.createElement("div", { id: "UserSignUpComponentContainer", className: "row" },
                React.createElement("div", { className: "left col-sm-12 col-md-5" },
                    React.createElement("p", null, " Hello World ")),
                React.createElement("div", { className: "right col-sm-12 col-md-7" },
                    React.createElement("div", { className: "company-logo-name" },
                        React.createElement("div", { className: "company-logo" },
                            React.createElement("img", { src: "" })),
                        React.createElement("div", { className: "company-name" },
                            React.createElement("p", null, "Discover Mountain Resorts "))),
                    React.createElement("div", { className: "form-purpose" },
                        React.createElement("p", null, "Sign Up")),
                    React.createElement("div", { className: "form-data" },
                        React.createElement("div", { className: "form-group form-group-username" },
                            React.createElement("label", null, "Email Address"),
                            React.createElement("div", { className: "input-group" },
                                React.createElement("div", { className: "icon-container icon-user" },
                                    React.createElement("i", { className: "fa fa-user", "aria-hidden": "true" })),
                                React.createElement("div", null,
                                    React.createElement("input", { type: "text", placeholder: "Enter your email address", id: "CreateUserUsername" })))),
                        React.createElement("div", { className: "form-group form-group-password" },
                            React.createElement("label", null, "Password"),
                            React.createElement("div", { className: "input-group" },
                                React.createElement("div", { className: "icon-container icon-lock" },
                                    React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                                React.createElement("div", null,
                                    React.createElement("input", { id: "CreateUserPassword", placeholder: "Password", type: isPasswordRevealed ? "text" : "password" })),
                                React.createElement("div", { className: "icon-container icon-eye" },
                                    React.createElement("i", { className: "fa fa-eye", "aria-hidden": "true", onClick: revealPassword })))),
                        React.createElement("div", { className: "form-group form-group-password" },
                            React.createElement("label", null, "Confirm Password"),
                            React.createElement("div", { className: "input-group" },
                                React.createElement("div", { className: "icon-container icon-lock" },
                                    React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                                React.createElement("div", null,
                                    React.createElement("input", { id: "CreateUserConfirmPassword", placeholder: "Repeat Password", type: isPasswordRevealed ? "text" : "password" })),
                                React.createElement("div", { className: "icon-container icon-eye" },
                                    React.createElement("i", { className: "fa fa-eye", "aria-hidden": "true", onClick: revealPassword }))))),
                    React.createElement("div", { className: "sign-up-button-container" },
                        React.createElement("div", { id: "SignUp", onClick: signUp }, "Sign Up")),
                    signUpError.length > 0 ? (React.createElement("div", { className: "sign-up-error-container" },
                        React.createElement("p", { className: "alert alert-danger" },
                            " ",
                            signUpError))) : null))));
    };
    return UserSignUpComponent;
}(React.Component));
exports.UserSignUpComponent = UserSignUpComponent;
exports.default = UserSignUpComponent;
//# sourceMappingURL=UserSignUpComponent.js.map