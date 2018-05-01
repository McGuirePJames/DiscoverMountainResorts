webpackJsonp([0],{

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGN_UP = 'SIGN_UP';
exports.TOGGLE_PASSWORD_REVEAL = 'TOGGLE_PASSWORD_REVEAL';
exports.RETURN_ERROR = 'RETURN_ERROR';


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

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(34);
var react_redux_1 = __webpack_require__(18);
var NavigationBarContainer_1 = __webpack_require__(51);
var UserSignUpContainer_1 = __webpack_require__(360);
var UserSignUpStore_1 = __webpack_require__(363);
var CurrentUserStore_1 = __webpack_require__(55);
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
    React.createElement(NavigationBarContainer_1.default, null)), document.getElementById('NavigationBarMountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserSignUpStore_1.UserSignUpStore },
    React.createElement(UserSignUpContainer_1.default, null)), document.getElementById('UserSignUpMountPoint'));


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserSignUpComponent_1 = __webpack_require__(361);
var Actions = __webpack_require__(362);
var react_redux_1 = __webpack_require__(18);
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
var React = __webpack_require__(3);
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
var constants = __webpack_require__(173);
var GetAntiForgeryToken_1 = __webpack_require__(26);
var $ = __webpack_require__(11);
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
var redux_thunk_1 = __webpack_require__(37);
var redux_1 = __webpack_require__(27);
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
var UserSignUpConstants_1 = __webpack_require__(173);
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

},[359]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudHJ5L1VzZXJTaWduVXBFbnRyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lcnMvVXNlclNpZ25VcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVXNlclNpZ25VcENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvVXNlclNpZ25VcEFjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9TdG9yZXMvVXNlclNpZ25VcFN0b3JlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkdWNlcnMvVXNlclNpZ25VcFJlZHVjZXJzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMudHN4Iiwid2VicGFjazovLy8uL3NyYy9TdG9yZXMvQ3VycmVudFVzZXJTdG9yZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZHVjZXJzL1VzZXJSZWR1Y2VyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFhLGVBQU8sR0FBRyxTQUFTLENBQUM7QUFHcEIsOEJBQXNCLEdBQUcsd0JBQXdCLENBQUM7QUFHbEQsb0JBQVksR0FBRyxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0FDTjlCLHdCQUFnQixHQUFHLGtCQUFrQjtBQUdyQyxnQkFBUSxHQUFHLFVB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RUo7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBcEJELGtDQW9CQyIsImZpbGUiOiJVc2VyU2lnblVwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTSUdOX1VQID0gJ1NJR05fVVAnO1xyXG5leHBvcnQgdHlwZSBTSUdOX1VQID0gdHlwZW9mIFNJR05fVVA7XHJcblxyXG5leHBvcnQgY29uc3QgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCA9ICdUT0dHTEVfUEFTU1dPUkRfUkVWRUFMJztcclxuZXhwb3J0IHR5cGUgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCA9IHR5cGVvZiBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFVSTl9FUlJPUiA9ICdSRVRVUk5fRVJST1InO1xyXG5leHBvcnQgdHlwZSBSRVRVUk5fRVJST1IgPSB0eXBlb2YgUkVUVVJOX0VSUk9SO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMvVXNlclNpZ25VcENvbnN0YW50cy50c3giLCJleHBvcnQgY29uc3QgU0VUX0NVUlJFTlRfVVNFUiA9ICdTRVRfQ1VSUkVOVF9VU0VSJ1xyXG5leHBvcnQgdHlwZSBTRVRfQ1VSUkVOVF9VU0VSID0gdHlwZW9mIFNFVF9DVVJSRU5UX1VTRVJcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX09VVCA9ICdTSUdOX09VVCdcclxuZXhwb3J0IHR5cGUgU0lHTl9PVVQgPSB0eXBlb2YgU0lHTl9PVVRcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuLy8gICAgZGF0YS5fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiA9ICQoJyNfX0FqYXhBbnRpRm9yZ2VyeUZvcm0gaW5wdXRbbmFtZT1fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbl0nKS52YWwoKTtcclxuLy8gICAgcmV0dXJuIGRhdGE7XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuICAgIGRhdGEuX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4gPSAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEoKSB7XHJcbiAgICByZXR1cm4gJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgUmVkdXhQcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhckNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXInXHJcbmltcG9ydCBVc2VyU2lnblVwQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvVXNlclNpZ25VcENvbnRhaW5lcidcclxuaW1wb3J0IHsgVXNlclNpZ25VcFN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL1VzZXJTaWduVXBTdG9yZSdcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZSB9IGZyb20gJy4uL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlJ1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtDdXJyZW50VXNlclN0b3JlfSA+XHJcbiAgICAgICAgPE5hdmlnYXRpb25CYXJDb250YWluZXIgLz5cclxuICAgIDwvUHJvdmlkZXI+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ05hdmlnYXRpb25CYXJNb3VudFBvaW50JylcclxuKVxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtVc2VyU2lnblVwU3RvcmV9PlxyXG4gICAgICAgIDxVc2VyU2lnblVwQ29udGFpbmVyIC8+XHJcbiAgICA8L1Byb3ZpZGVyPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdVc2VyU2lnblVwTW91bnRQb2ludCcpIGFzIEhUTUxFbGVtZW50XHJcbik7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW50cnkvVXNlclNpZ25VcEVudHJ5LnRzeCIsImltcG9ydCAgVXNlclNpZ25VcENvbXBvbmVudCAgZnJvbSAnLi4vQ29tcG9uZW50cy9Vc2VyU2lnblVwQ29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zJztcclxuaW1wb3J0IHsgVXNlclNpZ25VcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyU2lnblVwU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBzaWduVXBFcnJvciwgaXNQYXNzd29yZFJldmVhbGVkIH06IFVzZXJTaWduVXBTdG9yZVN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHNpZ25VcEVycm9yLFxyXG4gICAgICAgIGlzUGFzc3dvcmRSZXZlYWxlZCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9ucy5Vc2VyU2lnblVwQWN0aW9uPikge1xyXG4gICAgLy9maW5kVGhpc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICByZXZlYWxQYXNzd29yZDogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5yZXZlYWxQYXNzd29yZCgpKSxcclxuICAgICAgICBzaWduVXA6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuc2lnblVwKCkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShVc2VyU2lnblVwQ29tcG9uZW50IGFzIGFueSBhcyBSZWFjdC5TRkMpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRhaW5lcnMvVXNlclNpZ25VcENvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBzaWduVXBFcnJvcj86IHN0cmluZztcclxuICAgIGlzUGFzc3dvcmRSZXZlYWxlZD86IGJvb2xlYW47XHJcbiAgICByZXZlYWxQYXNzd29yZD86ICgpID0+IHZvaWQ7XHJcbiAgICBzaWduVXA/OiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJTaWduVXBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2lnblVwRXJyb3IsIGlzUGFzc3dvcmRSZXZlYWxlZCwgcmV2ZWFsUGFzc3dvcmQsIHNpZ25VcH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJVc2VyU2lnblVwQ29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiVXNlclNpZ25VcENvbXBvbmVudENvbnRhaW5lclwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdCBjb2wtc20tMTIgY29sLW1kLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyaWdodCBjb2wtc20tMTIgY29sLW1kLTdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55LWxvZ28tbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wYW55LWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGlzY292ZXIgTW91bnRhaW4gUmVzb3J0cyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1wdXJwb3NlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TaWduIFVwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLXVzZXJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsIEFkZHJlc3M8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLXVzZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIiBpZD1cIkNyZWF0ZVVzZXJVc2VybmFtZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC1wYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGljb24tbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJDcmVhdGVVc2VyUGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgdHlwZT17aXNQYXNzd29yZFJldmVhbGVkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGljb24tZXllXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtyZXZlYWxQYXNzd29yZH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGljb24tbG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJDcmVhdGVVc2VyQ29uZmlybVBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJSZXBlYXQgUGFzc3dvcmRcIiB0eXBlPXtpc1Bhc3N3b3JkUmV2ZWFsZWQgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi1leWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWV5ZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3JldmVhbFBhc3N3b3JkfT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtYnV0dG9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIlNpZ25VcFwiIG9uQ2xpY2s9e3NpZ25VcH0gPlNpZ24gVXA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25VcEVycm9yLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLWVycm9yLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ge3NpZ25VcEVycm9yfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVXNlclNpZ25VcENvbXBvbmVudDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9Vc2VyU2lnblVwQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMvVXNlclNpZ25VcENvbnN0YW50cydcclxuaW1wb3J0IHsgVXNlclNpZ25VcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyU2lnblVwU3RvcmVTdGF0ZSdcclxuaW1wb3J0IEdldEFudGlGb3JnZXJ5VG9rZW4gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IFJFVFVSTl9FUlJPUiB9IGZyb20gJy4uL0NvbnN0YW50cy9Vc2VyU2lnblVwQ29uc3RhbnRzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25VcCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0lHTl9VUCxcclxuICAgIHBheWxvYWQ6IHN0cmluZyxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVQYXNzd29yZFJldmVhbCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuVE9HR0xFX1BBU1NXT1JEX1JFVkVBTFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuRXJyb3Ige1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlJFVFVSTl9FUlJPUixcclxuICAgIHBheWxvYWQ6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVc2VyU2lnblVwQWN0aW9uID0gU2lnblVwIHwgVG9nZ2xlUGFzc3dvcmRSZXZlYWwgfCBSZXR1cm5FcnJvclxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduVXBBY3Rpb24oKTogUmV0dXJuRXJyb3J7XHJcbiAgICBpZiAoaXNGb3JtQ29tcGxldGUpIHtcclxuICAgICAgICBzaWduVXAoKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IHR5cGU6IGNvbnN0YW50cy5SRVRVUk5fRVJST1IsIHBheWxvYWQ6IFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRm9ybUNvbXBsZXRlKCkge1xyXG4gICAgaWYgKChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlclBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUgPT09IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlckNvbmZpcm1QYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduVXAoKTogRGlzcGF0Y2g8YW55PiB7XHJcbiAgICB2YXIgZW1haWxBZGRyZXNzOiBzdHJpbmcgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NyZWF0ZVVzZXJVc2VybmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB2YXIgcGFzc3dvcmQ6IHN0cmluZyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlclBhc3N3b3JkJykgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWVcclxuICAgIHZhciBjb25maXJtUGFzc3dvcmQ6IHN0cmluZyA9IChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ3JlYXRlVXNlckNvbmZpcm1QYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgaWYgKHBhc3N3b3JkICE9IGNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5SRVRVUk5fRVJST1IsIHBheWxvYWQ6IFwiUGFzc3dvcmRzIGRvbid0IG1hdGNoXCIgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0NyZWF0ZVVzZXJBc3luY1wiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHsgZW1haWxBZGRyZXNzOiBlbWFpbEFkZHJlc3MsIHBhc3N3b3JkOiBwYXNzd29yZCB9KSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCIvXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlJFVFVSTl9FUlJPUiwgcGF5bG9hZDogcmVzcG9uc2UucmVzcG9uc2VUZXh0IH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZXZlYWxQYXNzd29yZCgpOiBUb2dnbGVQYXNzd29yZFJldmVhbCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNvbnN0YW50cy5UT0dHTEVfUEFTU1dPUkRfUkVWRUFMXHJcbiAgICB9O1xyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyB0aHVuayB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFVzZXJTaWduVXBDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9Vc2VyU2lnblVwQ29udGFpbmVyJztcclxuaW1wb3J0IHsgVXNlclNpZ25VcFJlZHVjZXIgfSBmcm9tICcuLi9SZWR1Y2Vycy9Vc2VyU2lnblVwUmVkdWNlcnMnO1xyXG5pbXBvcnQgeyBVc2VyU2lnblVwU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL1VzZXJTaWduVXBTdG9yZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuXHJcbmNvbnN0IG1pZGRsZVdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJTaWduVXBTdG9yZSA9IGNyZWF0ZVN0b3JlPFVzZXJTaWduVXBTdG9yZVN0YXRlPihVc2VyU2lnblVwUmVkdWNlciwge1xyXG4gICAgc2lnblVwRXJyb3I6IFwiXCIsXHJcbiAgICBpc1Bhc3N3b3JkUmV2ZWFsZWQ6IGZhbHNlLFxyXG59LCBtaWRkbGVXYXJlKTtcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvU3RvcmVzL1VzZXJTaWduVXBTdG9yZS50c3giLCJpbXBvcnQgeyBVc2VyU2lnblVwU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzLy9Vc2VyU2lnblVwU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgU0lHTl9VUCwgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCwgUkVUVVJOX0VSUk9SIH0gZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBVc2VyU2lnblVwQWN0aW9uIH0gZnJvbSAnLi4vQWN0aW9ucy9Vc2VyU2lnblVwQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclNpZ25VcFJlZHVjZXIoc3RhdGU6IFVzZXJTaWduVXBTdG9yZVN0YXRlLCBhY3Rpb246IFVzZXJTaWduVXBBY3Rpb24pOiBVc2VyU2lnblVwU3RvcmVTdGF0ZSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTSUdOX1VQOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIHNpZ25VcEVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMOiB7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pc1Bhc3N3b3JkUmV2ZWFsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsIGlzUGFzc3dvcmRSZXZlYWxlZDogZmFsc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIGlzUGFzc3dvcmRSZXZlYWxlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgUkVUVVJOX0VSUk9SOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgc2lnblVwRXJyb3I6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVkdWNlcnMvVXNlclNpZ25VcFJlZHVjZXJzLnRzeCIsImltcG9ydCB7IE5hdmlnYXRpb25CYXJDb21wb25lbnQgfSAgZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50JztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBlbWFpbEFkZHJlc3MsIHVzZXJQcm9maWxlSW1hZ2VVUkwgfTogQ3VycmVudFVzZXJTdG9yZVN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGVtYWlsQWRkcmVzcyxcclxuICAgICAgICB1c2VyUHJvZmlsZUltYWdlVVJMLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoOiBEaXNwYXRjaDxBY3Rpb25zLkN1cnJlbnRVc2VyQWN0aW9uPiApIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0Q3VycmVudFVzZXJOZXc6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuZ2V0Q3VycmVudFVzZXJOZXcoKSksXHJcbiAgICAgICAgc2lnbk91dDogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5zaWduT3V0KCkpXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGFzIGFueSBhcyBSZWFjdC5TRkMpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGVtYWlsQWRkcmVzczogc3RyaW5nLFxyXG4gICAgdXNlclByb2ZpbGVJbWFnZVVSTDogc3RyaW5nLFxyXG4gICAgZ2V0Q3VycmVudFVzZXJOZXc6ICgpID0+IHZvaWQsXHJcbiAgICBzaWduT3V0OiAoKSA9PiB2b2lkLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkJhckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgb2JqZWN0PiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuZ2V0Q3VycmVudFVzZXJGID0gdGhpcy5nZXRDdXJyZW50VXNlckYuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmF1dGhvcml6ZVVzZXIgPSB0aGlzLmF1dGhvcml6ZVVzZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldEN1cnJlbnRVc2VyRigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvR2V0Q3VycmVudFVzZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEdldEFudGlGb3JnZXJ5VG9rZW4oe30pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGF1dGhvcml6ZVVzZXIoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0F1dGhvcml6ZUN1cnJlbnRVc2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHt9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnByb3BzLmdldEN1cnJlbnRVc2VyTmV3KCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBlbWFpbEFkZHJlc3MsIHVzZXJQcm9maWxlSW1hZ2VVUkwsIGdldEN1cnJlbnRVc2VyTmV3LCBzaWduT3V0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjAyQiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAuZmEtc2lnbi1vdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2ICNVc2VyUHJvZmlsZVBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5zaWduLWluLXVwLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5zaWduLWluLXVwLWNvbnRhaW5lciAuc2VwYXJhdG9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgMTg0LCAxODQsIDAuOTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIG5hdi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+RGlzY292ZXIgTW91bnRhaW4gUmVzb3J0czwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRleHRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVGV4dFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZW1haWxBZGRyZXNzICE9IFwiXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIlVzZXJQcm9maWxlUGljdHVyZVwiIHNyYz1cImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL0lNR18yMDE3MTIzMF8xMDI4MDkuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlVzZXJGaXJzdE5hbWVcIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPnt0aGlzLnByb3BzLmVtYWlsQWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17c2lnbk91dH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8cCBpZD1cIlVzZXJMYXN0TmFtZVwiIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+TWNHdWlyZTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9Mb2dpblwiPlNpZ24gSW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9TaWduVXBcIj5TaWduIFVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zaWduT3V0QXN5bmN9PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5nZXRDdXJyZW50VXNlckZ9PkdldCBDdXJyZW50IFVzZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmF1dGhvcml6ZVVzZXJ9PkF1dGhvcml6ZSBVc2VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cydcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJ1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcbmltcG9ydCB7IEdldEFudGlGb3JnZXJ5VG9rZW5XaXRob3V0RGF0YSB9IGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFNFVF9DVVJSRU5UX1VTRVIgfSBmcm9tICcuLi9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0Q3VycmVudFVzZXIge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVJcclxuICAgIHBheWxvYWQ6IHN0cmluZyxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFNpZ25PdXQge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlNJR05fT1VUXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEN1cnJlbnRVc2VyQWN0aW9uID0gU2V0Q3VycmVudFVzZXIgfCBTaWduT3V0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFVzZXJOZXcoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9HZXRDdXJyZW50VXNlclwiLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIlJlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiOiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCkvL0dldEFudGlGb3JnZXJ5VG9rZW5XaXRob3V0RGF0YSgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZS5yZXNwb25zZVRleHQpXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUiwgcGF5bG9hZDogcmVzcG9uc2UucmVzcG9uc2VUZXh0IH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSLCBwYXlsb2FkOiBcInt9XCIgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCkge1xyXG4gICAgdmFyIHRlc3QgPSBcIlwiO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvU2lnbk91dEFzeW5jXCIsXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgIC8vZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgLy9jb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5cIjogJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlc3RBZ2FpbiA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuU0lHTl9PVVQgfSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChyZXF1ZXN0LCBzdGF0dXMsIGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IHJlcXVlc3QucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJlcnJvclwiICsgdmFsKTtcclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyB0aHVuayB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IE5hdmlnYXRpb25CYXJDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyJztcclxuaW1wb3J0IHsgVXNlclJlZHVjZXIgfSBmcm9tICcuLi9SZWR1Y2Vycy9Vc2VyUmVkdWNlcic7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5pbXBvcnQgUmVkdXhQcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xyXG5cclxuY29uc3QgbWlkZGxlV2FyZSA9IGFwcGx5TWlkZGxld2FyZSh0aHVuayk7XHJcblxyXG5leHBvcnQgY29uc3QgQ3VycmVudFVzZXJTdG9yZSA9IGNyZWF0ZVN0b3JlPEN1cnJlbnRVc2VyU3RvcmVTdGF0ZT4oVXNlclJlZHVjZXIsIHtcclxuICAgIGVtYWlsQWRkcmVzczogXCJcIixcclxuICAgIHVzZXJQcm9maWxlSW1hZ2VVUkw6IFwiXCIsXHJcbn0sIG1pZGRsZVdhcmUpO1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZXMvQ3VycmVudFVzZXJTdG9yZS50c3giLCJpbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnXHJcbmltcG9ydCB7IExPR0lOLCBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMIH0gZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyQWN0aW9uIH0gZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTRVRfQ1VSUkVOVF9VU0VSLCBTSUdOX09VVCB9IGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclJlZHVjZXIoc3RhdGU6IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSwgYWN0aW9uOiBDdXJyZW50VXNlckFjdGlvbik6IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB7XHJcbiAgICB2YXIgdGVzdCA9IFwiXCI7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTRVRfQ1VSUkVOVF9VU0VSOiB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZFtcImVtYWlsXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IGVtYWlsQWRkcmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9PVVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdXNlclByb2ZpbGVJbWFnZVVSTDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWR1Y2Vycy9Vc2VyUmVkdWNlci50c3giXSwic291cmNlUm9vdCI6IiJ9