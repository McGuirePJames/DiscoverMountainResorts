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
var UserLoginComponent = /** @class */ (function (_super) {
    __extends(UserLoginComponent, _super);
    function UserLoginComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLoginComponent.prototype.render = function () {
        var _a = this.props, loginError = _a.loginError, isPasswordRevealed = _a.isPasswordRevealed, revealPassword = _a.revealPassword, login = _a.login;
        return (React.createElement("div", { id: "LoginComponentContainer" },
            React.createElement("div", { id: "LoginComponent", className: "row" },
                React.createElement("div", { className: "left col-sm-12 col-md-5" },
                    React.createElement("div", null,
                        React.createElement("p", { className: "display-4" }, "Login")),
                    React.createElement("div", null,
                        React.createElement("a", { href: "/User/SignUp" }, "Don't have an account?")),
                    React.createElement("div", null,
                        React.createElement("a", { href: "/User/ForgotPassword" }, "Forgot Password?"))),
                React.createElement("div", { className: "right col-sm-12 col-md-7" },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", null, "Username"),
                        React.createElement("div", { className: "form-group form-group-username" },
                            React.createElement("div", { className: "icon-container icon-envelope" },
                                React.createElement("i", { className: "fa fa-envelope", "aria-hidden": "true" })),
                            React.createElement("div", null,
                                React.createElement("input", { id: "LoginUsername", type: "text" })))),
                    React.createElement("div", { className: "form-group form-group-password" },
                        React.createElement("label", null, "Password"),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", { className: "icon-container icon-lock" },
                                React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                            React.createElement("div", null,
                                React.createElement("input", { id: "LoginPassword", type: isPasswordRevealed ? "text" : "password" })),
                            React.createElement("div", { className: "icon-container icon-eye" },
                                React.createElement("i", { className: "fa fa-eye", "aria-hidden": "true", onClick: revealPassword })))),
                    React.createElement("div", { className: "login-container" },
                        React.createElement("div", { id: "LoginButton", onClick: login }, "Login")),
                    loginError.length > 0 ? (React.createElement("div", { className: "login-error-container" },
                        React.createElement("p", { className: "alert alert-danger" },
                            " ",
                            loginError))) : null))));
    };
    return UserLoginComponent;
}(React.Component));
exports.default = UserLoginComponent;
//# sourceMappingURL=UserLoginComponent.js.map