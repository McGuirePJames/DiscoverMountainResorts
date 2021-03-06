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
var NavigationBarContainer_1 = require("../Containers/NavigationBarContainer");
var UserLoginComponent_1 = require("../Components/UserLoginComponent");
var UserLoginHOC = /** @class */ (function (_super) {
    __extends(UserLoginHOC, _super);
    function UserLoginHOC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLoginHOC.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(NavigationBarContainer_1.default, null),
            React.createElement(UserLoginComponent_1.default, { loginError: "" })));
    };
    return UserLoginHOC;
}(React.Component));
exports.UserLoginHOC = UserLoginHOC;
//# sourceMappingURL=UserLoginHOC.js.map