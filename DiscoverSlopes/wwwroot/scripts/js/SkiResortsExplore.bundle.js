webpackJsonp([0],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.SIGN_OUT = 'SIGN_OUT';


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_MAP = 'LOAD_MAP';


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DISPLAY_ADD_NEW_TRAIL = 'DISPLAY_ADD_NEW_TRAIL';
exports.DISPLAY_SEARCH_TRAIL = 'DISPLAY_SEARCH_TRAIL';
exports.DISPLAY_FILTER_TRAILS = 'DISPLAY_FILTER_TRAILS';


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

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(22);
var SkiResortsExploreHOC_1 = __webpack_require__(366);
ReactDOM.render(React.createElement(SkiResortsExploreHOC_1.SkiResortsExploreHOC, null), document.getElementById('MountPoint'));


/***/ }),

/***/ 366:
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
var NavigationBarContainer_1 = __webpack_require__(30);
var SkiResortMapContainer_1 = __webpack_require__(367);
var react_redux_1 = __webpack_require__(15);
var CurrentUserStore_1 = __webpack_require__(36);
var SkiResortMapStore_1 = __webpack_require__(375);
var SkiResortsExploreHOC = /** @class */ (function (_super) {
    __extends(SkiResortsExploreHOC, _super);
    function SkiResortsExploreHOC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkiResortsExploreHOC.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
                React.createElement(NavigationBarContainer_1.default, null)),
            React.createElement(react_redux_1.Provider, { store: SkiResortMapStore_1.SkiResortMapStore },
                React.createElement(SkiResortMapContainer_1.default, null))));
    };
    return SkiResortsExploreHOC;
}(React.Component));
exports.SkiResortsExploreHOC = SkiResortsExploreHOC;


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SkiResortMapComponent_1 = __webpack_require__(368);
var SkiMapActions = __webpack_require__(372);
var ToolBarActions = __webpack_require__(374);
var react_redux_1 = __webpack_require__(15);
//export function mapStateToProps({ map, resortName, isAddTrailDisplayed, isFilterTrailsDisplayed, isSearchTrailDisplayed }) {
//    return {
//        map,
//        resortName,
//        isAddTrailDisplayed,
//        isFilterTrailsDisplayed,
//        isSearchTrailDisplayed
//    }
//}
function mapStateToProps(_a) {
    var map = _a.map, resortName = _a.resortName, isAddTrailDisplayed = _a.isAddTrailDisplayed, isFilterTrailsDisplayed = _a.isFilterTrailsDisplayed, isSearchTrailDisplayed = _a.isSearchTrailDisplayed;
    console.log("hey");
    return {
        map: map,
        resortName: resortName,
        isAddTrailDisplayed: isAddTrailDisplayed,
        isFilterTrailsDisplayed: isFilterTrailsDisplayed,
        isSearchTrailDisplayed: isSearchTrailDisplayed
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        loadMap: function () { return dispatch(SkiMapActions.loadMap()); },
        displayAddNewTrail: function () { return dispatch(ToolBarActions.displayAddNewTrail()); },
        displayFilterTrails: function () { return dispatch(ToolBarActions.displayFilterTrails()); },
        displaySearchTrail: function () { return dispatch(ToolBarActions.displaySearchTrail()); },
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(function (state) { return ({
    skiResortMapReducer: state.skiResortMapReducer,
    skiResortMapToolBarReducer: state.skiResortMapToolBarReducer
}); }, mapDispatchToProps)(SkiResortMapComponent_1.SkiResortMapComponent);


/***/ }),

/***/ 368:
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var SkiResortMapToolBarComponent_1 = __webpack_require__(369);
var SkiResortMapComponent = /** @class */ (function (_super) {
    __extends(SkiResortMapComponent, _super);
    function SkiResortMapComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkiResortMapComponent.prototype.componentDidMount = function () {
        var _a = this.props, loadMap = _a.loadMap, isAddTrailDisplayed = _a.isAddTrailDisplayed, isSearchTrailDisplayed = _a.isSearchTrailDisplayed, isFilterTrailsDisplayed = _a.isFilterTrailsDisplayed, displayAddNewTrail = _a.displayAddNewTrail, displaySearchTrail = _a.displaySearchTrail, displayFilterTrails = _a.displayFilterTrails;
        loadMap();
    };
    SkiResortMapComponent.prototype.render = function () {
        var _a = this.props, isSearchTrailDisplayed = _a.isSearchTrailDisplayed, isFilterTrailsDisplayed = _a.isFilterTrailsDisplayed, displayAddNewTrail = _a.displayAddNewTrail;
        var test = this.props["skiResortMapReducer"].isAddTrailDisplayed;
        return (React.createElement("div", { id: "SkiResortMapComponent" },
            React.createElement("div", { id: "map" },
                React.createElement("button", { type: "button" }, "Begin")),
            React.createElement(SkiResortMapToolBarComponent_1.SkiResortMapToolBarComponent, __assign({}, this.props))));
    };
    return SkiResortMapComponent;
}(React.Component));
exports.SkiResortMapComponent = SkiResortMapComponent;
//{...{ isAddTrailDisplayed: false, isSearchTrailDisplayed: false, isFilterTrailsDisplayed: false } }


/***/ }),

/***/ 369:
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var DropdownComponent_1 = __webpack_require__(370);
var ListItemComponent_1 = __webpack_require__(371);
;
var SkiResortMapToolBarComponent = /** @class */ (function (_super) {
    __extends(SkiResortMapToolBarComponent, _super);
    function SkiResortMapToolBarComponent(props) {
        return _super.call(this, props) || this;
    }
    SkiResortMapToolBarComponent.prototype.render = function () {
        //const { isAddTrailDisplayed, isSearchTrailDisplayed, isFilterTrailsDisplayed } = this.props
        return (React.createElement("div", { id: "SkiResortMapToolBarComponent" },
            React.createElement("div", { id: "MapToolBar" },
                React.createElement("div", { className: "toolbar-action", onClick: this.props.displayAddNewTrail },
                    React.createElement("i", { className: "fa fa-plus fa-2x", "aria-hidden": "true" })),
                React.createElement("div", { className: "toolbar-action", onClick: this.props.displaySearchTrail },
                    React.createElement("i", { className: "fa fa-search fa-2x", "aria-hidden": "true" })),
                React.createElement("div", { className: "toolbar-action", onClick: this.props.displayFilterTrails },
                    React.createElement("i", { className: "fa fa-filter fa-2x", "aria-hidden": "true" }))),
            React.createElement("div", { id: "MapActionWindow" },
                this.props["skiResortMapToolBarReducer"].isAddTrailDisplayed ? (React.createElement("div", { id: "AddTrailWindow", className: "action-window" },
                    React.createElement("div", { className: "action-title" },
                        React.createElement("p", null, "Create Trail")),
                    React.createElement("div", { className: "action-window-form" },
                        React.createElement("div", { className: "form-group" },
                            React.createElement("label", null, "Trail Name"),
                            React.createElement("div", null,
                                React.createElement("input", { id: "CreateTrailName", placeholder: "Trail Name", type: "text" }))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement(DropdownComponent_1.DropdownComponent, __assign({}, { items: ["Beginner", "Intermediate", "Advanced", "Expert", "Terrain Park"], label: "Difficulty" }))),
                        React.createElement("div", { className: "form-group" },
                            React.createElement(ListItemComponent_1.ListItemComponent, __assign({}, { label: "Tags", listItems: ["Groomed", "Open Bowl", "Steeps and Trees", "Has Moguls", "Glades", "Pillows"] }))),
                        React.createElement("div", { id: "BeginStopButtonContainer", className: "form-group" },
                            React.createElement("div", null,
                                React.createElement("div", { className: "button" }, "BEGIN")),
                            React.createElement("div", null,
                                React.createElement("div", { className: "button" }, "STOP")))))) : null,
                this.props["skiResortMapToolBarReducer"].isSearchTrailDisplayed ? (React.createElement("div", { id: "SearchForTrailsWindow", className: "action-window" },
                    React.createElement("div", { className: "action-title" },
                        React.createElement("p", null, "Search For Trail")))) : null,
                this.props["skiResortMapToolBarReducer"].isFilterTrailsDisplayed ? (React.createElement("div", { id: "FilterTrailsWindow", className: "action-window" },
                    React.createElement("div", { className: "action-title" },
                        React.createElement("p", null, "Filter Trails")))) : null)));
    };
    return SkiResortMapToolBarComponent;
}(React.Component));
exports.SkiResortMapToolBarComponent = SkiResortMapToolBarComponent;


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


/***/ }),

/***/ 370:
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
var ReactDOM = __webpack_require__(22);
var $ = __webpack_require__(7);
var DropdownComponent = /** @class */ (function (_super) {
    __extends(DropdownComponent, _super);
    function DropdownComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.toggleDropdown = _this.toggleDropdown.bind(_this);
        _this.selectItem = _this.selectItem.bind(_this);
        return _this;
    }
    DropdownComponent.prototype.toggleDropdown = function () {
        var itemsContainer = ReactDOM.findDOMNode(this.refs.itemsContainer);
        if (itemsContainer.classList.contains("inactive")) {
            itemsContainer.classList.remove("inactive");
            itemsContainer.classList.add("active");
        }
        else {
            itemsContainer.classList.add("inactive");
            itemsContainer.classList.remove("active");
        }
    };
    DropdownComponent.prototype.selectItem = function (e) {
        var parentEle = $(e.target).closest('.item-container')[0];
        var value = parentEle.getElementsByTagName('p')[0].innerHTML;
        var selectedItemEle = ReactDOM.findDOMNode(this.refs.selectedItem);
        selectedItemEle.classList.remove('placeholder');
        selectedItemEle.innerHTML = value;
    };
    DropdownComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, items = _a.items;
        return (React.createElement("div", { id: "DropdownComponent" },
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n                        #DropdownComponent .input-container {\n                            display: flex;\n                            border-bottom: 1px solid #DFDFDF;\n                            width: 135px;\n                            cursor: pointer;\n                        }\n                        #DropdownComponent .label-container label{\n                            color: #444;\n                        }\n                        #DropdownComponent .items{\n                            position: absolute;\n                        }\n                            #DropdownComponent .input-container div:last-child {\n                                margin-left: auto;\n                                margin-right: 5px;\n                            }\n                        \n                                #DropdownComponent .input-container div:last-child .fa {\n                                    color: #E0E0E0;\n                                }\n                        \n                        #DropdownComponent .input-container .selected-item{\n                            font-size: 14pt;\n                        }\n                            #DropdownComponent .input-container .placeholder {\n\n                                color: #757575;\n                            }\n                        \n                        #DropdownComponent .items {\n                            overflow: hidden;\n                            background-color: #FAFAFA;\n                            background-color: white;\n                            width: 135px;\n                            z-index: 2;\n                            -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);\n                            -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);\n                            box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75);\n                        }\n                        \n                            #DropdownComponent .items .item-container {\n                                cursor: pointer;\n                                display: flex;\n                                justify-content: center;\n                                align-items: center;\n                                padding-top: 8px;\n                                padding-bottom: 8px;\n                            }\n                        \n                            #DropdownComponent .items.inactive .item-container {\n                                height: 0;\n                                padding: 0;\n                            }\n\n                    "
                } }),
            React.createElement("div", { className: "form-group" },
                React.createElement("div", { className: "label-container" },
                    React.createElement("div", null,
                        React.createElement("label", null, this.props.label))),
                React.createElement("div", { className: "input-container", onClick: this.toggleDropdown },
                    React.createElement("div", { className: "placeholder selected-item", ref: "selectedItem" }, this.props.label),
                    React.createElement("div", null,
                        React.createElement("i", { className: "fa fa-caret-down", "aria-hidden": "true" }))),
                React.createElement("div", { className: "items inactive", ref: "itemsContainer", onClick: this.toggleDropdown }, this.props.items.map(function (key, itemIndex) {
                    return (React.createElement("div", { key: key, className: "item-container", onClick: _this.selectItem },
                        React.createElement("p", null, _this.props.items[itemIndex])));
                })))));
    };
    return DropdownComponent;
}(React.Component));
exports.DropdownComponent = DropdownComponent;


/***/ }),

/***/ 371:
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
var ListItemComponent = /** @class */ (function (_super) {
    __extends(ListItemComponent, _super);
    function ListItemComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedItems: [],
            availableItems: _this.props.listItems,
            areListItemsDisplayed: false,
        };
        _this.toggleDropdown = _this.toggleDropdown.bind(_this);
        _this.handleItemClick = _this.handleItemClick.bind(_this);
        _this.addToSelectedItems = _this.addToSelectedItems.bind(_this);
        _this.removeFromAvailableItems = _this.removeFromAvailableItems.bind(_this);
        _this.handleTagClick = _this.handleTagClick.bind(_this);
        return _this;
    }
    ListItemComponent.prototype.toggleDropdown = function (e) {
        var target = e.target;
        var tagContainer = document.getElementById('TagContainer');
        if (!tagContainer.contains(target)) {
            if (this.state.areListItemsDisplayed) {
                this.setState({ areListItemsDisplayed: false });
            }
            else {
                this.setState({ areListItemsDisplayed: true });
            }
        }
    };
    ListItemComponent.prototype.handleItemClick = function (e) {
        var parentEle = $(e.target).closest('.list-item-container')[0];
        var item = parentEle.getElementsByClassName('list-item-description-container')[0].getElementsByTagName('p')[0].innerHTML;
        this.addToSelectedItems(item);
        this.removeFromAvailableItems(item);
    };
    ListItemComponent.prototype.addToSelectedItems = function (item) {
        this.setState({
            selectedItems: this.state.selectedItems.concat([item])
        });
    };
    ListItemComponent.prototype.removeFromSelectedItems = function (item) {
        var arrayWithRemovedItem = this.state.selectedItems;
        var index = this.state.selectedItems.indexOf(item);
        arrayWithRemovedItem.splice(index, 1);
        this.setState({
            selectedItems: arrayWithRemovedItem
        });
    };
    ListItemComponent.prototype.handleTagClick = function (e) {
        var parentEle = $(e.target).closest('.selected-item-tag-container')[0];
        var item = parentEle.getElementsByTagName('p')[0].innerHTML;
        this.removeFromSelectedItems(item);
        this.addToAvailableItems(item);
    };
    ListItemComponent.prototype.addToAvailableItems = function (item) {
        this.setState({
            availableItems: this.state.availableItems.concat([item])
        });
    };
    ListItemComponent.prototype.removeFromAvailableItems = function (item) {
        var arrayWithRemovedItem = this.state.availableItems;
        var index = this.state.availableItems.indexOf(item);
        arrayWithRemovedItem.splice(index, 1);
        this.setState({
            availableItems: arrayWithRemovedItem
        });
    };
    ListItemComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, listItems = _a.listItems;
        return (React.createElement("div", { id: "ListItemComponent" },
            React.createElement("div", { className: "component-label" },
                React.createElement("label", null, this.props.label)),
            React.createElement("div", { className: "selected-items-container", onClick: this.toggleDropdown },
                React.createElement("div", { className: "selected-list-items" },
                    React.createElement("div", { id: "TagContainer" }, this.state.selectedItems.length > 0 ? (this.state.selectedItems.map(function (key, selectedItemIndex) {
                        return (React.createElement("div", { key: key, className: "selected-item-tag-container", onClick: _this.handleTagClick },
                            React.createElement("p", { className: "selected-item-tag" }, _this.state.selectedItems[selectedItemIndex]),
                            React.createElement("div", { className: "remove-tag-container" },
                                React.createElement("i", { className: "fa fa-times", "aria-hidden": "true" }))));
                    })) : (React.createElement("p", { className: "placeholder" }, "Select a tag")))),
                React.createElement("div", { className: "caret-down-container" },
                    React.createElement("i", { className: "fa fa-caret-down", "aria-hidden": "true" }))),
            React.createElement("div", { className: "component-list-items-container" },
                this.state.areListItemsDisplayed ? (React.createElement("div", { className: "component-list-items unavailable-items" }, (this.state.selectedItems.map(function (key, itemIndex) {
                    return (React.createElement("div", { key: key, className: "list-item-container" },
                        React.createElement("div", null,
                            React.createElement("i", { className: "fa fa-check" })),
                        React.createElement("div", { className: "list-item-description-container" },
                            React.createElement("p", null, _this.state.selectedItems[itemIndex]))));
                })))) : null,
                this.state.areListItemsDisplayed ? (React.createElement("div", { className: "component-list-items available-items" }, (this.state.availableItems.map(function (key, itemIndex) {
                    return (React.createElement("div", { key: key, className: "list-item-container", onClick: _this.handleItemClick },
                        React.createElement("div", { className: "list-item-description-container" },
                            React.createElement("p", null, _this.state.availableItems[itemIndex]))));
                })))) : null)));
    };
    return ListItemComponent;
}(React.Component));
exports.ListItemComponent = ListItemComponent;


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(173);
var $ = __webpack_require__(7);
var GetUrlParameters_1 = __webpack_require__(373);
function loadMap() {
    var skiResortId = GetUrlParameters_1.getUrlParameters('skiResortId');
    var data = { 'id': skiResortId };
    return function (dispatch) {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/SkiResorts/GetSkiResortById",
            type: "GET",
            data: data,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()
            },
            success: function (response) {
                var test = "";
                dispatch({ type: constants.LOAD_MAP, payload: response });
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
}
exports.loadMap = loadMap;


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getUrlParameters(parameterName) {
    var url = new URL(location.href);
    var paramValue = url.searchParams.get(parameterName);
    return paramValue;
}
exports.getUrlParameters = getUrlParameters;


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(174);
function displayAddNewTrail() {
    return {
        type: constants.DISPLAY_ADD_NEW_TRAIL
    };
}
exports.displayAddNewTrail = displayAddNewTrail;
function displayFilterTrails() {
    return {
        type: constants.DISPLAY_FILTER_TRAILS
    };
}
exports.displayFilterTrails = displayFilterTrails;
function displaySearchTrail() {
    return {
        type: constants.DISPLAY_SEARCH_TRAIL
    };
}
exports.displaySearchTrail = displaySearchTrail;


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(25);
var redux_1 = __webpack_require__(19);
var SkiResortMapReducer_1 = __webpack_require__(376);
var SkiResortMapToolBarReducer_1 = __webpack_require__(377);
var redux_2 = __webpack_require__(19);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux_2.compose;
var combinedReducers = redux_1.combineReducers({
    skiResortMapReducer: SkiResortMapReducer_1.SkiResortMapReducer,
    skiResortMapToolBarReducer: SkiResortMapToolBarReducer_1.skiResortMapToolBarReducer
});
exports.SkiResortMapStore = redux_1.createStore(combinedReducers, {}, composeEnhancers(redux_1.applyMiddleware(redux_thunk_1.default)));


/***/ }),

/***/ 376:
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
var SkiResortMapConstants_1 = __webpack_require__(173);
function SkiResortMapReducer(state, action) {
    if (state === void 0) { state = { map: null, resortName: "" }; }
    switch (action.type) {
        case SkiResortMapConstants_1.LOAD_MAP:
            var styledMapType = new google.maps.StyledMapType([], { name: 'Styled Map' });
            window.GoogleMap = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: action.payload["latitude"], lng: action.payload["longitude"] },
                disableDefaultUI: true
            });
            window.GoogleMap.mapTypes.set('styled_map', styledMapType);
            //window.GoogleMap.setMapTypeId('styled_map');
            window.GoogleMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
            return __assign({}, state, { map: window.GoogleMap });
    }
    return state;
}
exports.SkiResortMapReducer = SkiResortMapReducer;


/***/ }),

/***/ 377:
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
var SkiResortMapToolBarConstants_1 = __webpack_require__(174);
function skiResortMapToolBarReducer(state, action) {
    if (state === void 0) { state = { isAddTrailDisplayed: false, isSearchTrailDisplayed: false, isFilterTrailsDisplayed: false }; }
    switch (action.type) {
        case SkiResortMapToolBarConstants_1.DISPLAY_ADD_NEW_TRAIL: {
            return __assign({}, state, { isAddTrailDisplayed: true, isFilterTrailsDisplayed: false, isSearchTrailDisplayed: false });
        }
        case SkiResortMapToolBarConstants_1.DISPLAY_FILTER_TRAILS: {
            return __assign({}, state, { isAddTrailDisplayed: false, isFilterTrailsDisplayed: true, isSearchTrailDisplayed: false });
        }
        case SkiResortMapToolBarConstants_1.DISPLAY_SEARCH_TRAIL: {
            return __assign({}, state, { isAddTrailDisplayed: false, isFilterTrailsDisplayed: false, isSearchTrailDisplayed: true });
        }
    }
    return state;
}
exports.skiResortMapToolBarReducer = skiResortMapToolBarReducer;


/***/ })

},[365]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL1NraVJlc29ydE1hcENvbnN0YW50cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnN0YW50cy9Ta2lSZXNvcnRNYXBUb29sQmFyQ29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRW50cnkvU2tpUmVzb3J0c0V4cGxvcmVFbnRyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0hPQ3MvU2tpUmVzb3J0c0V4cGxvcmVIT0MudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL1NraVJlc29ydE1hcENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvU2tpUmVzb3J0TWFwQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Ta2lSZXNvcnRNYXBUb29sQmFyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvUmVkdWNlcnMvVXNlclJlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Ryb3Bkb3duQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9MaXN0SXRlbUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvU2tpUmVzb3J0TWFwQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL01pc2MvR2V0VXJsUGFyYW1ldGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvQWN0aW9ucy9Ta2lSZXNvcnRNYXBUb29sQmFyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3Jlcy9Ta2lSZXNvcnRNYXBTdG9yZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1JlZHVjZXJzL1NraVJlc29ydE1hcFJlZHVjZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9SZWR1Y2Vycy9Ta2lSZXNvcnRNYXBUb29sQmFyUmVkdWNlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBYSx3QkFBZ0IsR0FBRyxrQkFBa0I7QUFHckMsZ0JBQVEsR0FBRyxVQUFVOzs7Ozs7Ozs7OztBQ0hyQixnQkFBUSxHQUFHLFVBQVU7Ozs7Ozs7Ozs7O0FDQXJCLDZCQUFxQixHQUFHLHVCQUF1QjtBQUcvQyw0QkFBb0IsR0FBRyxzQkFBc0I7QUFHN0MsNkJBQXFCLEdBQUcsdUJBQXVCOzs7Ozs7Ozs7OztBQ041RCwrQkFBMkI7QUFFM0IscURBQXFEO0FBQ3JELGlIQUFpSDtBQUNqSCxrQkFBa0I7QUFDbEIsR0FBRztBQUNILDZCQUE0QyxJQUFJO0lBQzVDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMscUNBQXFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqRixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBSEQsc0NBR0M7QUFBQSxDQUFDO0FBRUY7SUFDSSxPQUFPLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO0FBQzFELENBQUM7QUFGRCx3RUFFQztBQUFBLENBQUM7Ozs7Ozs7Ozs7O0FDYkYsdURBQStFO0FBQy9FLHNDQUF5RDtBQUV6RCw0Q0FBcUM7QUFJckMseUJBQWdDLEVBQTREO1FBQTFELDhCQUFZLEVBQUUsNENBQW1CO0lBQy9ELE9BQU87UUFDSCxZQUFZO1FB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LFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztZQUMzRCw4Q0FBOEM7WUFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0Qsb0JBQ08sS0FBSyxJQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsU0FBUyxJQUNsQztLQUNSO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQXRCRCxrREFzQkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkQsOERBQStIO0FBSy9ILG9DQUEyQyxLQUFtSSxFQUFFLE1BQWtDO0lBQXZLLGtDQUF5QyxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBQztJQUMxSyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyxvREFBcUIsQ0FBQztZQUN2QixvQkFDTyxLQUFLLElBQ1IsbUJBQW1CLEVBQUUsSUFBSSxFQUN6Qix1QkFBdUIsRUFBRSxLQUFLLEVBQzlCLHNCQUFzQixFQUFFLEtBQUssSUFDaEM7U0FDSjtRQUNELEtBQUssb0RBQXFCLENBQUMsQ0FBQztZQUN4QixvQkFDTyxLQUFLLElBQ1IsbUJBQW1CLEVBQUUsS0FBSyxFQUMxQix1QkFBdUIsRUFBRSxJQUFJLEVBQzdCLHNCQUFzQixFQUFFLEtBQUssSUFDaEM7U0FDSjtRQUNELEtBQUssbURBQW9CLENBQUMsQ0FBQztZQUN2QixvQkFDTyxLQUFLLElBQ1IsbUJBQW1CLEVBQUUsS0FBSyxFQUMxQix1QkFBdUIsRUFBRSxLQUFLLEVBQzlCLHNCQUFzQixFQUFFLElBQUksSUFDL0I7U0FDSjtLQUVKO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQTdCRCxnRUE2QkMiLCJmaWxlIjoiU2tpUmVzb3J0c0V4cGxvcmUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9DVVJSRU5UX1VTRVIgPSAnU0VUX0NVUlJFTlRfVVNFUidcclxuZXhwb3J0IHR5cGUgU0VUX0NVUlJFTlRfVVNFUiA9IHR5cGVvZiBTRVRfQ1VSUkVOVF9VU0VSXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9PVVQgPSAnU0lHTl9PVVQnXHJcbmV4cG9ydCB0eXBlIFNJR05fT1VUID0gdHlwZW9mIFNJR05fT1VUXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cy50c3giLCJleHBvcnQgY29uc3QgTE9BRF9NQVAgPSAnTE9BRF9NQVAnXHJcbmV4cG9ydCB0eXBlIExPQURfTUFQID0gdHlwZW9mIExPQURfTUFQXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9Ta2lSZXNvcnRNYXBDb25zdGFudHMudHN4IiwiZXhwb3J0IGNvbnN0IERJU1BMQVlfQUREX05FV19UUkFJTCA9ICdESVNQTEFZX0FERF9ORVdfVFJBSUwnXHJcbmV4cG9ydCB0eXBlIERJU1BMQVlfQUREX05FV19UUkFJTCA9IHR5cGVvZiBESVNQTEFZX0FERF9ORVdfVFJBSUxcclxuXHJcbmV4cG9ydCBjb25zdCBESVNQTEFZX1NFQVJDSF9UUkFJTCA9ICdESVNQTEFZX1NFQVJDSF9UUkFJTCdcclxuZXhwb3J0IHR5cGUgRElTUExBWV9TRUFSQ0hfVFJBSUwgPSB0eXBlb2YgRElTUExBWV9TRUFSQ0hfVFJBSUxcclxuXHJcbmV4cG9ydCBjb25zdCBESVNQTEFZX0ZJTFRFUl9UUkFJTFMgPSAnRElTUExBWV9GSUxURVJfVFJBSUxTJ1xyXG5leHBvcnQgdHlwZSBESVNQTEFZX0ZJTFRFUl9UUkFJTFMgPSB0eXBlb2YgRElTUExBWV9GSUxURVJfVFJBSUxTXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9Ta2lSZXNvcnRNYXBUb29sQmFyQ29uc3RhbnRzLnRzeCIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuLy8gICAgZGF0YS5fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiA9ICQoJyNfX0FqYXhBbnRpRm9yZ2VyeUZvcm0gaW5wdXRbbmFtZT1fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbl0nKS52YWwoKTtcclxuLy8gICAgcmV0dXJuIGRhdGE7XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuICAgIGRhdGEuX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4gPSAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEoKSB7XHJcbiAgICByZXR1cm4gJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwiaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9ICBmcm9tICcuLi9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGVtYWlsQWRkcmVzcywgdXNlclByb2ZpbGVJbWFnZVVSTCB9OiBDdXJyZW50VXNlclN0b3JlU3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW1haWxBZGRyZXNzLFxyXG4gICAgICAgIHVzZXJQcm9maWxlSW1hZ2VVUkwsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbnMuQ3VycmVudFVzZXJBY3Rpb24+ICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDdXJyZW50VXNlck5ldzogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5nZXRDdXJyZW50VXNlck5ldygpKSxcclxuICAgICAgICBzaWduT3V0OiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLnNpZ25PdXQoKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlnYXRpb25CYXJDb21wb25lbnQgYXMgYW55IGFzIFJlYWN0LlNGQyk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IEdldEFudGlGb3JnZXJ5VG9rZW4gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgZW1haWxBZGRyZXNzOiBzdHJpbmcsXHJcbiAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBzdHJpbmcsXHJcbiAgICBnZXRDdXJyZW50VXNlck5ldzogKCkgPT4gdm9pZCxcclxuICAgIHNpZ25PdXQ6ICgpID0+IHZvaWQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBvYmplY3Q+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlckYgPSB0aGlzLmdldEN1cnJlbnRVc2VyRi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXplVXNlciA9IHRoaXMuYXV0aG9yaXplVXNlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFVzZXJGKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9HZXRDdXJyZW50VXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7fSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXV0aG9yaXplVXNlcigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvQXV0aG9yaXplQ3VycmVudFVzZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEdldEFudGlGb3JnZXJ5VG9rZW4oe30pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFVzZXJOZXcoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsQWRkcmVzcywgdXNlclByb2ZpbGVJbWFnZVVSTCwgZ2V0Q3VycmVudFVzZXJOZXcsIHNpZ25PdXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2lnbi1pbi11cC1jb250YWluZXIgLnNpZ24taW4tY29udGFpbmVyIGE6bnRoLWNoaWxkKDEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMi41cHQ7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAubmF2YmFyLXRleHR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDJCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAudXNlci1wcm9maWxlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAudXNlci1wcm9maWxlLW5hbWU6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC5mYS1zaWduLW91dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgI1VzZXJQcm9maWxlUGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLnNpZ24taW4tdXAtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLnNpZ24taW4tdXAtY29udGFpbmVyIC5zZXBhcmF0b3J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxODQsIDE4NCwgMC45MSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgbmF2Lm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsIDEpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA4aDI0TTQgMTZoMjRNNCAyNGgyNCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5EaXNjb3ZlciBNb3VudGFpbiBSZXNvcnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVGV4dFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUZXh0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lbWFpbEFkZHJlc3MgIT0gXCJcIiAmJiB0aGlzLnByb3BzLmVtYWlsQWRkcmVzcyAhPSBudWxsID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgaWQ9XCJVc2VyUHJvZmlsZVBpY3R1cmVcIiBzcmM9XCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9JTUdfMjAxNzEyMzBfMTAyODA5LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJVc2VyRmlyc3ROYW1lXCIgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLW5hbWVcIj57dGhpcy5wcm9wcy5lbWFpbEFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaWduLW91dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIG9uQ2xpY2s9e3NpZ25PdXR9PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi1pbi11cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi1pbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1VzZXIvTG9naW5cIj5TaWduIEluPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcGFyYXRvclwiPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbi11cC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1VzZXIvU2lnblVwXCI+U2lnbiBVcDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuc2lnbk91dEFzeW5jfT5TaWduIE91dDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuZ2V0Q3VycmVudFVzZXJGfT5HZXQgQ3VycmVudCBVc2VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5hdXRob3JpemVVc2VyfT5BdXRob3JpemUgVXNlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9OYXZpZ2F0aW9uQmFyQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuLi9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMnXHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSdcclxuaW1wb3J0IEdldEFudGlGb3JnZXJ5VG9rZW4gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgeyBHZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEgfSBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBTRVRfQ1VSUkVOVF9VU0VSIH0gZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldEN1cnJlbnRVc2VyIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSXHJcbiAgICBwYXlsb2FkOiBzdHJpbmcsXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBTaWduT3V0IHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5TSUdOX09VVFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDdXJyZW50VXNlckFjdGlvbiA9IFNldEN1cnJlbnRVc2VyIHwgU2lnbk91dFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRVc2VyTmV3KCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xyXG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvR2V0Q3VycmVudFVzZXJcIixcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJSZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5cIjogJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpLy9HZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UucmVzcG9uc2VUZXh0KVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVIsIHBheWxvYWQ6IHJlc3BvbnNlLnJlc3BvbnNlVGV4dCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUiwgcGF5bG9hZDogXCJ7fVwiIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2lnbk91dCgpIHtcclxuICAgIHZhciB0ZXN0ID0gXCJcIjtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL1NpZ25PdXRBc3luY1wiLFxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXG4gICAgICAgICAgICAvL2RhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgIC8vY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCI6ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0QWdhaW4gPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNJR05fT1VUIH0pO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAocmVxdWVzdCwgc3RhdHVzLCBlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciB2YWwgPSByZXF1ZXN0LnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiZXJyb3JcIiArIHZhbCk7XHJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IGRlZmF1bHQgYXMgdGh1bmsgfSBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lcic7XHJcbmltcG9ydCB7IFVzZXJSZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvVXNlclJlZHVjZXInO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuXHJcbmNvbnN0IG1pZGRsZVdhcmUgPSBhcHBseU1pZGRsZXdhcmUodGh1bmspO1xyXG5cclxuZXhwb3J0IGNvbnN0IEN1cnJlbnRVc2VyU3RvcmUgPSBjcmVhdGVTdG9yZTxDdXJyZW50VXNlclN0b3JlU3RhdGU+KFVzZXJSZWR1Y2VyLCB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiLFxyXG5cclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgZGVmYXVsdCBhcyB0aHVuayB9IGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IFJlZHV4UHJvbWlzZSBmcm9tICdyZWR1eC1wcm9taXNlJztcclxuaW1wb3J0IHsgU2tpUmVzb3J0c0V4cGxvcmVIT0MgfSBmcm9tICcuLi9IT0NzL1NraVJlc29ydHNFeHBsb3JlSE9DJ1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUnXHJcblxyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgICAgIDxTa2lSZXNvcnRzRXhwbG9yZUhPQyAgLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTW91bnRQb2ludCcpXHJcbilcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW50cnkvU2tpUmVzb3J0c0V4cGxvcmVFbnRyeS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAgTmF2aWdhdGlvbkJhckNvbnRhaW5lciAgZnJvbSAnLi4vQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyJ1xyXG5pbXBvcnQgeyBDYXJvdXNlbENvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvQ2Fyb3VzZWxDb21wb25lbnQnXHJcbmltcG9ydCAgU2tpUmVzb3J0TWFwQ29udGFpbmVyICBmcm9tICcuLi9Db250YWluZXJzL1NraVJlc29ydE1hcENvbnRhaW5lcidcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvQ3VycmVudFVzZXJTdG9yZSdcclxuaW1wb3J0IHsgU2tpUmVzb3J0TWFwU3RvcmUgfSBmcm9tICcuLi9TdG9yZXMvU2tpUmVzb3J0TWFwU3RvcmUnXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIHtcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFNraVJlc29ydHNFeHBsb3JlSE9DIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBvYmplY3Q+IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtDdXJyZW50VXNlclN0b3JlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CYXJDb250YWluZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e1NraVJlc29ydE1hcFN0b3JlfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNraVJlc29ydE1hcENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvSE9Dcy9Ta2lSZXNvcnRzRXhwbG9yZUhPQy50c3giLCJpbXBvcnQgeyBTa2lSZXNvcnRNYXBDb21wb25lbnQgfSAgZnJvbSAnLi4vQ29tcG9uZW50cy9Ta2lSZXNvcnRNYXBDb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBTa2lNYXBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvU2tpUmVzb3J0TWFwQWN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIFRvb2xCYXJBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvU2tpUmVzb3J0TWFwVG9vbEJhckFjdGlvbnMnXHJcbmltcG9ydCB7U2tpUmVzb3J0c0V4cGxvcmVIT0MgfSBmcm9tICcuLi9IT0NzL1NraVJlc29ydHNFeHBsb3JlSE9DJ1xyXG5pbXBvcnQgeyBTa2lSZXNvcnRNYXBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvU2tpUmVzb3J0TWFwU3RvcmVTdGF0ZSc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuXHJcblxyXG4vL2V4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBtYXAsIHJlc29ydE5hbWUsIGlzQWRkVHJhaWxEaXNwbGF5ZWQsIGlzRmlsdGVyVHJhaWxzRGlzcGxheWVkLCBpc1NlYXJjaFRyYWlsRGlzcGxheWVkIH0pIHtcclxuLy8gICAgcmV0dXJuIHtcclxuLy8gICAgICAgIG1hcCxcclxuLy8gICAgICAgIHJlc29ydE5hbWUsXHJcbi8vICAgICAgICBpc0FkZFRyYWlsRGlzcGxheWVkLFxyXG4vLyAgICAgICAgaXNGaWx0ZXJUcmFpbHNEaXNwbGF5ZWQsXHJcbi8vICAgICAgICBpc1NlYXJjaFRyYWlsRGlzcGxheWVkXHJcbi8vICAgIH1cclxuLy99XHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoeyBtYXAsIHJlc29ydE5hbWUsIGlzQWRkVHJhaWxEaXNwbGF5ZWQsIGlzRmlsdGVyVHJhaWxzRGlzcGxheWVkLCBpc1NlYXJjaFRyYWlsRGlzcGxheWVkIH0pe1xyXG4gICAgY29uc29sZS5sb2coXCJoZXlcIik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG1hcCxcclxuICAgICAgICByZXNvcnROYW1lLFxyXG4gICAgICAgIGlzQWRkVHJhaWxEaXNwbGF5ZWQsXHJcbiAgICAgICAgaXNGaWx0ZXJUcmFpbHNEaXNwbGF5ZWQsXHJcbiAgICAgICAgaXNTZWFyY2hUcmFpbERpc3BsYXllZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvYWRNYXA6ICgpID0+IGRpc3BhdGNoKFNraU1hcEFjdGlvbnMubG9hZE1hcCgpKSxcclxuICAgICAgICBkaXNwbGF5QWRkTmV3VHJhaWw6ICgpID0+IGRpc3BhdGNoKFRvb2xCYXJBY3Rpb25zLmRpc3BsYXlBZGROZXdUcmFpbCgpKSxcclxuICAgICAgICBkaXNwbGF5RmlsdGVyVHJhaWxzOiAoKSA9PiBkaXNwYXRjaChUb29sQmFyQWN0aW9ucy5kaXNwbGF5RmlsdGVyVHJhaWxzKCkpLFxyXG4gICAgICAgIGRpc3BsYXlTZWFyY2hUcmFpbDogKCkgPT4gZGlzcGF0Y2goVG9vbEJhckFjdGlvbnMuZGlzcGxheVNlYXJjaFRyYWlsKCkpLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+ICh7XHJcbiAgICBza2lSZXNvcnRNYXBSZWR1Y2VyOiBzdGF0ZS5za2lSZXNvcnRNYXBSZWR1Y2VyLFxyXG4gICAgc2tpUmVzb3J0TWFwVG9vbEJhclJlZHVjZXI6IHN0YXRlLnNraVJlc29ydE1hcFRvb2xCYXJSZWR1Y2VyXHJcbn0pLCBtYXBEaXNwYXRjaFRvUHJvcHMpKFNraVJlc29ydE1hcENvbXBvbmVudCBhcyBhbnkgYXMgUmVhY3QuU0ZDKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250YWluZXJzL1NraVJlc29ydE1hcENvbnRhaW5lci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU2tpUmVzb3J0TWFwVG9vbEJhckNvbXBvbmVudCB9ZnJvbSAnLi4vQ29tcG9uZW50cy9Ta2lSZXNvcnRNYXBUb29sQmFyQ29tcG9uZW50J1xyXG5pbXBvcnQgU2tpUmVzb3J0TWFwQ29udGFpbmVyIGZyb20gJy4uL0NvbnRhaW5lcnMvU2tpUmVzb3J0TWFwQ29udGFpbmVyJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL1NraVJlc29ydE1hcFRvb2xCYXJBY3Rpb25zJ1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsb2FkTWFwPzogKCkgPT4gdm9pZDtcclxuICAgIGlzQWRkVHJhaWxEaXNwbGF5ZWQ6IGJvb2xlYW4sXHJcbiAgICBpc1NlYXJjaFRyYWlsRGlzcGxheWVkOiBib29sZWFuLFxyXG4gICAgaXNGaWx0ZXJUcmFpbHNEaXNwbGF5ZWQ6IGJvb2xlYW4sXHJcbiAgICBkaXNwbGF5QWRkTmV3VHJhaWw6ICgpID0+IHZvaWQsXHJcbiAgICBkaXNwbGF5RmlsdGVyVHJhaWxzOiAoKSA9PiB2b2lkLFxyXG4gICAgZGlzcGxheVNlYXJjaFRyYWlsOiAoKSA9PiB2b2lkLFxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTa2lSZXNvcnRNYXBDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbG9hZE1hcCwgaXNBZGRUcmFpbERpc3BsYXllZCwgaXNTZWFyY2hUcmFpbERpc3BsYXllZCwgaXNGaWx0ZXJUcmFpbHNEaXNwbGF5ZWQsIGRpc3BsYXlBZGROZXdUcmFpbCwgZGlzcGxheVNlYXJjaFRyYWlsLCBkaXNwbGF5RmlsdGVyVHJhaWxzIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxvYWRNYXAoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IGlzU2VhcmNoVHJhaWxEaXNwbGF5ZWQsIGlzRmlsdGVyVHJhaWxzRGlzcGxheWVkLCBkaXNwbGF5QWRkTmV3VHJhaWwgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLnByb3BzW1wic2tpUmVzb3J0TWFwUmVkdWNlclwiXS5pc0FkZFRyYWlsRGlzcGxheWVkO1xyXG4gICAgICAgIHJldHVybiAoICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBpZD1cIlNraVJlc29ydE1hcENvbXBvbmVudFwiPiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5CZWdpbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8U2tpUmVzb3J0TWFwVG9vbEJhckNvbXBvbmVudCB7Li4udGhpcy5wcm9wc30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcbi8vey4uLnsgaXNBZGRUcmFpbERpc3BsYXllZDogZmFsc2UsIGlzU2VhcmNoVHJhaWxEaXNwbGF5ZWQ6IGZhbHNlLCBpc0ZpbHRlclRyYWlsc0Rpc3BsYXllZDogZmFsc2UgfSB9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvU2tpUmVzb3J0TWFwQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvU2tpUmVzb3J0TWFwVG9vbEJhckFjdGlvbnMnXHJcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9Ecm9wZG93bkNvbXBvbmVudCdcclxuaW1wb3J0IHsgTGlzdEl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL0xpc3RJdGVtQ29tcG9uZW50J1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaXNBZGRUcmFpbERpc3BsYXllZDogYm9vbGVhbixcclxuICAgIGRpc3BsYXlBZGROZXdUcmFpbDogKCkgPT4gdm9pZCxcclxuICAgIGRpc3BsYXlGaWx0ZXJUcmFpbHM6ICgpID0+IHZvaWQsXHJcbiAgICBkaXNwbGF5U2VhcmNoVHJhaWw6ICgpID0+IHZvaWQsXHJcbn07XHJcbmV4cG9ydCBjbGFzcyBTa2lSZXNvcnRNYXBUb29sQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBvYmplY3Q+e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgLy9jb25zdCB7IGlzQWRkVHJhaWxEaXNwbGF5ZWQsIGlzU2VhcmNoVHJhaWxEaXNwbGF5ZWQsIGlzRmlsdGVyVHJhaWxzRGlzcGxheWVkIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJTa2lSZXNvcnRNYXBUb29sQmFyQ29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiTWFwVG9vbEJhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1hY3Rpb25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmRpc3BsYXlBZGROZXdUcmFpbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXBsdXMgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyLWFjdGlvblwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuZGlzcGxheVNlYXJjaFRyYWlsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VhcmNoIGZhLTJ4XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhci1hY3Rpb25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmRpc3BsYXlGaWx0ZXJUcmFpbHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1maWx0ZXIgZmEtMnhcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJNYXBBY3Rpb25XaW5kb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbXCJza2lSZXNvcnRNYXBUb29sQmFyUmVkdWNlclwiXS5pc0FkZFRyYWlsRGlzcGxheWVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkFkZFRyYWlsV2luZG93XCIgY2xhc3NOYW1lPVwiYWN0aW9uLXdpbmRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNyZWF0ZSBUcmFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbi13aW5kb3ctZm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UcmFpbCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiQ3JlYXRlVHJhaWxOYW1lXCIgcGxhY2Vob2xkZXI9XCJUcmFpbCBOYW1lXCIgdHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkNvbXBvbmVudCB7Li4ueyBpdGVtczogW1wiQmVnaW5uZXJcIiwgXCJJbnRlcm1lZGlhdGVcIiwgXCJBZHZhbmNlZFwiLCBcIkV4cGVydFwiLCBcIlRlcnJhaW4gUGFya1wiXSwgbGFiZWw6IFwiRGlmZmljdWx0eVwiIH19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUNvbXBvbmVudCB7Li4ueyBsYWJlbDogXCJUYWdzXCIsIGxpc3RJdGVtczogW1wiR3Jvb21lZFwiLCBcIk9wZW4gQm93bFwiLCBcIlN0ZWVwcyBhbmQgVHJlZXNcIiwgXCJIYXMgTW9ndWxzXCIsIFwiR2xhZGVzXCIsIFwiUGlsbG93c1wiXSB9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cIkJlZ2luU3RvcEJ1dHRvbkNvbnRhaW5lclwiIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIj5CRUdJTjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCI+U1RPUDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1tcInNraVJlc29ydE1hcFRvb2xCYXJSZWR1Y2VyXCJdLmlzU2VhcmNoVHJhaWxEaXNwbGF5ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiU2VhcmNoRm9yVHJhaWxzV2luZG93XCIgY2xhc3NOYW1lPVwiYWN0aW9uLXdpbmRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlYXJjaCBGb3IgVHJhaWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW1wic2tpUmVzb3J0TWFwVG9vbEJhclJlZHVjZXJcIl0uaXNGaWx0ZXJUcmFpbHNEaXNwbGF5ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiRmlsdGVyVHJhaWxzV2luZG93XCIgY2xhc3NOYW1lPVwiYWN0aW9uLXdpbmRvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpbHRlciBUcmFpbHM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9Ta2lSZXNvcnRNYXBUb29sQmFyQ29tcG9uZW50LnRzeCIsImltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgTE9HSU4sIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgfSBmcm9tICcuLi9Db25zdGFudHMvVXNlckxvZ2luQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJBY3Rpb24gfSBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNFVF9DVVJSRU5UX1VTRVIsIFNJR05fT1VUIH0gZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZTogQ3VycmVudFVzZXJTdG9yZVN0YXRlLCBhY3Rpb246IEN1cnJlbnRVc2VyQWN0aW9uKTogQ3VycmVudFVzZXJTdG9yZVN0YXRlIHtcclxuICAgIHZhciB0ZXN0ID0gXCJcIjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6IHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsQWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkW1wiZW1haWxcIl07XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczogZW1haWxBZGRyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlZHVjZXJzL1VzZXJSZWR1Y2VyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbGFiZWw6IHN0cmluZyxcclxuICAgIGl0ZW1zOiBBcnJheTxzdHJpbmc+XHJcbn1cclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBvYmplY3Q+IHtcclxuICAgIG15RGl2OiBIVE1MRGl2RWxlbWVudDtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93biA9IHRoaXMudG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLnNlbGVjdEl0ZW0gPSB0aGlzLnNlbGVjdEl0ZW0uYmluZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcbiAgICB0b2dnbGVEcm9wZG93bigpIHtcclxuICAgICAgICB2YXIgaXRlbXNDb250YWluZXI6IEhUTUxFbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLml0ZW1zQ29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgaWYgKGl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImluYWN0aXZlXCIpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgaXRlbXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgaXRlbXNDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZWxlY3RJdGVtKGUpIHtcclxuXHJcbiAgICAgICAgbGV0IHBhcmVudEVsZTogSFRNTEVsZW1lbnQgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KCcuaXRlbS1jb250YWluZXInKVswXTtcclxuXHJcbiAgICAgICAgbGV0IHZhbHVlID0gcGFyZW50RWxlLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdwJylbMF0uaW5uZXJIVE1MO1xyXG4gICAgICAgIGxldCBzZWxlY3RlZEl0ZW1FbGU6IEhUTUxFbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcy5yZWZzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtRWxlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlaG9sZGVyJyk7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtRWxlLmlubmVySFRNTCA9IHZhbHVlO1xyXG5cclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBsYWJlbCwgaXRlbXMgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIkRyb3Bkb3duQ29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuICAgICAgICAgICAgICAgICAgICAgICAgI0Ryb3Bkb3duQ29tcG9uZW50IC5pbnB1dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjREZERkRGO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNEcm9wZG93bkNvbXBvbmVudCAubGFiZWwtY29udGFpbmVyIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI0Ryb3Bkb3duQ29tcG9uZW50IC5pdGVtc3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI0Ryb3Bkb3duQ29tcG9uZW50IC5pbnB1dC1jb250YWluZXIgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjRHJvcGRvd25Db21wb25lbnQgLmlucHV0LWNvbnRhaW5lciBkaXY6bGFzdC1jaGlsZCAuZmEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0UwRTBFMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjRHJvcGRvd25Db21wb25lbnQgLmlucHV0LWNvbnRhaW5lciAuc2VsZWN0ZWQtaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI0Ryb3Bkb3duQ29tcG9uZW50IC5pbnB1dC1jb250YWluZXIgLnBsYWNlaG9sZGVyIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjRHJvcGRvd25Db21wb25lbnQgLml0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAycHggMHB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDJweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNEcm9wZG93bkNvbXBvbmVudCAuaXRlbXMgLml0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjRHJvcGRvd25Db21wb25lbnQgLml0ZW1zLmluYWN0aXZlIC5pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFiZWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3RoaXMucHJvcHMubGFiZWx9PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGFjZWhvbGRlciBzZWxlY3RlZC1pdGVtXCIgcmVmPVwic2VsZWN0ZWRJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zIGluYWN0aXZlXCIgcmVmPVwiaXRlbXNDb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZURyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5pdGVtcy5tYXAoKGtleSwgaXRlbUluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJpdGVtLWNvbnRhaW5lclwiIG9uQ2xpY2s9e3RoaXMuc2VsZWN0SXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLml0ZW1zW2l0ZW1JbmRleF19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9Ecm9wZG93bkNvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsYWJlbDogc3RyaW5nLFxyXG4gICAgbGlzdEl0ZW1zOiBBcnJheTxzdHJpbmc+XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBDb21wU3RhdGUge1xyXG4gICAgc2VsZWN0ZWRJdGVtczogQXJyYXk8c3RyaW5nPixcclxuICAgIGF2YWlsYWJsZUl0ZW1zOiBBcnJheTxzdHJpbmc+LFxyXG4gICAgYXJlTGlzdEl0ZW1zRGlzcGxheWVkOiBib29sZWFuXHJcbn1cclxuZXhwb3J0IGNsYXNzIExpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBDb21wU3RhdGU+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUl0ZW1zOiB0aGlzLnByb3BzLmxpc3RJdGVtcyxcclxuICAgICAgICAgICAgYXJlTGlzdEl0ZW1zRGlzcGxheWVkOiBmYWxzZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2dnbGVEcm9wZG93biA9IHRoaXMudG9nZ2xlRHJvcGRvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZUl0ZW1DbGljayA9IHRoaXMuaGFuZGxlSXRlbUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRUb1NlbGVjdGVkSXRlbXMgPSB0aGlzLmFkZFRvU2VsZWN0ZWRJdGVtcy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlRnJvbUF2YWlsYWJsZUl0ZW1zID0gdGhpcy5yZW1vdmVGcm9tQXZhaWxhYmxlSXRlbXMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVRhZ0NsaWNrID0gdGhpcy5oYW5kbGVUYWdDbGljay5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSB0b2dnbGVEcm9wZG93bihlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldDogSFRNTEVsZW1lbnQgPSBlLnRhcmdldDtcclxuICAgICAgICB2YXIgdGFnQ29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdUYWdDb250YWluZXInKTtcclxuICAgICAgICBpZiAoIXRhZ0NvbnRhaW5lci5jb250YWlucyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFyZUxpc3RJdGVtc0Rpc3BsYXllZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFyZUxpc3RJdGVtc0Rpc3BsYXllZDogZmFsc2UgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcmVMaXN0SXRlbXNEaXNwbGF5ZWQ6IHRydWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlSXRlbUNsaWNrKGUpIHtcclxuICAgICAgICB2YXIgcGFyZW50RWxlOiBIVE1MRWxlbWVudCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJy5saXN0LWl0ZW0tY29udGFpbmVyJylbMF07XHJcbiAgICAgICAgdmFyIGl0ZW06IHN0cmluZyA9IHBhcmVudEVsZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsaXN0LWl0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyJylbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy5hZGRUb1NlbGVjdGVkSXRlbXMoaXRlbSk7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tQXZhaWxhYmxlSXRlbXMoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkVG9TZWxlY3RlZEl0ZW1zKGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWxlY3RlZEl0ZW1zOiBbLi4udGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zLCBpdGVtXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlRnJvbVNlbGVjdGVkSXRlbXMoaXRlbTogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIGFycmF5V2l0aFJlbW92ZWRJdGVtOiBBcnJheTxzdHJpbmc+ID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zO1xyXG4gICAgICAgIHZhciBpbmRleDogbnVtYmVyID0gdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgYXJyYXlXaXRoUmVtb3ZlZEl0ZW0uc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkSXRlbXM6IGFycmF5V2l0aFJlbW92ZWRJdGVtXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHByaXZhdGUgaGFuZGxlVGFnQ2xpY2soZSkge1xyXG4gICAgICAgIHZhciBwYXJlbnRFbGU6IEhUTUxFbGVtZW50ID0gJChlLnRhcmdldCkuY2xvc2VzdCgnLnNlbGVjdGVkLWl0ZW0tdGFnLWNvbnRhaW5lcicpWzBdO1xyXG4gICAgICAgIHZhciBpdGVtOiBzdHJpbmcgPSBwYXJlbnRFbGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3AnKVswXS5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVGcm9tU2VsZWN0ZWRJdGVtcyhpdGVtKTtcclxuICAgICAgICB0aGlzLmFkZFRvQXZhaWxhYmxlSXRlbXMoaXRlbSk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgYWRkVG9BdmFpbGFibGVJdGVtcyhpdGVtOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgYXZhaWxhYmxlSXRlbXM6IFsuLi50aGlzLnN0YXRlLmF2YWlsYWJsZUl0ZW1zLCBpdGVtXVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlRnJvbUF2YWlsYWJsZUl0ZW1zKGl0ZW06IHN0cmluZykge1xyXG4gICAgICAgIHZhciBhcnJheVdpdGhSZW1vdmVkSXRlbTogQXJyYXk8c3RyaW5nPiA9IHRoaXMuc3RhdGUuYXZhaWxhYmxlSXRlbXM7XHJcbiAgICAgICAgdmFyIGluZGV4OiBudW1iZXIgPSB0aGlzLnN0YXRlLmF2YWlsYWJsZUl0ZW1zLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgYXJyYXlXaXRoUmVtb3ZlZEl0ZW0uc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGF2YWlsYWJsZUl0ZW1zOiBhcnJheVdpdGhSZW1vdmVkSXRlbVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGxpc3RJdGVtcyB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiTGlzdEl0ZW1Db21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29tcG9uZW50LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt0aGlzLnByb3BzLmxhYmVsfTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0ZWQtaXRlbXMtY29udGFpbmVyXCIgb25DbGljaz17dGhpcy50b2dnbGVEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RlZC1saXN0LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJUYWdDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zLm1hcCgoa2V5LCBzZWxlY3RlZEl0ZW1JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9XCJzZWxlY3RlZC1pdGVtLXRhZy1jb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVRhZ0NsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2VsZWN0ZWQtaXRlbS10YWdcIj57dGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zW3NlbGVjdGVkSXRlbUluZGV4XX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVtb3ZlLXRhZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBsYWNlaG9sZGVyXCI+U2VsZWN0IGEgdGFnPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJldC1kb3duLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1jYXJldC1kb3duXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LWl0ZW1zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmFyZUxpc3RJdGVtc0Rpc3BsYXllZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wb25lbnQtbGlzdC1pdGVtcyB1bmF2YWlsYWJsZS1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnNlbGVjdGVkSXRlbXMubWFwKChrZXksIGl0ZW1JbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRlc2NyaXB0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dGhpcy5zdGF0ZS5zZWxlY3RlZEl0ZW1zW2l0ZW1JbmRleF19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuYXJlTGlzdEl0ZW1zRGlzcGxheWVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBvbmVudC1saXN0LWl0ZW1zIGF2YWlsYWJsZS1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmF2YWlsYWJsZUl0ZW1zLm1hcCgoa2V5LCBpdGVtSW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250YWluZXJcIiBvbkNsaWNrPXt0aGlzLmhhbmRsZUl0ZW1DbGlja30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGVzY3JpcHRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnN0YXRlLmF2YWlsYWJsZUl0ZW1zW2l0ZW1JbmRleF19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KSA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvTGlzdEl0ZW1Db21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgY29uc3RhbnRzIGZyb20gJy4uL0NvbnN0YW50cy9Ta2lSZXNvcnRNYXBDb25zdGFudHMnXHJcbmltcG9ydCB7IFNraVJlc29ydE1hcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Ta2lSZXNvcnRNYXBTdG9yZVN0YXRlJ1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHsgTE9BRF9NQVAgfSBmcm9tICcuLi9Db25zdGFudHMvU2tpUmVzb3J0TWFwQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgZ2V0VXJsUGFyYW1ldGVycyB9ICBmcm9tICcuLi9NaXNjL0dldFVybFBhcmFtZXRlcnMnXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2FkTWFwIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5MT0FEX01BUCxcclxuICAgIHBheWxvYWQ6IE9iamVjdFxyXG59XHJcbmV4cG9ydCB0eXBlIFNraVJlc29ydE1hcEFjdGlvbnMgPSBMb2FkTWFwIFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNYXAoKSB7XHJcbiAgICB2YXIgc2tpUmVzb3J0SWQgPSBnZXRVcmxQYXJhbWV0ZXJzKCdza2lSZXNvcnRJZCcpO1xyXG4gICAgdmFyIGRhdGEgPSB7ICdpZCc6IHNraVJlc29ydElkIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBcIi9Ta2lSZXNvcnRzL0dldFNraVJlc29ydEJ5SWRcIixcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCI6ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHZhciB0ZXN0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5MT0FEX01BUCwgcGF5bG9hZDogcmVzcG9uc2UgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9Ta2lSZXNvcnRNYXBBY3Rpb25zLnRzeCIsImV4cG9ydCBmdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKHBhcmFtZXRlck5hbWUpIHtcclxuICAgIHZhciB1cmwgPSBuZXcgVVJMKGxvY2F0aW9uLmhyZWYpO1xuICAgIHZhciBwYXJhbVZhbHVlID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQocGFyYW1ldGVyTmFtZSk7XG4gICAgcmV0dXJuIHBhcmFtVmFsdWVcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NaXNjL0dldFVybFBhcmFtZXRlcnMudHMiLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzL1NraVJlc29ydE1hcFRvb2xCYXJDb25zdGFudHMnXHJcbmltcG9ydCB7IFNraVJlc29ydE1hcFRvb2xCYXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvU2tpUmVzb3J0TWFwVG9vbEJhclN0b3JlU3RhdGUnXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBESVNQTEFZX0FERF9ORVdfVFJBSUwsIERJU1BMQVlfRklMVEVSX1RSQUlMUywgRElTUExBWV9TRUFSQ0hfVFJBSUwgfSBmcm9tICcuLi9Db25zdGFudHMvU2tpUmVzb3J0TWFwVG9vbEJhckNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlBZGROZXdUcmFpbCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuRElTUExBWV9BRERfTkVXX1RSQUlMXHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEaXNwbGF5RmlsdGVyVHJhaWxzIHtcclxuICAgIHR5cGU6IGNvbnN0YW50cy5ESVNQTEFZX0ZJTFRFUl9UUkFJTFNcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERpc3BsYXlTZWFyY2hUcmFpbCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuRElTUExBWV9TRUFSQ0hfVFJBSUxcclxufVxyXG5leHBvcnQgdHlwZSBTa2lSZXNvcnRNYXBUb29sQmFyQWN0aW9ucyA9IERpc3BsYXlBZGROZXdUcmFpbCB8IERpc3BsYXlGaWx0ZXJUcmFpbHMgfCBEaXNwbGF5U2VhcmNoVHJhaWxcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWRkTmV3VHJhaWwoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNvbnN0YW50cy5ESVNQTEFZX0FERF9ORVdfVFJBSUxcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUZpbHRlclRyYWlscygpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogY29uc3RhbnRzLkRJU1BMQVlfRklMVEVSX1RSQUlMU1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5U2VhcmNoVHJhaWwoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNvbnN0YW50cy5ESVNQTEFZX1NFQVJDSF9UUkFJTFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0FjdGlvbnMvU2tpUmVzb3J0TWFwVG9vbEJhckFjdGlvbnMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCBTa2lSZXNvcnRNYXBDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9Ta2lSZXNvcnRNYXBDb250YWluZXInO1xyXG5pbXBvcnQgeyBTa2lSZXNvcnRNYXBSZWR1Y2VyIH0gZnJvbSAnLi4vUmVkdWNlcnMvU2tpUmVzb3J0TWFwUmVkdWNlcic7XHJcbmltcG9ydCB7IFNraVJlc29ydE1hcFN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Ta2lSZXNvcnRNYXBTdG9yZVN0YXRlJztcclxuaW1wb3J0IFNraVJlc29ydE1hcFRvb2xCYXJDb250YWluZXIgZnJvbSAnLi4vQ29udGFpbmVycy9Ta2lSZXNvcnRNYXBUb29sQmFyQ29udGFpbmVyJztcclxuaW1wb3J0IHsgc2tpUmVzb3J0TWFwVG9vbEJhclJlZHVjZXIgfSBmcm9tICcuLi9SZWR1Y2Vycy9Ta2lSZXNvcnRNYXBUb29sQmFyUmVkdWNlcic7XHJcbmltcG9ydCB7IFNraVJlc29ydE1hcFRvb2xCYXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvU2tpUmVzb3J0TWFwVG9vbEJhclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgUmVkdXhQcm9taXNlIGZyb20gJ3JlZHV4LXByb21pc2UnO1xyXG5pbXBvcnQgeyBjb21wb3NlIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuY29uc3QgbWlkZGxlV2FyZSA9IGFwcGx5TWlkZGxld2FyZSh0aHVuayk7XHJcbmRlY2xhcmUgdmFyIHdpbmRvdzogYW55XHJcblxyXG5cclxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gfHwgY29tcG9zZTtcclxuXHJcbnZhciBjb21iaW5lZFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgIHNraVJlc29ydE1hcFJlZHVjZXI6IFNraVJlc29ydE1hcFJlZHVjZXIsXHJcbiAgICBza2lSZXNvcnRNYXBUb29sQmFyUmVkdWNlcjogc2tpUmVzb3J0TWFwVG9vbEJhclJlZHVjZXJcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgU2tpUmVzb3J0TWFwU3RvcmUgPSBjcmVhdGVTdG9yZShjb21iaW5lZFJlZHVjZXJzLCB7XHJcbiAgICBcclxufSwgY29tcG9zZUVuaGFuY2VycyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSlcclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9Ta2lSZXNvcnRNYXBTdG9yZS50c3giLCJpbXBvcnQgeyBTa2lSZXNvcnRNYXBTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvU2tpUmVzb3J0TWFwU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgTE9BRF9NQVAgfSBmcm9tICcuLi9Db25zdGFudHMvU2tpUmVzb3J0TWFwQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgU2tpUmVzb3J0TWFwQWN0aW9ucyB9IGZyb20gJy4uL0FjdGlvbnMvU2tpUmVzb3J0TWFwQWN0aW9ucyc7XHJcblxyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNraVJlc29ydE1hcFJlZHVjZXIoc3RhdGU6IFNraVJlc29ydE1hcFN0b3JlU3RhdGUgPSB7IG1hcDogbnVsbCwgcmVzb3J0TmFtZTogXCJcIn0sIGFjdGlvbjogU2tpUmVzb3J0TWFwQWN0aW9ucyk6IFNraVJlc29ydE1hcFN0b3JlU3RhdGUge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTE9BRF9NQVA6XHJcbiAgICAgICAgICAgIHZhciBzdHlsZWRNYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLlN0eWxlZE1hcFR5cGUoXHJcbiAgICAgICAgICAgICAgICBbXHJcblxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHsgbmFtZTogJ1N0eWxlZCBNYXAnIH0pO1xyXG5cclxuICAgICAgICAgICAgd2luZG93Lkdvb2dsZU1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgICAgICB6b29tOiAxNSxcclxuICAgICAgICAgICAgICAgIGNlbnRlcjogeyBsYXQ6IGFjdGlvbi5wYXlsb2FkW1wibGF0aXR1ZGVcIl0sIGxuZzogYWN0aW9uLnBheWxvYWRbXCJsb25naXR1ZGVcIl0gfSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVEZWZhdWx0VUk6IHRydWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgd2luZG93Lkdvb2dsZU1hcC5tYXBUeXBlcy5zZXQoJ3N0eWxlZF9tYXAnLCBzdHlsZWRNYXBUeXBlKTtcclxuICAgICAgICAgICAgLy93aW5kb3cuR29vZ2xlTWFwLnNldE1hcFR5cGVJZCgnc3R5bGVkX21hcCcpO1xyXG4gICAgICAgICAgICB3aW5kb3cuR29vZ2xlTWFwLnNldE1hcFR5cGVJZChnb29nbGUubWFwcy5NYXBUeXBlSWQuVEVSUkFJTik7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSwgbWFwOiB3aW5kb3cuR29vZ2xlTWFwXHJcbiAgICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlZHVjZXJzL1NraVJlc29ydE1hcFJlZHVjZXIudHN4IiwiaW1wb3J0IHsgU2tpUmVzb3J0TWFwVG9vbEJhclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9Ta2lSZXNvcnRNYXBUb29sQmFyU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgRElTUExBWV9BRERfTkVXX1RSQUlMLCBESVNQTEFZX0ZJTFRFUl9UUkFJTFMsIERJU1BMQVlfU0VBUkNIX1RSQUlMIH0gZnJvbSAnLi4vQ29uc3RhbnRzL1NraVJlc29ydE1hcFRvb2xCYXJDb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTa2lSZXNvcnRNYXBUb29sQmFyQWN0aW9ucyB9IGZyb20gJy4uL0FjdGlvbnMvU2tpUmVzb3J0TWFwVG9vbEJhckFjdGlvbnMnO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2tpUmVzb3J0TWFwVG9vbEJhclJlZHVjZXIoc3RhdGU6IFNraVJlc29ydE1hcFRvb2xCYXJTdG9yZVN0YXRlID0geyBpc0FkZFRyYWlsRGlzcGxheWVkOiBmYWxzZSwgaXNTZWFyY2hUcmFpbERpc3BsYXllZDogZmFsc2UsIGlzRmlsdGVyVHJhaWxzRGlzcGxheWVkOiBmYWxzZX0sIGFjdGlvbjogU2tpUmVzb3J0TWFwVG9vbEJhckFjdGlvbnMpOiBTa2lSZXNvcnRNYXBUb29sQmFyU3RvcmVTdGF0ZSB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBESVNQTEFZX0FERF9ORVdfVFJBSUw6e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsIFxyXG4gICAgICAgICAgICAgICAgaXNBZGRUcmFpbERpc3BsYXllZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzRmlsdGVyVHJhaWxzRGlzcGxheWVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU2VhcmNoVHJhaWxEaXNwbGF5ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBESVNQTEFZX0ZJTFRFUl9UUkFJTFM6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXNBZGRUcmFpbERpc3BsYXllZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBpc0ZpbHRlclRyYWlsc0Rpc3BsYXllZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlzU2VhcmNoVHJhaWxEaXNwbGF5ZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBESVNQTEFZX1NFQVJDSF9UUkFJTDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpc0FkZFRyYWlsRGlzcGxheWVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzRmlsdGVyVHJhaWxzRGlzcGxheWVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGlzU2VhcmNoVHJhaWxEaXNwbGF5ZWQ6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWR1Y2Vycy9Ta2lSZXNvcnRNYXBUb29sQmFyUmVkdWNlci50c3giXSwic291cmNlUm9vdCI6IiJ9