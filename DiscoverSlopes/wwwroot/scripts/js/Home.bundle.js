webpackJsonp([2],{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.SIGN_OUT = 'SIGN_OUT';


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var $ = __webpack_require__(8);
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

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(2);
var ReactDOM = __webpack_require__(27);
var HOCHome_1 = __webpack_require__(314);
ReactDOM.render(React.createElement(HOCHome_1.HOCHome, null), document.getElementById('MountPoint'));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NavigationBarComponent_1 = __webpack_require__(30);
var Actions = __webpack_require__(31);
var react_redux_1 = __webpack_require__(16);
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

/***/ 30:
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
var React = __webpack_require__(2);
var $ = __webpack_require__(8);
var GetAntiForgeryToken_1 = __webpack_require__(20);
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
                    __html: "\n                        nav p {\n                            margin-bottom: 0;\n                            color: white !important;\n                        }\n                        \n                        nav a {\n                            color: white !important;\n                        }\n                        .navbar{\n                            min-height: 40px;\n                        }\n                        nav {\n                            line-height: 0px;\n                            background-color: #05202B !important;\n                            min-height: 60px;\n                        }\n                        \n                            nav .container-user-profile {\n                                display: flex;\n                                justify-content: center;\n                                align-items: center;\n                                height: inherit;\n                                margin-left: auto;\n                                margin-right: 30px;\n                            }\n                        \n                                nav .container-user-profile .container-user-profile-name {\n                                    height: inherit;\n                                    display: flex;\n                                    align-items: center;\n                                    justify-content: center;\n                                    margin-left: 10px;\n                                }\n                        \n                                    nav .container-user-profile .container-user-profile-name .user-profile-name {\n                                        font-size: 13pt;\n                                        color: white;\n                                        font-weight: 400;\n                                    }\n\n                        \n                                        nav .container-user-profile .container-user-profile-name .user-profile-name:nth-child(2) {\n                                            margin-top: 10px;\n                                        }\n                            nav .container-user-profile-name{\n                                display: flex;\n                                align-items: center;\n                                flex-direction: row;\n                                height: 100% !important;\n                            }\n                            \n                            nav .container-user-profile-name .fa-sign-out{\n                                color: white;\n                                margin-left: 10px;\n                                display: flex;\n                                align-items: center;\n                                margin-top: 3px;\n                                cursor: pointer;\n                            }\n                            nav #UserProfilePicture {\n                                height: 50px;\n                                width: 50px;\n                                border-radius: 100%;\n                            }\n                            nav .sign-in-up-container{\n                                display: flex;\n                                align-items: center;\n                                height: 100%;\n                            }\n                            nav .sign-in-up-container .separator{\n                                width: 2px;\n                                height: 20px;\n                                margin-left: 10px;\n                                margin-right: 10px;\n                                background-color: rgba(184, 184, 184, 0.91)\n                            }\n                            html nav.navbar-light .navbar-toggler-icon {\n                                background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,255,255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\n                            }\n                            .navbar{\n                                -webkit-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                -moz-box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                box-shadow: 0px 1px 10px 1px rgba(0,0,0,0.75);\n                                z-index: 3;\n                            }\n                        "
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants = __webpack_require__(15);
var $ = __webpack_require__(8);
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

/***/ 314:
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
var React = __webpack_require__(2);
var NavigationBarContainer_1 = __webpack_require__(29);
var CarouselComponent_1 = __webpack_require__(332);
var GoogleMapsComponent_1 = __webpack_require__(348);
var TrendingItemContainerComponent_1 = __webpack_require__(349);
var react_redux_1 = __webpack_require__(16);
var CurrentUserStore_1 = __webpack_require__(35);
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

/***/ 332:
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
var React = __webpack_require__(2);
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

/***/ 348:
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
var React = __webpack_require__(2);
var $ = __webpack_require__(8);
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

/***/ 349:
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
var React = __webpack_require__(2);
var TrendingItemComponent_1 = __webpack_require__(350);
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

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = __webpack_require__(36);
var redux_1 = __webpack_require__(22);
var UserReducer_1 = __webpack_require__(37);
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.CurrentUserStore = redux_1.createStore(UserReducer_1.UserReducer, {
    emailAddress: "",
    userProfileImageURL: "",
}, middleWare);


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
var React = __webpack_require__(2);
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
var CurrentUserConstants_1 = __webpack_require__(15);
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

},[214]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9FbnRyeS9Ib21lRW50cnkudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvSE9DSG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvQ2Fyb3VzZWxDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0dvb2dsZU1hcHNDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9SZWR1Y2Vycy9Vc2VyUmVkdWNlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBYSx3QkFBZ0IsR0FBRyxrQkFBa0I7QUFHckMsZ0JBQVEsR0FBRyxVQUFVOzs7Ozs7Ozs7OztBQ0hsQywrQkFBMkI7QUFFM0IscURBQXFEO0FBQ3JELGlIQUFpSDtBQUNqSCxrQkFBa0I7QUFDbEIsR0FBRztBQUNILDZCQUE0QyxJQUFJO0lBQzVDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxDQUFDLENBQUMscUNBQXFD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QztZQUNuQixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLG9CQUNPLEtBQUssSUFDUixZQUFZLEVBQUUsWUFBWSxJQUM3QjtTQUNKO1FBQ0QsS0FBSywrQkFBUSxDQUFDLENBQUM7WUFDWCxvQkFDTyxLQUFLLElBQ1IsWUFBWSxFQUFFLEVBQUUsRUFDaEIsbUJBQW1CLEVBQUUsRUFBRSxJQUMxQjtTQUNKO0tBRUo7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBcEJELGtDQW9CQyIsImZpbGUiOiJIb21lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRVRfQ1VSUkVOVF9VU0VSID0gJ1NFVF9DVVJSRU5UX1VTRVInXHJcbmV4cG9ydCB0eXBlIFNFVF9DVVJSRU5UX1VTRVIgPSB0eXBlb2YgU0VUX0NVUlJFTlRfVVNFUlxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUID0gJ1NJR05fT1VUJ1xyXG5leHBvcnQgdHlwZSBTSUdOX09VVCA9IHR5cGVvZiBTSUdOX09VVFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMudHN4IiwiaW1wb3J0ICogYXMgJCBmcm9tICdqcXVlcnknXHJcblxyXG4vL2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZEFudGlGb3JnZXJ5VG9rZW4oZGF0YSkge1xyXG4vLyAgICBkYXRhLl9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuID0gJCgnI19fQWpheEFudGlGb3JnZXJ5Rm9ybSBpbnB1dFtuYW1lPV9fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXScpLnZhbCgpO1xyXG4vLyAgICByZXR1cm4gZGF0YTtcclxuLy99XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldEFudGlGb3JnZXJ5VG9rZW4oZGF0YSkge1xyXG4gICAgZGF0YS5fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiA9ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEFudGlGb3JnZXJ5VG9rZW5XaXRob3V0RGF0YSgpIHtcclxuICAgIHJldHVybiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCk7XHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9NaXNjL0dldEFudGlGb3JnZXJ5VG9rZW4udHMiLCIndXNlIHN0cmljdCdcclxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcclxuXHJcbmltcG9ydCB7IEhPQ0hvbWUgfSBmcm9tICcuLi9Db21wb25lbnRzL0hPQ0hvbWUnXHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8SE9DSG9tZS8+LFxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ01vdW50UG9pbnQnKVxyXG4pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9FbnRyeS9Ib21lRW50cnkudHN4IiwiaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9ICBmcm9tICcuLi9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGVtYWlsQWRkcmVzcywgdXNlclByb2ZpbGVJbWFnZVVSTCB9OiBDdXJyZW50VXNlclN0b3JlU3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW1haWxBZGRyZXNzLFxyXG4gICAgICAgIHVzZXJQcm9maWxlSW1hZ2VVUkwsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbnMuQ3VycmVudFVzZXJBY3Rpb24+ICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDdXJyZW50VXNlck5ldzogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5nZXRDdXJyZW50VXNlck5ldygpKSxcclxuICAgICAgICBzaWduT3V0OiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLnNpZ25PdXQoKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlnYXRpb25CYXJDb21wb25lbnQgYXMgYW55IGFzIFJlYWN0LlNGQyk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IEdldEFudGlGb3JnZXJ5VG9rZW4gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgZW1haWxBZGRyZXNzOiBzdHJpbmcsXHJcbiAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBzdHJpbmcsXHJcbiAgICBnZXRDdXJyZW50VXNlck5ldzogKCkgPT4gdm9pZCxcclxuICAgIHNpZ25PdXQ6ICgpID0+IHZvaWQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBvYmplY3Q+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlckYgPSB0aGlzLmdldEN1cnJlbnRVc2VyRi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXplVXNlciA9IHRoaXMuYXV0aG9yaXplVXNlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFVzZXJGKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9HZXRDdXJyZW50VXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7fSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXV0aG9yaXplVXNlcigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvQXV0aG9yaXplQ3VycmVudFVzZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEdldEFudGlGb3JnZXJ5VG9rZW4oe30pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFVzZXJOZXcoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsQWRkcmVzcywgdXNlclByb2ZpbGVJbWFnZVVSTCwgZ2V0Q3VycmVudFVzZXJOZXcsIHNpZ25PdXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjAyQiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1le1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAuZmEtc2lnbi1vdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2ICNVc2VyUHJvZmlsZVBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5zaWduLWluLXVwLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5zaWduLWluLXVwLWNvbnRhaW5lciAuc2VwYXJhdG9ye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NCwgMTg0LCAxODQsIDAuOTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIG5hdi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubmF2YmFye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggMTBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIGhyZWY9XCIvXCI+RGlzY292ZXIgTW91bnRhaW4gUmVzb3J0czwvYT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRleHRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVGV4dFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZW1haWxBZGRyZXNzICE9IFwiXCIgJiYgdGhpcy5wcm9wcy5lbWFpbEFkZHJlc3MgIT0gbnVsbCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiVXNlclByb2ZpbGVQaWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvSU1HXzIwMTcxMjMwXzEwMjgwOS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiVXNlckZpcnN0TmFtZVwiIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+e3RoaXMucHJvcHMuZW1haWxBZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1vdXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtzaWduT3V0fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL0xvZ2luXCI+U2lnbiBJbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL1NpZ25VcFwiPlNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnNpZ25PdXRBc3luY30+U2lnbiBPdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmdldEN1cnJlbnRVc2VyRn0+R2V0IEN1cnJlbnQgVXNlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYXV0aG9yaXplVXNlcn0+QXV0aG9yaXplIFVzZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0IHsgR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhIH0gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU0VUX0NVUlJFTlRfVVNFUiB9IGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDdXJyZW50VXNlciB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUlxyXG4gICAgcGF5bG9hZDogc3RyaW5nLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbk91dCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0lHTl9PVVRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ3VycmVudFVzZXJBY3Rpb24gPSBTZXRDdXJyZW50VXNlciB8IFNpZ25PdXRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlck5ldygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0dldEN1cnJlbnRVc2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCI6ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKS8vR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSLCBwYXlsb2FkOiByZXNwb25zZS5yZXNwb25zZVRleHQgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVIsIHBheWxvYWQ6IFwie31cIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgICB2YXIgdGVzdCA9IFwiXCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9TaWduT3V0QXN5bmNcIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgLy9kYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAvL2NvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIlJlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiOiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdEFnYWluID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TSUdOX09VVCB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlcXVlc3QsIHN0YXR1cywgZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcImVycm9yXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIE5hdmlnYXRpb25CYXJDb250YWluZXIgIGZyb20gJy4uL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lcidcclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL0Nhcm91c2VsQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9Hb29nbGVNYXBzQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBUcmVuZGluZ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbXBvbmVudCdcclxuaW1wb3J0IHsgVHJlbmRpbmdJdGVtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUnXHJcblxyXG5leHBvcnQgY2xhc3MgSE9DSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Q3VycmVudFVzZXJTdG9yZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbENvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVNYXBzQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Hb29nbGVNYXBzQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvSE9DSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogODAwMCxcclxuICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIkNhcm91c2VsQ29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLndlbGNvbWUtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzowIDAgOHB4IDAgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzowIDAgOHB4IDAgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDhweCAwIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1saXN0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29sbGFwc2UgPiBkaXYgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLWRvdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcm91c2VsLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwMkI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAud2VsY29tZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC53ZWxjb21lLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NywgNTcsIDU3LCAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC53ZWxjb21lLW1lc3NhZ2UgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLnNsaWNrLWRvdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDMyLCA0Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAuc2xpY2stZG90cyBsaSBidXR0b246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSBidXR0b246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLWFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stcHJldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLW5leHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1zbGlkZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stc2xpZGUgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1zbGlkZSAud2VsY29tZS1pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9CcmlnaHRvbi5qcGcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9naC9rZW53aGVlbGVyL3NsaWNrQDEuOC4xL3NsaWNrL3NsaWNrLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9naC9rZW53aGVlbGVyL3NsaWNrQDEuOC4xL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0Nhcm91c2VsQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnlcclxuZGVjbGFyZSB2YXIgTWFya2VyQ2x1c3RlcmVyOiBhbnlcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cgeyBHb29nbGVNYXA6IGFueTsgfVxyXG59XHJcbndpbmRvdy5Hb29nbGVNYXAgPSB3aW5kb3cuR29vZ2xlTWFwIHx8IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ29vZ2xlTWFwOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFsZXJ0VXNlciA9IHRoaXMuYWxlcnRVc2VyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkTWFwID0gdGhpcy5sb2FkTWFwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkU2tpUmVzb3J0TWFya2VycyA9IHRoaXMuYWRkU2tpUmVzb3J0TWFya2Vycy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0U2tpUmVzb3J0cyA9IHRoaXMuZ2V0U2tpUmVzb3J0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFya2VyID0gdGhpcy5jcmVhdGVNYXJrZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUluZm9XaW5kb3cgPSB0aGlzLmNyZWF0ZUluZm9XaW5kb3cuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGFsZXJ0VXNlcigpIHtcclxuICAgICAgICBhbGVydCgnaGVsbG8nKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZU1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogbGF0LCBsbmc6IGxuZyB9LFxyXG4gICAgICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MCwgNDUuNTApLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzAsIDQ1LjUwKSxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9Nb3VudGFpbkljb24ucG5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFwOiB3aW5kb3cuR29vZ2xlTWFwLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJIZWxsbyBXb3JsZFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gbWFya2VyO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgYWRkU2tpUmVzb3J0TWFya2VycygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldFNraVJlc29ydHMoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGF0YVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0U2tpUmVzb3J0cygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Ta2lSZXNvcnRzL0dldFNraVJlc29ydHNcIixcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjcmVhdGVJbmZvV2luZG93KHNraVJlc29ydDogT2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cImluZm8td2luZG93XCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgIDxkaXYgY2xhc3M9XCJpbmZvLXdpbmRvdy1jb250YWluZXJcIj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgIDxkaXYgY2xhc3M9XCJyZXBvcnQtZGV0YWlscy1jb250YWluZXJcIj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzb3J0LW5hbWUtY29udGFpbmVyXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxwIGlkPVwiUmVzb3J0TmFtZVwiPicgKyBza2lSZXNvcnRbXCJuYW1lXCJdICsgJzwvcD4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzb3J0LXJhdGluZy1jb250YWluZXJcIj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBpZD1cIlJlc29ydFJhdGluZ051bWJlclwiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgNC4zICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVzb3J0LXJhdGluZy1zdGFyc1wiPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXN0YXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxkaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zdGFyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8ZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtc3RhclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPGRpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXN0YXItaGFsZi1vXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiUmVzb3J0VG90YWxSZXZpZXdzXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICAzNzcgJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJlc29ydC10cmFpbHMtY29udGFpbmVyXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC10cmFpbHMtY29udGFpbmVyXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8cD5UcmFpbHM8L3A+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8cCBpZD1cIlJlc29ydFRvdGFsVHJhaWxzXCI+NzUwPC9wPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVzZXItdHJhaWxzXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8cD5Vc2VyIFRyYWlsczwvcD4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiVXNlclRyYWlsc1wiPjUwMDwvcD4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNvcnQtdHJhaWxzXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgICAgICA8cD5SZXNvcnQgVHJhaWxzPC9wPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJSZXNvcnRUcmFpbHNcIj41MDA8L3A+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZXNvcnQtZXhwbG9yZS1jb250YWluZXJcIj4gJyArXHJcbiAgICAgICAgICAgICcgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Ta2lSZXNvcnRzL0V4cGxvcmU/c2tpUmVzb3J0SWQ9JyArIHNraVJlc29ydFtcInNraVJlc29ydHNJZFwiXSArICdcIj5FeHBsb3JlPC9hPiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgICAgIDwvZGl2PiAnICtcclxuICAgICAgICAgICAgJyAgICAgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8ZGl2IGNsYXNzPVwicmVzb3J0LWltYWdlXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICAgICAgPGltZyBzcmM9XCInICsgc2tpUmVzb3J0W1wibG9nb1wiXSArICAnXCI+ICcgK1xyXG4gICAgICAgICAgICAnICAgICAgICA8L2Rpdj4gJyArXHJcbiAgICAgICAgICAgICcgICAgPC9kaXY+ICcgK1xyXG4gICAgICAgICAgICAnPC9kaXY+ICc7XHJcblxyXG4gICAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xyXG4gICAgICAgICAgICBjb250ZW50OiBodG1sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGluZm93aW5kb3c7XHJcbiAgICB9XHJcbiAgICBhZGRNYXJrZXIoc2tpUmVzb3J0OiBPYmplY3QpIHsgICAgICAgIFxyXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgbGF0OiBza2lSZXNvcnRbXCJsYXRpdHVkZVwiXSwgbG5nOiBza2lSZXNvcnRbXCJsb25naXR1ZGVcIl0gfSxcclxuICAgICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzAsIDQ1LjUwKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcwLCA0NS41MCksXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvTW91bnRhaW5JY29uLnBuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcDogd2luZG93Lkdvb2dsZU1hcFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBpbmZvV2luZG93ID0gdGhpcy5jcmVhdGVJbmZvV2luZG93KHNraVJlc29ydCk7XHJcbiAgICAgICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaW5mb1dpbmRvdy5vcGVuKHdpbmRvdy5Hb29nbGVNYXAsIG1hcmtlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBsb2FkTWFwKCkge1xyXG5cclxuICAgICAgICB2YXIgc3R5bGVkTWFwVHlwZSA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgeyBuYW1lOiAnU3R5bGVkIE1hcCcgfSk7XHJcblxyXG5cclxuICAgICAgICB3aW5kb3cuR29vZ2xlTWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgem9vbTogNyxcclxuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogNDAuNjYwMDYxLCBsbmc6IC0xMTEuNTg3NjMyOCB9LCAgICAgICAgICAgXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgd2luZG93Lkdvb2dsZU1hcC5tYXBUeXBlcy5zZXQoJ3N0eWxlZF9tYXAnLCBzdHlsZWRNYXBUeXBlKTtcclxuICAgICAgICB3aW5kb3cuR29vZ2xlTWFwLnNldE1hcFR5cGVJZCgnc3R5bGVkX21hcCcpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkTWFwKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTa2lSZXNvcnRNYXJrZXJzKCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIkdvb2dsZU1hcHNDb250YWluZXJcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW4tbGVmdCBjb2wtc20tMTIgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpbmQgPGI+eW91cjwvYj4gcGVyZmVjdCByZXNvcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItc2VwYXJhdG9yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+RXhwbG9yZTwvYj4gc29tZSBvZiB0aGUgd29ybGQncyBsZWFkaW5nIHNraSByZXNvcnRzLCA8Yj5kaXNjb3ZlcjwvYj4gaGlkZGVuIHN0YXNoZXMgb2YgcG93ZGVyLCA8Yj5yZWxheDwvYj4gYXQgdGhlIGNvbWZpZXN0IG9uLW1vdW50YWluIGRpbmluZywgYW5kIG11Y2ggbW9yZSEgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtOVwiIGlkPVwibWFwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvR29vZ2xlTWFwc0NvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5kaW5nSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvVHJlbmRpbmdJdGVtQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWNvbnRhaW5lci1jb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhckNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXInO1xyXG5pbXBvcnQgeyBVc2VyUmVkdWNlciB9IGZyb20gJy4uL1JlZHVjZXJzL1VzZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZSc7XHJcblxyXG5jb25zdCBtaWRkbGVXYXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJyZW50VXNlclN0b3JlID0gY3JlYXRlU3RvcmU8Q3VycmVudFVzZXJTdG9yZVN0YXRlPihVc2VyUmVkdWNlciwge1xyXG4gICAgZW1haWxBZGRyZXNzOiBcIlwiLFxyXG4gICAgdXNlclByb2ZpbGVJbWFnZVVSTDogXCJcIixcclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZW5kaW5nSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWNvbnRhaW5lciBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pbWFnZS1za2ktcmVzb3J0LWxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVVBQUFBQ1NDQU1BQUFBRHorTUlBQUFBWTFCTVZFWC8vLytYR3g1QlFVSnhjWEdnb0tEUHo5Q2VLU3o0OGZIcjFOV3JSa2pZcWFwTlRVN0xqWTZ4VkZiejgvTytjWE9rT0RyeTR1UGx4c2ZuNStlSmlZbFpXVnEzdDdqYjI5dmV0N2pSbTV5NFkyVmxaV2JGZjRIRHc4U1VsSlY5Zlgyc3JLeWJ6VGhVQUFBTTJVbEVRVlI0bk8xYzUyTGpyQksxM0d2Y0haYzQ4ZnMvNVkxb2dpa3d4RjRiMzAvbjE2NERDSTZtZytoMDNoYnJ6WFM2V1dmMU9KMG5sY1ppT1IzOXE0bTlCNmFHaXNsVTJtT3pxRUlzTi85eWdtVmp1bXA0V0IwbFBSQjlpc0wvcUJTT0FSbm5KQStqSlVIZkw0Yi9TU0djWXg3RzhSN0hJYzNmTHlRV1lEeWQvK0wvaGV2MUpKdUhMNWErWDZRTXdIaHAyUjh1czF4V29lQ0VpV2R3UkRMZVNHK1VGV0E2djk3ZWFHTDFUVEU0NXRWWFk4RS9iWDJHalNjSlkxRTRPRitnSklsZTJqUkJYNFQ2enBUZ1BtVnVpMFpjR1llVWVwM1MvRlVyNW1uMDIzcGpCaFBHak5MRmlNUjZJRVdRZGxZMTMrOXFCMVA4VmRVY2RwSHhWMDJJcDBWTVo4Um9sb3cwZjFVRnRFdklYMVhoRUM4U09WYlY2VWxMZmlnay9BRlJFdk5YTGVIVDRxNG5Idm1VQ1lxLzRYTDZ1NUxSMUF2VmZObWdJNTV6M2FjejJzejlBYUgvU2JsdVJIajV3S1dBUldQNjEwN1dQQ1lvRW9aemo2bjF2RkhUMEkya1E1KzNTK3VRTmk3Q0pXeXNQRG5ab0VpWUEwRWJPU0U5K3o4TFFzZDM4eU5RRzRjNDhMRDVyaUdXY0tJTHduSzVaaDYxREgrcnhjSlRnL2NTUWJna01pTTFmbFA3RVlJL0ZPTUVEWnVTQXFuNnk2Tis1TkZ5K0ZZaUNOZ1lNdldUc1M2eTFuNEV1NXdWbHo5czlOK2Q2aDhKMlR0NUwrdzBmRHNSSEsyQzVVellHRUxUOXV0SE1IOFRQbnZReVo1TjU3RG9Eb0hvbWhadkpJSmhSU1JXZmRiRWZYVlFEU1VhZG1pdDFLOEY4NGVmTjY2OERtK0F1WndLd3lEaWp6Wi9GbXRGbW5KTFFOaEpiMlZsOWwxaXdVMEdmNVlNZ0ZUVmZxN2xsakNkak9YVU12c2VOWVZRSnRKSktPRiswN3NlOVROcW13WkZsN09jYStGa1NrQ3dwaTlCQjVUQUNYYU5WT1NDdDA1NHo2TWV3cFFSeTBJUWxFbXNEcEpBMGI1N0xZSnJHQUJHUFBkSU5YaURTQ1l3YVJMK1JwQS9tWjdWM0tGc0oyYmpsdElKdlJoK0NVSEVIL1FDd2pVaTNsT1ZleFhLREdXRHZ4RCtoa1pFb1J3UWYrZDBIdzFjT2t6c2ZLZ25pYzZVdkJDK0FvczJJaUFORXRJMVVBS1hNcDNUZDlCaHp3T0x0c0lnZnhtN1A5QUFKdjM5NkExMDJKY0tpYkxBS0NSai94RTZZSUZvblFWNi9scjRoajJlaTJtZ01wUjhkVEQya2FqK1ZEcXZsOEVUS0lrdlFQeUpEMTZpREZpMFo2U3lrWkpMTXVObVFSSmJodmpMRUE2NDN5SVRYZVdINVE5NU9oWlpDeG9ERG5JY0pQUTlRdEZWR2xKdU11SjVFRUV5Z1JLNEROMzZnd05wK2hWYlVQRE1rc0FBSXY3a0FTQ1NYVEgxWStIa1hvTW1MaE1ZUU1SZnhza0JXRURNaUIzVm14SzNmaTY4WmFXdERPWlBIc0RBNUMvbjdKcFNFbm56cDZLeDYra1NJQ3JEWndRd3FJU2FZOU9VbXlzemxGNDN4aXpaRnUvQUdSSWt4Z3lkUHM4bXNNeDZRaU9BeVJlTStiTmVWTEJ0aHZmUWM2ck15azRYbVlzMEFwaWNIczlmWjVMc0RFc3c5VmdaZ1ozYml5b09UZ0NUQ2h6YlFWK2twQWs2bitING5CVkFLZ0pMVE9hYUtrSktIUEF4Wmk4QVBDZnNFM0xlUjZYU2NoRXNsa0JubVZMcWdiY3cvUUI2SG85eVVlZVR0aDN5eUU0NWtSSzM1cXhZUlhkMU91UXhGdDl2VEtPbkwramRrMG1WNFloMXRpNXQvVHc0RjVJSTV3aitBcCs5aWZrZ3hKOFd2Qk44Q3pHc0NpWFE3aVFsbENQRlgxMTBaMHZ1K0F5SGx2YXNJbDlWS0lHMmpoVzM1dmdyTEpTRnJWZ2hIcU16UkxhdklsWVcyMjBLSlhCazFoU1hBeHdDNHl6MnpIa0VMTHp1WlowRTc4NWdYaWlCUjdnbUNzUVhjRGhuT1RHajRHOW9Ha0VkTVMrRHdLUlFBcjhFQWtoOFFVTW9hMTJ3STBRUWsrK0hTN3E2SUhBazF0Y2xHejRiazZRQWp0QUJTc2JZMVpZTzJqT2ljMUNDTmdyQW55TzJzTzlCc0tUbklpbUExRGRMdExOUXdoeHE0d2JWdnFDUW1nWkpMYllEQ1piMFZHeGlqTlNndnFMa25DMWtZa1JjbmdDci83WVd6bjBMWU9DOG1IUmh6NEpXSWY3TUJQRVJPYjlVSlNYdVpwUFJuT0FlN1o0MG1YZzBtbkdTTEY3Wms2QUZnTTJDQ1JHS0tKdVJwdm9ybWZWMFNSMmZKam8zMnpHUit4SGNQSXJMaGZYMEdSZENmcklaTVZacjNEemQyVDlTd2wzUzBZU2h4VlZqNWhHOTJHVGZBVUg0NjNSbi82VFdFSDZmcU9CRlFzV2RjSXNVMmFqcmN4TE9ja04wU1hjT1BQVndEaU9hdFg4VXBMaVNQa3ZnbVBwaVBibUJqcU1XQWZtUTlyUHZwY1poRkYvY3BwTHl3a1QrUUg1K25qNkFFUG4wTnlLOFNOYUg1MU45VStGbStnWGZTSEZmMitpVEZsQnJpUGkza2wxZVIxMTZseVJmZEQrRFFuRk8yR1FpWVJnRGI3dXovRW1HNDZ6Z0lrcCs4cm9vaXdJMzVUUlpYbTV4WklRbzV4UmE5c0tKcjRaSkZIZ3d3Umk3eFdsVDM1SjZPak95SUw0NWtZd2QwNlpmY0c5Q1ZhUUc0Nk9TSkRJdVVjTWZjRktYSnlDSUdNdzRoZk04eENJUGkvU2RueDdnalFIQ2JUY0JneVVLWU95R1FJZk1jNkdqNElzeDhkbEI2dks3RU1VRmdRcWoxTFRaK3lONDJKc2k4aTd4Ukh0UEFNV2xjUVlKRWN4U1g0ZmpYNjZScGVxSERUTE9FVDhYK01Ta0I0RURmU1RvQ0w1cy9xSWxnTCtKM3oyWU1oUVdHRUkzNEpSWWRtZjVvekVsSXNuU0wwUW1iLzZETitBOEQrdFR3T0VLVmJqS0EzRlpPVm5hZkJyV3gvbGlNYXdtaStXcHdQU05BTERlcTlmUzk0NFl6YjJQbFlwTW1jckhlTDVjTE03ell5dDhMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMZjZFdm8vQjRDUGQ0MmNRKytzMkdQQXcrRXcxRFVlNzZuNmlxVnNNK2orOUdqOTlkbVo2TXRTUE5IQXpQTFJwMlFXNDlMZUo2WFo3OFQ4RHpINnUwYWJCWksrNkQxeHE3SG03bWYrMEhjMmgraHVjTjV5cEI3OVpULzJ5aDBNZXpKaEU3KytvR082NjNSakZpTUQ2NFRTRm1NQlBUY1l1OXZ4d2lCNTZXSSthM1QwRWJydG9ualgyNnRjQk9jbytwbmVKQlZJRS9yNFR2cWszc1krTCt1VVNHVDdFTi9Xc0dTRy85eEJZaTB3OWJDaFdXZ0IzekNnem5zRisvZmVJaU5JRWtwd2pBbitvbWZJd2ZHTmdCdThpY0R1REUvMTl0djV0YTBhWjlUU2NPZUdGWUliR0NqRUlCbXlXU0dneEpORElVOVJIK1d0b0J1L1Y1dnk3K1Q5aWtDU3c1NkI3N3BzZndvWjkvR0w3VGl6Q29iZmYzQlFNdE9RaWk5cGdBT1o2TmNzaXVnQUM5ZERkR3o5MkFNZmYzczMxbzI4bEFMNEVra0IySnVoUnlEVHJYMlpiWW1oanh6bUtlbkYrTVlIV2hCQmR3bW5uT2hDdDc5M1p6Zi94d3p3TTJ0ejdDT3pjOUtpTmUrbzNIZERReG9qUlZ2RFQ2a3hpTHNIZk5lay84V2wvYUs5MmtScEFFL0FnYTMxQXBOYTRrMERqY3QzTE5RTDRRUTk5aVdpU2VjRWN2eDJTd0NzajA4RzBOY3V6UkJBS2wwUjR1Ky91QmY5NEw0SFhjTldlQUJKRDkvblJQaXgvdktZUkJKcGUwV2xuT2hCck1La0E4MFlJOGIwRW12ZHJSdEJ1ZWYvQkRLM1pKaU0zeGEyV1FrN1ZDQUk3YVFJTkgvSVVEdWhVQ25jVE9QQmZzR2Jnd0EydDIyS1RaYWU5M2NlZTlpY0NqUU1objBuQzJHS3h3dDlOb1BGWmFnaWRtbGlUaEllK3NhTmRkVWVsYnJQb1hQSUl6SFVnMXN6SUNiK2Z3RzFqTXdJQkpJYmVzYVAxOUI4K2d3SEl1ZVE1RWVOQUlna2tPWk9NbXNQOUJCb3JmYkZVdWxRRERXMmlSc0tjYjYzYVhJSVJxTGtRWVF5MlYzYmEzODNMbGNJbFVrSThnRURIeTNmSUR4cmFSQ3FFT3UyczJodzRpanNVZ2F6RE5OTTI5bGxlZ3Vtd1JpSGUvajRDWGZZMkM4Y0NROXRRbmxpT2ZnVlg5eTk2eFpEQXJja1krRlRPSkRmeUVOQUdSdEc2WkloSEVHZ3M5UTFJajFib2djYkJWU2VKMWR3YUhuYThCdW01N0UxbHQ3YzM0MUh5YXR5OWJTR3ZZcEdlS29wSEVHaFVhV2IxMEI4YTRVYjA5NktYVC82QlREbUxzdmV3cVR3SzNMNkV3STZUQmw5MnlPWHkxVHZUVTdrUnNuQkhFMGo2UzlSVTdvWlZjeTZTNHRyZlRhQ2JzTThQc1ZxY2k5ZFFxbVpGOXlBV0t6VnptaG5YZEdiOHpGNGNDT3IyOHJqeE1RVGFXbFJndkRCOU85SzJiUVBLdEJ1aGFsNEVnVnlDTzJnYWFBOUg1NC84U3VTQno0TUlOQWxRMERCWTZyNzNmV1ZlSzBnL2RodzFnUk9aUldteEJONDY3dDFLS2RHeG1EenllUkNCMUxJVFExdG9rV3VvME8rQ3lLVUNCMmtFaTdGdGZnQm85aDJrK3lIWHJOYVBJN0QvWndLMWxibzB1d1o2OFZqYnd3aGpIeHRlTjczNER4Q250OFErVHd5dko1RFpBTVBhR1JKb2hJeE9Xc05wL3pUNkxJRFo1NkZrKzBBTThYSUNtZWlPVUNJUTQvWWl1aFpPMitTYXdvVEV0Q1lLT0oremJnLzkrbklDWFNrZjRrYlBwZG5tNi9KekE5TTJaWE5oZUd6TUsySlFsUlpuMEJtOW1zQXR4eCtPWkdDV1pSWkt5Uld6THl3MGJNYW9nQTJRcThsRmdXNi9tc0ErUllLV1N2aXVJWUZHMTZnbndHbWJiRjJZa0h6YXROMDdEV1VyRjQvZTFuVDRLNEZxWmRCQjBoazkrcFhmL2tIVE5uR3FzREx0R096KzNGUXBwTzg4SFZyUGl3azgwQlRzS2JuRXRKcmpZWmdWUE8yOGhLUmhFQUMvZ1JjVHFDakFlWnV1aklGMEFCTm9QRGllSGpGdEkwUEMzYzB0SFZ3UkNjcHJDZVNLVjdxc0NVSVVRckdOQzBkK2hKajJaMTVDMHVsaklTUVBJNzZXUUxaOHF2OXdJK1lTYnF3em01YlV0TTBwRlBGKzJ3ZWdjRTl0cS85VEFsVmVGamM2cWdrMStvRG8vRW44ZHRQWkgzd0Z1aW5JVW5aMDJ3aXUzM1pUb05mbkhIaGlsZVJNS0J4VVEvOHAvd094azRucHNKckw2Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaW1hZ2UtaXRlbS1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL1NlbGZpZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1kZXNjcmlwdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1za2ktcmVzb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBDYW55b25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1pdGVtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+OTk5MCBTa2kgTGlmdDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFybi1tb3JlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpc2NvdmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdlZC1saWtlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVtb3ZlX3JlZF9leWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjEyMzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dGh1bWJfdXA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE4PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQudHN4IiwiaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJ1xyXG5pbXBvcnQgeyBMT0dJTiwgVE9HR0xFX1BBU1NXT1JEX1JFVkVBTCB9IGZyb20gJy4uL0NvbnN0YW50cy9Vc2VyTG9naW5Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlckFjdGlvbiB9IGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgU0VUX0NVUlJFTlRfVVNFUiwgU0lHTl9PVVQgfSBmcm9tICcuLi9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZXJSZWR1Y2VyKHN0YXRlOiBDdXJyZW50VXNlclN0b3JlU3RhdGUsIGFjdGlvbjogQ3VycmVudFVzZXJBY3Rpb24pOiBDdXJyZW50VXNlclN0b3JlU3RhdGUge1xyXG4gICAgdmFyIHRlc3QgPSBcIlwiO1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgU0VUX0NVUlJFTlRfVVNFUjoge1xyXG4gICAgICAgICAgICB2YXIgZW1haWxBZGRyZXNzID0gYWN0aW9uLnBheWxvYWRbXCJlbWFpbFwiXTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZW1haWxBZGRyZXNzOiBlbWFpbEFkZHJlc3NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIFNJR05fT1VUOiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczogXCJcIixcclxuICAgICAgICAgICAgICAgIHVzZXJQcm9maWxlSW1hZ2VVUkw6IFwiXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVkdWNlcnMvVXNlclJlZHVjZXIudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==