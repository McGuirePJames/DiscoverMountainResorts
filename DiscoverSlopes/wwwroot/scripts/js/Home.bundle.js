webpackJsonp([3],{

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.SIGN_OUT = 'SIGN_OUT';


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

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var ReactDOM = __webpack_require__(22);
var HOCHome_1 = __webpack_require__(316);
ReactDOM.render(React.createElement(HOCHome_1.HOCHome, null), document.getElementById('MountPoint'));


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

/***/ 316:
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
var CarouselComponent_1 = __webpack_require__(334);
var GoogleMapsComponent_1 = __webpack_require__(350);
var TrendingItemContainerComponent_1 = __webpack_require__(351);
var react_redux_1 = __webpack_require__(15);
var CurrentUserStore_1 = __webpack_require__(36);
var HOCHome = /** @class */ (function (_super) {
    __extends(HOCHome, _super);
    function HOCHome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HOCHome.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
                React.createElement(NavigationBarContainer_1.default, null)),
            React.createElement(CarouselComponent_1.CarouselComponent, null),
            React.createElement(GoogleMapsComponent_1.GoogleMapsComponent, null),
            React.createElement(TrendingItemContainerComponent_1.TrendingItemContainerComponent, null)));
    };
    return HOCHome;
}(React.Component));
exports.HOCHome = HOCHome;


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

/***/ 334:
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
var react_slick_1 = __webpack_require__(169);
var CarouselComponent = /** @class */ (function (_super) {
    __extends(CarouselComponent, _super);
    function CarouselComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarouselComponent.prototype.render = function () {
        var settings = {
            accessibility: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 8000,
            pauseOnFocus: true,
            pauseOnHover: true,
            swipe: true,
        };
        return (React.createElement("div", { id: "CarouselComponent" },
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n\n\n                        .carousel-container {\n                            z-index: 500;\n\n                        }\n                        .welcome-image{\n                        -moz-box-shadow:0 0 8px 0 black;\n                        -webkit-box-shadow:0 0 8px 0 black;\n                        box-shadow:0 0 8px 0 black;\n                        }\n                        .slick-list{\n                            overflow: visible !important;\n                        }\n                        .collapse > div button {\n                            height: inherit;\n                        }\n                        \n                        .slick-dots {\n                            bottom: -35px !important;\n                            z-index: -1;\n                        }\n                        .carousel-container{\n                            background-color: #05202B; \n                        }\n                        #CarouselComponent .welcome-container {\n                            position: relative;\n                            display: flex;\n                        }\n\n                        #CarouselComponent .welcome-message {\n                            position: absolute;\n                            z-index: 10000;\n                            top: 50%;\n                            left: 50%;\n                            transform: translate(-50%, -50%);\n                            background-color: rgba(57, 57, 57, .6);\n                            height: 40%;\n                            width: 40%;\n                            display: flex;\n                            justify-content: center;\n                            align-items: center;\n                        }\n\n                            #CarouselComponent .welcome-message p {\n                                color: white;\n                                font-size: 15pt;\n                                margin-bottom: 0px;\n                            }\n\n                        #CarouselComponent .slick-dots {\n                            background-color: rgb(5, 32, 43);\n                            height: 35px;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                            #CarouselComponent .slick-dots li button::before {\n                                color: white;\n                                opacity: 0.6;\n                            }\n\n                            #CarouselComponent .slick-dots .slick-active button::before {\n                                opacity: 1.00;\n                            }\n                        .slick-arrow {\n                            margin-top: -30px !important;\n                        }\n                        \n                        .slick-prev:before, .slick-next:before {\n                            font-size: 40px !important;\n                        }\n                        \n                        .slick-prev {\n                            margin-left: 40px !important;\n                            z-index: 100;\n                            color: red;\n                            background-color: red;\n                        }\n                        \n                        .slick-next {\n                            margin-right: 60px;\n                        }\n                        .slick-slide{\n                            height: 300px !important;\n                        }\n                        .slick-slide div{\n                            height: inherit;\n                        }\n                        .slick-slide .welcome-image{\n                          background-position: center center;\n                          background-repeat: no-repeat;\n                          background-image: url('https://storagewms.blob.core.windows.net/profilepictures/Brighton.jpg');\n                        }\n                "
                } }),
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" }),
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" }),
            React.createElement("div", { className: "carousel-container" },
                React.createElement(react_slick_1.default, __assign({}, settings),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World ")))))));
    };
    return CarouselComponent;
}(React.Component));
exports.CarouselComponent = CarouselComponent;


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(1);
var $ = __webpack_require__(7);
window.GoogleMap = window.GoogleMap || {};
var GoogleMapsComponent = /** @class */ (function (_super) {
    __extends(GoogleMapsComponent, _super);
    function GoogleMapsComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            googleMap: ''
        };
        _this.alertUser = _this.alertUser.bind(_this);
        _this.loadMap = _this.loadMap.bind(_this);
        _this.addMarker = _this.addMarker.bind(_this);
        _this.addSkiResortMarkers = _this.addSkiResortMarkers.bind(_this);
        _this.getSkiResorts = _this.getSkiResorts.bind(_this);
        _this.createMarker = _this.createMarker.bind(_this);
        _this.createInfoWindow = _this.createInfoWindow.bind(_this);
        return _this;
    }
    GoogleMapsComponent.prototype.alertUser = function () {
        alert('hello');
    };
    GoogleMapsComponent.prototype.createMarker = function (lat, lng) {
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            icon: {
                size: new google.maps.Size(70, 45.50),
                scaledSize: new google.maps.Size(70, 45.50),
                url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png"
            },
            map: window.GoogleMap,
            title: "Hello World"
        });
        return marker;
    };
    GoogleMapsComponent.prototype.addSkiResortMarkers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getSkiResorts().then(function (data) {
                            for (var i = 0; i < data.length; i++) {
                                _this.addMarker(data[i]);
                            }
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GoogleMapsComponent.prototype.getSkiResorts = function () {
        return $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/SkiResorts/GetSkiResorts",
            type: "GET",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()
            },
            success: function (response) {
                return response.responseText;
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
    GoogleMapsComponent.prototype.createInfoWindow = function (skiResort) {
        var html = '<div class="info-window"> ' +
            '    <div class="info-window-container"> ' +
            '        <div class="report-details-container"> ' +
            '            <div class="resort-name-container"> ' +
            '                <p id="ResortName">' + skiResort["name"] + '</p> ' +
            '            </div> ' +
            '            <div class="resort-rating-container"> ' +
            '                <div id="ResortRatingNumber"> ' +
            '                    4.3 ' +
            '                </div> ' +
            '                <div class="resort-rating-stars"> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star-half-o" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                </div> ' +
            '                <div id="ResortTotalReviews"> ' +
            '                    377 ' +
            '                </div> ' +
            '            </div> ' +
            '            <div class="resort-trails-container"> ' +
            '                <div class="total-trails-container"> ' +
            '                    <p>Trails</p> ' +
            '                    <p id="ResortTotalTrails">750</p> ' +
            '                </div> ' +
            '                <div class="user-trails"> ' +
            '                    <p>User Trails</p> ' +
            '                    <p id="UserTrails">500</p> ' +
            '                </div> ' +
            '                <div class="resort-trails"> ' +
            '                    <p>Resort Trails</p> ' +
            '                    <p id="ResortTrails">500</p> ' +
            '                </div> ' +
            '            </div> ' +
            '            <div class="resort-explore-container"> ' +
            '                <a href="/SkiResorts/Explore?skiResortId=' + skiResort["skiResortsId"] + '">Explore</a> ' +
            '            </div> ' +
            '        </div> ' +
            '        <div class="resort-image"> ' +
            '            <img src="' + skiResort["logo"] + '"> ' +
            '        </div> ' +
            '    </div> ' +
            '</div> ';
        var infowindow = new google.maps.InfoWindow({
            content: html
        });
        return infowindow;
    };
    GoogleMapsComponent.prototype.addMarker = function (skiResort) {
        var marker = new google.maps.Marker({
            position: { lat: skiResort["latitude"], lng: skiResort["longitude"] },
            icon: {
                size: new google.maps.Size(70, 45.50),
                scaledSize: new google.maps.Size(70, 45.50),
                url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png"
            },
            map: window.GoogleMap
        });
        var infoWindow = this.createInfoWindow(skiResort);
        marker.addListener('click', function () {
            infoWindow.open(window.GoogleMap, marker);
        });
    };
    GoogleMapsComponent.prototype.loadMap = function () {
        var styledMapType = new google.maps.StyledMapType([], { name: 'Styled Map' });
        window.GoogleMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 40.660061, lng: -111.5876328 },
        });
        window.GoogleMap.mapTypes.set('styled_map', styledMapType);
        window.GoogleMap.setMapTypeId('styled_map');
    };
    GoogleMapsComponent.prototype.componentDidMount = function () {
        this.loadMap();
        this.addSkiResortMarkers();
    };
    GoogleMapsComponent.prototype.render = function () {
        return (React.createElement("div", { id: "GoogleMapsContainer", className: "row" },
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n                    #GoogleMapsContainer {\n                        width: 90%;\n                        margin-left: 5%;\n                        margin-top: 45px;\n                        border-radius: 2px;\n                        -webkit-box-shadow: 1px 1px 6px 0 rgba(0,0,0,0.75);\n                        -moz-box-shadow: 1px 1px 6px 0 rgba(0,0,0,0.75);\n                        box-shadow: 1px 1px 6px 0 rgba(0,0,0,0.75);\n                        margin-bottom: 20px;\n                    }\n                    \n                        #GoogleMapsContainer .column-left {\n                            background-color: white;\n                            z-index: 1;\n                            padding: 5px 25px 5px 25px;\n                        }\n                    \n                    @media (max-width: 768px) {\n                        #GoogleMapsContainer .column-left {\n                            -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.75);\n                            -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.75);\n                            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.75);\n                        }\n                    }\n                    \n                    #GoogleMapsContainer .column-left b {\n                        color: #38BBED;\n                    }\n                    \n                    #GoogleMapsContainer .column-left .title {\n                        margin-top: 15px;\n                        font-size: 21pt;\n                        line-height: 38px;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                        text-align: center;\n                    }\n                    \n                    #GoogleMapsContainer .column-left .border-separator {\n                        height: 3px;\n                        width: 100%;\n                        background-color: rgb(234, 233, 235);\n                        background-color: #38bbed;\n                        margin-bottom: 15px;\n                        margin-top: 15px;\n                    }\n                    \n                    #GoogleMapsContainer .column-left .description {\n                        font-size: 15pt;\n                    }\n                    \n                    #GoogleMapsContainer p {\n                        margin-bottom: 0;\n                        font-weight: 100;\n                    }\n                    \n                    #map {\n                        width: 100%;\n                        height: 600px;\n                    }\n                        "
                } }),
            React.createElement("section", { className: "column column-left col-sm-12 col-md-3" },
                React.createElement("div", { className: "title" },
                    React.createElement("p", null,
                        "Find ",
                        React.createElement("b", null, "your"),
                        " perfect resort")),
                React.createElement("div", { className: "border-separator" }),
                React.createElement("div", { className: "description" },
                    React.createElement("p", null,
                        React.createElement("b", null, "Explore"),
                        " some of the world's leading ski resorts, ",
                        React.createElement("b", null, "discover"),
                        " hidden stashes of powder, ",
                        React.createElement("b", null, "relax"),
                        " at the comfiest on-mountain dining, and much more!  "))),
            React.createElement("section", { className: "col-sm-12 col-md-9", id: "map" })));
    };
    return GoogleMapsComponent;
}(React.Component));
exports.GoogleMapsComponent = GoogleMapsComponent;
;


/***/ }),

/***/ 351:
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
var TrendingItemComponent_1 = __webpack_require__(352);
var TrendingItemContainerComponent = /** @class */ (function (_super) {
    __extends(TrendingItemContainerComponent, _super);
    function TrendingItemContainerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendingItemContainerComponent.prototype.render = function () {
        return (React.createElement("div", { className: "trending-item-container-component" },
            React.createElement("div", { className: "row" },
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null),
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null),
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null),
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null),
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null),
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null),
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null),
                React.createElement(TrendingItemComponent_1.TrendingItemComponent, null))));
    };
    return TrendingItemContainerComponent;
}(React.Component));
exports.TrendingItemContainerComponent = TrendingItemContainerComponent;


/***/ }),

/***/ 352:
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
var TrendingItemComponent = /** @class */ (function (_super) {
    __extends(TrendingItemComponent, _super);
    function TrendingItemComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendingItemComponent.prototype.render = function () {
        return (React.createElement("div", { className: "trending-item-container col-sm-6 col-md-4 col-lg-3" },
            React.createElement("div", { className: "trending-item" },
                React.createElement("div", { className: "top" },
                    React.createElement("div", { className: "trending-item-image-container" },
                        React.createElement("div", { className: "trending-image-ski-resort-logo-container" },
                            React.createElement("img", { src: "data:image/png;base64,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" })),
                        React.createElement("div", { className: "trending-image-item-image-container" },
                            React.createElement("img", { src: "https://storagewms.blob.core.windows.net/profilepictures/Selfie.jpg" })))),
                React.createElement("div", { className: "bottom" },
                    React.createElement("div", { className: "trending-product-description-container" },
                        React.createElement("div", { className: "trending-product-description" },
                            React.createElement("div", { className: "trending-product-ski-resort" },
                                React.createElement("p", null, "The Canyons")),
                            React.createElement("div", { className: "trending-product-item-name" },
                                React.createElement("p", null, "9990 Ski Lift")))),
                    React.createElement("div", { className: "item-details-container" },
                        React.createElement("div", { className: "learn-more-container" },
                            React.createElement("p", null, "Discover")),
                        React.createElement("div", { className: "viewed-like-container" },
                            React.createElement("div", { className: "viewed" },
                                React.createElement("i", { className: "material-icons" }, "remove_red_eye"),
                                React.createElement("p", null, "123")),
                            React.createElement("div", { className: "liked" },
                                React.createElement("i", { className: "material-icons" }, "thumb_up"),
                                React.createElement("p", null, "18"))))))));
    };
    return TrendingItemComponent;
}(React.Component));
exports.TrendingItemComponent = TrendingItemComponent;


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

},[216]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9FbnRyeS9Ib21lRW50cnkudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9IT0NzL0hPQ0hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2Fyb3VzZWxDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0dvb2dsZU1hcHNDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVHJlbmRpbmdJdGVtQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9SZWR1Y2Vycy9Vc2VyUmVkdWNlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBYSx3QkFBZ0IsR0FBRyxrQkFBa0I7QUFHckMsZ0JBQVEsR0FBRyxVQUFVOzs7Ozs7Ozs7OztBQ0hsQywrQkFBMkI7QUFFM0IscURBQXFEO0FBQ3JELGlIQUFpSDtBQUNqSCxrQkFBa0I7QUFDbEIsR0FBRztBQUNILDZCQUE0QyxJQUFJO0lBQzVDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMscUNBQXFDLENBQUMs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Q2RmLHFEQUErRTtBQUUvRSxxQkFBNEIsS0FBNEIsRUFBRSxNQUF5QjtJQUMvRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7SUFDZCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDakIsS0FBSyx1Q0FBZ0IsQ0FBQyxDQUFDO1lBQ25CLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDM0Msb0JBQ08sS0FBSyxJQUNSLFlBQVksRUFBRSxZQUFZLElBQzdCO1NBQ0o7UUFDRCxLQUFLLCtCQUFRLENBQUMsQ0FBQztZQUNYLG9CQUNPLEtBQUssSUFDUixZQUFZLEVBQUUsRUFBRSxFQUNoQixtQkFBbUIsRUFBRSxFQUFFLElBQzFCO1NBQ0o7S0FFSjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFwQkQsa0NBb0JDIiwiZmlsZSI6IkhvbWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9DVVJSRU5UX1VTRVIgPSAnU0VUX0NVUlJFTlRfVVNFUidcclxuZXhwb3J0IHR5cGUgU0VUX0NVUlJFTlRfVVNFUiA9IHR5cGVvZiBTRVRfQ1VSUkVOVF9VU0VSXHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9PVVQgPSAnU0lHTl9PVVQnXHJcbmV4cG9ydCB0eXBlIFNJR05fT1VUID0gdHlwZW9mIFNJR05fT1VUXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cy50c3giLCJpbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuXHJcbi8vZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkQW50aUZvcmdlcnlUb2tlbihkYXRhKSB7XHJcbi8vICAgIGRhdGEuX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4gPSAkKCcjX19BamF4QW50aUZvcmdlcnlGb3JtIGlucHV0W25hbWU9X19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW5dJykudmFsKCk7XHJcbi8vICAgIHJldHVybiBkYXRhO1xyXG4vL31cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0QW50aUZvcmdlcnlUb2tlbihkYXRhKSB7XHJcbiAgICBkYXRhLl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuID0gJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhKCkge1xyXG4gICAgcmV0dXJuICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKTtcclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbi50cyIsIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuaW1wb3J0IHsgSE9DSG9tZSB9IGZyb20gJy4uL0hPQ3MvSE9DSG9tZSdcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxIT0NIb21lLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTW91bnRQb2ludCcpXHJcbilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VudHJ5L0hvbWVFbnRyeS50c3giLCJpbXBvcnQgeyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IH0gIGZyb20gJy4uL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudCc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbnMgZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgRGlzcGF0Y2ggfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHsgZW1haWxBZGRyZXNzLCB1c2VyUHJvZmlsZUltYWdlVVJMIH06IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBlbWFpbEFkZHJlc3MsXHJcbiAgICAgICAgdXNlclByb2ZpbGVJbWFnZVVSTCxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaDogRGlzcGF0Y2g8QWN0aW9ucy5DdXJyZW50VXNlckFjdGlvbj4gKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEN1cnJlbnRVc2VyTmV3OiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLmdldEN1cnJlbnRVc2VyTmV3KCkpLFxyXG4gICAgICAgIHNpZ25PdXQ6ICgpID0+IGRpc3BhdGNoKEFjdGlvbnMuc2lnbk91dCgpKVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoTmF2aWdhdGlvbkJhckNvbXBvbmVudCBhcyBhbnkgYXMgUmVhY3QuU0ZDKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXIudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgR2V0QW50aUZvcmdlcnlUb2tlbiBmcm9tICcuLi9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4nXHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBlbWFpbEFkZHJlc3M6IHN0cmluZyxcclxuICAgIHVzZXJQcm9maWxlSW1hZ2VVUkw6IHN0cmluZyxcclxuICAgIGdldEN1cnJlbnRVc2VyTmV3OiAoKSA9PiB2b2lkLFxyXG4gICAgc2lnbk91dDogKCkgPT4gdm9pZCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25CYXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIG9iamVjdD4ge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLmdldEN1cnJlbnRVc2VyRiA9IHRoaXMuZ2V0Q3VycmVudFVzZXJGLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hdXRob3JpemVVc2VyID0gdGhpcy5hdXRob3JpemVVc2VyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRDdXJyZW50VXNlckYoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0dldEN1cnJlbnRVc2VyXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBHZXRBbnRpRm9yZ2VyeVRva2VuKHt9KSxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhdXRob3JpemVVc2VyKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9BdXRob3JpemVDdXJyZW50VXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7fSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5nZXRDdXJyZW50VXNlck5ldygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgZW1haWxBZGRyZXNzLCB1c2VyUHJvZmlsZUltYWdlVVJMLCBnZXRDdXJyZW50VXNlck5ldywgc2lnbk91dCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zaWduLWluLXVwLWNvbnRhaW5lciAuc2lnbi1pbi1jb250YWluZXIgYTpudGgtY2hpbGQoMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEyLjVwdDsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5uYXZiYXItdGV4dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwMkIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZTpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLmZhLXNpZ24tb3V0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAjVXNlclByb2ZpbGVQaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuc2lnbi1pbi11cC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuc2lnbi1pbi11cC1jb250YWluZXIgLnNlcGFyYXRvcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODQsIDE4NCwgMTg0LCAwLjkxKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbCBuYXYubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgyNTUsMjU1LDI1NSwgMSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm5hdmJhcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPkRpc2NvdmVyIE1vdW50YWluIFJlc29ydHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJUZXh0XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclRleHRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmVtYWlsQWRkcmVzcyAhPSBcIlwiICYmIHRoaXMucHJvcHMuZW1haWxBZGRyZXNzICE9IG51bGwgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBpZD1cIlVzZXJQcm9maWxlUGljdHVyZVwiIHNyYz1cImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL0lNR18yMDE3MTIzMF8xMDI4MDkuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlVzZXJGaXJzdE5hbWVcIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPnt0aGlzLnByb3BzLmVtYWlsQWRkcmVzc308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXNpZ24tb3V0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgb25DbGljaz17c2lnbk91dH0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLWluLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9Mb2dpblwiPlNpZ24gSW48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VwYXJhdG9yXCI+IDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWduLXVwLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvVXNlci9TaWduVXBcIj5TaWduIFVwPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5zaWduT3V0QXN5bmN9PlNpZ24gT3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5nZXRDdXJyZW50VXNlckZ9PkdldCBDdXJyZW50IFVzZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmF1dGhvcml6ZVVzZXJ9PkF1dGhvcml6ZSBVc2VyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIE5hdmlnYXRpb25CYXJDb250YWluZXIgIGZyb20gJy4uL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lcidcclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL0Nhcm91c2VsQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9Hb29nbGVNYXBzQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBUcmVuZGluZ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbXBvbmVudCdcclxuaW1wb3J0IHsgVHJlbmRpbmdJdGVtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUnXHJcblxyXG5leHBvcnQgY2xhc3MgSE9DSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Q3VycmVudFVzZXJTdG9yZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbENvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVNYXBzQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Hb29nbGVNYXBzQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0hPQ3MvSE9DSG9tZS50c3giLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0IHsgR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhIH0gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU0VUX0NVUlJFTlRfVVNFUiB9IGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDdXJyZW50VXNlciB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUlxyXG4gICAgcGF5bG9hZDogc3RyaW5nLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbk91dCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0lHTl9PVVRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ3VycmVudFVzZXJBY3Rpb24gPSBTZXRDdXJyZW50VXNlciB8IFNpZ25PdXRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlck5ldygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0dldEN1cnJlbnRVc2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCI6ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKS8vR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSLCBwYXlsb2FkOiByZXNwb25zZS5yZXNwb25zZVRleHQgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVIsIHBheWxvYWQ6IFwie31cIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgICB2YXIgdGVzdCA9IFwiXCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9TaWduT3V0QXN5bmNcIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgLy9kYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAvL2NvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIlJlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiOiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdEFnYWluID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TSUdOX09VVCB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlcXVlc3QsIHN0YXR1cywgZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcImVycm9yXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDgwMDAsXHJcbiAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzd2lwZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJDYXJvdXNlbENvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcm91c2VsLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1MDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC53ZWxjb21lLWltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6MCAwIDhweCAwIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6MCAwIDhweCAwIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OjAgMCA4cHggMCBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stbGlzdHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbGxhcHNlID4gZGl2IGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1kb3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTM1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXJvdXNlbC1jb250YWluZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDJCOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLndlbGNvbWUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAud2VsY29tZS1tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTcsIDU3LCA1NywgLjYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAud2VsY29tZS1tZXNzYWdlIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC5zbGljay1kb3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1LCAzMiwgNDMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLnNsaWNrLWRvdHMgbGkgYnV0dG9uOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC5zbGljay1kb3RzIC5zbGljay1hY3RpdmUgYnV0dG9uOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEuMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stcHJldjpiZWZvcmUsIC5zbGljay1uZXh0OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLXByZXYge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1uZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stc2xpZGV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLXNsaWRlIGRpdntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stc2xpZGUgLndlbGNvbWUtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvQnJpZ2h0b24uanBnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvZ2gva2Vud2hlZWxlci9zbGlja0AxLjguMS9zbGljay9zbGljay5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvL2Nkbi5qc2RlbGl2ci5uZXQvZ2gva2Vud2hlZWxlci9zbGlja0AxLjguMS9zbGljay9zbGljay10aGVtZS5jc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250YWluZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGVsbG8gV29ybGQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGVsbG8gV29ybGQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGVsbG8gV29ybGQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGVsbG8gV29ybGQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGVsbG8gV29ybGQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4gSGVsbG8gV29ybGQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9DYXJvdXNlbENvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcbmltcG9ydCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhIH0gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJztcclxuXHJcbmRlY2xhcmUgdmFyIGdvb2dsZTogYW55XHJcbmRlY2xhcmUgdmFyIE1hcmtlckNsdXN0ZXJlcjogYW55XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgICBpbnRlcmZhY2UgV2luZG93IHsgR29vZ2xlTWFwOiBhbnk7IH1cclxufVxyXG53aW5kb3cuR29vZ2xlTWFwID0gd2luZG93Lkdvb2dsZU1hcCB8fCB7fTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PGFueSwgYW55PiB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGdvb2dsZU1hcDogJydcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5hbGVydFVzZXIgPSB0aGlzLmFsZXJ0VXNlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMubG9hZE1hcCA9IHRoaXMubG9hZE1hcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkTWFya2VyID0gdGhpcy5hZGRNYXJrZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZFNraVJlc29ydE1hcmtlcnMgPSB0aGlzLmFkZFNraVJlc29ydE1hcmtlcnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmdldFNraVJlc29ydHMgPSB0aGlzLmdldFNraVJlc29ydHMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZU1hcmtlciA9IHRoaXMuY3JlYXRlTWFya2VyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVJbmZvV2luZG93ID0gdGhpcy5jcmVhdGVJbmZvV2luZG93LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBhbGVydFVzZXIoKSB7XHJcbiAgICAgICAgYWxlcnQoJ2hlbGxvJyk7XHJcbiAgICB9XHJcbiAgICBjcmVhdGVNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IGxhdCwgbG5nOiBsbmcgfSxcclxuICAgICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzAsIDQ1LjUwKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcwLCA0NS41MCksXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvTW91bnRhaW5JY29uLnBuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcDogd2luZG93Lkdvb2dsZU1hcCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiSGVsbG8gV29ybGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIG1hcmtlcjtcclxuICAgIH1cclxuICAgIGFzeW5jIGFkZFNraVJlc29ydE1hcmtlcnMoKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5nZXRTa2lSZXNvcnRzKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTWFya2VyKGRhdGFbaV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldFNraVJlc29ydHMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvU2tpUmVzb3J0cy9HZXRTa2lSZXNvcnRzXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIlJlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiOiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKClcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY3JlYXRlSW5mb1dpbmRvdyhza2lSZXNvcnQ6IE9iamVjdCkge1xyXG4gICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJpbmZvLXdpbmRvd1wiPiAnICtcclxuICAgICAgICAgICAgJyAgICA8ZGl2IGNsYXNzPVwiaW5mby13aW5kb3ctY29udGFpbmVyXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicmVwb3J0LWRldGFpbHMtY29udGFpbmVyXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc29ydC1uYW1lLWNvbnRhaW5lclwiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8cCBpZD1cIlJlc29ydE5hbWVcIj4nICsgc2tpUmVzb3J0W1wibmFtZVwiXSArICc8L3A+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc29ydC1yYXRpbmctY29udGFpbmVyXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJSZXNvcnRSYXRpbmdOdW1iZXJcIj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDQuMyAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc29ydC1yYXRpbmctc3RhcnNcIj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyLWhhbGYtb1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBpZD1cIlJlc29ydFRvdGFsUmV2aWV3c1wiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgMzc3ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNvcnQtdHJhaWxzLWNvbnRhaW5lclwiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtdHJhaWxzLWNvbnRhaW5lclwiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHA+VHJhaWxzPC9wPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJSZXNvcnRUb3RhbFRyYWlsc1wiPjc1MDwvcD4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLXRyYWlsc1wiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHA+VXNlciBUcmFpbHM8L3A+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlVzZXJUcmFpbHNcIj41MDA8L3A+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzb3J0LXRyYWlsc1wiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHA+UmVzb3J0IFRyYWlsczwvcD4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiUmVzb3J0VHJhaWxzXCI+NTAwPC9wPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzb3J0LWV4cGxvcmUtY29udGFpbmVyXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvU2tpUmVzb3J0cy9FeHBsb3JlP3NraVJlc29ydElkPScgKyBza2lSZXNvcnRbXCJza2lSZXNvcnRzSWRcIl0gKyAnXCI+RXhwbG9yZTwvYT4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgPGRpdiBjbGFzcz1cInJlc29ydC1pbWFnZVwiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxpbWcgc3JjPVwiJyArIHNraVJlc29ydFtcImxvZ29cIl0gKyAgJ1wiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJzwvZGl2PiAnO1xyXG5cclxuICAgICAgICB2YXIgaW5mb3dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcclxuICAgICAgICAgICAgY29udGVudDogaHRtbFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBpbmZvd2luZG93O1xyXG4gICAgfVxyXG4gICAgYWRkTWFya2VyKHNraVJlc29ydDogT2JqZWN0KSB7ICAgICAgICBcclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogc2tpUmVzb3J0W1wibGF0aXR1ZGVcIl0sIGxuZzogc2tpUmVzb3J0W1wibG9uZ2l0dWRlXCJdIH0sXHJcbiAgICAgICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcwLCA0NS41MCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MCwgNDUuNTApLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL01vdW50YWluSWNvbi5wbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXA6IHdpbmRvdy5Hb29nbGVNYXBcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgaW5mb1dpbmRvdyA9IHRoaXMuY3JlYXRlSW5mb1dpbmRvdyhza2lSZXNvcnQpO1xyXG4gICAgICAgIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluZm9XaW5kb3cub3Blbih3aW5kb3cuR29vZ2xlTWFwLCBtYXJrZXIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbG9hZE1hcCgpIHtcclxuXHJcbiAgICAgICAgdmFyIHN0eWxlZE1hcFR5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHsgbmFtZTogJ1N0eWxlZCBNYXAnIH0pO1xyXG5cclxuXHJcbiAgICAgICAgd2luZG93Lkdvb2dsZU1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgIHpvb206IDcsXHJcbiAgICAgICAgICAgIGNlbnRlcjogeyBsYXQ6IDQwLjY2MDA2MSwgbG5nOiAtMTExLjU4NzYzMjggfSwgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHdpbmRvdy5Hb29nbGVNYXAubWFwVHlwZXMuc2V0KCdzdHlsZWRfbWFwJywgc3R5bGVkTWFwVHlwZSk7XHJcbiAgICAgICAgd2luZG93Lkdvb2dsZU1hcC5zZXRNYXBUeXBlSWQoJ3N0eWxlZF9tYXAnKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubG9hZE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYWRkU2tpUmVzb3J0TWFya2VycygpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJHb29nbGVNYXBzQ29udGFpbmVyXCIgY2xhc3NOYW1lPVwicm93XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgI0dvb2dsZU1hcHNDb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAxcHggMXB4IDZweCAwIHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCA2cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDZweCAwIHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjR29vZ2xlTWFwc0NvbnRhaW5lciAuY29sdW1uLWxlZnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDI1cHggNXB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgI0dvb2dsZU1hcHNDb250YWluZXIgLmNvbHVtbi1sZWZ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgI0dvb2dsZU1hcHNDb250YWluZXIgLmNvbHVtbi1sZWZ0IGIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzM4QkJFRDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgI0dvb2dsZU1hcHNDb250YWluZXIgLmNvbHVtbi1sZWZ0IC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICNHb29nbGVNYXBzQ29udGFpbmVyIC5jb2x1bW4tbGVmdCAuYm9yZGVyLXNlcGFyYXRvciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCwgMjMzLCAyMzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzhiYmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjR29vZ2xlTWFwc0NvbnRhaW5lciAuY29sdW1uLWxlZnQgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAjR29vZ2xlTWFwc0NvbnRhaW5lciBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgI21hcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2x1bW4gY29sdW1uLWxlZnQgY29sLXNtLTEyIGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5GaW5kIDxiPnlvdXI8L2I+IHBlcmZlY3QgcmVzb3J0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLXNlcGFyYXRvclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxiPkV4cGxvcmU8L2I+IHNvbWUgb2YgdGhlIHdvcmxkJ3MgbGVhZGluZyBza2kgcmVzb3J0cywgPGI+ZGlzY292ZXI8L2I+IGhpZGRlbiBzdGFzaGVzIG9mIHBvd2RlciwgPGI+cmVsYXg8L2I+IGF0IHRoZSBjb21maWVzdCBvbi1tb3VudGFpbiBkaW5pbmcsIGFuZCBtdWNoIG1vcmUhICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTlcIiBpZD1cIm1hcFwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0dvb2dsZU1hcHNDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUcmVuZGluZ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbXBvbmVudCdcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaXRlbS1jb250YWluZXItY29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvVHJlbmRpbmdJdGVtQ29udGFpbmVyQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZW5kaW5nSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWNvbnRhaW5lciBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pbWFnZS1za2ktcmVzb3J0LWxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVVBQUFBQ1NDQU1BQUFBRHorTUlBQUFBWTFCTVZFWC8vLytYR3g1QlFVSnhjWEdnb0tEUHo5Q2VLU3o0OGZIcjFOV3JSa2pZcWFwTlRVN0xqWTZ4VkZiejgvTytjWE9rT0RyeTR1UGx4c2ZuNStlSmlZbFpXVnEzdDdqYjI5dmV0N2pSbTV5NFkyVmxaV2JGZjRIRHc4U1VsSlY5Zlgyc3JLeWJ6VGhVQUFBTTJVbEVRVlI0bk8xYzUyTGpyQksxM0d2Y0haYzQ4ZnMvNVkxb2dpa3d4RjRiMzAvbjE2NERDSTZtZytoMDNoYnJ6WFM2V1dmMU9KMG5sY1ppT1IzOXE0bTlCNmFHaXNsVTJtT3pxRUlzTi85eWdtVmp1bXA0V0IwbFBSQjlpc0wvcUJTT0FSbm5KQStqSlVIZkw0Yi9TU0djWXg3RzhSN0hJYzNmTHlRV1lEeWQvK0wvaGV2MUpKdUhMNWErWDZRTXdIaHAyUjh1czF4V29lQ0VpV2R3UkRMZVNHK1VGV0E2djk3ZWFHTDFUVEU0NXRWWFk4RS9iWDJHalNjSlkxRTRPRitnSklsZTJqUkJYNFQ2enBUZ1BtVnVpMFpjR1llVWVwM1MvRlVyNW1uMDIzcGpCaFBHak5MRmlNUjZJRVdRZGxZMTMrOXFCMVA4VmRVY2RwSHhWMDJJcDBWTVo4Um9sb3cwZjFVRnRFdklYMVhoRUM4U09WYlY2VWxMZmlnay9BRlJFdk5YTGVIVDRxNG5Idm1VQ1lxLzRYTDZ1NUxSMUF2VmZObWdJNTV6M2FjejJzejlBYUgvU2JsdVJIajV3S1dBUldQNjEwN1dQQ1lvRW9aemo2bjF2RkhUMEkya1E1KzNTK3VRTmk3Q0pXeXNQRG5ab0VpWUEwRWJPU0U5K3o4TFFzZDM4eU5RRzRjNDhMRDVyaUdXY0tJTHduSzVaaDYxREgrcnhjSlRnL2NTUWJna01pTTFmbFA3RVlJL0ZPTUVEWnVTQXFuNnk2Tis1TkZ5K0ZZaUNOZ1lNdldUc1M2eTFuNEV1NXdWbHo5czlOK2Q2aDhKMlR0NUwrdzBmRHNSSEsyQzVVellHRUxUOXV0SE1IOFRQbnZReVo1TjU3RG9Eb0hvbWhadkpJSmhSU1JXZmRiRWZYVlFEU1VhZG1pdDFLOEY4NGVmTjY2OERtK0F1WndLd3lEaWp6Wi9GbXRGbW5KTFFOaEpiMlZsOWwxaXdVMEdmNVlNZ0ZUVmZxN2xsakNkak9YVU12c2VOWVZRSnRKSktPRiswN3NlOVROcW13WkZsN09jYStGa1NrQ3dwaTlCQjVUQUNYYU5WT1NDdDA1NHo2TWV3cFFSeTBJUWxFbXNEcEpBMGI1N0xZSnJHQUJHUFBkSU5YaURTQ1l3YVJMK1JwQS9tWjdWM0tGc0oyYmpsdElKdlJoK0NVSEVIL1FDd2pVaTNsT1ZleFhLREdXRHZ4RCtoa1pFb1J3UWYrZDBIdzFjT2t6c2ZLZ25pYzZVdkJDK0FvczJJaUFORXRJMVVBS1hNcDNUZDlCaHp3T0x0c0lnZnhtN1A5QUFKdjM5NkExMDJKY0tpYkxBS0NSai94RTZZSUZvblFWNi9scjRoajJlaTJtZ01wUjhkVEQya2FqK1ZEcXZsOEVUS0lrdlFQeUpEMTZpREZpMFo2U3lrWkpMTXVObVFSSmJodmpMRUE2NDN5SVRYZVdINVE5NU9oWlpDeG9ERG5JY0pQUTlRdEZWR2xKdU11SjVFRUV5Z1JLNEROMzZnd05wK2hWYlVQRE1rc0FBSXY3a0FTQ1NYVEgxWStIa1hvTW1MaE1ZUU1SZnhza0JXRURNaUIzVm14SzNmaTY4WmFXdERPWlBIc0RBNUMvbjdKcFNFbm56cDZLeDYra1NJQ3JEWndRd3FJU2FZOU9VbXlzemxGNDN4aXpaRnUvQUdSSWt4Z3lkUHM4bXNNeDZRaU9BeVJlTStiTmVWTEJ0aHZmUWM2ck15azRYbVlzMEFwaWNIczlmWjVMc0RFc3c5VmdaZ1ozYml5b09UZ0NUQ2h6YlFWK2twQWs2bitING5CVkFLZ0pMVE9hYUtrSktIUEF4Wmk4QVBDZnNFM0xlUjZYU2NoRXNsa0JubVZMcWdiY3cvUUI2SG85eVVlZVR0aDN5eUU0NWtSSzM1cXhZUlhkMU91UXhGdDl2VEtPbkwramRrMG1WNFloMXRpNXQvVHc0RjVJSTV3aitBcCs5aWZrZ3hKOFd2Qk44Q3pHc0NpWFE3aVFsbENQRlgxMTBaMHZ1K0F5SGx2YXNJbDlWS0lHMmpoVzM1dmdyTEpTRnJWZ2hIcU16UkxhdklsWVcyMjBLSlhCazFoU1hBeHdDNHl6MnpIa0VMTHp1WlowRTc4NWdYaWlCUjdnbUNzUVhjRGhuT1RHajRHOW9Ha0VkTVMrRHdLUlFBcjhFQWtoOFFVTW9hMTJ3STBRUWsrK0hTN3E2SUhBazF0Y2xHejRiazZRQWp0QUJTc2JZMVpZTzJqT2ljMUNDTmdyQW55TzJzTzlCc0tUbklpbUExRGRMdExOUXdoeHE0d2JWdnFDUW1nWkpMYllEQ1piMFZHeGlqTlNndnFMa25DMWtZa1JjbmdDci83WVd6bjBMWU9DOG1IUmh6NEpXSWY3TUJQRVJPYjlVSlNYdVpwUFJuT0FlN1o0MG1YZzBtbkdTTEY3Wms2QUZnTTJDQ1JHS0tKdVJwdm9ybWZWMFNSMmZKam8zMnpHUit4SGNQSXJMaGZYMEdSZENmcklaTVZacjNEemQyVDlTd2wzUzBZU2h4VlZqNWhHOTJHVGZBVUg0NjNSbi82VFdFSDZmcU9CRlFzV2RjSXNVMmFqcmN4TE9ja04wU1hjT1BQVndEaU9hdFg4VXBMaVNQa3ZnbVBwaVBibUJqcU1XQWZtUTlyUHZwY1poRkYvY3BwTHl3a1QrUUg1K25qNkFFUG4wTnlLOFNOYUg1MU45VStGbStnWGZTSEZmMitpVEZsQnJpUGkza2wxZVIxMTZseVJmZEQrRFFuRk8yR1FpWVJnRGI3dXovRW1HNDZ6Z0lrcCs4cm9vaXdJMzVUUlpYbTV4WklRbzV4UmE5c0tKcjRaSkZIZ3d3Umk3eFdsVDM1SjZPak95SUw0NWtZd2QwNlpmY0c5Q1ZhUUc0Nk9TSkRJdVVjTWZjRktYSnlDSUdNdzRoZk04eENJUGkvU2RueDdnalFIQ2JUY0JneVVLWU95R1FJZk1jNkdqNElzeDhkbEI2dks3RU1VRmdRcWoxTFRaK3lONDJKc2k4aTd4Ukh0UEFNV2xjUVlKRWN4U1g0ZmpYNjZScGVxSERUTE9FVDhYK01Ta0I0RURmU1RvQ0w1cy9xSWxnTCtKM3oyWU1oUVdHRUkzNEpSWWRtZjVvekVsSXNuU0wwUW1iLzZETitBOEQrdFR3T0VLVmJqS0EzRlpPVm5hZkJyV3gvbGlNYXdtaStXcHdQU05BTERlcTlmUzk0NFl6YjJQbFlwTW1jckhlTDVjTE03ell5dDhMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMZjZFdm8vQjRDUGQ0MmNRKytzMkdQQXcrRXcxRFVlNzZuNmlxVnNNK2orOUdqOTlkbVo2TXRTUE5IQXpQTFJwMlFXNDlMZUo2WFo3OFQ4RHpINnUwYWJCWksrNkQxeHE3SG03bWYrMEhjMmgraHVjTjV5cEI3OVpULzJ5aDBNZXpKaEU3KytvR082NjNSakZpTUQ2NFRTRm1NQlBUY1l1OXZ4d2lCNTZXSSthM1QwRWJydG9ualgyNnRjQk9jbytwbmVKQlZJRS9yNFR2cWszc1krTCt1VVNHVDdFTi9Xc0dTRy85eEJZaTB3OWJDaFdXZ0IzekNnem5zRisvZmVJaU5JRWtwd2pBbitvbWZJd2ZHTmdCdThpY0R1REUvMTl0djV0YTBhWjlUU2NPZUdGWUliR0NqRUlCbXlXU0dneEpORElVOVJIK1d0b0J1L1Y1dnk3K1Q5aWtDU3c1NkI3N3BzZndvWjkvR0w3VGl6Q29iZmYzQlFNdE9RaWk5cGdBT1o2TmNzaXVnQUM5ZERkR3o5MkFNZmYzczMxbzI4bEFMNEVra0IySnVoUnlEVHJYMlpiWW1oanh6bUtlbkYrTVlIV2hCQmR3bW5uT2hDdDc5M1p6Zi94d3p3TTJ0ejdDT3pjOUtpTmUrbzNIZERReG9qUlZ2RFQ2a3hpTHNIZk5lay84V2wvYUs5MmtScEFFL0FnYTMxQXBOYTRrMERqY3QzTE5RTDRRUTk5aVdpU2VjRWN2eDJTd0NzajA4RzBOY3V6UkJBS2wwUjR1Ky91QmY5NEw0SFhjTldlQUJKRDkvblJQaXgvdktZUkJKcGUwV2xuT2hCck1La0E4MFlJOGIwRW12ZHJSdEJ1ZWYvQkRLM1pKaU0zeGEyV1FrN1ZDQUk3YVFJTkgvSVVEdWhVQ25jVE9QQmZzR2Jnd0EydDIyS1RaYWU5M2NlZTlpY0NqUU1objBuQzJHS3h3dDlOb1BGWmFnaWRtbGlUaEllK3NhTmRkVWVsYnJQb1hQSUl6SFVnMXN6SUNiK2Z3RzFqTXdJQkpJYmVzYVAxOUI4K2d3SEl1ZVE1RWVOQUlna2tPWk9NbXNQOUJCb3JmYkZVdWxRRERXMmlSc0tjYjYzYVhJSVJxTGtRWVF5MlYzYmEzODNMbGNJbFVrSThnRURIeTNmSUR4cmFSQ3FFT3UyczJodzRpanNVZ2F6RE5OTTI5bGxlZ3Vtd1JpSGUvajRDWGZZMkM4Y0NROXRRbmxpT2ZnVlg5eTk2eFpEQXJja1krRlRPSkRmeUVOQUdSdEc2WkloSEVHZ3M5UTFJajFib2djYkJWU2VKMWR3YUhuYThCdW01N0UxbHQ3YzM0MUh5YXR5OWJTR3ZZcEdlS29wSEVHaFVhV2IxMEI4YTRVYjA5NktYVC82QlREbUxzdmV3cVR3SzNMNkV3STZUQmw5MnlPWHkxVHZUVTdrUnNuQkhFMGo2UzlSVTdvWlZjeTZTNHRyZlRhQ2JzTThQc1ZxY2k5ZFFxbVpGOXlBV0t6VnptaG5YZEdiOHpGNGNDT3IyOHJqeE1RVGFXbFJndkRCOU85SzJiUVBLdEJ1aGFsNEVnVnlDTzJnYWFBOUg1NC84U3VTQno0TUlOQWxRMERCWTZyNzNmV1ZlSzBnL2RodzFnUk9aUldteEJONDY3dDFLS2RHeG1EenllUkNCMUxJVFExdG9rV3VvME8rQ3lLVUNCMmtFaTdGdGZnQm85aDJrK3lIWHJOYVBJN0QvWndLMWxibzB1d1o2OFZqYnd3aGpIeHRlTjczNER4Q250OFErVHd5dko1RFpBTVBhR1JKb2hJeE9Xc05wL3pUNkxJRFo1NkZrKzBBTThYSUNtZWlPVUNJUTQvWWl1aFpPMitTYXdvVEV0Q1lLT0oremJnLzkrbklDWFNrZjRrYlBwZG5tNi9KekE5TTJaWE5oZUd6TUsySlFsUlpuMEJtOW1zQXR4eCtPWkdDV1pSWkt5Uld6THl3MGJNYW9nQTJRcThsRmdXNi9tc0ErUllLV1N2aXVJWUZHMTZnbndHbWJiRjJZa0h6YXROMDdEV1VyRjQvZTFuVDRLNEZxWmRCQjBoazkrcFhmL2tIVE5uR3FzREx0R096KzNGUXBwTzg4SFZyUGl3azgwQlRzS2JuRXRKcmpZWmdWUE8yOGhLUmhFQUMvZ1JjVHFDakFlWnV1aklGMEFCTm9QRGllSGpGdEkwUEMzYzB0SFZ3UkNjcHJDZVNLVjdxc0NVSVVRckdOQzBkK2hKajJaMTVDMHVsaklTUVBJNzZXUUxaOHF2OXdJK1lTYnF3em01YlV0TTBwRlBGKzJ3ZWdjRTl0cS85VEFsVmVGamM2cWdrMStvRG8vRW44ZHRQWkgzd0Z1aW5JVW5aMDJ3aXUzM1pUb05mbkhIaGlsZVJNS0J4VVEvOHAvd094azRucHNKckw2Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaW1hZ2UtaXRlbS1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL1NlbGZpZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1kZXNjcmlwdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1za2ktcmVzb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBDYW55b25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1pdGVtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+OTk5MCBTa2kgTGlmdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFybi1tb3JlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpc2NvdmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdlZC1saWtlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVtb3ZlX3JlZF9leWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjEyMzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dGh1bWJfdXA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE4PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhckNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXInO1xyXG5pbXBvcnQgeyBVc2VyUmVkdWNlciB9IGZyb20gJy4uL1JlZHVjZXJzL1VzZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZSc7XHJcblxyXG5jb25zdCBtaWRkbGVXYXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJyZW50VXNlclN0b3JlID0gY3JlYXRlU3RvcmU8Q3VycmVudFVzZXJTdG9yZVN0YXRlPihVc2VyUmVkdWNlciwge1xyXG4gICAgZW1haWxBZGRyZXNzOiBcIlwiLFxyXG4gICAgdXNlclByb2ZpbGVJbWFnZVVSTDogXCJcIixcclxuXHJcbn0sIG1pZGRsZVdhcmUpO1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9TdG9yZXMvQ3VycmVudFVzZXJTdG9yZS50c3giLCJpbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnXHJcbmltcG9ydCB7IExPR0lOLCBUT0dHTEVfUEFTU1dPUkRfUkVWRUFMIH0gZnJvbSAnLi4vQ29uc3RhbnRzL1VzZXJMb2dpbkNvbnN0YW50cyc7XHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyQWN0aW9uIH0gZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5pbXBvcnQgeyBTRVRfQ1VSUkVOVF9VU0VSLCBTSUdOX09VVCB9IGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVXNlclJlZHVjZXIoc3RhdGU6IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSwgYWN0aW9uOiBDdXJyZW50VXNlckFjdGlvbik6IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB7XHJcbiAgICB2YXIgdGVzdCA9IFwiXCI7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBTRVRfQ1VSUkVOVF9VU0VSOiB7XHJcbiAgICAgICAgICAgIHZhciBlbWFpbEFkZHJlc3MgPSBhY3Rpb24ucGF5bG9hZFtcImVtYWlsXCJdO1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IGVtYWlsQWRkcmVzc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgU0lHTl9PVVQ6IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgdXNlclByb2ZpbGVJbWFnZVVSTDogXCJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiBzdGF0ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZWR1Y2Vycy9Vc2VyUmVkdWNlci50c3giXSwic291cmNlUm9vdCI6IiJ9