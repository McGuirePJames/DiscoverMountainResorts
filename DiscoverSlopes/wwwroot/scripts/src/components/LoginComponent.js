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
var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginComponent.prototype.render = function () {
        return (React.createElement("div", { id: "LoginComponent" },
            React.createElement("div", { className: "left" },
                React.createElement("div", null,
                    React.createElement("p", null, "Discover Mountain Resorts ")),
                React.createElement("div", null,
                    React.createElement("p", null, "Don't have an account?"),
                    React.createElement("a", null, " Click here to create one ")),
                React.createElement("div", null,
                    React.createElement("p", null, "Forgot Password?"),
                    React.createElement("a", null, " Click here to reset password ")),
                React.createElement("div", { className: "right" },
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { htmlFor: "exampleSelect1" }, "Example select"),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", null,
                                React.createElement("i", { className: "fa fa-envelope", "aria-hidden": "true" })),
                            React.createElement("div", null,
                                React.createElement("input", { type: "text" })))),
                    React.createElement("div", { className: "form-group" },
                        React.createElement("label", { htmlFor: "exampleSelect1" }, "Example select"),
                        React.createElement("div", { className: "form-group" },
                            React.createElement("div", null,
                                React.createElement("i", { className: "fa fa-lock", "aria-hidden": "true" })),
                            React.createElement("div", null,
                                React.createElement("input", { type: "password" })),
                            React.createElement("div", null,
                                React.createElement("i", { className: "fa fa-eye", "aria-hidden": "true" })))),
                    React.createElement("div", { className: "login-container" },
                        React.createElement("button", { type: "button" }, "Login"))))));
    };
    return LoginComponent;
}(React.Component));
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=LoginComponent.js.map