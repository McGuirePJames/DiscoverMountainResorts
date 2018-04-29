webpackJsonp([0],{

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGN_UP = 'SIGN_UP';
exports.TOGGLE_PASSWORD_REVEAL = 'TOGGLE_PASSWORD_REVEAL';
exports.RETURN_ERROR = 'RETURN_ERROR';


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(30);
var react_redux_1 = __webpack_require__(48);
var NavigationBarComponent_1 = __webpack_require__(46);
var UserSignUpContainer_1 = __webpack_require__(355);
var UserSignUpStore_1 = __webpack_require__(358);
ReactDOM.render(React.createElement(NavigationBarComponent_1.NavigationBarComponent, null), document.getElementById('NavigationBarMountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserSignUpStore_1.UserSignUpStore },
    React.createElement(UserSignUpContainer_1.default, null)), document.getElementById('UserSignUpMountPoint'));


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UserSignUpComponent_1 = __webpack_require__(356);
var Actions = __webpack_require__(357);
var react_redux_1 = __webpack_require__(48);
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

/***/ 356:
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

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(168);
var GetAntiForgeryToken_1 = __webpack_require__(94);
var $ = __webpack_require__(23);
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

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(95);
var redux_1 = __webpack_require__(66);
var UserSignUpReducers_1 = __webpack_require__(359);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.UserSignUpStore = redux_1.createStore(UserSignUpReducers_1.UserSignUpReducer, {
    signUpError: "",
    isPasswordRevealed: false,
}, middleWare);


/***/ }),

/***/ 359:
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
var UserSignUpConstants_1 = __webpack_require__(168);
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

},[354]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9FbnRyeS9Vc2VyU2lnblVwRW50cnkudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL1VzZXJTaWduVXBDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1VzZXJTaWduVXBDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BY3Rpb25zL1VzZXJTaWduVXBBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmVzL1VzZXJTaWduVXBTdG9yZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZHVjZXJzL1VzZXJTaWduVXBSZWR1Y2Vycy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFhLGVBQU8sR0FBRyxTQUFTLENBQUM7QUFHcEIsOEJBQXNCLEdBQUcsd0JBQXdCLENBQUM7QUFHbEQsb0JBQVksR0FBRyxjQUFjLENBQUM7Ozs7Ozs7Ozs7O0FDTjNDLG1DQUErQjtBQUMvQix1Q0FBc0M7QUFFdEMsNENBQXVDO0FBR3ZDLHVEQUE2RTtBQUM3RSxxREFBbUU7QUFDbkUsaURBQTJEO0FBRTNELFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsK0NBQXNCLE9BQUcsRUFDMUIsUUFBUSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUNyRDtBQUVELFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsc0JBQVEsSUFBQyxLQUFLLEVBQUUsaUNBQWU7SUFDNUIsb0JBQUMsNkJBQW1CLE9BQUcsQ0FDaEIsRUFDWCxRQUFRLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFnQixDQUNqRSxDQUFDOzs7Ozs7Ozs7OztBQ3BCRixxREFBc0U7QUFDdEUsdUNBQXdEO0FBRXhELDRDQUFxQztBQUdyQyx5QkFBZ0MsRUFBeUQ7UUFBdkQsNEJBQVcsRUFBRSwwQ0FBa0I7SUFDN0QsT0FBTztRQUNILFdBQVc7UUFDWCxrQkFBa0I7S0FDckI7QUFDTCxDQUFDO0FBTEQsMENBS0M7QUFFRCw0QkFBbUMsUUFBNEM7SUFDM0UsVUFBVTtJQUNWLE9BQU87UUFDSCxjQUFjLEVBQUUsY0FBTSxlQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQWxDLENBQWtDO1FBQ3hELE1BQU0sRUFBRSxjQUFNLGVBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBMUIsQ0FBMEI7S0FDM0MsQ0FBQztBQUNOLENBQUM7QUFORCxnREFNQztBQUVELGtCQUFlLHFCQUFPLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDLENBQUMsNkJBQXVDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJyRyxtQ0FBOEI7QUFXOUI7SUFBeUMsdUNBQThCO0lBQXZFOztJQStFQSxDQUFDO0lBOUVHLG9DQUFNLEdBQU47UUFDVSxtQkFBdUUsRUFBckUsNEJBQVcsRUFBRSwwQ0FBa0IsRUFBRSxrQ0FBYyxFQUFFLGtCQUFNLENBQWM7UUFFN0UsT0FBTyxDQUNILDZCQUFLLEVBQUUsRUFBQyxxQkFBcUI7WUFDekIsNkJBQUssRUFBRSxFQUFDLDhCQUE4QixFQUFDLFNBQVMsRUFBQyxLQUFLO2dCQUNsRCw2QkFBSyxTQUFTLEVBQUMseUJBQXlCO29CQUNwQywrQ0FBb0IsQ0FFbEI7Z0JBQ04sNkJBQUssU0FBUyxFQUFDLDBCQUEwQjtvQkFDckMsNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsNkJBQUssU0FBUyxFQUFDLGNBQWM7NEJBQ3pCLDZCQUFLLEdBQUcsRUFBQyxFQUFFLEdBQUcsQ0FDWjt3QkFDTiw2QkFBSyxTQUFTLEVBQUMsY0FBYzs0QkFDekIsNERBQWlDLENBQy9CLENBQ0o7b0JBQ04sNkJBQUssU0FBUyxFQUFDLGNBQWM7d0JBQ3pCLHlDQUFjLENBQ1o7b0JBQ04sNkJBQUssU0FBUyxFQUFDLFdBQVc7d0JBQ3RCLDZCQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7NEJBQzNDLG1EQUE0Qjs0QkFDNUIsNkJBQUssU0FBUyxFQUFDLGFBQWE7Z0NBQ3hCLDZCQUFLLFNBQVMsRUFBQywwQkFBMEI7b0NBQ3JDLDJCQUFHLFNBQVMsRUFBQyxZQUFZLGlCQUFhLE1BQU0sR0FBSyxDQUMvQztnQ0FDTjtvQ0FDSSwrQkFBTyxJQUFJLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQywwQkFBMEIsRUFBQyxFQUFFLEVBQUMsb0JBQW9CLEdBQUcsQ0FDbEYsQ0FDSixDQUNKO3dCQUNOLDZCQUFLLFNBQVMsRUFBQyxnQ0FBZ0M7NEJBQzNDLDhDQUF1Qjs0QkFDdkIsNkJBQUssU0FBUyxFQUFDLGFBQWE7Z0NBQ3hCLDZCQUFLLFNBQVMsRUFBQywwQkFBMEI7b0NBQ3JDLDJCQUFHLFNBQVMsRUFBQyxZQUFZLGlCQUFhLE1BQU0sR0FBSyxDQUMvQztnQ0FDTjtvQ0FDSSwrQkFBTyxFQUFFLEVBQUMsb0JBQW9CLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFJLENBQ3RHO2dDQUNOLDZCQUFLLFNBQVMsRUFBQyx5QkFBeUI7b0NBQ3BDLDJCQUFHLFNBQVMsRUFBQyxXQUFXLGlCQUFhLE1BQU0sRUFBQyxPQUFPLEVBQUUsY0FBYyxHQUFNLENBQ3ZFLENBQ0osQ0FDSjt3QkFDTiw2QkFBSyxTQUFTLEVBQUMsZ0NBQWdDOzRCQUMzQyxzREFBK0I7NEJBQy9CLDZCQUFLLFNBQVMsRUFBQyxhQUFhO2dDQUN4Qiw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCO29DQUNyQywyQkFBRyxTQUFTLEVBQUMsWUFBWSxpQkFBYSxNQUFNLEdBQUssQ0FDL0M7Z0NBQ047b0NBQ0ksK0JBQU8sRUFBRSxFQUFDLDJCQUEyQixFQUFDLFdBQVcsRUFBQyxpQkFBaUIsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxHQUFJLENBQ3BIO2dDQUNOLDZCQUFLLFNBQVMsRUFBQyx5QkFBeUI7b0NBQ3BDLDJCQUFHLFNBQVMsRUFBQyxXQUFXLGlCQUFhLE1BQU0sRUFBQyxPQUFPLEVBQUUsY0FBYyxHQUFNLENBQ3ZFLENBQ0osQ0FDSixDQUNKO29CQUNOLDZCQUFLLFNBQVMsRUFBQywwQkFBMEI7d0JBQ3JDLDZCQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUMsT0FBTyxFQUFFLE1BQU0sY0FBZ0IsQ0FDOUM7b0JBRUYsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JCLDZCQUFLLFNBQVMsRUFBQyx5QkFBeUI7d0JBQ3BDLDJCQUFHLFNBQVMsRUFBQyxvQkFBb0I7OzRCQUFHLFdBQVcsQ0FBSyxDQUNsRCxDQUNULENBQUMsQ0FBQyxDQUFDLElBQUksQ0FFVixDQUNKLENBQ0osQ0FDVDtJQUNMLENBQUM7SUFDTCwwQkFBQztBQUFELENBQUMsQ0EvRXdDLEtBQUssQ0FBQyxTQUFTLEdBK0V2RDtBQS9FWSxrREFBbUI7QUFnRmhDLGtCQUFlLG1CQUFtQixDQUFDOzs7Ozs7Ozs7OztBQzNGbkMseUNBQTZEO0FBRTdELG9EQUE2RDtBQUM3RCxnQ0FBMkI7QUF3QjNCO0lBQ0ksSUFBSSxjQUFjLEVBQUU7UUFDaEIsTUFBTSxFQUFFLENBQUM7S0FDWjtTQUNJO1FBQ0QsT0FBTyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRTtLQUM3RTtBQUVMLENBQUM7QUFSRCxvQ0FRQztBQUVEO0lBQ0ksSUFBSyxRQUFRLENBQUMsY0FBYyxDQUFDLG9CQUFvQixDQUFzQixDQUFDLEtBQUssS0FBTSxRQUFRLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFzQixDQUFDLEtBQUssRUFBRTtRQUNoSyxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQUVEO0lBQ0ksSUFBSSxZQUFZLEdBQVksUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBc0IsQ0FBQyxLQUFLO0lBQ3BHLElBQUksUUFBUSxHQUFZLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQXNCLENBQUMsS0FBSztJQUNoRyxJQUFJLGVBQWUsR0FBWSxRQUFRLENBQUMsY0FBYyxDQUFDLDJCQUEyQixDQUFzQixDQUFDLEtBQUs7SUFDOUcsT0FBTyxVQUFVLFFBQVE7UUFDckIsSUFBSSxRQUFRLElBQUksZUFBZSxFQUFFO1lBQzdCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxDQUFDO1NBQy9FO2FBQ0k7WUFDRCxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNILFVBQVUsRUFBRTtvQkFDUixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFDRCxHQUFHLEVBQUUsdUJBQXVCO2dCQUM1QixJQUFJLEVBQUUsTUFBTTtnQkFDWixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsSUFBSSxFQUFFLDZCQUFtQixDQUFDLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7Z0JBQzdFLE9BQU8sRUFBRSxVQUFVLFFBQVE7b0JBQ3ZCLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTt3QkFDbEIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRztxQkFDN0I7eUJBQ0k7d0JBQ0QsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztxQkFDN0U7Z0JBRUwsQ0FBQztnQkFDRCxRQUFRLEVBQUU7b0JBQ04sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUM7YUFDSixDQUFDO1NBQ0w7SUFDTCxDQUFDO0FBQ0wsQ0FBQztBQWhDRCx3QkFnQ0M7QUFDRDtJQUNJLE9BQU87UUFDSCxJQUFJLEVBQUUsU0FBUyxDQUFDLHNCQUFzQjtLQUN6QyxDQUFDO0FBQ04sQ0FBQztBQUpELHdDQUlDOzs7Ozs7Ozs7OztBQy9FRCw0Q0FBK0M7QUFFL0Msc0NBQXFEO0FBRXJELG9EQUFtRTtBQUtuRSxJQUFNLFVBQVUsR0FBRyx1QkFBZSxDQUFDLHFCQUFLLENBQUMsQ0FBQztBQUU3Qix1QkFBZSxHQUFHLG1CQUFXLENBQXVCLHNDQUFpQixFQUFFO0lBQ2hGLFdBQVcsRUFBRSxFQUFFO0lBQ2Ysa0JBQWtCLEVBQUUsS0FBSztDQUM1QixFQUFFLFVBQVUsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZmYscURBQWlHO0FBR2pHLDJCQUFrQyxLQUEyQixFQUFFLE1BQXdCO0lBQ25GLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNqQixLQUFLLDZCQUFPO1lBQ1Isb0JBQ08sS0FBSyxJQUFFLFdBQVcsRUFBRSxNQUFNLENBQUMsT0FBTyxJQUN4QztRQUNMLEtBQUssNENBQXNCLENBQUMsQ0FBQztZQUN6QixJQUFJLEtBQUssQ0FBQyxrQkFBa0IsRUFBRTtnQkFDMUIsb0JBQ08sS0FBSyxJQUFFLGtCQUFrQixFQUFFLEtBQUssSUFDdEM7YUFDSjtZQUNELG9CQUNPLEtBQUssSUFBRSxrQkFBa0IsRUFBRSxJQUFJLElBQ3JDO1NBQ0o7UUFDRCxLQUFLLGtDQUFZLENBQUMsQ0FBQztZQUNmLG9CQUNPLEtBQUssSUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLE9BQU8sSUFDeEM7U0FDSjtLQUNKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQXZCRCw4Q0F1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCRCxtQ0FBOEI7QUFFOUI7SUFBNEMsMENBQWU7SUFBM0Q7O0lBdUZBLENBQUM7SUF0RkcsdUNBQU0sR0FBTjtRQUNJLE9BQU8sQ0FDSCw2QkFBSyxTQUFTLEVBQUMsc0NBQXNDO1lBQ2pELCtCQUFPLHVCQUF1QixFQUFFO29CQUM1QixNQUFNLEVBQUUsNGhHQTBESDtpQkFBQyxHQUFJO1lBQ2QsMkJBQUcsU0FBUyxFQUFDLGNBQWMsRUFBQyxJQUFJLEVBQUMsR0FBRyxnQ0FBOEI7WUFDbEUsZ0NBQVEsU0FBUyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxRQUFRLGlCQUFhLFVBQVUsaUJBQWEsYUFBYSxtQkFBZSxZQUFZLG1CQUFlLE9BQU8sZ0JBQVksbUJBQW1CO2dCQUM3Syw4QkFBTSxTQUFTLEVBQUMscUJBQXFCLEdBQVEsQ0FDeEM7WUFDVCw2QkFBSyxTQUFTLEVBQUMsMEJBQTBCLEVBQUMsRUFBRSxFQUFDLFlBQVk7Z0JBQ3JELDRCQUFJLFNBQVMsRUFBQyxvQkFBb0IsR0FFN0I7Z0JBQ0wsOEJBQU0sU0FBUyxFQUFDLGFBQWE7b0JBQ3pCLDZCQUFLLFNBQVMsRUFBQyx3QkFBd0I7d0JBQ25DLDZCQUFLLFNBQVMsRUFBQyw4QkFBOEI7NEJBQ3pDLDZCQUFLLEVBQUUsRUFBQyxvQkFBb0IsRUFBQyxHQUFHLEVBQUMsa0ZBQWtGLEdBQUcsQ0FDcEg7d0JBQ04sNkJBQUssU0FBUyxFQUFDLDZCQUE2Qjs0QkFDeEMsMkJBQUcsRUFBRSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBQUMsbUJBQW1CLFlBQVU7NEJBQzdELDJCQUFHLEVBQUUsRUFBQyxjQUFjLEVBQUMsU0FBUyxFQUFDLG1CQUFtQixjQUFZLENBQzVELENBQ0osQ0FDSCxDQUNMLENBQ0osQ0FDVDtJQUNMLENBQUM7SUFDTCw2QkFBQztBQUFELENBQUMsQ0F2RjJDLEtBQUssQ0FBQyxTQUFTLEdBdUYxRDtBQXZGWSx3REFBc0I7Ozs7Ozs7Ozs7O0FDRm5DLGdDQUEyQjtBQUUzQixxREFBcUQ7QUFDckQsaUhBQWlIO0FBQ2pILGtCQUFrQjtBQUNsQixHQUFHO0FBQ0gsNkJBQTRDLElBQUk7SUFDNUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pGLE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUM7QUFIRCxzQ0FHQztBQUFBLENBQUMiLCJmaWxlIjoiVXNlclNpZ25VcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgU0lHTl9VUCA9ICdTSUdOX1VQJztcclxuZXhwb3J0IHR5cGUgU0lHTl9VUCA9IHR5cGVvZiBTSUdOX1VQO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgPSAnVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCc7XHJcbmV4cG9ydCB0eXBlIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgPSB0eXBlb2YgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTDtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRVUk5fRVJST1IgPSAnUkVUVVJOX0VSUk9SJztcclxuZXhwb3J0IHR5cGUgUkVUVVJOX0VSUk9SID0gdHlwZW9mIFJFVFVSTl9FUlJPUjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgUmVkdXhQcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50J1xyXG5pbXBvcnQgVXNlclNpZ25VcENvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL1VzZXJTaWduVXBDb250YWluZXInXHJcbmltcG9ydCB7IFVzZXJTaWduVXBTdG9yZSB9IGZyb20gJy4uL1N0b3Jlcy9Vc2VyU2lnblVwU3RvcmUnXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8TmF2aWdhdGlvbkJhckNvbXBvbmVudCAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdOYXZpZ2F0aW9uQmFyTW91bnRQb2ludCcpXHJcbilcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQcm92aWRlciBzdG9yZT17VXNlclNpZ25VcFN0b3JlfT5cclxuICAgICAgICA8VXNlclNpZ25VcENvbnRhaW5lciAvPlxyXG4gICAgPC9Qcm92aWRlcj4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnVXNlclNpZ25VcE1vdW50UG9pbnQnKSBhcyBIVE1MRWxlbWVudFxyXG4pO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VudHJ5L1VzZXJTaWduVXBFbnRyeS50c3giLCJpbXBvcnQgIFVzZXJTaWduVXBDb21wb25lbnQgIGZyb20gJy4uL0NvbXBvbmVudHMvVXNlclNpZ25VcENvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9Vc2VyU2lnblVwQWN0aW9ucyc7XHJcbmltcG9ydCB7IFVzZXJTaWduVXBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlclNpZ25VcFN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgc2lnblVwRXJyb3IsIGlzUGFzc3dvcmRSZXZlYWxlZCB9OiBVc2VyU2lnblVwU3RvcmVTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzaWduVXBFcnJvcixcclxuICAgICAgICBpc1Bhc3N3b3JkUmV2ZWFsZWQsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbnMuVXNlclNpZ25VcEFjdGlvbj4pIHtcclxuICAgIC8vZmluZFRoaXNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcmV2ZWFsUGFzc3dvcmQ6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMucmV2ZWFsUGFzc3dvcmQoKSksXHJcbiAgICAgICAgc2lnblVwOiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLnNpZ25VcCgpKVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoVXNlclNpZ25VcENvbXBvbmVudCBhcyBhbnkgYXMgUmVhY3QuU0ZDKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250YWluZXJzL1VzZXJTaWduVXBDb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ3JlZHV4JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgc2lnblVwRXJyb3I/OiBzdHJpbmc7XHJcbiAgICBpc1Bhc3N3b3JkUmV2ZWFsZWQ/OiBib29sZWFuO1xyXG4gICAgcmV2ZWFsUGFzc3dvcmQ/OiAoKSA9PiB2b2lkO1xyXG4gICAgc2lnblVwPzogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2lnblVwQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBvYmplY3Q+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNpZ25VcEVycm9yLCBpc1Bhc3N3b3JkUmV2ZWFsZWQsIHJldmVhbFBhc3N3b3JkLCBzaWduVXB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiVXNlclNpZ25VcENvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIlVzZXJTaWduVXBDb21wb25lbnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnQgY29sLXNtLTEyIGNvbC1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQgY29sLXNtLTEyIGNvbC1tZC03XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1sb2dvLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcGFueS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnktbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpc2NvdmVyIE1vdW50YWluIFJlc29ydHMgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tcHVycG9zZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2lnbiBVcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1ncm91cC11c2VybmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXIgaWNvbi11c2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS11c2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzXCIgaWQ9XCJDcmVhdGVVc2VyVXNlcm5hbWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGZvcm0tZ3JvdXAtcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLWxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiQ3JlYXRlVXNlclBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiIHR5cGU9e2lzUGFzc3dvcmRSZXZlYWxlZCA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLWV5ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZXllXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17cmV2ZWFsUGFzc3dvcmR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBmb3JtLWdyb3VwLXBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lciBpY29uLWxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWxvY2tcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiQ3JlYXRlVXNlckNvbmZpcm1QYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUmVwZWF0IFBhc3N3b3JkXCIgdHlwZT17aXNQYXNzd29yZFJldmVhbGVkID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb24tY29udGFpbmVyIGljb24tZXllXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1leWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtyZXZlYWxQYXNzd29yZH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLWJ1dHRvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJTaWduVXBcIiBvbkNsaWNrPXtzaWduVXB9ID5TaWduIFVwPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaWduVXBFcnJvci5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi11cC1lcnJvci1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+IHtzaWduVXBFcnJvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJTaWduVXBDb21wb25lbnQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvVXNlclNpZ25VcENvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJTaWduVXBDb25zdGFudHMnXHJcbmltcG9ydCB7IFVzZXJTaWduVXBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvVXNlclNpZ25VcFN0b3JlU3RhdGUnXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBSRVRVUk5fRVJST1IgfSBmcm9tICcuLi9Db25zdGFudHMvVXNlclNpZ25VcENvbnN0YW50cyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaWduVXAge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlNJR05fVVAsXHJcbiAgICBwYXlsb2FkOiBzdHJpbmcsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVG9nZ2xlUGFzc3dvcmRSZXZlYWwge1xyXG4gICAgdHlwZTogY29uc3RhbnRzLlRPR0dMRV9QQVNTV09SRF9SRVZFQUxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJldHVybkVycm9yIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5SRVRVUk5fRVJST1IsXHJcbiAgICBwYXlsb2FkOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXNlclNpZ25VcEFjdGlvbiA9IFNpZ25VcCB8IFRvZ2dsZVBhc3N3b3JkUmV2ZWFsIHwgUmV0dXJuRXJyb3JcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnblVwQWN0aW9uKCk6IFJldHVybkVycm9ye1xyXG4gICAgaWYgKGlzRm9ybUNvbXBsZXRlKSB7XHJcbiAgICAgICAgc2lnblVwKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4geyB0eXBlOiBjb25zdGFudHMuUkVUVVJOX0VSUk9SLCBwYXlsb2FkOiBcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIiB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Zvcm1Db21wbGV0ZSgpIHtcclxuICAgIGlmICgoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NyZWF0ZVVzZXJQYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlID09PSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NyZWF0ZVVzZXJDb25maXJtUGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2lnblVwKCk6IERpc3BhdGNoPGFueT4ge1xyXG4gICAgdmFyIGVtYWlsQWRkcmVzczogc3RyaW5nID0gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDcmVhdGVVc2VyVXNlcm5hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgdmFyIHBhc3N3b3JkOiBzdHJpbmcgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NyZWF0ZVVzZXJQYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlXHJcbiAgICB2YXIgY29uZmlybVBhc3N3b3JkOiBzdHJpbmcgPSAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NyZWF0ZVVzZXJDb25maXJtUGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZVxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICAgIGlmIChwYXNzd29yZCAhPSBjb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuUkVUVVJOX0VSUk9SLCBwYXlsb2FkOiBcIlBhc3N3b3JkcyBkb24ndCBtYXRjaFwiIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHVybDogXCIvVXNlci9DcmVhdGVVc2VyQXN5bmNcIixcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7IGVtYWlsQWRkcmVzczogZW1haWxBZGRyZXNzLCBwYXNzd29yZDogcGFzc3dvcmQgfSksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5SRVRVUk5fRVJST1IsIHBheWxvYWQ6IHJlc3BvbnNlLnJlc3BvbnNlVGV4dCB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmV2ZWFsUGFzc3dvcmQoKTogVG9nZ2xlUGFzc3dvcmRSZXZlYWwge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBjb25zdGFudHMuVE9HR0xFX1BBU1NXT1JEX1JFVkVBTFxyXG4gICAgfTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9Vc2VyU2lnblVwQWN0aW9ucy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGh1bmsgfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBVc2VyU2lnblVwQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvVXNlclNpZ25VcENvbnRhaW5lcic7XHJcbmltcG9ydCB7IFVzZXJTaWduVXBSZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvVXNlclNpZ25VcFJlZHVjZXJzJztcclxuaW1wb3J0IHsgVXNlclNpZ25VcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Vc2VyU2lnblVwU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9Vc2VyU2lnblVwQWN0aW9ucyc7XHJcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZSc7XHJcblxyXG5jb25zdCBtaWRkbGVXYXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyU2lnblVwU3RvcmUgPSBjcmVhdGVTdG9yZTxVc2VyU2lnblVwU3RvcmVTdGF0ZT4oVXNlclNpZ25VcFJlZHVjZXIsIHtcclxuICAgIHNpZ25VcEVycm9yOiBcIlwiLFxyXG4gICAgaXNQYXNzd29yZFJldmVhbGVkOiBmYWxzZSxcclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9Vc2VyU2lnblVwU3RvcmUudHN4IiwiaW1wb3J0IHsgVXNlclNpZ25VcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy8vVXNlclNpZ25VcFN0b3JlU3RhdGUnXHJcbmltcG9ydCB7IFNJR05fVVAsIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwsIFJFVFVSTl9FUlJPUiB9IGZyb20gJy4uL0NvbnN0YW50cy9Vc2VyU2lnblVwQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlclNpZ25VcEFjdGlvbiB9IGZyb20gJy4uL0FjdGlvbnMvVXNlclNpZ25VcEFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJTaWduVXBSZWR1Y2VyKHN0YXRlOiBVc2VyU2lnblVwU3RvcmVTdGF0ZSwgYWN0aW9uOiBVc2VyU2lnblVwQWN0aW9uKTogVXNlclNpZ25VcFN0b3JlU3RhdGUge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgU0lHTl9VUDpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBzaWduVXBFcnJvcjogYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTDoge1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUuaXNQYXNzd29yZFJldmVhbGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBpc1Bhc3N3b3JkUmV2ZWFsZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLCBpc1Bhc3N3b3JkUmV2ZWFsZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFJFVFVSTl9FUlJPUjoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIHNpZ25VcEVycm9yOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlZHVjZXJzL1VzZXJTaWduVXBSZWR1Y2Vycy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjAyQiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAudXNlci1wcm9maWxlLW5hbWU6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAjVXNlclByb2ZpbGVQaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIG5hdi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5EaXNjb3ZlciBNb3VudGFpbiBSZXNvcnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVGV4dFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUZXh0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiVXNlclByb2ZpbGVQaWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvSU1HXzIwMTcxMjMwXzEwMjgwOS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiVXNlckZpcnN0TmFtZVwiIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+SmFtZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJVc2VyTGFzdE5hbWVcIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPk1jR3VpcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEFudGlGb3JnZXJ5VG9rZW4oZGF0YSkge1xyXG4vLyAgICBkYXRhLl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuID0gJCgnI19fQWpheEFudGlGb3JnZXJ5Rm9ybSBpbnB1dFtuYW1lPV9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXScpLnZhbCgpO1xyXG4vLyAgICByZXR1cm4gZGF0YTtcclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldEFudGlGb3JnZXJ5VG9rZW4oZGF0YSkge1xyXG4gICAgZGF0YS5fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiA9ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbi50cyJdLCJzb3VyY2VSb290IjoiIn0=