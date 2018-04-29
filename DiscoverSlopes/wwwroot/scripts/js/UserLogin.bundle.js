webpackJsonp([1],{

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = 'LOGIN';
exports.TOGGLE_PASSWORD_REVEAL = 'TOGGLE_PASSWORD_REVEAL';


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(30);
var react_redux_1 = __webpack_require__(48);
var UserLoginContainer_1 = __webpack_require__(349);
var NavigationBarComponent_1 = __webpack_require__(46);
var UserLoginStores_1 = __webpack_require__(352);
ReactDOM.render(React.createElement(NavigationBarComponent_1.NavigationBarComponent, null), document.getElementById('NavigationBarMountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserLoginStores_1.UserLoginStore },
    React.createElement(UserLoginContainer_1.default, null)), document.getElementById('LoginMountPoint'));


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserLoginComponent_1 = __webpack_require__(350);
var Actions = __webpack_require__(351);
var react_redux_1 = __webpack_require__(48);
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


/***/ }),

/***/ 350:
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


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(167);
var GetAntiForgeryToken_1 = __webpack_require__(94);
var $ = __webpack_require__(23);
function loginAsync() {
    var username = document.getElementById('LoginUsername').value;
    var password = document.getElementById('LoginPassword').value;
    return function (dispatch) {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/User/LoginAsync",
            type: "POST",
            dataType: "json",
            data: GetAntiForgeryToken_1.default({ username: username, password: password }),
            success: function (response) {
                if (response.success) {
                    window.location.href = "/";
                }
                else {
                    dispatch({ type: constants.LOGIN, payload: response.responseText });
                }
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
}
exports.loginAsync = loginAsync;
function revealPassword() {
    return {
        type: constants.TOGGLE_PASSWORD_REVEAL
    };
}
exports.revealPassword = revealPassword;


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(95);
var redux_1 = __webpack_require__(66);
var UserLoginReducer_1 = __webpack_require__(353);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.UserLoginStore = redux_1.createStore(UserLoginReducer_1.UserLoginReducer, {
    loginError: "",
    isPasswordRevealed: false,
}, middleWare);


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UserLoginConstants_1 = __webpack_require__(167);
function UserLoginReducer(state, action) {
    switch (action.type) {
        case UserLoginConstants_1.LOGIN:
            return __assign({}, state, { loginError: action.payload });
        case UserLoginConstants_1.TOGGLE_PASSWORD_REVEAL: {
            if (state.isPasswordRevealed) {
                return __assign({}, state, { isPasswordRevealed: false });
            }
            return __assign({}, state, { isPasswordRevealed: true });
        }
    }
    return state;
}
exports.UserLoginReducer = UserLoginReducer;


/***/ }),

/***/ 46:
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
        return (React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light" },
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n                        nav p {\n                            margin-bottom: 0;\n                            color: white !important;\n                        }\n                        \n                        nav a {\n                            color: white !important;\n                        }\n                        \n                        nav {\n                            line-height: 0px;\n                            background-color: #05202B !important;\n                            min-height: 60px;\n                        }\n                        \n                            nav .container-user-profile {\n                                display: flex;\n                                justify-content: center;\n                                align-items: center;\n                                height: inherit;\n                                margin-left: auto;\n                                margin-right: 30px;\n                                cursor: pointer;\n                            }\n                        \n                                nav .container-user-profile .container-user-profile-name {\n                                    height: inherit;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    flex-direction: column;\n                                    margin-left: 10px;\n                                }\n                        \n                                    nav .container-user-profile .container-user-profile-name .user-profile-name {\n                                        font-size: 13pt;\n                                        color: white;\n                                        font-weight: 400;\n                                    }\n                        \n                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(1) {\n                                            margin-bottom: 10px;\n                                        }\n                        \n                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(2) {\n                                            margin-top: 10px;\n                                        }\n                        \n                            nav #UserProfilePicture {\n                                height: 50px;\n                                width: 50px;\n                                border-radius: 100%;\n                            }\n\n                            html nav.navbar-light .navbar-toggler-icon {\n                                background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n                            }\n                        "
                } }),
            React.createElement("a", { className: "navbar-brand", href: "/" }, "Discover Mountain Resorts"),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarText", "aria-controls": "navbarText", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarText" },
                React.createElement("ul", { className: "navbar-nav mr-auto" }),
                React.createElement("span", { className: "navbar-text" },
                    React.createElement("div", { className: "container-user-profile" },
                        React.createElement("div", { className: "container-user-profile-image" },
                            React.createElement("img", { id: "UserProfilePicture", src: "https://storagewms.blob.core.windows.net/profilepictures/IMG_20171230_102809.jpg" })),
                        React.createElement("div", { className: "container-user-profile-name" },
                            React.createElement("p", { id: "UserFirstName", className: "user-profile-name" }, "James"),
                            React.createElement("p", { id: "UserLastName", className: "user-profile-name" }, "McGuire")))))));
    };
    return NavigationBarComponent;
}(React.Component));
exports.NavigationBarComponent = NavigationBarComponent;


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(23);
//export default function AddAntiForgeryToken(data) {
//    data.__RequestVerificationToken = $('#__AjaxAntiForgeryForm input[name=__RequestVerificationToken]').val();
//    return data;
//}
function GetAntiForgeryToken(data) {
    data.__RequestVerificationToken = $("[name='__RequestVerificationToken']").val();
    return data;
}
exports.default = GetAntiForgeryToken;
;


/***/ })

},[332]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudHJ5L1VzZXJMb2dpbkVudHJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udGFpbmVycy9Vc2VyTG9naW5Db250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VzZXJMb2dpbkNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvVXNlckxvZ2luQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3Jlcy9Vc2VyTG9naW5TdG9yZXMudHN4Iiwid2VicGFjazovLy8uL3NyYy9SZWR1Y2Vycy9Vc2VyTG9naW5SZWR1Y2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWEsYUFBSyxHQUFHLE9BQU8sQ0FBQztBQUdoQiw4QkFBc0IsR0FBRyx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUNIL0QsbUNBQStCO0FBQy9CLHVDQUFzQztBQUV0Qyw0Q0FBdUM7QUFFdkMsb0RBQWtFO0FBS2xFLHVEQUE2RTtBQUM3RSxpREFBMEQ7QUFHMUQsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQywrQ0FBc0IsT0FBRyxFQUMxQixRQUFRLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLENBQ3JEO0FBRUQsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxzQkFBUSxJQUFDLEtBQUssRUFBRSxnQ0FBYztJQUMzQixvQkFBQyw0QkFBa0IsT0FBRyxDQUNmLEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBZ0IsQ0FDNUQsQ0FBQzs7Ozs7Ozs7Ozs7QUN4QkYsb0RBQW9FO0FBQ3BF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LEdBQVEsQ0FDeEM7WUFDVCw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCLEVBQUMsRUFBRSxFQUFDLFlBQVk7Z0JBQ3JELDRCQUFJLFNBQVMsRUFBQyxvQkFBb0IsR0FFN0I7Z0JBQ0wsOEJBQU0sU0FBUyxFQUFDLGFBQWE7b0JBQ3pCLDZCQUFLLFNBQVMsRUFBQyx3QkFBd0I7d0JBQ25DLDZCQUFLLFNBQVMsRUFBQyw4QkFBOEI7NEJBQ3pDLDZCQUFLLEVBQUUsRUFBQyxvQkFBb0IsRUFBQyxHQUFHLEVBQUMsa0ZBQWtGLEdBQUcsQ0FDcEg7d0JBQ04sNkJBQUssU0FBUyxFQUFDLDZCQUE2Qjs0QkFDeEMsMkJBQUcsRUFBRSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsbUJBQW1CLFlBQVU7NEJBQzdELDJCQUFHLEVBQUUsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLG1CQUFtQixjQUFZLENBQzVELENBQ0osQ0FDSCxDQUNMLENBQ0osQ0FDVDtJQUNMLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQ0F2RjJDLEtBQUssQ0FBQyxTQUFTLEdBdUYxRDtBQXZGWSx3REFBc0I7Ozs7Ozs7Ozs7O0FDRm5DLGdDQUEyQjtBQUUzQixxREFBcUQ7QUFDckQsaUhBQWlIO0FBQ2pILGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsNkJBQTRDLElBQUk7SUFDNUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pGLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFIRCxzQ0FHQztBQUFBLENBQUMiLCJmaWxlIjoiVXNlckxvZ2luLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTic7XHJcbmV4cG9ydCB0eXBlIExPR0lOID0gdHlwZW9mIExPR0lOO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgPSAnVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCc7XHJcbmV4cG9ydCB0eXBlIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgPSB0eXBlb2YgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9Vc2VyTG9naW5Db25zdGFudHMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgVXNlckxvZ2luQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvVXNlckxvZ2luQ29udGFpbmVyJztcclxuaW1wb3J0IHsgVXNlckxvZ2luUmVkdWNlciB9IGZyb20gJy4uL1JlZHVjZXJzL1VzZXJMb2dpblJlZHVjZXInO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5TdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlckxvZ2luU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9Vc2VyTG9naW5BY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudCdcclxuaW1wb3J0IHsgVXNlckxvZ2luU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvVXNlckxvZ2luU3RvcmVzJ1xyXG5cclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IC8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05hdmlnYXRpb25CYXJNb3VudFBvaW50JylcclxuKVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtVc2VyTG9naW5TdG9yZX0+XHJcbiAgICAgICAgPFVzZXJMb2dpbkNvbnRhaW5lciAvPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTG9naW5Nb3VudFBvaW50JykgYXMgSFRNTEVsZW1lbnRcclxuKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbnRyeS9Vc2VyTG9naW5FbnRyeS50c3giLCJpbXBvcnQgIFVzZXJMb2dpbkNvbXBvbmVudCAgZnJvbSAnLi4vQ29tcG9uZW50cy9Vc2VyTG9naW5Db21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvVXNlckxvZ2luQWN0aW9ucyc7XHJcbmltcG9ydCB7IFVzZXJMb2dpblN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyTG9naW5TdG9yZVN0YXRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGxvZ2luRXJyb3IsIGlzUGFzc3dvcmRSZXZlYWxlZCB9OiBVc2VyTG9naW5TdG9yZVN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luRXJyb3IsXHJcbiAgICAgICAgaXNQYXNzd29yZFJldmVhbGVkLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb25zLlVzZXJMb2dpbkFjdGlvbj4gKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvZ2luOiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLmxvZ2luQXN5bmMoKSksXHJcbiAgICAgICAgcmV2ZWFsUGFzc3dvcmQ6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMucmV2ZWFsUGFzc3dvcmQoKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFVzZXJMb2dpbkNvbXBvbmVudCBhcyBhbnkgYXMgUmVhY3QuU0ZDKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250YWluZXJzL1VzZXJMb2dpbkNvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuLy9pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxvZ2luRXJyb3I6IHN0cmluZztcclxuICAgIGlzUGFzc3dvcmRSZXZlYWxlZD86IGJvb2xlYW47XHJcbiAgICBsb2dpbj86ICgpID0+IHZvaWQ7XHJcbiAgICByZXZlYWxQYXNzd29yZD86ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmNsYXNzIFVzZXJMb2dpbkNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgb2JqZWN0PiB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsb2dpbkVycm9yLCBpc1Bhc3N3b3JkUmV2ZWFsZWQsIHJldmVhbFBhc3N3b3JkLCBsb2dpbiB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIkxvZ2luQ29tcG9uZW50Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiTG9naW5Db21wb25lbnRcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgY29sLXNtLTEyIGNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNwbGF5LTRcIj5Mb2dpbjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1VzZXIvU2lnblVwXCI+RG9uJ3QgaGF2ZSBhbiBhY2NvdW50PzwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL0ZvcmdvdFBhc3N3b3JkXCI+Rm9yZ290IFBhc3N3b3JkPzwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgY29sLXNtLTEyIGNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlVzZXJuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLWVudmVsb3BlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWVudmVsb3BlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cIkxvZ2luVXNlcm5hbWVcIiB0eXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLWxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJMb2dpblBhc3N3b3JkXCIgdHlwZT17aXNQYXNzd29yZFJldmVhbGVkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLWV5ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtyZXZlYWxQYXNzd29yZH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvZ2luQnV0dG9uXCIgb25DbGljaz17bG9naW59ID5Mb2dpbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5FcnJvci5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tZXJyb3ItY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiB7bG9naW5FcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJMb2dpbkNvbXBvbmVudFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL1VzZXJMb2dpbkNvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cydcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL1R5cGVzL1VzZXJMb2dpblN0b3JlU3RhdGUnXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9naW4ge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLkxPR0lOXHJcbiAgICBwYXlsb2FkOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlUGFzc3dvcmRSZXZlYWwge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlRPR0dMRV9QQVNTV09SRF9SRVZFQUxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXNlckxvZ2luQWN0aW9uID0gTG9naW4gfCBUb2dnbGVQYXNzd29yZFJldmVhbCBcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5Bc3luYygpOiBEaXNwYXRjaDxhbnk+e1xyXG4gICAgdmFyIHVzZXJuYW1lOiBzdHJpbmcgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvZ2luVXNlcm5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgdmFyIHBhc3N3b3JkOiBzdHJpbmcgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvZ2luUGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvTG9naW5Bc3luY1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHt1c2VybmFtZTogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLkxPR0lOLCBwYXlsb2FkOiByZXNwb25zZS5yZXNwb25zZVRleHQgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsUGFzc3dvcmQoKTogVG9nZ2xlUGFzc3dvcmRSZXZlYWwge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBjb25zdGFudHMuVE9HR0xFX1BBU1NXT1JEX1JFVkVBTFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9Vc2VyTG9naW5BY3Rpb25zLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyB0aHVuayB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFVzZXJMb2dpbkNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL1VzZXJMb2dpbkNvbnRhaW5lcic7XHJcbmltcG9ydCB7IFVzZXJMb2dpblJlZHVjZXIgfSBmcm9tICcuLi9SZWR1Y2Vycy9Vc2VyTG9naW5SZWR1Y2VyJztcclxuaW1wb3J0IHsgVXNlckxvZ2luU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL1VzZXJMb2dpblN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvVXNlckxvZ2luQWN0aW9ucyc7XHJcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZSc7XHJcblxyXG5jb25zdCBtaWRkbGVXYXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyTG9naW5TdG9yZSA9IGNyZWF0ZVN0b3JlPFVzZXJMb2dpblN0b3JlU3RhdGU+KFVzZXJMb2dpblJlZHVjZXIsIHtcclxuICAgIGxvZ2luRXJyb3I6IFwiXCIsXHJcbiAgICBpc1Bhc3N3b3JkUmV2ZWFsZWQ6IGZhbHNlLFxyXG59LCBtaWRkbGVXYXJlKTtcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmVzL1VzZXJMb2dpblN0b3Jlcy50c3giLCJpbXBvcnQgeyBVc2VyTG9naW5TdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlckxvZ2luU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgTE9HSU4sIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgfSBmcm9tICcuLi9Db25zdGFudHMvVXNlckxvZ2luQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlckxvZ2luQWN0aW9uIH0gZnJvbSAnLi4vQWN0aW9ucy9Vc2VyTG9naW5BY3Rpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyTG9naW5SZWR1Y2VyKHN0YXRlOiBVc2VyTG9naW5TdG9yZVN0YXRlLCBhY3Rpb246IFVzZXJMb2dpbkFjdGlvbik6IFVzZXJMb2dpblN0b3JlU3RhdGUge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9HSU46XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgbG9naW5FcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTDoge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaXNQYXNzd29yZFJldmVhbGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBpc1Bhc3N3b3JkUmV2ZWFsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBpc1Bhc3N3b3JkUmV2ZWFsZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWR1Y2Vycy9Vc2VyTG9naW5SZWR1Y2VyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25CYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDJCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAudXNlci1wcm9maWxlLW5hbWU6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2ICNVc2VyUHJvZmlsZVBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgbmF2Lm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsIDEpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA4aDI0TTQgMTZoMjRNNCAyNGgyNCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPkRpc2NvdmVyIE1vdW50YWluIFJlc29ydHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJUZXh0XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclRleHRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJVc2VyUHJvZmlsZVBpY3R1cmVcIiBzcmM9XCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9JTUdfMjAxNzEyMzBfMTAyODA5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJVc2VyRmlyc3ROYW1lXCIgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLW5hbWVcIj5KYW1lczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlVzZXJMYXN0TmFtZVwiIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+TWNHdWlyZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQW50aUZvcmdlcnlUb2tlbihkYXRhKSB7XHJcbi8vICAgIGRhdGEuX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4gPSAkKCcjX19BamF4QW50aUZvcmdlcnlGb3JtIGlucHV0W25hbWU9X19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5dJykudmFsKCk7XHJcbi8vICAgIHJldHVybiBkYXRhO1xyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0QW50aUZvcmdlcnlUb2tlbihkYXRhKSB7XHJcbiAgICBkYXRhLl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuID0gJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==