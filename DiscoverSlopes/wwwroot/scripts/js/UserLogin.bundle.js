webpackJsonp([1],{

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(40);
var UserLoginHOC_1 = __webpack_require__(328);
ReactDOM.render(React.createElement(UserLoginHOC_1.UserLoginHOC, null), document.getElementById('MountPoint'));


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(3);
var NavigationBarComponent_1 = __webpack_require__(86);
var LoginComponent_1 = __webpack_require__(329);
var UserLoginHOC = /** @class */ (function (_super) {
    __extends(UserLoginHOC, _super);
    function UserLoginHOC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserLoginHOC.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(NavigationBarComponent_1.NavigationBarComponent, null),
            React.createElement(LoginComponent_1.LoginComponent, null)));
    };
    return UserLoginHOC;
}(React.Component));
exports.UserLoginHOC = UserLoginHOC;


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(3);
var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginComponent.prototype.render = function () {
        return (React.createElement("div", null, "Login"));
    };
    return LoginComponent;
}(React.Component));
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

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
var React = __webpack_require__(3);
var NavigationBarComponent = /** @class */ (function (_super) {
    __extends(NavigationBarComponent, _super);
    function NavigationBarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationBarComponent.prototype.render = function () {
        return (React.createElement("nav", { className: "navbar navbar-expand-lg" },
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n                    html nav {\n                        padding: 0 !important;\n                        line-height: 0px;\n                    }\n                    \n                        html nav p {\n                            margin-bottom: 0;\n                            font-family: Segoe UI !important;\n                        }\n                    \n                        html nav .navbar-brand {\n                            height: inherit;\n                            display: flex;\n                            justify-content: center;\n                            align-items: center;\n                            color: white;\n                        }\n                    \n                    nav .container-navbar-brand {\n                        display: flex;\n                        height: 65px;\n                        background-color: #05202B;\n                        width: 100%;\n                        align-items: center;\n                        padding-left: 15px;\n                    }\n                    \n                    nav .container-user-profile {\n                        display: flex;\n                        justify-content: center;\n                        align-items: center;\n                        height: inherit;\n                        margin-left: auto;\n                        margin-right: 30px;\n                        cursor: pointer;\n                    }\n                    \n                        nav .container-user-profile .container-user-profile-name {\n                            height: inherit;\n                            display: flex;\n                            align-items: center;\n                            justify-content: center;\n                            flex-direction: column;\n                            margin-left: 10px;\n                        }\n                    \n                            nav .container-user-profile .container-user-profile-name .user-profile-name {\n                                font-size: 13pt;\n                                color: white;\n                                font-weight: 400;\n                            }\n                    \n                                nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(1) {\n                                    margin-bottom: 10px;\n                                }\n                    \n                                nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(2) {\n                                    margin-top: 10px;\n                                }\n                    \n                    nav .container-navbar-brand #UserProfilePicture {\n                        height: 50px;\n                        width: 50px;\n                        border-radius: 100%;\n                    }\n\n                "
                } }),
            React.createElement("div", { className: "container-navbar-brand" },
                React.createElement("a", { className: "navbar-brand", href: "#" }, "DiscoverMountainResorts"),
                React.createElement("div", { className: "container-user-profile" },
                    React.createElement("div", { className: "container-user-profile-image" },
                        React.createElement("img", { id: "UserProfilePicture", src: "https://storagewms.blob.core.windows.net/profilepictures/IMG_20171230_102809.jpg" })),
                    React.createElement("div", { className: "container-user-profile-name" },
                        React.createElement("p", { id: "UserFirstName", className: "user-profile-name" }, "James"),
                        React.createElement("p", { id: "UserLastName", className: "user-profile-name" }, "McGuire")))),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarNavAltMarkup" },
                React.createElement("div", { className: "navbar-nav" }))));
    };
    return NavigationBarComponent;
}(React.Component));
exports.NavigationBarComponent = NavigationBarComponent;


/***/ })

},[327]);
//# sourceMappingURL=UserLogin.bundle.js.map