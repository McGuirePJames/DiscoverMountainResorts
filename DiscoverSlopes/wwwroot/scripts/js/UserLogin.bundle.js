webpackJsonp([2],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.SIGN_OUT = 'SIGN_OUT';


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN = 'LOGIN';
exports.TOGGLE_PASSWORD_REVEAL = 'TOGGLE_PASSWORD_REVEAL';


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(7);
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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavigationBarComponent_1 = __webpack_require__(31);
var Actions = __webpack_require__(32);
var react_redux_1 = __webpack_require__(15);
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

/***/ 31:
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
var React = __webpack_require__(1);
var $ = __webpack_require__(7);
var GetAntiForgeryToken_1 = __webpack_require__(21);
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
                    __html: "\n                        .sign-in-up-container .sign-in-container a:nth-child(1){\n                            font-size: 12.5pt;   \n                            font-weight: 400;\n                        }\n                        nav .navbar-text{\n                            padding-top: 0;\n                            padding-bottom: 0;\n                        }\n                        nav p {\n                            margin-bottom: 0;\n                            color: white !important;\n                        }\n                        \n                        nav a {\n                            color: white !important;\n                        }\n                        .navbar{\n                            min-height: 40px;\n                        }\n                        nav {\n                            line-height: 0px;\n                            background-color: #05202B !important;\n                            min-height: 60px;\n                        }\n                        \n                            nav .container-user-profile {\n                                display: flex;\n                                justify-content: center;\n                                align-items: center;\n                                height: inherit;\n                                margin-left: auto;\n                                margin-right: 30px;\n                            }\n                        \n                                nav .container-user-profile .container-user-profile-name {\n                                    height: inherit;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    margin-left: 10px;\n                                }\n                        \n                                    nav .container-user-profile .container-user-profile-name .user-profile-name {\n                                        font-size: 13pt;\n                                        color: white;\n                                        font-weight: 400;\n                                    }\n\n                        \n                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(2) {\n                                            margin-top: 10px;\n                                        }\n                            nav .container-user-profile-name{\n                                display: flex;\n                                align-items: center;\n                                flex-direction: row;\n                                height: 100% !important;\n                            }\n                            \n                            nav .container-user-profile-name .fa-sign-out{\n                                color: white;\n                                margin-left: 10px;\n                                display: flex;\n                                align-items: center;\n                                margin-top: 3px;\n                                cursor: pointer;\n                            }\n                            nav #UserProfilePicture {\n                                height: 50px;\n                                width: 50px;\n                                border-radius: 100%;\n                            }\n                            nav .sign-in-up-container{\n                                display: flex;\n                                align-items: center;\n                                height: 100%;\n                            }\n                            nav .sign-in-up-container .separator{\n                                width: 2px;\n                                height: 20px;\n                                margin-left: 10px;\n                                margin-right: 10px;\n                                background-color: rgba(184, 184, 184, 0.91)\n                            }\n                            html nav.navbar-light .navbar-toggler-icon {\n                                background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n                            }\n                            .navbar{\n                                -webkit-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                -moz-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                z-index: 3;\n                            }\n                        "
                } }),
            React.createElement("a", { className: "navbar-brand", href: "/" }, "Discover Mountain Resorts"),
            React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarText", "aria-controls": "navbarText", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                React.createElement("span", { className: "navbar-toggler-icon" })),
            React.createElement("div", { className: "collapse navbar-collapse", id: "navbarText" },
                React.createElement("ul", { className: "navbar-nav mr-auto" }),
                React.createElement("span", { className: "navbar-text" }, this.props.emailAddress != "" && this.props.emailAddress != null ? (React.createElement("div", { className: "container-user-profile" },
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

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(16);
var $ = __webpack_require__(7);
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

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(22);
var react_redux_1 = __webpack_require__(15);
var UserLoginContainer_1 = __webpack_require__(354);
var UserLoginStores_1 = __webpack_require__(357);
var NavigationBarContainer_1 = __webpack_require__(30);
var CurrentUserStore_1 = __webpack_require__(36);
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
var react_redux_1 = __webpack_require__(15);
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
var React = __webpack_require__(1);
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
var constants = __webpack_require__(171);
var GetAntiForgeryToken_1 = __webpack_require__(21);
var $ = __webpack_require__(7);
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
var redux_thunk_1 = __webpack_require__(25);
var redux_1 = __webpack_require__(19);
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
var UserLoginConstants_1 = __webpack_require__(171);
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

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(25);
var redux_1 = __webpack_require__(19);
var UserReducer_1 = __webpack_require__(37);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.CurrentUserStore = redux_1.createStore(UserReducer_1.UserReducer, {
    emailAddress: "",
    userProfileImageURL: "",
}, middleWare);


/***/ }),

/***/ 37:
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
var CurrentUserConstants_1 = __webpack_require__(16);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9FbnRyeS9Vc2VyTG9naW5FbnRyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lcnMvVXNlckxvZ2luQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Vc2VyTG9naW5Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BY3Rpb25zL1VzZXJMb2dpbkFjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9TdG9yZXMvVXNlckxvZ2luU3RvcmVzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkdWNlcnMvVXNlckxvZ2luUmVkdWNlci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkdWNlcnMvVXNlclJlZHVjZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWEsd0JBQWdCLEdBQUcsa0JBQWtCO0FBR3JDLGdCQUFRLEdBQUcsVUFBVTs7Ozs7Ozs7Ozs7QUNIckIsYUFBSyxHQUFHLE9BQU8sQ0FBQztBQUdoQiw4QkFBc0IsR0FBRyx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7QUNIL0QsK0JBQTJCO0FBRTNCLHFE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LGtCQUFrQixFQUFFLElBQUksSUFDckM7U0FDSjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQWxCRCw0Q0FrQkM7Ozs7Ozs7Ozs7O0FDcEJELDRDQUErQztBQUUvQyxzQ0FBcUQ7QUFFckQsNENBQXNEO0FBS3RELElBQU0sVUFBVSxHQUFHLHVCQUFlLENBQUMscUJBQUssQ0FBQyxDQUFDO0FBRTdCLHdCQUFnQixHQUFHLG1CQUFXLENBQXdCLHlCQUFXLEVBQUU7SUFDNUUsWUFBWSxFQUFFLEVBQUU7SUFDaEIsbUJBQW1CLEVBQUUsRUFBRTtDQUUxQixFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGYscURBQStFO0FBRS9FLHFCQUE0QixLQUE0QixFQUFFLE1BQXlCO0lBQy9FLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNkLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLHVDQUFnQixDQUFDLENBQUM7WUFDbkIsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxvQkFDTyxLQUFLLElBQ1IsWUFBWSxFQUFFLFlBQVksSUFDN0I7U0FDSjtRQUNELEtBQUssK0JBQVEsQ0FBQyxDQUFDO1lBQ1gsb0JBQ08sS0FBSyxJQUNSLFlBQVksRUFBRSxFQUFFLEVBQ2hCLG1CQUFtQixFQUFFLEVBQUUsSUFDMUI7U0FDSjtLQUVKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQXBCRCxrQ0FvQkMiLCJmaWxlIjoiVXNlckxvZ2luLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRVRfQ1VSUkVOVF9VU0VSID0gJ1NFVF9DVVJSRU5UX1VTRVInXHJcbmV4cG9ydCB0eXBlIFNFVF9DVVJSRU5UX1VTRVIgPSB0eXBlb2YgU0VUX0NVUlJFTlRfVVNFUlxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUID0gJ1NJR05fT1VUJ1xyXG5leHBvcnQgdHlwZSBTSUdOX09VVCA9IHR5cGVvZiBTSUdOX09VVFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMudHN4IiwiZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJztcclxuZXhwb3J0IHR5cGUgTE9HSU4gPSB0eXBlb2YgTE9HSU47XHJcblxyXG5leHBvcnQgY29uc3QgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCA9ICdUT0dHTEVfUEFTU1dPUkRfUkVWRUFMJztcclxuZXhwb3J0IHR5cGUgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCA9IHR5cGVvZiBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cy50c3giLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQW50aUZvcmdlcnlUb2tlbihkYXRhKSB7XHJcbi8vICAgIGRhdGEuX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4gPSAkKCcjX19BamF4QW50aUZvcmdlcnlGb3JtIGlucHV0W25hbWU9X19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5dJykudmFsKCk7XHJcbi8vICAgIHJldHVybiBkYXRhO1xyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0QW50aUZvcmdlcnlUb2tlbihkYXRhKSB7XHJcbiAgICBkYXRhLl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuID0gJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhKCkge1xyXG4gICAgcmV0dXJuICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbi50cyIsImltcG9ydCB7IE5hdmlnYXRpb25CYXJDb21wb25lbnQgfSAgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBlbWFpbEFkZHJlc3MsIHVzZXJQcm9maWxlSW1hZ2VVUkwgfTogQ3VycmVudFVzZXJTdG9yZVN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVtYWlsQWRkcmVzcyxcclxuICAgICAgICB1c2VyUHJvZmlsZUltYWdlVVJMLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb25zLkN1cnJlbnRVc2VyQWN0aW9uPiApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFVzZXJOZXc6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuZ2V0Q3VycmVudFVzZXJOZXcoKSksXHJcbiAgICAgICAgc2lnbk91dDogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5zaWduT3V0KCkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGFzIGFueSBhcyBSZWFjdC5TRkMpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGVtYWlsQWRkcmVzczogc3RyaW5nLFxyXG4gICAgdXNlclByb2ZpbGVJbWFnZVVSTDogc3RyaW5nLFxyXG4gICAgZ2V0Q3VycmVudFVzZXJOZXc6ICgpID0+IHZvaWQsXHJcbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkJhckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgb2JqZWN0PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXJGID0gdGhpcy5nZXRDdXJyZW50VXNlckYuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmF1dGhvcml6ZVVzZXIgPSB0aGlzLmF1dGhvcml6ZVVzZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRVc2VyRigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvR2V0Q3VycmVudFVzZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEdldEFudGlGb3JnZXJ5VG9rZW4oe30pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGF1dGhvcml6ZVVzZXIoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0F1dGhvcml6ZUN1cnJlbnRVc2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHt9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRVc2VyTmV3KCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbEFkZHJlc3MsIHVzZXJQcm9maWxlSW1hZ2VVUkwsIGdldEN1cnJlbnRVc2VyTmV3LCBzaWduT3V0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNpZ24taW4tdXAtY29udGFpbmVyIC5zaWduLWluLWNvbnRhaW5lciBhOm50aC1jaGlsZCgxKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTIuNXB0OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgLm5hdmJhci10ZXh0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjAyQiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAuZmEtc2lnbi1vdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2ICNVc2VyUHJvZmlsZVBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5zaWduLWluLXVwLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5zaWduLWluLXVwLWNvbnRhaW5lciAuc2VwYXJhdG9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgMTg0LCAxODQsIDAuOTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIG5hdi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+RGlzY292ZXIgTW91bnRhaW4gUmVzb3J0czwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRleHRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVGV4dFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZW1haWxBZGRyZXNzICE9IFwiXCIgJiYgdGhpcy5wcm9wcy5lbWFpbEFkZHJlc3MgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiVXNlclByb2ZpbGVQaWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvSU1HXzIwMTcxMjMwXzEwMjgwOS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiVXNlckZpcnN0TmFtZVwiIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+e3RoaXMucHJvcHMuZW1haWxBZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1vdXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtzaWduT3V0fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL0xvZ2luXCI+U2lnbiBJbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL1NpZ25VcFwiPlNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnNpZ25PdXRBc3luY30+U2lnbiBPdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmdldEN1cnJlbnRVc2VyRn0+R2V0IEN1cnJlbnQgVXNlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYXV0aG9yaXplVXNlcn0+QXV0aG9yaXplIFVzZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0IHsgR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhIH0gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU0VUX0NVUlJFTlRfVVNFUiB9IGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDdXJyZW50VXNlciB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUlxyXG4gICAgcGF5bG9hZDogc3RyaW5nLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbk91dCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0lHTl9PVVRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ3VycmVudFVzZXJBY3Rpb24gPSBTZXRDdXJyZW50VXNlciB8IFNpZ25PdXRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlck5ldygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0dldEN1cnJlbnRVc2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCI6ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKS8vR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSLCBwYXlsb2FkOiByZXNwb25zZS5yZXNwb25zZVRleHQgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVIsIHBheWxvYWQ6IFwie31cIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgICB2YXIgdGVzdCA9IFwiXCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9TaWduT3V0QXN5bmNcIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgLy9kYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAvL2NvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIlJlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiOiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdEFnYWluID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TSUdOX09VVCB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlcXVlc3QsIHN0YXR1cywgZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcImVycm9yXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgVXNlckxvZ2luQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvVXNlckxvZ2luQ29udGFpbmVyJztcclxuaW1wb3J0IHsgVXNlckxvZ2luUmVkdWNlciB9IGZyb20gJy4uL1JlZHVjZXJzL1VzZXJMb2dpblJlZHVjZXInO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5TdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlckxvZ2luU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9Vc2VyTG9naW5BY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudCdcclxuaW1wb3J0IHsgVXNlckxvZ2luU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvVXNlckxvZ2luU3RvcmVzJ1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhckNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXInXHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvQ3VycmVudFVzZXJTdG9yZSdcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17Q3VycmVudFVzZXJTdG9yZX0gPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIC8+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYXZpZ2F0aW9uQmFyTW91bnRQb2ludCcpXHJcbilcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17VXNlckxvZ2luU3RvcmV9PlxyXG4gICAgICAgIDxVc2VyTG9naW5Db250YWluZXIgLz5cclxuICAgIDwvUHJvdmlkZXI+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0xvZ2luTW91bnRQb2ludCcpIGFzIEhUTUxFbGVtZW50XHJcbik7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW50cnkvVXNlckxvZ2luRW50cnkudHN4IiwiaW1wb3J0ICBVc2VyTG9naW5Db21wb25lbnQgIGZyb20gJy4uL0NvbXBvbmVudHMvVXNlckxvZ2luQ29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJMb2dpbkFjdGlvbnMnO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5TdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlckxvZ2luU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBsb2dpbkVycm9yLCBpc1Bhc3N3b3JkUmV2ZWFsZWQgfTogVXNlckxvZ2luU3RvcmVTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dpbkVycm9yLFxyXG4gICAgICAgIGlzUGFzc3dvcmRSZXZlYWxlZCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9ucy5Vc2VyTG9naW5BY3Rpb24+ICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2dpbjogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5sb2dpbkFzeW5jKCkpLFxyXG4gICAgICAgIHJldmVhbFBhc3N3b3JkOiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLnJldmVhbFBhc3N3b3JkKCkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyTG9naW5Db21wb25lbnQgYXMgYW55IGFzIFJlYWN0LlNGQyk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGFpbmVycy9Vc2VyTG9naW5Db250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbi8vaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsb2dpbkVycm9yOiBzdHJpbmc7XHJcbiAgICBpc1Bhc3N3b3JkUmV2ZWFsZWQ/OiBib29sZWFuO1xyXG4gICAgbG9naW4/OiAoKSA9PiB2b2lkO1xyXG4gICAgcmV2ZWFsUGFzc3dvcmQ/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5jbGFzcyBVc2VyTG9naW5Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbG9naW5FcnJvciwgaXNQYXNzd29yZFJldmVhbGVkLCByZXZlYWxQYXNzd29yZCwgbG9naW4gfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJMb2dpbkNvbXBvbmVudENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIkxvZ2luQ29tcG9uZW50XCIgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0IGNvbC1zbS0xMiBjb2wtbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzcGxheS00XCI+TG9naW48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL1NpZ25VcFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD88L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9Gb3Jnb3RQYXNzd29yZFwiPkZvcmdvdCBQYXNzd29yZD88L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0IGNvbC1zbS0xMiBjb2wtbWQtN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Vc2VybmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC11c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1lbnZlbG9wZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1lbnZlbG9wZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJMb2dpblVzZXJuYW1lXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1sb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiTG9naW5QYXNzd29yZFwiIHR5cGU9e2lzUGFzc3dvcmRSZXZlYWxlZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1leWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17cmV2ZWFsUGFzc3dvcmR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJMb2dpbkJ1dHRvblwiIG9uQ2xpY2s9e2xvZ2lufSA+TG9naW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luRXJyb3IubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWVycm9yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ge2xvZ2luRXJyb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBVc2VyTG9naW5Db21wb25lbnRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9Vc2VyTG9naW5Db21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cy9Vc2VyTG9naW5Db25zdGFudHMnXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9UeXBlcy9Vc2VyTG9naW5TdG9yZVN0YXRlJ1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvZ2luIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5MT0dJTlxyXG4gICAgcGF5bG9hZDogc3RyaW5nLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvZ2dsZVBhc3N3b3JkUmV2ZWFsIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5UT0dHTEVfUEFTU1dPUkRfUkVWRUFMXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFVzZXJMb2dpbkFjdGlvbiA9IExvZ2luIHwgVG9nZ2xlUGFzc3dvcmRSZXZlYWwgXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luQXN5bmMoKTogRGlzcGF0Y2g8YW55PntcclxuICAgIHZhciB1c2VybmFtZTogc3RyaW5nID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2dpblVzZXJuYW1lJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIHZhciBwYXNzd29yZDogc3RyaW5nID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdMb2dpblBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0xvZ2luQXN5bmNcIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7dXNlcm5hbWU6IHVzZXJuYW1lLCBwYXNzd29yZDogcGFzc3dvcmQgfSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5MT0dJTiwgcGF5bG9hZDogcmVzcG9uc2UucmVzcG9uc2VUZXh0IH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJldmVhbFBhc3N3b3JkKCk6IFRvZ2dsZVBhc3N3b3JkUmV2ZWFsIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogY29uc3RhbnRzLlRPR0dMRV9QQVNTV09SRF9SRVZFQUxcclxuICAgIH07XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbnMvVXNlckxvZ2luQWN0aW9ucy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGh1bmsgfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBVc2VyTG9naW5Db250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9Vc2VyTG9naW5Db250YWluZXInO1xyXG5pbXBvcnQgeyBVc2VyTG9naW5SZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvVXNlckxvZ2luUmVkdWNlcic7XHJcbmltcG9ydCB7IFVzZXJMb2dpblN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyTG9naW5TdG9yZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJMb2dpbkFjdGlvbnMnO1xyXG5pbXBvcnQgUmVkdXhQcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xyXG5cclxuY29uc3QgbWlkZGxlV2FyZSA9IGFwcGx5TWlkZGxld2FyZSh0aHVuayk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckxvZ2luU3RvcmUgPSBjcmVhdGVTdG9yZTxVc2VyTG9naW5TdG9yZVN0YXRlPihVc2VyTG9naW5SZWR1Y2VyLCB7XHJcbiAgICBsb2dpbkVycm9yOiBcIlwiLFxyXG4gICAgaXNQYXNzd29yZFJldmVhbGVkOiBmYWxzZSxcclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9Vc2VyTG9naW5TdG9yZXMudHN4IiwiaW1wb3J0IHsgVXNlckxvZ2luU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL1VzZXJMb2dpblN0b3JlU3RhdGUnXHJcbmltcG9ydCB7IExPR0lOLCBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMIH0gZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cyc7XHJcbmltcG9ydCB7IFVzZXJMb2dpbkFjdGlvbiB9IGZyb20gJy4uL0FjdGlvbnMvVXNlckxvZ2luQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlckxvZ2luUmVkdWNlcihzdGF0ZTogVXNlckxvZ2luU3RvcmVTdGF0ZSwgYWN0aW9uOiBVc2VyTG9naW5BY3Rpb24pOiBVc2VyTG9naW5TdG9yZVN0YXRlIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIExPR0lOOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIGxvZ2luRXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIFRPR0dMRV9QQVNTV09SRF9SRVZFQUw6IHtcclxuICAgICAgICAgICAgaWYgKHN0YXRlLmlzUGFzc3dvcmRSZXZlYWxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgaXNQYXNzd29yZFJldmVhbGVkOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgaXNQYXNzd29yZFJldmVhbGVkOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVkdWNlcnMvVXNlckxvZ2luUmVkdWNlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGh1bmsgfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lcic7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvVXNlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuXHJcbmNvbnN0IG1pZGRsZVdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRVc2VyU3RvcmUgPSBjcmVhdGVTdG9yZTxDdXJyZW50VXNlclN0b3JlU3RhdGU+KFVzZXJSZWR1Y2VyLCB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiLFxyXG5cclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsImltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgTE9HSU4sIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgfSBmcm9tICcuLi9Db25zdGFudHMvVXNlckxvZ2luQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJBY3Rpb24gfSBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNFVF9DVVJSRU5UX1VTRVIsIFNJR05fT1VUIH0gZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZTogQ3VycmVudFVzZXJTdG9yZVN0YXRlLCBhY3Rpb246IEN1cnJlbnRVc2VyQWN0aW9uKTogQ3VycmVudFVzZXJTdG9yZVN0YXRlIHtcclxuICAgIHZhciB0ZXN0ID0gXCJcIjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6IHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsQWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkW1wiZW1haWxcIl07XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczogZW1haWxBZGRyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlZHVjZXJzL1VzZXJSZWR1Y2VyLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=