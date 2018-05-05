webpackJsonp([1],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.SIGN_OUT = 'SIGN_OUT';


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGN_UP = 'SIGN_UP';
exports.TOGGLE_PASSWORD_REVEAL = 'TOGGLE_PASSWORD_REVEAL';
exports.RETURN_ERROR = 'RETURN_ERROR';


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

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(22);
var react_redux_1 = __webpack_require__(15);
var NavigationBarContainer_1 = __webpack_require__(30);
var UserSignUpContainer_1 = __webpack_require__(360);
var UserSignUpStore_1 = __webpack_require__(363);
var CurrentUserStore_1 = __webpack_require__(36);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
    React.createElement(NavigationBarContainer_1.default, null)), document.getElementById('NavigationBarMountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserSignUpStore_1.UserSignUpStore },
    React.createElement(UserSignUpContainer_1.default, null)), document.getElementById('UserSignUpMountPoint'));


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

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserSignUpComponent_1 = __webpack_require__(361);
var Actions = __webpack_require__(362);
var react_redux_1 = __webpack_require__(15);
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


/***/ }),

/***/ 361:
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


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(172);
var GetAntiForgeryToken_1 = __webpack_require__(21);
var $ = __webpack_require__(7);
function signUpAction() {
    if (isFormComplete) {
        signUp();
    }
    else {
        return { type: constants.RETURN_ERROR, payload: "Passwords do not match" };
    }
}
exports.signUpAction = signUpAction;
function isFormComplete() {
    if (document.getElementById('CreateUserPassword').value === document.getElementById('CreateUserConfirmPassword').value) {
        return true;
    }
    return false;
}
function signUp() {
    var emailAddress = document.getElementById('CreateUserUsername').value;
    var password = document.getElementById('CreateUserPassword').value;
    var confirmPassword = document.getElementById('CreateUserConfirmPassword').value;
    return function (dispatch) {
        if (password != confirmPassword) {
            dispatch({ type: constants.RETURN_ERROR, payload: "Passwords don't match" });
        }
        else {
            $.ajax({
                beforeSend: function () {
                    $('html').css('cursor', 'wait');
                },
                url: "/User/CreateUserAsync",
                type: "POST",
                dataType: "json",
                data: GetAntiForgeryToken_1.default({ emailAddress: emailAddress, password: password }),
                success: function (response) {
                    if (response.success) {
                        window.location.href = "/";
                    }
                    else {
                        dispatch({ type: constants.RETURN_ERROR, payload: response.responseText });
                    }
                },
                complete: function () {
                    $('html').css('cursor', 'default');
                }
            });
        }
    };
}
exports.signUp = signUp;
function revealPassword() {
    return {
        type: constants.TOGGLE_PASSWORD_REVEAL
    };
}
exports.revealPassword = revealPassword;


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(25);
var redux_1 = __webpack_require__(19);
var UserSignUpReducers_1 = __webpack_require__(364);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.UserSignUpStore = redux_1.createStore(UserSignUpReducers_1.UserSignUpReducer, {
    signUpError: "",
    isPasswordRevealed: false,
}, middleWare);


/***/ }),

/***/ 364:
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
var UserSignUpConstants_1 = __webpack_require__(172);
function UserSignUpReducer(state, action) {
    switch (action.type) {
        case UserSignUpConstants_1.SIGN_UP:
            return __assign({}, state, { signUpError: action.payload });
        case UserSignUpConstants_1.TOGGLE_PASSWORD_REVEAL: {
            if (state.isPasswordRevealed) {
                return __assign({}, state, { isPasswordRevealed: false });
            }
            return __assign({}, state, { isPasswordRevealed: true });
        }
        case UserSignUpConstants_1.RETURN_ERROR: {
            return __assign({}, state, { signUpError: action.payload });
        }
    }
    return state;
}
exports.UserSignUpReducer = UserSignUpReducer;


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

},[359]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRW50cnkvVXNlclNpZ25VcEVudHJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL1VzZXJTaWduVXBDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VzZXJTaWduVXBDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmVzL1VzZXJTaWduVXBTdG9yZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZHVjZXJzL1VzZXJTaWduVXBSZWR1Y2Vycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZHVjZXJzL1VzZXJSZWR1Y2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFhLHdCQUFnQixHQUFHLGtCQUFrQjtBQUdyQyxnQkFBUSxHQUFHLFVBQVU7Ozs7Ozs7Ozs7O0FDSHJCLGVBQU8sR0FBRyxTQUFTLENBQUM7QUFHcEIsOEJBQXNCLEdBQUcsd0JBQXdCLENBQUM7QUFHbEQsb0JBQVksR0FBRyxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0FDTjNDLCtCQUEyQjtBQUUzQixxREFBcUQ7QUFDckQsaUhBQWlIO0FBQ2pILGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsNkJBQTRDLElBQUk7SUFDNUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pGLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFIRCxzQ0FHQztBQUFBLENBQUM7QUFFRjtJQUNJLE9BQU8sQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDMUQsQ0FBQztBQUZELHdFQUVDO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7QUNiRix1REFBK0U7QUFDL0Usc0NBQXlEO0FBRXpELDRDQUFxQztBQUlyQyx5QkFBZ0MsRUFBNEQ7UUFBMUQsOEJBQVksRUFBRSw0Q0FBbUI7SUFDL0QsT0FBTztRQUNILFlBQVk7UUFDWixtQkFBbUI7S0FDdEI7QUFDTCxDQUFDO0FBTEQsMENBS0M7QUFFRCw0QkFBbUMsUUFBNkM7SUFDNUUsT0FBTztRQUNILGlCQUFpQixFQUFFLGNBQU0sZUFBUSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQXJDLENBQXFDO1FBQzlELE9BQU8sRUFBRSxjQUFNLGVBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBM0IsQ0FBMkI7S0FDN0MsQ0FBQztBQUNOLENBQUM7QUFMRCxnREFLQztBQUVELGtCQUFlLHFCQUFPLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUMsK0NBQTBDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJ4RyxtQ0FBOEI7QUFDOUIsK0JBQTJCO0FBQzNCLG9EQUE2RDtBQVU3RDtJQUE0QywwQ0FBOEI7SUFDdEUsZ0NBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQUdmO1FBRkcsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUN2RCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUN2RCxDQUFDO0lBQ0QsZ0RBQWUsR0FBZjtRQUNJLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSCxVQUFVLEVBQUU7Z0JBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNELEdBQUcsRUFBRSxzQkFBc0I7WUFDM0IsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsNkJBQW1CLENBQUMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sRUFBRSxVQUFVLFFBQVE7WUFFM0IsQ0FBQztZQUNELFFBQVEsRUFBRTtnQkFDTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2QyxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFDRCw4Q0FBYSxHQUFiO1FBQ0ksQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNILFVBQVUsRUFBRTtnQkFDUixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUNwQyxDQUFDO1lBQ0QsR0FBRyxFQUFFLDRCQUE0QjtZQUNqQyxJQUFJLEVBQUUsTUFBTTtZQUNaLElBQUksRUFBRSw2QkFBbUIsQ0FBQyxFQUFFLENBQUM7WUFDN0IsT0FBTyxFQUFFLFVBQVUsUUFBUTtZQUUzQixDQUFDO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3ZDLENBQUM7U0FDSixDQUFDO0lBQ04sQ0FBQztJQUNELGtEQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBQ0QsdUNBQU0sR0FBTjtRQUNVLG1CQUE4RSxFQUE1RSw4QkFBWSxFQUFFLDRDQUFtQixFQUFFLHdDQUFpQixFQUFFLG9CQUFPLENBQWdCO1FBQ3JGLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUMsc0NBQXNDO1lBQ2pELCtCQUFPLHVCQUF1QixFQUFFO29CQUM1QixNQUFNLEVBQUUscXdKQThGSDtpQkFBQyxHQUFJO1lBQ2QsMkJBQUcsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsR0FBRyxnQ0FBOEI7WUFDbEUsZ0NBQVEsU0FBUyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxRQUFRLGlCQUFhLFVBQVUsaUJBQWEsYUFBYSxtQkFBZSxZQUFZLG1CQUFlLE9BQU8sZ0JBQVksbUJBQW1CO2dCQUM3Syw4QkFBTSxTQUFTLEVBQUMscUJBQXFCLEdBQVEsQ0FDeEM7WUFDVCw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCLEVBQUMsRUFBRSxFQUFDLFlBQVk7Z0JBQ3JELDRCQUFJLFNBQVMsRUFBQyxvQkFBb0IsR0FFN0I7Z0JBQ0wsOEJBQU0sU0FBUyxFQUFDLGFBQWEsSUFFckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDL0QsNkJBQUssU0FBUyxFQUFDLHdCQUF3QjtvQkFDbkMsNkJBQUssU0FBUyxFQUFDLDhCQUE4Qjt3QkFDekMsNkJBQUssRUFBRSxFQUFDLG9CQUFvQixFQUFDLEdBQUcsRUFBQyxrRkFBa0YsR0FBRyxDQUNwSDtvQkFDTiw2QkFBSyxTQUFTLEVBQUMsNkJBQTZCO3dCQUN4QywyQkFBRyxFQUFFLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxtQkFBbUIsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBSzt3QkFDakY7NEJBQ0ksMkJBQUcsU0FBUyxFQUFDLGdCQUFnQixpQkFBYSxNQUFNLEVBQUMsT0FBTyxFQUFFLE9BQU8sR0FBTSxDQUNyRSxDQUNKLENBQ0osQ0FDVCxDQUFDLENBQUMsQ0FBQyxDQUNJLDZCQUFLLFNBQVMsRUFBQyxzQkFBc0I7b0JBQ2pDLDZCQUFLLFNBQVMsRUFBQyxtQkFBbUI7d0JBQzlCLDJCQUFHLElBQUksRUFBQyxhQUFhLGNBQVksQ0FDL0I7b0JBQ04sNkJBQUssU0FBUyxFQUFDLFdBQVcsUUFBUTtvQkFDbEMsNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsMkJBQUcsSUFBSSxFQUFDLGNBQWMsY0FBWSxDQUNoQyxDQUNKLENBQ1QsQ0FHTixDQVdMLENBQ0osQ0FDVDtJQUNMLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQ0EvTDJDLEtBQUssQ0FBQyxTQUFTLEdBK0wxRDtBQS9MWSx3REFBc0I7Ozs7Ozs7Ozs7O0FDWm5DLHdDQUE4RDtBQUk5RCwrQkFBMkI7QUFlM0I7SUFDSSxPQUFPLFVBQVUsUUFBUTtRQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0gsVUFBVSxFQUFFO2dCQUNSLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3BDLENBQUM7WUFDRCxHQUFHLEVBQUUsc0JBQXNCO1lBQzNCLElBQUksRUFBRSxLQUFLO1lBQ1gsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxPQUFPLEVBQUU7Z0JBQ0wsMEJBQTBCLEVBQUUsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUMsR0FBRyxFQUFFLG1DQUFrQzthQUMvRztZQUNELE9BQU8sRUFBRSxVQUFVLFFBQVE7Z0JBQ3ZCLG9DQUFvQztnQkFDcEMsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNsQixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ2pGO3FCQUNJO29CQUNELFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUNoRTtZQUNMLENBQUM7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkMsQ0FBQztTQUNKLENBQUM7SUFDTixDQUFDO0FBQ0wsQ0FBQztBQTNCRCw4Q0EyQkM7QUFDRDtJQUNJLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUNkLE9BQU8sVUFBVSxRQUFRO1FBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDSCxVQUFVLEVBQUU7Z0JBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNELEdBQUcsRUFBRSxvQkFBb0I7WUFDekIsSUFBSSxFQUFFLE1BQU07WUFDWixtQkFBbUI7WUFDbkIsaURBQWlEO1lBQ2pELE9BQU8sRUFBRTtnQkFDTCwwQkFBMEIsRUFBRSxDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7YUFDN0U7WUFDRCxPQUFPLEVBQUUsVUFBVSxRQUFRO2dCQUN2QixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUM7Z0JBQ3pCLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDekIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO2lCQUUxQztZQUNMLENBQUM7WUFDRCxLQUFLLEVBQUUsVUFBVSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUs7Z0JBRW5DLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQy9CLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNELFFBQVEsRUFBRTtnQkFDTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2QyxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7QUFDTCxDQUFDO0FBaENELDBCQWdDQzs7Ozs7Ozs7Ozs7QUMvRUQsbUNBQStCO0FBQy9CLHVDQUFzQztBQUV0Qyw0Q0FBdUM7QUFHdkMsdURBQXlFO0FBQ3pFLHFEQUFtRTtBQUNuRSxpREFBMkQ7QUFDM0QsaURBQTZEO0FBRTdELFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsc0JBQVEsSUFBQyxLQUFLLEVBQUUsbUNBQWdCO0lBQzdCLG9CQUFDLGdDQUFzQixPQUFHLENBQ25CLEVBQ1gsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUNyRDtBQUVELFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsc0JBQVEsSUFBQyxLQUFLLEVBQUUsaUNBQWU7SUFDNUIsb0JBQUMsNkJBQW1CLE9BQUcsQ0FDaEIsRUFDWCxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFnQixDQUNqRSxDQUFDOzs7Ozs7Ozs7OztBQ3JCRiw0Q0FBK0M7QUFFL0Msc0NBQXFEO0FBRXJELDRDQUFzRDtBQUt0RCxJQUFNLFVBQVUsR0FBRyx1QkFBZSxDQUFDLHFCQUFLLENBQUMsQ0FBQztBQUU3Qix3QkFBZ0IsR0FBRyxtQkFBVyxDQUF3Qix5QkFBVyxFQUFFO0lBQzVFLFlBQVksRUFBRSxFQUFFO0lBQ2hCLG1CQUFtQixFQUFFLEVBQUU7Q0FFMUIsRUFBRSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7QUNqQmYscURBQXNFO0FBQ3RFLHVDQUF3RDtBQUV4RCw0Q0FBcUM7QUFHckMseUJBQWdDLEVBQXlEO1FBQXZELDRCQUFXLEVBQUUsMENBQWtCO0lBQzdELE9BQU87UUFDSCxXQUFXO1FBQ1gsa0JBQWtCO0tBQ3JCO0FBQ0wsQ0FBQztBQUxELDBDQUtDO0FBRUQsNEJBQW1DLFFBQTRDO0lBQzNFLFVBQVU7SUFDVixPQUFPO1FBQ0gsY0FBYyxFQUFFLGNBQU0sZUFBUSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxFQUFsQyxDQUFrQztRQUN4RCxNQUFNLEVBQUUsY0FBTSxlQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQTFCLENBQTBCO0tBQzNDLENBQUM7QUFDTixDQUFDO0FBTkQsZ0RBTUM7QUFFRCxrQkFBZSxxQkFBTyxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLDZCQUF1QyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCckcsbUNBQThCO0FBVzlCO0lBQXlDLHVDQUE4QjtJQUF2RTs7SUErRUEsQ0FBQztJQTlFRyxvQ0FBTSxHQUFOO1FBQ1UsbUJBQXVFLEVBQXJFLDRCQUFXLEVBQUUsMENBQWtCLEVBQUUsa0NBQWMsRUFBRSxrQkFBTSxDQUFjO1FBRTdFLE9BQU8sQ0FDSCw2QkFBSyxFQUFFLEVBQUMscUJBQXFCO1lBQ3pCLDZCQUFLLEVBQUUsRUFBQyw4QkFBOEIsRUFBQyxTQUFTLEVBQUMsS0FBSztnQkFDbEQsNkJBQUssU0FBUyxFQUFDLHlCQUF5QjtvQkFDcEMsK0NBQW9CLENBRWxCO2dCQUNOLDZCQUFLLFNBQVMsRUFBQywwQkFBMEI7b0JBQ3JDLDZCQUFLLFNBQVMsRUFBQyxtQkFBbUI7d0JBQzlCLDZCQUFLLFNBQVMsRUFBQyxjQUFjOzRCQUN6Qiw2QkFBSyxHQUFHLEVBQUMsRUFBRSxHQUFHLENBQ1o7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGNBQWM7NEJBQ3pCLDREQUFpQyxDQUMvQixDQUNKO29CQUNOLDZCQUFLLFNBQVMsRUFBQyxjQUFjO3dCQUN6Qix5Q0FBYyxDQUNaO29CQUNOLDZCQUFLLFNBQVMsRUFBQyxXQUFXO3dCQUN0Qiw2QkFBSyxTQUFTLEVBQUMsZ0NBQWdDOzRCQUMzQyxtREFBNEI7NEJBQzVCLDZCQUFLLFNBQVMsRUFBQyxhQUFhO2dDQUN4Qiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCO29DQUNyQywyQkFBRyxTQUFTLEVBQUMsWUFBWSxpQkFBYSxNQUFNLEdBQUssQ0FDL0M7Z0NBQ047b0NBQ0ksK0JBQU8sSUFBSSxFQUFDLE1BQU0sRUFBQyxXQUFXLEVBQUMsMEJBQTBCLEVBQUMsRUFBRSxFQUFDLG9CQUFvQixHQUFHLENBQ2xGLENBQ0osQ0FDSjt3QkFDTiw2QkFBSyxTQUFTLEVBQUMsZ0NBQWdDOzRCQUMzQyw4Q0FBdUI7NEJBQ3ZCLDZCQUFLLFNBQVMsRUFBQyxhQUFhO2dDQUN4Qiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCO29DQUNyQywyQkFBRyxTQUFTLEVBQUMsWUFBWSxpQkFBYSxNQUFNLEdBQUssQ0FDL0M7Z0NBQ047b0NBQ0ksK0JBQU8sRUFBRSxFQUFDLG9CQUFvQixFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBSSxDQUN0RztnQ0FDTiw2QkFBSyxTQUFTLEVBQUMseUJBQXlCO29DQUNwQywyQkFBRyxTQUFTLEVBQUMsV0FBVyxpQkFBYSxNQUFNLEVBQUMsT0FBTyxFQUFFLGNBQWMsR0FBTSxDQUN2RSxDQUNKLENBQ0o7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGdDQUFnQzs0QkFDM0Msc0RBQStCOzRCQUMvQiw2QkFBSyxTQUFTLEVBQUMsYUFBYTtnQ0FDeEIsNkJBQUssU0FBUyxFQUFDLDBCQUEwQjtvQ0FDckMsMkJBQUcsU0FBUyxFQUFDLFlBQVksaUJBQWEsTUFBTSxHQUFLLENBQy9DO2dDQUNOO29DQUNJLCtCQUFPLEVBQUUsRUFBQywyQkFBMkIsRUFBQyxXQUFXLEVBQUMsaUJBQWlCLEVBQUMsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsR0FBSSxDQUNwSDtnQ0FDTiw2QkFBSyxTQUFTLEVBQUMseUJBQXlCO29DQUNwQywyQkFBRyxTQUFTLEVBQUMsV0FBVyxpQkFBYSxNQUFNLEVBQUMsT0FBTyxFQUFFLGNBQWMsR0FBTSxDQUN2RSxDQUNKLENBQ0osQ0FDSjtvQkFDTiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCO3dCQUNyQyw2QkFBSyxFQUFFLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBRSxNQUFNLGNBQWdCLENBQzlDO29CQUVGLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyQiw2QkFBSyxTQUFTLEVBQUMseUJBQXlCO3dCQUNwQywyQkFBRyxTQUFTLEVBQUMsb0JBQW9COzs0QkFBRyxXQUFXLENBQUssQ0FDbEQsQ0FDVCxDQUFDLENBQUMsQ0FBQyxJQUFJLENBRVYsQ0FDSixDQUNKLENBQ1Q7SUFDTCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLENBL0V3QyxLQUFLLENBQUMsU0FBUyxHQStFdkQ7QUEvRVksa0RBQW1CO0FBZ0ZoQyxrQkFBZSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7QUMzRm5DLHlDQUE2RDtBQUU3RCxvREFBNkQ7QUFDN0QsK0JBQTJCO0FBcUIzQjtJQUNJLElBQUksY0FBYyxFQUFFO1FBQ2hCLE1BQU0sRUFBRSxDQUFDO0tBQ1o7U0FDSTtRQUNELE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUU7S0FDN0U7QUFFTCxDQUFDO0FBUkQsb0NBUUM7QUFFRDtJQUNJLElBQUssUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBc0IsQ0FBQyxLQUFLLEtBQU0sUUFBUSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBc0IsQ0FBQyxLQUFLLEVBQUU7UUFDaEssT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFFRDtJQUNJLElBQUksWUFBWSxHQUFZLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQXNCLENBQUMsS0FBSztJQUNwRyxJQUFJLFFBQVEsR0FBWSxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFzQixDQUFDLEtBQUs7SUFDaEcsSUFBSSxlQUFlLEdBQVksUUFBUSxDQUFDLGNBQWMsQ0FBQywyQkFBMkIsQ0FBc0IsQ0FBQyxLQUFLO0lBQzlHLE9BQU8sVUFBVSxRQUFRO1FBQ3JCLElBQUksUUFBUSxJQUFJLGVBQWUsRUFBRTtZQUM3QixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQztTQUMvRTthQUNJO1lBQ0QsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDSCxVQUFVLEVBQUU7b0JBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0QsR0FBRyxFQUFFLHVCQUF1QjtnQkFDNUIsSUFBSSxFQUFFLE1BQU07Z0JBQ1osUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLElBQUksRUFBRSw2QkFBbUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO2dCQUM3RSxPQUFPLEVBQUUsVUFBVSxRQUFRO29CQUN2QixJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7d0JBQ2xCLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUc7cUJBQzdCO3lCQUNJO3dCQUNELFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7cUJBQzdFO2dCQUVMLENBQUM7Z0JBQ0QsUUFBUSxFQUFFO29CQUNOLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO2FBQ0osQ0FBQztTQUNMO0lBQ0wsQ0FBQztBQUNMLENBQUM7QUFoQ0Qsd0JBZ0NDO0FBQ0Q7SUFDSSxPQUFPO1FBQ0gsSUFBSSxFQUFFLFNBQVMsQ0FBQyxzQkFBc0I7S0FDekMsQ0FBQztBQUNOLENBQUM7QUFKRCx3Q0FJQzs7Ozs7Ozs7Ozs7QUM1RUQsNENBQStDO0FBRS9DLHNDQUFxRDtBQUVyRCxvREFBbUU7QUFLbkUsSUFBTSxVQUFVLEdBQUcsdUJBQWUsQ0FBQyxxQkFBSyxDQUFDLENBQUM7QUFFN0IsdUJBQWUsR0FBRyxtQkFBVyxDQUF1QixzQ0FBaUIsRUFBRTtJQUNoRixXQUFXLEVBQUUsRUFBRTtJQUNmLGtCQUFrQixFQUFFLEtBQUs7Q0FDNUIsRUFBRSxVQUFVLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZmLHFEQUFpRztBQUdqRywyQkFBa0MsS0FBMkIsRUFBRSxNQUF3QjtJQUNuRixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyw2QkFBTztZQUNSLG9CQUNPLEtBQUssSUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDeEM7UUFDTCxLQUFLLDRDQUFzQixDQUFDLENBQUM7WUFDekIsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEVBQUU7Z0JBQzFCLG9CQUNPLEtBQUssSUFBRSxrQkFBa0IsRUFBRSxLQUFLLElBQ3RDO2FBQ0o7WUFDRCxvQkFDTyxLQUFLLElBQUUsa0JBQWtCLEVBQUUsSUFBSSxJQUNyQztTQUNKO1FBQ0QsS0FBSyxrQ0FBWSxDQUFDLENBQUM7WUFDZixvQkFDTyxLQUFLLElBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLElBQ3hDO1NBQ0o7S0FDSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUF2QkQsOENBdUJDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJELHFEQUErRTtBQUUvRSxxQkFBNEIsS0FBNEIsRUFBRSxNQUF5QjtJQUMvRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyx1Q0FBZ0IsQ0FBQyxDQUFDO1lBQ25CLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0Msb0JBQ08sS0FBSyxJQUNSLFlBQVksRUFBRSxZQUFZLElBQzdCO1NBQ0o7UUFDRCxLQUFLLCtCQUFRLENBQUMsQ0FBQztZQUNYLG9CQUNPLEtBQUssSUFDUixZQUFZLEVBQUUsRUFBRSxFQUNoQixtQkFBbUIsRUFBRSxFQUFFLElBQzFCO1NBQ0o7S0FFSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFwQkQsa0NBb0JDIiwiZmlsZSI6IlVzZXJTaWduVXAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9DVVJSRU5UX1VTRVIgPSAnU0VUX0NVUlJFTlRfVVNFUidcclxuZXhwb3J0IHR5cGUgU0VUX0NVUlJFTlRfVVNFUiA9IHR5cGVvZiBTRVRfQ1VSUkVOVF9VU0VSXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9PVVQgPSAnU0lHTl9PVVQnXHJcbmV4cG9ydCB0eXBlIFNJR05fT1VUID0gdHlwZW9mIFNJR05fT1VUXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cy50c3giLCJleHBvcnQgY29uc3QgU0lHTl9VUCA9ICdTSUdOX1VQJztcclxuZXhwb3J0IHR5cGUgU0lHTl9VUCA9IHR5cGVvZiBTSUdOX1VQO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgPSAnVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCc7XHJcbmV4cG9ydCB0eXBlIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgPSB0eXBlb2YgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRVUk5fRVJST1IgPSAnUkVUVVJOX0VSUk9SJztcclxuZXhwb3J0IHR5cGUgUkVUVVJOX0VSUk9SID0gdHlwZW9mIFJFVFVSTl9FUlJPUjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMudHN4IiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEFudGlGb3JnZXJ5VG9rZW4oZGF0YSkge1xyXG4vLyAgICBkYXRhLl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuID0gJCgnI19fQWpheEFudGlGb3JnZXJ5Rm9ybSBpbnB1dFtuYW1lPV9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXScpLnZhbCgpO1xyXG4vLyAgICByZXR1cm4gZGF0YTtcclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldEFudGlGb3JnZXJ5VG9rZW4oZGF0YSkge1xyXG4gICAgZGF0YS5fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiA9ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFudGlGb3JnZXJ5VG9rZW5XaXRob3V0RGF0YSgpIHtcclxuICAgIHJldHVybiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4udHMiLCJpbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgZW1haWxBZGRyZXNzLCB1c2VyUHJvZmlsZUltYWdlVVJMIH06IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbWFpbEFkZHJlc3MsXHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWFnZVVSTCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9ucy5DdXJyZW50VXNlckFjdGlvbj4gKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEN1cnJlbnRVc2VyTmV3OiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLmdldEN1cnJlbnRVc2VyTmV3KCkpLFxyXG4gICAgICAgIHNpZ25PdXQ6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuc2lnbk91dCgpKVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTmF2aWdhdGlvbkJhckNvbXBvbmVudCBhcyBhbnkgYXMgUmVhY3QuU0ZDKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IHN0cmluZyxcclxuICAgIHVzZXJQcm9maWxlSW1hZ2VVUkw6IHN0cmluZyxcclxuICAgIGdldEN1cnJlbnRVc2VyTmV3OiAoKSA9PiB2b2lkLFxyXG4gICAgc2lnbk91dDogKCkgPT4gdm9pZCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25CYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyRiA9IHRoaXMuZ2V0Q3VycmVudFVzZXJGLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpemVVc2VyID0gdGhpcy5hdXRob3JpemVVc2VyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50VXNlckYoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0dldEN1cnJlbnRVc2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHt9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhdXRob3JpemVVc2VyKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9BdXRob3JpemVDdXJyZW50VXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7fSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50VXNlck5ldygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWxBZGRyZXNzLCB1c2VyUHJvZmlsZUltYWdlVVJMLCBnZXRDdXJyZW50VXNlck5ldywgc2lnbk91dCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWduLWluLXVwLWNvbnRhaW5lciAuc2lnbi1pbi1jb250YWluZXIgYTpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyLjVwdDsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5uYXZiYXItdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwMkIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLmZhLXNpZ24tb3V0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAjVXNlclByb2ZpbGVQaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuc2lnbi1pbi11cC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuc2lnbi1pbi11cC1jb250YWluZXIgLnNlcGFyYXRvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDE4NCwgMTg0LCAwLjkxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCBuYXYubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgyNTUsMjU1LDI1NSwgMSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPkRpc2NvdmVyIE1vdW50YWluIFJlc29ydHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJUZXh0XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclRleHRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVtYWlsQWRkcmVzcyAhPSBcIlwiICYmIHRoaXMucHJvcHMuZW1haWxBZGRyZXNzICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIlVzZXJQcm9maWxlUGljdHVyZVwiIHNyYz1cImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL0lNR18yMDE3MTIzMF8xMDI4MDkuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlVzZXJGaXJzdE5hbWVcIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPnt0aGlzLnByb3BzLmVtYWlsQWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17c2lnbk91dH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9Mb2dpblwiPlNpZ24gSW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9TaWduVXBcIj5TaWduIFVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zaWduT3V0QXN5bmN9PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5nZXRDdXJyZW50VXNlckZ9PkdldCBDdXJyZW50IFVzZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmF1dGhvcml6ZVVzZXJ9PkF1dGhvcml6ZSBVc2VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cydcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJ1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcbmltcG9ydCB7IEdldEFudGlGb3JnZXJ5VG9rZW5XaXRob3V0RGF0YSB9IGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFNFVF9DVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0Q3VycmVudFVzZXIge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVJcclxuICAgIHBheWxvYWQ6IHN0cmluZyxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25PdXQge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlNJR05fT1VUXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEN1cnJlbnRVc2VyQWN0aW9uID0gU2V0Q3VycmVudFVzZXIgfCBTaWduT3V0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXJOZXcoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9HZXRDdXJyZW50VXNlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIlJlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiOiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCkvL0dldEFudGlGb3JnZXJ5VG9rZW5XaXRob3V0RGF0YSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUiwgcGF5bG9hZDogcmVzcG9uc2UucmVzcG9uc2VUZXh0IH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSLCBwYXlsb2FkOiBcInt9XCIgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gICAgdmFyIHRlc3QgPSBcIlwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvU2lnbk91dEFzeW5jXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIC8vZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgLy9jb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5cIjogJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RBZ2FpbiA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuU0lHTl9PVVQgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXF1ZXN0LCBzdGF0dXMsIGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvclwiICsgdmFsKTtcclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyB0aHVuayB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXJDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyJ1xyXG5pbXBvcnQgVXNlclNpZ25VcENvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL1VzZXJTaWduVXBDb250YWluZXInXHJcbmltcG9ydCB7IFVzZXJTaWduVXBTdG9yZSB9IGZyb20gJy4uL1N0b3Jlcy9Vc2VyU2lnblVwU3RvcmUnXHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvQ3VycmVudFVzZXJTdG9yZSdcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17Q3VycmVudFVzZXJTdG9yZX0gPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIC8+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYXZpZ2F0aW9uQmFyTW91bnRQb2ludCcpXHJcbilcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17VXNlclNpZ25VcFN0b3JlfT5cclxuICAgICAgICA8VXNlclNpZ25VcENvbnRhaW5lciAvPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVXNlclNpZ25VcE1vdW50UG9pbnQnKSBhcyBIVE1MRWxlbWVudFxyXG4pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VudHJ5L1VzZXJTaWduVXBFbnRyeS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGh1bmsgfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lcic7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvVXNlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuXHJcbmNvbnN0IG1pZGRsZVdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRVc2VyU3RvcmUgPSBjcmVhdGVTdG9yZTxDdXJyZW50VXNlclN0b3JlU3RhdGU+KFVzZXJSZWR1Y2VyLCB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiLFxyXG5cclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsImltcG9ydCAgVXNlclNpZ25VcENvbXBvbmVudCAgZnJvbSAnLi4vQ29tcG9uZW50cy9Vc2VyU2lnblVwQ29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zJztcclxuaW1wb3J0IHsgVXNlclNpZ25VcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyU2lnblVwU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBzaWduVXBFcnJvciwgaXNQYXNzd29yZFJldmVhbGVkIH06IFVzZXJTaWduVXBTdG9yZVN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpZ25VcEVycm9yLFxyXG4gICAgICAgIGlzUGFzc3dvcmRSZXZlYWxlZCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9ucy5Vc2VyU2lnblVwQWN0aW9uPikge1xyXG4gICAgLy9maW5kVGhpc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXZlYWxQYXNzd29yZDogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5yZXZlYWxQYXNzd29yZCgpKSxcclxuICAgICAgICBzaWduVXA6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuc2lnblVwKCkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyU2lnblVwQ29tcG9uZW50IGFzIGFueSBhcyBSZWFjdC5TRkMpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRhaW5lcnMvVXNlclNpZ25VcENvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBzaWduVXBFcnJvcj86IHN0cmluZztcclxuICAgIGlzUGFzc3dvcmRSZXZlYWxlZD86IGJvb2xlYW47XHJcbiAgICByZXZlYWxQYXNzd29yZD86ICgpID0+IHZvaWQ7XHJcbiAgICBzaWduVXA/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTaWduVXBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2lnblVwRXJyb3IsIGlzUGFzc3dvcmRSZXZlYWxlZCwgcmV2ZWFsUGFzc3dvcmQsIHNpZ25VcH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJVc2VyU2lnblVwQ29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiVXNlclNpZ25VcENvbXBvbmVudENvbnRhaW5lclwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtc20tMTIgY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtc20tMTIgY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55LWxvZ28tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55LWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlzY292ZXIgTW91bnRhaW4gUmVzb3J0cyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wdXJwb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TaWduIFVwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIiBpZD1cIkNyZWF0ZVVzZXJVc2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGljb24tbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJDcmVhdGVVc2VyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdHlwZT17aXNQYXNzd29yZFJldmVhbGVkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGljb24tZXllXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtyZXZlYWxQYXNzd29yZH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGljb24tbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJDcmVhdGVVc2VyQ29uZmlybVBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJSZXBlYXQgUGFzc3dvcmRcIiB0eXBlPXtpc1Bhc3N3b3JkUmV2ZWFsZWQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1leWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWV5ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3JldmVhbFBhc3N3b3JkfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIlNpZ25VcFwiIG9uQ2xpY2s9e3NpZ25VcH0gPlNpZ24gVXA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLWVycm9yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ge3NpZ25VcEVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ25VcENvbXBvbmVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9Vc2VyU2lnblVwQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMvVXNlclNpZ25VcENvbnN0YW50cydcclxuaW1wb3J0IHsgVXNlclNpZ25VcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyU2lnblVwU3RvcmVTdGF0ZSdcclxuaW1wb3J0IEdldEFudGlGb3JnZXJ5VG9rZW4gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IFJFVFVSTl9FUlJPUiB9IGZyb20gJy4uL0NvbnN0YW50cy9Vc2VyU2lnblVwQ29uc3RhbnRzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25VcCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0lHTl9VUCxcclxuICAgIHBheWxvYWQ6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVQYXNzd29yZFJldmVhbCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuVE9HR0xFX1BBU1NXT1JEX1JFVkVBTFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuRXJyb3Ige1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlJFVFVSTl9FUlJPUixcclxuICAgIHBheWxvYWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyU2lnblVwQWN0aW9uID0gU2lnblVwIHwgVG9nZ2xlUGFzc3dvcmRSZXZlYWwgfCBSZXR1cm5FcnJvclxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduVXBBY3Rpb24oKTogUmV0dXJuRXJyb3J7XHJcbiAgICBpZiAoaXNGb3JtQ29tcGxldGUpIHtcclxuICAgICAgICBzaWduVXAoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IGNvbnN0YW50cy5SRVRVUk5fRVJST1IsIHBheWxvYWQ6IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRm9ybUNvbXBsZXRlKCkge1xyXG4gICAgaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlclBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPT09IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlckNvbmZpcm1QYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduVXAoKTogRGlzcGF0Y2g8YW55PiB7XHJcbiAgICB2YXIgZW1haWxBZGRyZXNzOiBzdHJpbmcgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NyZWF0ZVVzZXJVc2VybmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB2YXIgcGFzc3dvcmQ6IHN0cmluZyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlclBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIHZhciBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlckNvbmZpcm1QYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5SRVRVUk5fRVJST1IsIHBheWxvYWQ6IFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoXCIgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0NyZWF0ZVVzZXJBc3luY1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHsgZW1haWxBZGRyZXNzOiBlbWFpbEFkZHJlc3MsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlJFVFVSTl9FUlJPUiwgcGF5bG9hZDogcmVzcG9uc2UucmVzcG9uc2VUZXh0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlYWxQYXNzd29yZCgpOiBUb2dnbGVQYXNzd29yZFJldmVhbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNvbnN0YW50cy5UT0dHTEVfUEFTU1dPUkRfUkVWRUFMXHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyB0aHVuayB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFVzZXJTaWduVXBDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9Vc2VyU2lnblVwQ29udGFpbmVyJztcclxuaW1wb3J0IHsgVXNlclNpZ25VcFJlZHVjZXIgfSBmcm9tICcuLi9SZWR1Y2Vycy9Vc2VyU2lnblVwUmVkdWNlcnMnO1xyXG5pbXBvcnQgeyBVc2VyU2lnblVwU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL1VzZXJTaWduVXBTdG9yZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuXHJcbmNvbnN0IG1pZGRsZVdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTaWduVXBTdG9yZSA9IGNyZWF0ZVN0b3JlPFVzZXJTaWduVXBTdG9yZVN0YXRlPihVc2VyU2lnblVwUmVkdWNlciwge1xyXG4gICAgc2lnblVwRXJyb3I6IFwiXCIsXHJcbiAgICBpc1Bhc3N3b3JkUmV2ZWFsZWQ6IGZhbHNlLFxyXG59LCBtaWRkbGVXYXJlKTtcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmVzL1VzZXJTaWduVXBTdG9yZS50c3giLCJpbXBvcnQgeyBVc2VyU2lnblVwU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzLy9Vc2VyU2lnblVwU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgU0lHTl9VUCwgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCwgUkVUVVJOX0VSUk9SIH0gZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyU2lnblVwQWN0aW9uIH0gZnJvbSAnLi4vQWN0aW9ucy9Vc2VyU2lnblVwQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclNpZ25VcFJlZHVjZXIoc3RhdGU6IFVzZXJTaWduVXBTdG9yZVN0YXRlLCBhY3Rpb246IFVzZXJTaWduVXBBY3Rpb24pOiBVc2VyU2lnblVwU3RvcmVTdGF0ZSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIHNpZ25VcEVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMOiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pc1Bhc3N3b3JkUmV2ZWFsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIGlzUGFzc3dvcmRSZXZlYWxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIGlzUGFzc3dvcmRSZXZlYWxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVUVVJOX0VSUk9SOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgc2lnblVwRXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVkdWNlcnMvVXNlclNpZ25VcFJlZHVjZXJzLnRzeCIsImltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgTE9HSU4sIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgfSBmcm9tICcuLi9Db25zdGFudHMvVXNlckxvZ2luQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJBY3Rpb24gfSBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNFVF9DVVJSRU5UX1VTRVIsIFNJR05fT1VUIH0gZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZTogQ3VycmVudFVzZXJTdG9yZVN0YXRlLCBhY3Rpb246IEN1cnJlbnRVc2VyQWN0aW9uKTogQ3VycmVudFVzZXJTdG9yZVN0YXRlIHtcclxuICAgIHZhciB0ZXN0ID0gXCJcIjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6IHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsQWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkW1wiZW1haWxcIl07XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczogZW1haWxBZGRyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlZHVjZXJzL1VzZXJSZWR1Y2VyLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=