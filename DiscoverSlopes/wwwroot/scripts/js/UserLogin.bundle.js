webpackJsonp([1],{

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = 'LOGIN';
exports.TOGGLE_PASSWORD_REVEAL = 'TOGGLE_PASSWORD_REVEAL';


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.SIGN_OUT = 'SIGN_OUT';


/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(11);
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
function GetAntiForgeryTokenWithoutData() {
    return $("[name='__RequestVerificationToken']").val();
}
exports.GetAntiForgeryTokenWithoutData = GetAntiForgeryTokenWithoutData;
;


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(34);
var react_redux_1 = __webpack_require__(18);
var UserLoginContainer_1 = __webpack_require__(354);
var UserLoginStores_1 = __webpack_require__(357);
var NavigationBarContainer_1 = __webpack_require__(51);
var CurrentUserStore_1 = __webpack_require__(55);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
    React.createElement(NavigationBarContainer_1.default, null)), document.getElementById('NavigationBarMountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserLoginStores_1.UserLoginStore },
    React.createElement(UserLoginContainer_1.default, null)), document.getElementById('LoginMountPoint'));


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserLoginComponent_1 = __webpack_require__(355);
var Actions = __webpack_require__(356);
var react_redux_1 = __webpack_require__(18);
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

/***/ 355:
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

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(172);
var GetAntiForgeryToken_1 = __webpack_require__(26);
var $ = __webpack_require__(11);
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

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(37);
var redux_1 = __webpack_require__(27);
var UserLoginReducer_1 = __webpack_require__(358);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.UserLoginStore = redux_1.createStore(UserLoginReducer_1.UserLoginReducer, {
    loginError: "",
    isPasswordRevealed: false,
}, middleWare);


/***/ }),

/***/ 358:
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
var UserLoginConstants_1 = __webpack_require__(172);
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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavigationBarComponent_1 = __webpack_require__(52);
var Actions = __webpack_require__(53);
var react_redux_1 = __webpack_require__(18);
function mapStateToProps(_a) {
    var emailAddress = _a.emailAddress, userProfileImageURL = _a.userProfileImageURL;
    return {
        emailAddress: emailAddress,
        userProfileImageURL: userProfileImageURL,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        getCurrentUserNew: function () { return dispatch(Actions.getCurrentUserNew()); },
        signOut: function () { return dispatch(Actions.signOut()); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent_1.NavigationBarComponent);


/***/ }),

/***/ 52:
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
var $ = __webpack_require__(11);
var GetAntiForgeryToken_1 = __webpack_require__(26);
var NavigationBarComponent = /** @class */ (function (_super) {
    __extends(NavigationBarComponent, _super);
    function NavigationBarComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.getCurrentUserF = _this.getCurrentUserF.bind(_this);
        _this.authorizeUser = _this.authorizeUser.bind(_this);
        return _this;
    }
    NavigationBarComponent.prototype.getCurrentUserF = function () {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/User/GetCurrentUser",
            type: "POST",
            data: GetAntiForgeryToken_1.default({}),
            success: function (response) {
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
    NavigationBarComponent.prototype.authorizeUser = function () {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/User/AuthorizeCurrentUser",
            type: "POST",
            data: GetAntiForgeryToken_1.default({}),
            success: function (response) {
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
    NavigationBarComponent.prototype.componentDidMount = function () {
        this.props.getCurrentUserNew();
    };
    NavigationBarComponent.prototype.render = function () {
        var _a = this.props, emailAddress = _a.emailAddress, userProfileImageURL = _a.userProfileImageURL, getCurrentUserNew = _a.getCurrentUserNew, signOut = _a.signOut;
        return (React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light" },
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n                        nav p {\n                            margin-bottom: 0;\n                            color: white !important;\n                        }\n                        \n                        nav a {\n                            color: white !important;\n                        }\n                        .navbar{\n                            height: 40px;\n                        }\n                        nav {\n                            line-height: 0px;\n                            background-color: #05202B !important;\n                            min-height: 60px;\n                        }\n                        \n                            nav .container-user-profile {\n                                display: flex;\n                                justify-content: center;\n                                align-items: center;\n                                height: inherit;\n                                margin-left: auto;\n                                margin-right: 30px;\n                            }\n                        \n                                nav .container-user-profile .container-user-profile-name {\n                                    height: inherit;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    margin-left: 10px;\n                                }\n                        \n                                    nav .container-user-profile .container-user-profile-name .user-profile-name {\n                                        font-size: 13pt;\n                                        color: white;\n                                        font-weight: 400;\n                                    }\n\n                        \n                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(2) {\n                                            margin-top: 10px;\n                                        }\n                            nav .container-user-profile-name{\n                                display: flex;\n                                align-items: center;\n                                flex-direction: row;\n                                height: 100% !important;\n                            }\n                            \n                            nav .container-user-profile-name .fa-sign-out{\n                                color: white;\n                                margin-left: 10px;\n                                display: flex;\n                                align-items: center;\n                                margin-top: 3px;\n                                cursor: pointer;\n                            }\n                            nav #UserProfilePicture {\n                                height: 50px;\n                                width: 50px;\n                                border-radius: 100%;\n                            }\n                            nav .sign-in-up-container{\n                                display: flex;\n                                align-items: center;\n                                height: 100%;\n                            }\n                            nav .sign-in-up-container .separator{\n                                width: 2px;\n                                height: 20px;\n                                margin-left: 10px;\n                                margin-right: 10px;\n                                background-color: rgba(184, 184, 184, 0.91)\n                            }\n                            html nav.navbar-light .navbar-toggler-icon {\n                                background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n                            }\n                            .navbar{\n                                -webkit-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                -moz-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                z-index: 3;\n                            }\n                        "
                } }),
            React.createElement("a", { className: "navbar-brand", href: "/" }, "Discover Mountain Resorts"),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarText", "aria-controls": "navbarText", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarText" },
                React.createElement("ul", { className: "navbar-nav mr-auto" }),
                React.createElement("span", { className: "navbar-text" }, this.props.emailAddress != "" ? (React.createElement("div", { className: "container-user-profile" },
                    React.createElement("div", { className: "container-user-profile-image" },
                        React.createElement("img", { id: "UserProfilePicture", src: "https://storagewms.blob.core.windows.net/profilepictures/IMG_20171230_102809.jpg" })),
                    React.createElement("div", { className: "container-user-profile-name" },
                        React.createElement("p", { id: "UserFirstName", className: "user-profile-name" }, this.props.emailAddress),
                        React.createElement("div", null,
                            React.createElement("i", { className: "fa fa-sign-out", "aria-hidden": "true", onClick: signOut }))))) : (React.createElement("div", { className: "sign-in-up-container" },
                    React.createElement("div", { className: "sign-in-container" },
                        React.createElement("a", { href: "/User/Login" }, "Sign In")),
                    React.createElement("div", { className: "separator" }, " "),
                    React.createElement("div", { className: "sign-up-container" },
                        React.createElement("a", { href: "/User/SignUp" }, "Sign Up"))))))));
    };
    return NavigationBarComponent;
}(React.Component));
exports.NavigationBarComponent = NavigationBarComponent;


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(20);
var $ = __webpack_require__(11);
function getCurrentUserNew() {
    return function (dispatch) {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/User/GetCurrentUser",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val() //GetAntiForgeryTokenWithoutData()
            },
            success: function (response) {
                //console.log(response.responseText)
                if (response.success) {
                    dispatch({ type: constants.SET_CURRENT_USER, payload: response.responseText });
                }
                else {
                    dispatch({ type: constants.SET_CURRENT_USER, payload: "{}" });
                }
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
}
exports.getCurrentUserNew = getCurrentUserNew;
function signOut() {
    var test = "";
    return function (dispatch) {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/User/SignOutAsync",
            type: "POST",
            //dataType: "json",
            //contentType: "application/json; charset=utf-8",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()
            },
            success: function (response) {
                var testAgain = response;
                if (response.success) {
                    window.location.reload();
                    dispatch({ type: constants.SIGN_OUT });
                }
            },
            error: function (request, status, error) {
                var val = request.responseText;
                alert("error" + val);
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
}
exports.signOut = signOut;


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(37);
var redux_1 = __webpack_require__(27);
var UserReducer_1 = __webpack_require__(56);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.CurrentUserStore = redux_1.createStore(UserReducer_1.UserReducer, {
    emailAddress: "",
    userProfileImageURL: "",
}, middleWare);


/***/ }),

/***/ 56:
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
var CurrentUserConstants_1 = __webpack_require__(20);
function UserReducer(state, action) {
    var test = "";
    switch (action.type) {
        case CurrentUserConstants_1.SET_CURRENT_USER: {
            var emailAddress = action.payload["email"];
            return __assign({}, state, { emailAddress: emailAddress });
        }
        case CurrentUserConstants_1.SIGN_OUT: {
            return __assign({}, state, { emailAddress: "", userProfileImageURL: "" });
        }
    }
    return state;
}
exports.UserReducer = UserReducer;


/***/ })

},[353]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRW50cnkvVXNlckxvZ2luRW50cnkudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL1VzZXJMb2dpbkNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVXNlckxvZ2luQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9Vc2VyTG9naW5BY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmVzL1VzZXJMb2dpblN0b3Jlcy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZHVjZXJzL1VzZXJMb2dpblJlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkdWNlcnMvVXNlclJlZHVjZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWEsYUFBSyxHQUFHLE9BQU8sQ0FBQztBQUdoQiw4QkFBc0IsR0FBRyx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUNIbEQsd0JBQWdCLEdBQUcsa0JBQWtCO0FBR3JDLGdCQUFRLEdBQUcsVUFBVTs7Ozs7Ozs7Ozs7QUNIbEMsZ0NBQTJCO0FBRTNCLHFE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Q0FBQztJQUNOLENBQUM7QUFDTCxDQUFDO0FBaENELDBCQWdDQzs7Ozs7Ozs7Ozs7QUM3RUQsNENBQStDO0FBRS9DLHNDQUFxRDtBQUVyRCw0Q0FBc0Q7QUFLdEQsSUFBTSxVQUFVLEdBQUcsdUJBQWUsQ0FBQyxxQkFBSyxDQUFDLENBQUM7QUFFN0Isd0JBQWdCLEdBQUcsbUJBQVcsQ0FBd0IseUJBQVcsRUFBRTtJQUM1RSxZQUFZLEVBQUUsRUFBRTtJQUNoQixtQkFBbUIsRUFBRSxFQUFFO0NBQzFCLEVBQUUsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZixxREFBK0U7QUFFL0UscUJBQTRCLEtBQTRCLEVBQUUsTUFBeUI7SUFDL0UsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssdUNBQWdCLENBQUMsQ0FBQztZQUNuQixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLG9CQUNPLEtBQUssSUFDUixZQUFZLEVBQUUsWUFBWSxJQUM3QjtTQUNKO1FBQ0QsS0FBSywrQkFBUSxDQUFDLENBQUM7WUFDWCxvQkFDTyxLQUFLLElBQ1IsWUFBWSxFQUFFLEVBQUUsRUFDaEIsbUJBQW1CLEVBQUUsRUFBRSxJQUMxQjtTQUNKO0tBRUo7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBcEJELGtDQW9CQyIsImZpbGUiOiJVc2VyTG9naW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJztcclxuZXhwb3J0IHR5cGUgTE9HSU4gPSB0eXBlb2YgTE9HSU47XHJcblxyXG5leHBvcnQgY29uc3QgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCA9ICdUT0dHTEVfUEFTU1dPUkRfUkVWRUFMJztcclxuZXhwb3J0IHR5cGUgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCA9IHR5cGVvZiBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cy50c3giLCJleHBvcnQgY29uc3QgU0VUX0NVUlJFTlRfVVNFUiA9ICdTRVRfQ1VSUkVOVF9VU0VSJ1xyXG5leHBvcnQgdHlwZSBTRVRfQ1VSUkVOVF9VU0VSID0gdHlwZW9mIFNFVF9DVVJSRU5UX1VTRVJcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVCA9ICdTSUdOX09VVCdcclxuZXhwb3J0IHR5cGUgU0lHTl9PVVQgPSB0eXBlb2YgU0lHTl9PVVRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuLy8gICAgZGF0YS5fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiA9ICQoJyNfX0FqYXhBbnRpRm9yZ2VyeUZvcm0gaW5wdXRbbmFtZT1fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbl0nKS52YWwoKTtcclxuLy8gICAgcmV0dXJuIGRhdGE7XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuICAgIGRhdGEuX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4gPSAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEoKSB7XHJcbiAgICByZXR1cm4gJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgVXNlckxvZ2luQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvVXNlckxvZ2luQ29udGFpbmVyJztcclxuaW1wb3J0IHsgVXNlckxvZ2luUmVkdWNlciB9IGZyb20gJy4uL1JlZHVjZXJzL1VzZXJMb2dpblJlZHVjZXInO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5TdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlckxvZ2luU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9Vc2VyTG9naW5BY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudCdcclxuaW1wb3J0IHsgVXNlckxvZ2luU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvVXNlckxvZ2luU3RvcmVzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhckNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXInXHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvQ3VycmVudFVzZXJTdG9yZSdcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17Q3VycmVudFVzZXJTdG9yZX0gPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIC8+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYXZpZ2F0aW9uQmFyTW91bnRQb2ludCcpXHJcbilcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17VXNlckxvZ2luU3RvcmV9PlxyXG4gICAgICAgIDxVc2VyTG9naW5Db250YWluZXIgLz5cclxuICAgIDwvUHJvdmlkZXI+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvZ2luTW91bnRQb2ludCcpIGFzIEhUTUxFbGVtZW50XHJcbik7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW50cnkvVXNlckxvZ2luRW50cnkudHN4IiwiaW1wb3J0ICBVc2VyTG9naW5Db21wb25lbnQgIGZyb20gJy4uL0NvbXBvbmVudHMvVXNlckxvZ2luQ29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJMb2dpbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5TdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlckxvZ2luU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBsb2dpbkVycm9yLCBpc1Bhc3N3b3JkUmV2ZWFsZWQgfTogVXNlckxvZ2luU3RvcmVTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dpbkVycm9yLFxyXG4gICAgICAgIGlzUGFzc3dvcmRSZXZlYWxlZCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9ucy5Vc2VyTG9naW5BY3Rpb24+ICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dpbjogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5sb2dpbkFzeW5jKCkpLFxyXG4gICAgICAgIHJldmVhbFBhc3N3b3JkOiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLnJldmVhbFBhc3N3b3JkKCkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyTG9naW5Db21wb25lbnQgYXMgYW55IGFzIFJlYWN0LlNGQyk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGFpbmVycy9Vc2VyTG9naW5Db250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsb2dpbkVycm9yOiBzdHJpbmc7XHJcbiAgICBpc1Bhc3N3b3JkUmV2ZWFsZWQ/OiBib29sZWFuO1xyXG4gICAgbG9naW4/OiAoKSA9PiB2b2lkO1xyXG4gICAgcmV2ZWFsUGFzc3dvcmQ/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBVc2VyTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9naW5FcnJvciwgaXNQYXNzd29yZFJldmVhbGVkLCByZXZlYWxQYXNzd29yZCwgbG9naW4gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJMb2dpbkNvbXBvbmVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvZ2luQ29tcG9uZW50XCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbC1zbS0xMiBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+TG9naW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL1NpZ25VcFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD88L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9Gb3Jnb3RQYXNzd29yZFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC1zbS0xMiBjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC11c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1lbnZlbG9wZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJMb2dpblVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1sb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiTG9naW5QYXNzd29yZFwiIHR5cGU9e2lzUGFzc3dvcmRSZXZlYWxlZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1leWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17cmV2ZWFsUGFzc3dvcmR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJMb2dpbkJ1dHRvblwiIG9uQ2xpY2s9e2xvZ2lufSA+TG9naW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luRXJyb3IubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWVycm9yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ge2xvZ2luRXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW5Db21wb25lbnRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9Vc2VyTG9naW5Db21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cy9Vc2VyTG9naW5Db25zdGFudHMnXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9UeXBlcy9Vc2VyTG9naW5TdG9yZVN0YXRlJ1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5MT0dJTlxyXG4gICAgcGF5bG9hZDogc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZVBhc3N3b3JkUmV2ZWFsIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5UT0dHTEVfUEFTU1dPUkRfUkVWRUFMXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJMb2dpbkFjdGlvbiA9IExvZ2luIHwgVG9nZ2xlUGFzc3dvcmRSZXZlYWwgXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luQXN5bmMoKTogRGlzcGF0Y2g8YW55PntcclxuICAgIHZhciB1c2VybmFtZTogc3RyaW5nID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2dpblVzZXJuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIHZhciBwYXNzd29yZDogc3RyaW5nID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2dpblBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0xvZ2luQXN5bmNcIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5MT0dJTiwgcGF5bG9hZDogcmVzcG9uc2UucmVzcG9uc2VUZXh0IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVhbFBhc3N3b3JkKCk6IFRvZ2dsZVBhc3N3b3JkUmV2ZWFsIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogY29uc3RhbnRzLlRPR0dMRV9QQVNTV09SRF9SRVZFQUxcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbnMvVXNlckxvZ2luQWN0aW9ucy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGh1bmsgfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBVc2VyTG9naW5Db250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9Vc2VyTG9naW5Db250YWluZXInO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5SZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvVXNlckxvZ2luUmVkdWNlcic7XHJcbmltcG9ydCB7IFVzZXJMb2dpblN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyTG9naW5TdG9yZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJMb2dpbkFjdGlvbnMnO1xyXG5pbXBvcnQgUmVkdXhQcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xyXG5cclxuY29uc3QgbWlkZGxlV2FyZSA9IGFwcGx5TWlkZGxld2FyZSh0aHVuayk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3RvcmUgPSBjcmVhdGVTdG9yZTxVc2VyTG9naW5TdG9yZVN0YXRlPihVc2VyTG9naW5SZWR1Y2VyLCB7XHJcbiAgICBsb2dpbkVycm9yOiBcIlwiLFxyXG4gICAgaXNQYXNzd29yZFJldmVhbGVkOiBmYWxzZSxcclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9Vc2VyTG9naW5TdG9yZXMudHN4IiwiaW1wb3J0IHsgVXNlckxvZ2luU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL1VzZXJMb2dpblN0b3JlU3RhdGUnXHJcbmltcG9ydCB7IExPR0lOLCBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMIH0gZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXJMb2dpbkFjdGlvbiB9IGZyb20gJy4uL0FjdGlvbnMvVXNlckxvZ2luQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlckxvZ2luUmVkdWNlcihzdGF0ZTogVXNlckxvZ2luU3RvcmVTdGF0ZSwgYWN0aW9uOiBVc2VyTG9naW5BY3Rpb24pOiBVc2VyTG9naW5TdG9yZVN0YXRlIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR0lOOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIGxvZ2luRXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFRPR0dMRV9QQVNTV09SRF9SRVZFQUw6IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmlzUGFzc3dvcmRSZXZlYWxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgaXNQYXNzd29yZFJldmVhbGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgaXNQYXNzd29yZFJldmVhbGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVkdWNlcnMvVXNlckxvZ2luUmVkdWNlci50c3giLCJpbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgZW1haWxBZGRyZXNzLCB1c2VyUHJvZmlsZUltYWdlVVJMIH06IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbWFpbEFkZHJlc3MsXHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWFnZVVSTCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9ucy5DdXJyZW50VXNlckFjdGlvbj4gKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEN1cnJlbnRVc2VyTmV3OiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLmdldEN1cnJlbnRVc2VyTmV3KCkpLFxyXG4gICAgICAgIHNpZ25PdXQ6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuc2lnbk91dCgpKVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTmF2aWdhdGlvbkJhckNvbXBvbmVudCBhcyBhbnkgYXMgUmVhY3QuU0ZDKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IHN0cmluZyxcclxuICAgIHVzZXJQcm9maWxlSW1hZ2VVUkw6IHN0cmluZyxcclxuICAgIGdldEN1cnJlbnRVc2VyTmV3OiAoKSA9PiB2b2lkLFxyXG4gICAgc2lnbk91dDogKCkgPT4gdm9pZCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25CYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyRiA9IHRoaXMuZ2V0Q3VycmVudFVzZXJGLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpemVVc2VyID0gdGhpcy5hdXRob3JpemVVc2VyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50VXNlckYoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0dldEN1cnJlbnRVc2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHt9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhdXRob3JpemVVc2VyKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9BdXRob3JpemVDdXJyZW50VXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7fSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50VXNlck5ldygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWxBZGRyZXNzLCB1c2VyUHJvZmlsZUltYWdlVVJMLCBnZXRDdXJyZW50VXNlck5ldywgc2lnbk91dCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwMkIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLmZhLXNpZ24tb3V0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAjVXNlclByb2ZpbGVQaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuc2lnbi1pbi11cC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuc2lnbi1pbi11cC1jb250YWluZXIgLnNlcGFyYXRvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDE4NCwgMTg0LCAwLjkxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCBuYXYubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgyNTUsMjU1LDI1NSwgMSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPkRpc2NvdmVyIE1vdW50YWluIFJlc29ydHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJUZXh0XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclRleHRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVtYWlsQWRkcmVzcyAhPSBcIlwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJVc2VyUHJvZmlsZVBpY3R1cmVcIiBzcmM9XCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9JTUdfMjAxNzEyMzBfMTAyODA5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJVc2VyRmlyc3ROYW1lXCIgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLW5hbWVcIj57dGhpcy5wcm9wcy5lbWFpbEFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLW91dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3NpZ25PdXR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qPHAgaWQ9XCJVc2VyTGFzdE5hbWVcIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPk1jR3VpcmU8L3A+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi1pbi11cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi1pbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1VzZXIvTG9naW5cIj5TaWduIEluPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi11cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1VzZXIvU2lnblVwXCI+U2lnbiBVcDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2lnbk91dEFzeW5jfT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZ2V0Q3VycmVudFVzZXJGfT5HZXQgQ3VycmVudCBVc2VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5hdXRob3JpemVVc2VyfT5BdXRob3JpemUgVXNlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMnXHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSdcclxuaW1wb3J0IEdldEFudGlGb3JnZXJ5VG9rZW4gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgeyBHZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEgfSBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBTRVRfQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldEN1cnJlbnRVc2VyIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSXHJcbiAgICBwYXlsb2FkOiBzdHJpbmcsXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWduT3V0IHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5TSUdOX09VVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDdXJyZW50VXNlckFjdGlvbiA9IFNldEN1cnJlbnRVc2VyIHwgU2lnbk91dFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyTmV3KCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvR2V0Q3VycmVudFVzZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5cIjogJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpLy9HZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVIsIHBheWxvYWQ6IHJlc3BvbnNlLnJlc3BvbnNlVGV4dCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUiwgcGF5bG9hZDogXCJ7fVwiIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICAgIHZhciB0ZXN0ID0gXCJcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL1NpZ25PdXRBc3luY1wiLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAvL2RhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIC8vY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCI6ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0QWdhaW4gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNJR05fT1VUIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVxdWVzdCwgc3RhdHVzLCBlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2YWwgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3JcIiArIHZhbCk7XHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGh1bmsgfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lcic7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvVXNlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuXHJcbmNvbnN0IG1pZGRsZVdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRVc2VyU3RvcmUgPSBjcmVhdGVTdG9yZTxDdXJyZW50VXNlclN0b3JlU3RhdGU+KFVzZXJSZWR1Y2VyLCB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiLFxyXG59LCBtaWRkbGVXYXJlKTtcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUudHN4IiwiaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJ1xyXG5pbXBvcnQgeyBMT0dJTiwgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCB9IGZyb20gJy4uL0NvbnN0YW50cy9Vc2VyTG9naW5Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlckFjdGlvbiB9IGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgU0VUX0NVUlJFTlRfVVNFUiwgU0lHTl9PVVQgfSBmcm9tICcuLi9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJSZWR1Y2VyKHN0YXRlOiBDdXJyZW50VXNlclN0b3JlU3RhdGUsIGFjdGlvbjogQ3VycmVudFVzZXJBY3Rpb24pOiBDdXJyZW50VXNlclN0b3JlU3RhdGUge1xyXG4gICAgdmFyIHRlc3QgPSBcIlwiO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgU0VUX0NVUlJFTlRfVVNFUjoge1xyXG4gICAgICAgICAgICB2YXIgZW1haWxBZGRyZXNzID0gYWN0aW9uLnBheWxvYWRbXCJlbWFpbFwiXTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiBlbWFpbEFkZHJlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fT1VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczogXCJcIixcclxuICAgICAgICAgICAgICAgIHVzZXJQcm9maWxlSW1hZ2VVUkw6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVkdWNlcnMvVXNlclJlZHVjZXIudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==