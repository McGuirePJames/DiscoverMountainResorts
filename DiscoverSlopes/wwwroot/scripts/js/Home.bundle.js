webpackJsonp([2],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.SIGN_OUT = 'SIGN_OUT';


/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(34);
var HOCHome_1 = __webpack_require__(315);
ReactDOM.render(React.createElement(HOCHome_1.HOCHome, null), document.getElementById('MountPoint'));


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

/***/ 315:
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
var NavigationBarContainer_1 = __webpack_require__(51);
var CarouselComponent_1 = __webpack_require__(333);
var GoogleMapsComponent_1 = __webpack_require__(349);
var TrendingItemContainerComponent_1 = __webpack_require__(350);
var react_redux_1 = __webpack_require__(18);
var CurrentUserStore_1 = __webpack_require__(55);
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

/***/ 333:
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
var React = __webpack_require__(3);
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
var React = __webpack_require__(3);
var $ = __webpack_require__(11);
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
                                _this.addMarker(data[i].latitude, data[i].longitude);
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
            url: "/SkiResort/GetSkiResorts",
            type: "GET",
            success: function (response) {
                return response.responseText;
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
    GoogleMapsComponent.prototype.addMarker = function (lat, lng) {
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
    };
    //addMarkerCluster() {
    //    var clusterStyles = [
    //        {
    //            textColor: 'white',
    //            url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png",
    //            height: 50,
    //            width: 50
    //        },
    //        {
    //            textColor: 'white',
    //            url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png",
    //            height: 50,
    //            width: 50
    //        },
    //        {
    //            textColor: 'white',
    //            url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png",
    //            height: 50,
    //            width: 50
    //        }
    //    ];
    //    var mcOptions = {
    //        gridSize: 50,
    //        styles: clusterStyles,
    //        maxZoom: 15
    //    };
    //    var locations = [
    //        { lat: -31.563910, lng: 147.154312 },
    //        { lat: -33.718234, lng: 150.363181 },
    //        { lat: -33.727111, lng: 150.371124 },
    //        { lat: -33.848588, lng: 151.209834 },
    //        { lat: -33.851702, lng: 151.216968 },
    //        { lat: -34.671264, lng: 150.863657 },
    //        { lat: -35.304724, lng: 148.662905 },
    //        { lat: -36.817685, lng: 175.699196 },
    //        { lat: -36.828611, lng: 175.790222 },
    //        { lat: -37.750000, lng: 145.116667 },
    //        { lat: -37.759859, lng: 145.128708 },
    //        { lat: -37.765015, lng: 145.133858 },
    //        { lat: -37.770104, lng: 145.143299 },
    //        { lat: -37.773700, lng: 145.145187 },
    //        { lat: -37.774785, lng: 145.137978 },
    //        { lat: -37.819616, lng: 144.968119 },
    //        { lat: -38.330766, lng: 144.695692 },
    //        { lat: -39.927193, lng: 175.053218 },
    //        { lat: -41.330162, lng: 174.865694 },
    //        { lat: -42.734358, lng: 147.439506 },
    //        { lat: -42.734358, lng: 147.501315 },
    //        { lat: -42.735258, lng: 147.438000 },
    //        { lat: -43.999792, lng: 170.463352 }
    //    ];
    //    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //    var markers = locations.map(function (location, i) {
    //        return new google.maps.Marker({
    //            position: { lat: location.lat, lng: location.lng },
    //            icon: {
    //                size: new google.maps.Size(70, 60),
    //                scaledSize: new google.maps.Size(70, 60),
    //                origin: new google.maps.Point(0, 0),
    //                url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png"
    //            },
    //            map: window.GoogleMap,
    //            label: labels[i % labels.length],
    //            optimized: false,
    //            title: "Hello World"
    //        })
    //    });
    //    var myoverlay = new google.maps.OverlayView();
    //    myoverlay.draw = function () {
    //        this.getPanes().markerLayer.id = 'markerLayer';
    //    };
    //    myoverlay.setMap(window.GoogleMap);
    //    var markerCluster = new MarkerClusterer(window.GoogleMap, markers, mcOptions)
    //        //{ imagePath: 'https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png' });
    //}
    GoogleMapsComponent.prototype.loadMap = function () {
        window.GoogleMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 40.660061, lng: -111.5876328 }
        });
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
var TrendingItemComponent_1 = __webpack_require__(351);
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
var React = __webpack_require__(3);
var FontAwesome = __webpack_require__(171);
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
                                React.createElement("p", null, "9990 Ski Lift ")))),
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

},[215]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvRW50cnkvSG9tZUVudHJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0hPQ0hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL0Nhcm91c2VsQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9Hb29nbGVNYXBzQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUudHN4Iiwid2VicGFjazovLy8uL3NyYy9SZWR1Y2Vycy9Vc2VyUmVkdWNlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBYSx3QkFBZ0IsR0FBRyxrQkFBa0I7QUFHckMsZ0JBQVEsR0FBRyxVQUFVOzs7Ozs7Ozs7QUNIdEI7O0FBQ1osbUNBQThCO0FBQzlCLHVDQUFxQztBQUVyQyx5Q0FBK0M7QUFFL0MsUUFBUSxDQUFDLE1BQU0sQ0FDWCxvQkFBQyxpQkFBTyxPQUFFLEVBQ1YsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FD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TixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2QyxDQUFDO1NBQ0osQ0FBQztJQUNOLENBQUM7QUFDTCxDQUFDO0FBaENELDBCQWdDQzs7Ozs7Ozs7Ozs7QUM3RUQsNENBQStDO0FBRS9DLHNDQUFxRDtBQUVyRCw0Q0FBc0Q7QUFLdEQsSUFBTSxVQUFVLEdBQUcsdUJBQWUsQ0FBQyxxQkFBSyxDQUFDLENBQUM7QUFFN0Isd0JBQWdCLEdBQUcsbUJBQVcsQ0FBd0IseUJBQVcsRUFBRTtJQUM1RSxZQUFZLEVBQUUsRUFBRTtJQUNoQixtQkFBbUIsRUFBRSxFQUFFO0NBQzFCLEVBQUUsVUFBVSxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiZixxREFBK0U7QUFFL0UscUJBQTRCLEtBQTRCLEVBQUUsTUFBeUI7SUFDL0UsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2pCLEtBQUssdUNBQWdCLENBQUMsQ0FBQztZQUNuQixJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNDLG9CQUNPLEtBQUssSUFDUixZQUFZLEVBQUUsWUFBWSxJQUM3QjtTQUNKO1FBQ0QsS0FBSywrQkFBUSxDQUFDLENBQUM7WUFDWCxvQkFDTyxLQUFLLElBQ1IsWUFBWSxFQUFFLEVBQUUsRUFDaEIsbUJBQW1CLEVBQUUsRUFBRSxJQUMxQjtTQUNKO0tBRUo7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBcEJELGtDQW9CQyIsImZpbGUiOiJIb21lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRVRfQ1VSUkVOVF9VU0VSID0gJ1NFVF9DVVJSRU5UX1VTRVInXHJcbmV4cG9ydCB0eXBlIFNFVF9DVVJSRU5UX1VTRVIgPSB0eXBlb2YgU0VUX0NVUlJFTlRfVVNFUlxyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fT1VUID0gJ1NJR05fT1VUJ1xyXG5leHBvcnQgdHlwZSBTSUdOX09VVCA9IHR5cGVvZiBTSUdOX09VVFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db25zdGFudHMvQ3VycmVudFVzZXJDb25zdGFudHMudHN4IiwiJ3VzZSBzdHJpY3QnXHJcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXHJcblxyXG5pbXBvcnQgeyBIT0NIb21lIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9IT0NIb21lJ1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG4gICAgPEhPQ0hvbWUvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNb3VudFBvaW50JylcclxuKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRW50cnkvSG9tZUVudHJ5LnRzeCIsImltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5cclxuLy9leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBZGRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuLy8gICAgZGF0YS5fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiA9ICQoJyNfX0FqYXhBbnRpRm9yZ2VyeUZvcm0gaW5wdXRbbmFtZT1fX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbl0nKS52YWwoKTtcclxuLy8gICAgcmV0dXJuIGRhdGE7XHJcbi8vfVxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuKGRhdGEpIHtcclxuICAgIGRhdGEuX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4gPSAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRBbnRpRm9yZ2VyeVRva2VuV2l0aG91dERhdGEoKSB7XHJcbiAgICByZXR1cm4gJChcIltuYW1lPSdfX1JlcXVlc3RWZXJpZmljYXRpb25Ub2tlbiddXCIpLnZhbCgpO1xyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgIE5hdmlnYXRpb25CYXJDb250YWluZXIgIGZyb20gJy4uL0NvbnRhaW5lcnMvTmF2aWdhdGlvbkJhckNvbnRhaW5lcidcclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL0Nhcm91c2VsQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBHb29nbGVNYXBzQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9Hb29nbGVNYXBzQ29tcG9uZW50J1xyXG5pbXBvcnQgeyBUcmVuZGluZ0l0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbXBvbmVudCdcclxuaW1wb3J0IHsgVHJlbmRpbmdJdGVtQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQnXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlIH0gZnJvbSAnLi4vU3RvcmVzL0N1cnJlbnRVc2VyU3RvcmUnXHJcblxyXG5leHBvcnQgY2xhc3MgSE9DSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxQcm92aWRlciBzdG9yZT17Q3VycmVudFVzZXJTdG9yZX0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbENvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDxHb29nbGVNYXBzQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPC9Hb29nbGVNYXBzQ29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvSE9DSG9tZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGFjY2Vzc2liaWxpdHk6IHRydWUsXHJcbiAgICAgICAgICAgIGRvdHM6IHRydWUsXHJcbiAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogODAwMCxcclxuICAgICAgICAgICAgcGF1c2VPbkZvY3VzOiB0cnVlLFxyXG4gICAgICAgICAgICBwYXVzZU9uSG92ZXI6IHRydWUsXHJcbiAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIkNhcm91c2VsQ29tcG9uZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGBcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLndlbGNvbWUtaW1hZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzowIDAgOHB4IDAgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzowIDAgOHB4IDAgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6MCAwIDhweCAwIGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1saXN0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29sbGFwc2UgPiBkaXYgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLWRvdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMzVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhcm91c2VsLWNvbnRhaW5lcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTIwMkI7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAud2VsY29tZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC53ZWxjb21lLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1NywgNTcsIDU3LCAuNik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC53ZWxjb21lLW1lc3NhZ2UgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLnNsaWNrLWRvdHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUsIDMyLCA0Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAuc2xpY2stZG90cyBsaSBidXR0b246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLnNsaWNrLWRvdHMgLnNsaWNrLWFjdGl2ZSBidXR0b246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLWFycm93IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1wcmV2OmJlZm9yZSwgLnNsaWNrLW5leHQ6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stcHJldiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLW5leHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1zbGlkZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stc2xpZGUgZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1zbGlkZSAud2VsY29tZS1pbWFnZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9CcmlnaHRvbi5qcGcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH19IC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9naC9rZW53aGVlbGVyL3NsaWNrQDEuOC4xL3NsaWNrL3NsaWNrLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9naC9rZW53aGVlbGVyL3NsaWNrQDEuOC4xL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndlbGNvbWUtbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPiBIZWxsbyBXb3JsZCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0Nhcm91c2VsQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IHsgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZGVjbGFyZSB2YXIgZ29vZ2xlOiBhbnlcclxuZGVjbGFyZSB2YXIgTWFya2VyQ2x1c3RlcmVyOiBhbnlcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICAgIGludGVyZmFjZSBXaW5kb3cgeyBHb29nbGVNYXA6IGFueTsgfVxyXG59XHJcbndpbmRvdy5Hb29nbGVNYXAgPSB3aW5kb3cuR29vZ2xlTWFwIHx8IHt9O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNDb21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBhbnk+IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZ29vZ2xlTWFwOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFsZXJ0VXNlciA9IHRoaXMuYWxlcnRVc2VyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sb2FkTWFwID0gdGhpcy5sb2FkTWFwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRNYXJrZXIgPSB0aGlzLmFkZE1hcmtlci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYWRkU2tpUmVzb3J0TWFya2VycyA9IHRoaXMuYWRkU2tpUmVzb3J0TWFya2Vycy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZ2V0U2tpUmVzb3J0cyA9IHRoaXMuZ2V0U2tpUmVzb3J0cy5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTWFya2VyID0gdGhpcy5jcmVhdGVNYXJrZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGFsZXJ0VXNlcigpIHtcclxuICAgICAgICBhbGVydCgnaGVsbG8nKTtcclxuICAgIH1cclxuICAgIGNyZWF0ZU1hcmtlcihsYXQ6IG51bWJlciwgbG5nOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogbGF0LCBsbmc6IGxuZyB9LFxyXG4gICAgICAgICAgICBpY29uOiB7XHJcbiAgICAgICAgICAgICAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MCwgNDUuNTApLFxyXG4gICAgICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzAsIDQ1LjUwKSxcclxuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9Nb3VudGFpbkljb24ucG5nXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWFwOiB3aW5kb3cuR29vZ2xlTWFwLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJIZWxsbyBXb3JsZFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4gbWFya2VyO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgYWRkU2tpUmVzb3J0TWFya2VycygpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLmdldFNraVJlc29ydHMoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRNYXJrZXIoZGF0YVtpXS5sYXRpdHVkZSwgZGF0YVtpXS5sb25naXR1ZGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldFNraVJlc29ydHMoKSB7XHJcbiAgICAgICAgcmV0dXJuICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvU2tpUmVzb3J0L0dldFNraVJlc29ydHNcIixcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UucmVzcG9uc2VUZXh0O1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgYWRkTWFya2VyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgbGF0OiBsYXQsIGxuZzogbG5nIH0sXHJcbiAgICAgICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcwLCA0NS41MCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MCwgNDUuNTApLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL01vdW50YWluSWNvbi5wbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXA6IHdpbmRvdy5Hb29nbGVNYXAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkhlbGxvIFdvcmxkXCJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9hZGRNYXJrZXJDbHVzdGVyKCkge1xyXG5cclxuICAgIC8vICAgIHZhciBjbHVzdGVyU3R5bGVzID0gW1xyXG4gICAgLy8gICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnLFxyXG4gICAgLy8gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvTW91bnRhaW5JY29uLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgLy8gICAgICAgICAgICB3aWR0aDogNTBcclxuICAgIC8vICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnLFxyXG4gICAgLy8gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvTW91bnRhaW5JY29uLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgLy8gICAgICAgICAgICB3aWR0aDogNTBcclxuICAgIC8vICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgdGV4dENvbG9yOiAnd2hpdGUnLFxyXG4gICAgLy8gICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvTW91bnRhaW5JY29uLnBuZ1wiLFxyXG4gICAgLy8gICAgICAgICAgICBoZWlnaHQ6IDUwLFxyXG4gICAgLy8gICAgICAgICAgICB3aWR0aDogNTBcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICBdO1xyXG4gICAgLy8gICAgdmFyIG1jT3B0aW9ucyA9IHtcclxuICAgIC8vICAgICAgICBncmlkU2l6ZTogNTAsXHJcbiAgICAvLyAgICAgICAgc3R5bGVzOiBjbHVzdGVyU3R5bGVzLFxyXG4gICAgLy8gICAgICAgIG1heFpvb206IDE1XHJcbiAgICAvLyAgICB9O1xyXG4gICAgLy8gICAgdmFyIGxvY2F0aW9ucyA9IFtcclxuICAgIC8vICAgICAgICB7IGxhdDogLTMxLjU2MzkxMCwgbG5nOiAxNDcuMTU0MzEyIH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zMy43MTgyMzQsIGxuZzogMTUwLjM2MzE4MSB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzMuNzI3MTExLCBsbmc6IDE1MC4zNzExMjQgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTMzLjg0ODU4OCwgbG5nOiAxNTEuMjA5ODM0IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zMy44NTE3MDIsIGxuZzogMTUxLjIxNjk2OCB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzQuNjcxMjY0LCBsbmc6IDE1MC44NjM2NTcgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM1LjMwNDcyNCwgbG5nOiAxNDguNjYyOTA1IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zNi44MTc2ODUsIGxuZzogMTc1LjY5OTE5NiB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzYuODI4NjExLCBsbmc6IDE3NS43OTAyMjIgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM3Ljc1MDAwMCwgbG5nOiAxNDUuMTE2NjY3IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zNy43NTk4NTksIGxuZzogMTQ1LjEyODcwOCB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzcuNzY1MDE1LCBsbmc6IDE0NS4xMzM4NTggfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM3Ljc3MDEwNCwgbG5nOiAxNDUuMTQzMjk5IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zNy43NzM3MDAsIGxuZzogMTQ1LjE0NTE4NyB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzcuNzc0Nzg1LCBsbmc6IDE0NS4xMzc5NzggfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM3LjgxOTYxNiwgbG5nOiAxNDQuOTY4MTE5IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zOC4zMzA3NjYsIGxuZzogMTQ0LjY5NTY5MiB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzkuOTI3MTkzLCBsbmc6IDE3NS4wNTMyMTggfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTQxLjMzMDE2MiwgbG5nOiAxNzQuODY1Njk0IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC00Mi43MzQzNTgsIGxuZzogMTQ3LjQzOTUwNiB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtNDIuNzM0MzU4LCBsbmc6IDE0Ny41MDEzMTUgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTQyLjczNTI1OCwgbG5nOiAxNDcuNDM4MDAwIH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC00My45OTk3OTIsIGxuZzogMTcwLjQ2MzM1MiB9XHJcbiAgICAvLyAgICBdO1xyXG4gICAgLy8gICAgdmFyIGxhYmVscyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWic7XHJcbiAgICAvLyAgICB2YXIgbWFya2VycyA9IGxvY2F0aW9ucy5tYXAoZnVuY3Rpb24gKGxvY2F0aW9uLCBpKSB7XHJcbiAgICAvLyAgICAgICAgcmV0dXJuIG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgLy8gICAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IGxvY2F0aW9uLmxhdCwgbG5nOiBsb2NhdGlvbi5sbmcgfSxcclxuICAgIC8vICAgICAgICAgICAgaWNvbjoge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgc2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzAsIDYwKSxcclxuICAgIC8vICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcwLCA2MCksXHJcbiAgICAvLyAgICAgICAgICAgICAgICBvcmlnaW46IG5ldyBnb29nbGUubWFwcy5Qb2ludCgwLCAwKSxcclxuICAgIC8vICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9Nb3VudGFpbkljb24ucG5nXCJcclxuICAgIC8vICAgICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgICAgbWFwOiB3aW5kb3cuR29vZ2xlTWFwLFxyXG4gICAgLy8gICAgICAgICAgICBsYWJlbDogbGFiZWxzW2kgJSBsYWJlbHMubGVuZ3RoXSxcclxuICAgIC8vICAgICAgICAgICAgb3B0aW1pemVkOiBmYWxzZSxcclxuICAgIC8vICAgICAgICAgICAgdGl0bGU6IFwiSGVsbG8gV29ybGRcIlxyXG4gICAgLy8gICAgICAgIH0pXHJcbiAgICAvLyAgICB9KTtcclxuICAgIC8vICAgIHZhciBteW92ZXJsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuT3ZlcmxheVZpZXcoKTtcclxuICAgIC8vICAgIG15b3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gICAgICAgIHRoaXMuZ2V0UGFuZXMoKS5tYXJrZXJMYXllci5pZCA9ICdtYXJrZXJMYXllcic7XHJcbiAgICAvLyAgICB9O1xyXG4gICAgLy8gICAgbXlvdmVybGF5LnNldE1hcCh3aW5kb3cuR29vZ2xlTWFwKTtcclxuICAgIC8vICAgIHZhciBtYXJrZXJDbHVzdGVyID0gbmV3IE1hcmtlckNsdXN0ZXJlcih3aW5kb3cuR29vZ2xlTWFwLCBtYXJrZXJzLCBtY09wdGlvbnMpXHJcbiAgICAvLyAgICAgICAgLy97IGltYWdlUGF0aDogJ2h0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL01vdW50YWluSWNvbi5wbmcnIH0pO1xyXG5cclxuICAgIC8vfVxyXG5cclxuICAgIGxvYWRNYXAoKSB7XHJcbiAgICAgICAgd2luZG93Lkdvb2dsZU1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcbiAgICAgICAgICAgIHpvb206IDcsXHJcbiAgICAgICAgICAgIGNlbnRlcjogeyBsYXQ6IDQwLjY2MDA2MSwgbG5nOiAtMTExLjU4NzYzMjggfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmxvYWRNYXAoKTtcclxuICAgICAgICB0aGlzLmFkZFNraVJlc29ydE1hcmtlcnMoKTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBpZD1cIkdvb2dsZU1hcHNDb250YWluZXJcIiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbHVtbiBjb2x1bW4tbGVmdCBjb2wtc20tMTIgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZpbmQgPGI+eW91cjwvYj4gcGVyZmVjdCByZXNvcnQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItc2VwYXJhdG9yXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGI+RXhwbG9yZTwvYj4gc29tZSBvZiB0aGUgd29ybGQncyBsZWFkaW5nIHNraSByZXNvcnRzLCA8Yj5kaXNjb3ZlcjwvYj4gaGlkZGVuIHN0YXNoZXMgb2YgcG93ZGVyLCA8Yj5yZWxheDwvYj4gYXQgdGhlIGNvbWZpZXN0IG9uLW1vdW50YWluIGRpbmluZywgYW5kIG11Y2ggbW9yZSEgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbC1zbS0xMiBjb2wtbWQtOVwiIGlkPVwibWFwXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvR29vZ2xlTWFwc0NvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRyZW5kaW5nSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvVHJlbmRpbmdJdGVtQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIFRyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWNvbnRhaW5lci1jb21wb25lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG52YXIgRm9udEF3ZXNvbWUgPSByZXF1aXJlKCdyZWFjdC1mb250YXdlc29tZScpO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBUcmVuZGluZ0l0ZW1Db21wb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaXRlbS1jb250YWluZXIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaXRlbS1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaW1hZ2Utc2tpLXJlc29ydC1sb2dvLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFVQUFBQUNTQ0FNQUFBQUR6K01JQUFBQVkxQk1WRVgvLy8rWEd4NUJRVUp4Y1hHZ29LRFB6OUNlS1N6NDhmSHIxTldyUmtqWXFhcE5UVTdMalk2eFZGYno4L08rY1hPa09Ecnk0dVBseHNmbjUrZUppWWxaV1ZxM3Q3amIyOXZldDdqUm01eTRZMlZsWldiRmY0SER3OFNVbEpWOWZYMnNyS3lielRoVUFBQU0yVWxFUVZSNG5PMWM1MkxqckJLMTNHdmNIWmM0OGZzLzVZMW9naWt3eEY0YjMwL24xNjREQ0k2bWcraDAzaGJyelhTNldXZjFPSjBubGNaaU9SMzlxNG05QjZhR2lzbFUybU96cUVJc04vOXlnbVZqdW1wNFdCMGxQUkI5aXNML3FCU09BUm5uSkErakpVSGZMNGIvU1NHY1l4N0c4UjdISWMzZkx5UVdZRHlkLytML2hldjFKSnVITDVhK1g2UU13SGhwMlI4dXMxeFdvZUNFaVdkd1JETGVTRytVRldBNnY5N2VhR0wxVFRFNDV0VlhZOEUvYlgyR2pTY0pZMUU0T0YrZ0pJbGUyalJCWDRUNnpwVGdQbVZ1aTBaY0dZZVVlcDNTL0ZVcjVtbjAyM3BqQmhQR2pOTEZpTVI2SUVXUWRsWTEzKzlxQjFQOFZkVWNkcEh4VjAySXAwVk1aOFJvbG93MGYxVUZ0RXZJWDFYaEVDOFNPVmJWNlVsTGZpZ2svQUZSRXZOWExlSFQ0cTRuSHZtVUNZcS80WEw2dTVMUjFBdlZmTm1nSTU1ejNhY3oyc3o5QWFIL1NibHVSSGo1d0tXQVJXUDYxMDdXUENZb0VvWnpqNm4xdkZIVDBJMmtRNSszUyt1UU5pN0NKV3lzUERuWm9FaVlBMEViT1NFOSt6OExRc2QzOHlOUUc0YzQ4TEQ1cmlHV2NLSUx3bks1Wmg2MURIK3J4Y0pUZy9jU1FiZ2tNaU0xZmxQN0VZSS9GT01FRFp1U0FxbjZ5Nk4rNU5GeStGWWlDTmdZTXZXVHNTNnkxbjRFdTV3Vmx6OXM5TitkNmg4SjJUdDVMK3cwZkRzUkhLMkM1VXpZR0VMVDl1dEhNSDhUUG52UXlaNU41N0RvRG9Ib21oWnZKSUpoUlNSV2ZkYkVmWFZRRFNVYWRtaXQxSzhGODRlZk42NjhEbStBdVp3S3d5RGlqelovRm10Rm1uSkxRTmhKYjJWbDlsMWl3VTBHZjVZTWdGVFZmcTdsbGpDZGpPWFVNdnNlTllWUUp0SkpLT0YrMDdzZTlUTnFtd1pGbDdPY2ErRmtTa0N3cGk5QkI1VEFDWGFOVk9TQ3QwNTR6Nk1ld3BRUnkwSVFsRW1zRHBKQTBiNTdMWUpyR0FCR1BQZElOWGlEU0NZd2FSTCtScEEvbVo3VjNLRnNKMmJqbHRJSnZSaCtDVUhFSC9RQ3dqVWkzbE9WZXhYS0RHV0R2eEQraGtaRW9Sd1FmK2QwSHcxY09renNmS2duaWM2VXZCQytBb3MySWlBTkV0STFVQUtYTXAzVGQ5Qmh6d09MdHNJZ2Z4bTdQOUFBSnYzOTZBMTAySmNLaWJMQUtDUmoveEU2WUlGb25RVjYvbHI0aGoyZWkybWdNcFI4ZFREMmthaitWRHF2bDhFVEtJa3ZRUHlKRDE2aURGaTBaNlN5a1pKTE11Tm1RUkpiaHZqTEVBNjQzeUlUWGVXSDVROTVPaFpaQ3hvRERuSWNKUFE5UXRGVkdsSnVNdUo1RUVFeWdSSzRETjM2Z3dOcCtoVmJVUERNa3NBQUl2N2tBU0NTWFRIMVkrSGtYb01tTGhNWVFNUmZ4c2tCV0VETWlCM1ZteEszZmk2OFphV3RET1pQSHNEQTVDL243SnBTRW5uenA2S3g2K2tTSUNyRFp3UXdxSVNhWTlPVW15c3psRjQzeGl6WkZ1L0FHUklreGd5ZFBzOG1zTXg2UWlPQXlSZU0rYk5lVkxCdGh2ZlFjNnJNeWs0WG1ZczBBcGljSHM5Zlo1THNERXN3OVZnWmdaM2JpeW9PVGdDVENoemJRVitrcEFrNm4rSDRuQlZBS2dKTFRPYWFLa0pLSFBBeFppOEFQQ2ZzRTNMZVI2WFNjaEVzbGtCbm1WTHFnYmN3L1FCNkhvOXlVZWVUdGgzeXlFNDVrUkszNXF4WVJYZDFPdVF4RnQ5dlRLT25MK2pkazBtVjRZaDF0aTV0L1R3NEY1SUk1d2orQXArOWlma2d4SjhXdkJOOEN6R3NDaVhRN2lRbGxDUEZYMTEwWjB2dStBeUhsdmFzSWw5VktJRzJqaFczNXZnckxKU0ZyVmdoSHFNelJMYXZJbFlXMjIwS0pYQmsxaFNYQXh3QzR5ejJ6SGtFTEx6dVpaMEU3ODVnWGlpQlI3Z21Dc1FYY0Robk9UR2o0RzlvR2tFZE1TK0R3S1JRQXI4RUFraDhRVU1vYTEyd0kwUVFrKytIUzdxNklIQWsxdGNsR3o0Yms2UUFqdEFCU3NiWTFaWU8yak9pYzFDQ05nckFueU8yc085QnNLVG5JaW1BMURkTHRMTlF3aHhxNHdiVnZxQ1FtZ1pKTGJZRENaYjBWR3hpak5TZ3ZxTGtuQzFrWWtSY25nQ3IvN1lXem4wTFlPQzhtSFJoejRKV0lmN01CUEVST2I5VUpTWHVacFBSbk9BZTdaNDBtWGcwbW5HU0xGN1prNkFGZ00yQ0NSR0tLSnVScHZvcm1mVjBTUjJmSmpvMzJ6R1IreEhjUElyTGhmWDBHUmRDZnJJWk1WWnIzRHpkMlQ5U3dsM1MwWVNoeFZWajVoRzkyR1RmQVVINDYzUm4vNlRXRUg2ZnFPQkZRc1dkY0lzVTJhanJjeExPY2tOMFNYY09QUFZ3RGlPYXRYOFVwTGlTUGt2Z21QcGlQYm1CanFNV0FmbVE5clB2cGNaaEZGL2NwcEx5d2tUK1FINStuajZBRVBuME55SzhTTmFINTFOOVUrRm0rZ1hmU0hGZjIraVRGbEJyaVBpM2tsMWVSMTE2bHlSZmREK0RRbkZPMkdRaVlSZ0RiN3V6L0VtRzQ2emdJa3ArOHJvb2l3STM1VFJaWG01eFpJUW81eFJhOXNLSnI0WkpGSGd3d1JpN3hXbFQzNUo2T2pPeUlMNDVrWXdkMDZaZmNHOUNWYVFHNDZPU0pESXVVY01mY0ZLWEp5Q0lHTXc0aGZNOHhDSVBpL1Nkbng3Z2pRSENiVGNCZ3lVS1lPeUdRSWZNYzZHajRJc3g4ZGxCNnZLN0VNVUZnUXFqMUxUWit5TjQySnNpOGk3eFJIdFBBTVdsY1FZSkVjeFNYNGZqWDY2UnBlcUhEVExPRVQ4WCtNU2tCNEVEZlNUb0NMNXMvcUlsZ0wrSjN6MllNaFFXR0VJMzRKUllkbWY1b3pFbElzblNMMFFtYi82RE4rQThEK3RUd09FS1ZiaktBM0ZaT1ZuYWZCcld4L2xpTWF3bWkrV3B3UFNOQUxEZXE5ZlM5NDRZemIyUGxZcE1tY3JIZUw1Y0xNN3pZeXQ4TFZxMGFOR2lSWXNXTFZxMGFOR2lSWXNXTFZxMGFOR2lSWXNXTFZxMGFOR2lSWXNXTGY2RXZvL0I0Q1BkNDJjUSsrczJHUEF3K0V3MURVZTc2bjZpcVZzTStqKzlHajk5ZG1aNk10U1BOSEF6UExScDJRVzQ5TGVKNlhaNzhUOER6SDZ1MGFiQlpLKzZEMXhxN0htN21mKzBIYzJoK2h1Y041eXBCNzlaVC8yeWgwTWV6SmhFNysrb0dPNjYzUmpGaU1ENjRUU0ZtTUJQVGNZdTl2eHdpQjU2V0krYTNUMEVicnRvbmpYMjZ0Y0JPY28rcG5lSkJWSUUvcjRUdnFrM3NZK0wrdVVTR1Q3RU4vV3NHU0cvOXhCWWkwdzliQ2hXV2dCM3pDZ3puc0YrL2ZlSWlOSUVrcHdqQW4rb21mSXdmR05nQnU4aWNEdURFLzE5dHY1dGEwYVo5VFNjT2VHRllJYkdDakVJQm15V1NHZ3hKTkRJVTlSSCtXdG9CdS9WNXZ5NytUOWlrQ1N3NTZCNzdwc2Z3b1o5L0dMN1RpekNvYmZmM0JRTXRPUWlpOXBnQU9aNk5jc2l1Z0FDOWREZEd6OTJBTWZmM3MzMW8yOGxBTDRFa2tCMkp1aFJ5RFRyWDJaYlltaGp4em1LZW5GK01ZSFdoQkJkd21ubk9oQ3Q3OTNaemYveHd6d00ydHo3Q096YzlLaU5lK28zSGREUXhvalJWdkRUNmt4aUxzSGZOZWsvOFdsL2FLOTJrUnBBRS9BZ2EzMUFwTmE0azBEamN0M0xOUUw0UVE5OWlXaVNlY0VjdngyU3dDc2owOEcwTmN1elJCQUtsMFI0dSsvdUJmOTRMNEhYY05XZUFCSkQ5L25SUGl4L3ZLWVJCSnBlMFdsbk9oQnJNS2tBODBZSThiMEVtdmRyUnRCdWVmL0JESzNaSmlNM3hhMldRazdWQ0FJN2FRSU5IL0lVRHVoVUNuY1RPUEJmc0diZ3dBMnQyMktUWmFlOTNjZWU5aWNDalFNaG4wbkMyR0t4d3Q5Tm9QRlphZ2lkbWxpVGhJZStzYU5kZFVlbGJyUG9YUElJekhVZzFzeklDYitmd0cxak13SUJKSWJlc2FQMTlCOCtnd0hJdWVRNUVlTkFJZ2trT1pPTW1zUDlCQm9yZmJGVXVsUUREVzJpUnNLY2I2M2FYSUlScUxrUVlReTJWM2JhMzgzTGxjSWxVa0k4Z0VESHkzZklEeHJhUkNxRU91MnMyaHc0aWpzVWdhekROTk0yOWxsZWd1bXdSaUhlL2o0Q1hmWTJDOGNDUTl0UW5saU9mZ1ZYOXk5NnhaREFyY2tZK0ZUT0pEZnlFTkFHUnRHNlpJaEhFR2dzOVExSWoxYm9nY2JCVlNlSjFkd2FIbmE4QnVtNTdFMWx0N2MzNDFIeWF0eTliU0d2WXBHZUtvcEhFR2hVYVdiMTBCOGE0VWIwOTZLWFQvNkJURG1Mc3Zld3FUd0szTDZFd0k2VEJsOTJ5T1h5MVR2VFU3a1JzbkJIRTBqNlM5UlU3b1pWY3k2UzR0cmZUYUNic004UHNWcWNpOWRRcW1aRjl5QVdLelZ6bWhuWGRHYjh6RjRjQ09yMjhyanhNUVRhV2xSZ3ZEQjlPOUsyYlFQS3RCdWhhbDRFZ1Z5Q08yZ2FhQTlINTQvOFN1U0J6NE1JTkFsUTBEQlk2cjczZldWZUswZy9kaHcxZ1JPWlJXbXhCTjQ2N3QxS0tkR3htRHp5ZVJDQjFMSVRRMXRva1d1bzBPK0N5S1VDQjJrRWk3RnRmZ0JvOWgyayt5SFhyTmFQSTdEL1p3SzFsYm8wdXdaNjhWamJ3d2hqSHh0ZU43MzREeENudDhRK1R3eXZKNURaQU1QYUdSSm9oSXhPV3NOcC96VDZMSURaNTZGayswQU04WElDbWVpT1VDSVE0L1lpdWhaTzIrU2F3b1RFdENZS09KK3piZy85K25JQ1hTa2Y0a2JQcGRubTYvSnpBOU0yWlhOaGVHek1LMkpRbFJabjBCbTltc0F0eHgrT1pHQ1daUlpLeVJXekx5dzBiTWFvZ0EyUXE4bEZnVzYvbXNBK1JZS1dTdml1SVlGRzE2Z253R21iYkYyWWtIemF0TjA3RFdVckY0L2UxblQ0SzRGcVpkQkIwaGs5K3BYZi9rSFRObkdxc0RMdEdPeiszRlFwcE84OEhWclBpd2s4MEJUc0tibkV0SnJqWVpnVlBPMjhoS1JoRUFDL2dSY1RxQ2pBZVp1dWpJRjBBQk5vUERpZUhqRnRJMFBDM2MwdEhWd1JDY3ByQ2VTS1Y3cXNDVUlVUXJHTkMwZCtoSmoyWjE1QzB1bGpJU1FQSTc2V1FMWjhxdjl3SStZU2Jxd3ptNWJVdE0wcEZQRisyd2VnY0U5dHEvOVRBbFZlRmpjNnFnazErb0RvL0VuOGR0UFpIM3dGdWluSVVuWjAyd2l1MzNaVG9OZm5ISGhpbGVSTUtCeFVRLzhwL3dPeGs0bnBzSnJMNmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLWltYWdlLWl0ZW0taW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9TZWxmaWUuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXByb2R1Y3QtZGVzY3JpcHRpb24tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXByb2R1Y3QtZGVzY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXByb2R1Y3Qtc2tpLXJlc29ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaGUgQ2FueW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXByb2R1Y3QtaXRlbS1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjk5OTAgU2tpIExpZnQgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLXByb2R1Y3QtaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWN1dGxlcnlcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWxzLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWFybi1tb3JlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRpc2NvdmVyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZXdlZC1saWtlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlld2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+cmVtb3ZlX3JlZF9leWU8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjEyMzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2VkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1hdGVyaWFsLWljb25zXCI+dGh1bWJfdXA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjE4PC9wPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC12aWV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4qL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQudHN4IiwiaW1wb3J0IHsgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB9ICBmcm9tICcuLi9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQnO1xyXG5pbXBvcnQgKiBhcyBBY3Rpb25zIGZyb20gJy4uL0FjdGlvbnMvQ3VycmVudFVzZXJBY3Rpb25zJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IERpc3BhdGNoIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBzaWduT3V0IH0gZnJvbSAnLi4vQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyh7IGVtYWlsQWRkcmVzcywgdXNlclByb2ZpbGVJbWFnZVVSTCB9OiBDdXJyZW50VXNlclN0b3JlU3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZW1haWxBZGRyZXNzLFxyXG4gICAgICAgIHVzZXJQcm9maWxlSW1hZ2VVUkwsXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2g6IERpc3BhdGNoPEFjdGlvbnMuQ3VycmVudFVzZXJBY3Rpb24+ICkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBnZXRDdXJyZW50VXNlck5ldzogKCkgPT4gZGlzcGF0Y2goQWN0aW9ucy5nZXRDdXJyZW50VXNlck5ldygpKSxcclxuICAgICAgICBzaWduT3V0OiAoKSA9PiBkaXNwYXRjaChBY3Rpb25zLnNpZ25PdXQoKSlcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKE5hdmlnYXRpb25CYXJDb21wb25lbnQgYXMgYW55IGFzIFJlYWN0LlNGQyk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29udGFpbmVycy9OYXZpZ2F0aW9uQmFyQ29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IEdldEFudGlGb3JnZXJ5VG9rZW4gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgZW1haWxBZGRyZXNzOiBzdHJpbmcsXHJcbiAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBzdHJpbmcsXHJcbiAgICBnZXRDdXJyZW50VXNlck5ldzogKCkgPT4gdm9pZCxcclxuICAgIHNpZ25PdXQ6ICgpID0+IHZvaWQsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQmFyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBvYmplY3Q+IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5nZXRDdXJyZW50VXNlckYgPSB0aGlzLmdldEN1cnJlbnRVc2VyRi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuYXV0aG9yaXplVXNlciA9IHRoaXMuYXV0aG9yaXplVXNlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Q3VycmVudFVzZXJGKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9HZXRDdXJyZW50VXNlclwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgZGF0YTogR2V0QW50aUZvcmdlcnlUb2tlbih7fSksXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgYXV0aG9yaXplVXNlcigpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB1cmw6IFwiL1VzZXIvQXV0aG9yaXplQ3VycmVudFVzZXJcIixcclxuICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IEdldEFudGlGb3JnZXJ5VG9rZW4oe30pLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMuZ2V0Q3VycmVudFVzZXJOZXcoKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGVtYWlsQWRkcmVzcywgdXNlclByb2ZpbGVJbWFnZVVSTCwgZ2V0Q3VycmVudFVzZXJOZXcsIHNpZ25PdXQgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXYgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyMDJCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAudXNlci1wcm9maWxlLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAudXNlci1wcm9maWxlLW5hbWU6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC5mYS1zaWduLW91dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgI1VzZXJQcm9maWxlUGljdHVyZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLnNpZ24taW4tdXAtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLnNpZ24taW4tdXAtY29udGFpbmVyIC5zZXBhcmF0b3J7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg0LCAxODQsIDE4NCwgMC45MSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgbmF2Lm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMjU1LDI1NSwyNTUsIDEpJyBzdHJva2Utd2lkdGg9JzInIHN0cm9rZS1saW5lY2FwPSdyb3VuZCcgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBkPSdNNCA4aDI0TTQgMTZoMjRNNCAyNGgyNCcvJTNFJTNDL3N2ZyUzRVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5uYXZiYXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLW1vei1ib3gtc2hhZG93OiAwcHggMXB4IDEwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDFweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5EaXNjb3ZlciBNb3VudGFpbiBSZXNvcnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVGV4dFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUZXh0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5lbWFpbEFkZHJlc3MgIT0gXCJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiVXNlclByb2ZpbGVQaWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvSU1HXzIwMTcxMjMwXzEwMjgwOS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiVXNlckZpcnN0TmFtZVwiIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+e3RoaXMucHJvcHMuZW1haWxBZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2lnbi1vdXRcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBvbkNsaWNrPXtzaWduT3V0fT48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKjxwIGlkPVwiVXNlckxhc3ROYW1lXCIgY2xhc3NOYW1lPVwidXNlci1wcm9maWxlLW5hbWVcIj5NY0d1aXJlPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24taW4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL0xvZ2luXCI+U2lnbiBJbjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXBhcmF0b3JcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZ24tdXAtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9Vc2VyL1NpZ25VcFwiPlNpZ24gVXA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7LypcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLnNpZ25PdXRBc3luY30+U2lnbiBPdXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmdldEN1cnJlbnRVc2VyRn0+R2V0IEN1cnJlbnQgVXNlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuYXV0aG9yaXplVXNlcn0+QXV0aG9yaXplIFVzZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvTmF2aWdhdGlvbkJhckNvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBjb25zdGFudHMgZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBDdXJyZW50VXNlclN0b3JlU3RhdGUgfSBmcm9tICcuLi9UeXBlcy9DdXJyZW50VXNlclN0b3JlU3RhdGUnXHJcbmltcG9ydCBHZXRBbnRpRm9yZ2VyeVRva2VuIGZyb20gJy4uL01pc2MvR2V0QW50aUZvcmdlcnlUb2tlbidcclxuaW1wb3J0IHsgR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhIH0gZnJvbSAnLi4vTWlzYy9HZXRBbnRpRm9yZ2VyeVRva2VuJ1xyXG5pbXBvcnQgKiBhcyAkIGZyb20gJ2pxdWVyeSdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgU0VUX0NVUlJFTlRfVVNFUiB9IGZyb20gJy4uL0NvbnN0YW50cy9DdXJyZW50VXNlckNvbnN0YW50cyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXRDdXJyZW50VXNlciB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0VUX0NVUlJFTlRfVVNFUlxyXG4gICAgcGF5bG9hZDogc3RyaW5nLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU2lnbk91dCB7XHJcbiAgICB0eXBlOiBjb25zdGFudHMuU0lHTl9PVVRcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ3VycmVudFVzZXJBY3Rpb24gPSBTZXRDdXJyZW50VXNlciB8IFNpZ25PdXRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50VXNlck5ldygpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcclxuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICd3YWl0Jyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXJsOiBcIi9Vc2VyL0dldEN1cnJlbnRVc2VyXCIsXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuXCI6ICQoXCJbbmFtZT0nX19SZXF1ZXN0VmVyaWZpY2F0aW9uVG9rZW4nXVwiKS52YWwoKS8vR2V0QW50aUZvcmdlcnlUb2tlbldpdGhvdXREYXRhKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlc3BvbnNlLnJlc3BvbnNlVGV4dClcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TRVRfQ1VSUkVOVF9VU0VSLCBwYXlsb2FkOiByZXNwb25zZS5yZXNwb25zZVRleHQgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogY29uc3RhbnRzLlNFVF9DVVJSRU5UX1VTRVIsIHBheWxvYWQ6IFwie31cIiB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5jc3MoJ2N1cnNvcicsICdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKSB7XHJcbiAgICB2YXIgdGVzdCA9IFwiXCI7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XHJcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnd2FpdCcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVybDogXCIvVXNlci9TaWduT3V0QXN5bmNcIixcbiAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICAgICAgLy9kYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAvL2NvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIlJlcXVlc3RWZXJpZmljYXRpb25Ub2tlblwiOiAkKFwiW25hbWU9J19fUmVxdWVzdFZlcmlmaWNhdGlvblRva2VuJ11cIikudmFsKClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVzdEFnYWluID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IGNvbnN0YW50cy5TSUdOX09VVCB9KTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKHJlcXVlc3QsIHN0YXR1cywgZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsID0gcmVxdWVzdC5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcImVycm9yXCIgKyB2YWwpO1xyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQWN0aW9ucy9DdXJyZW50VXNlckFjdGlvbnMudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgeyBkZWZhdWx0IGFzIHRodW5rIH0gZnJvbSBcInJlZHV4LXRodW5rXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhckNvbnRhaW5lciBmcm9tICcuLi9Db250YWluZXJzL05hdmlnYXRpb25CYXJDb250YWluZXInO1xyXG5pbXBvcnQgeyBVc2VyUmVkdWNlciB9IGZyb20gJy4uL1JlZHVjZXJzL1VzZXJSZWR1Y2VyJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJTdG9yZVN0YXRlIH0gZnJvbSAnLi4vVHlwZXMvQ3VycmVudFVzZXJTdG9yZVN0YXRlJztcclxuaW1wb3J0ICogYXMgQWN0aW9ucyBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCBSZWR1eFByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZSc7XHJcblxyXG5jb25zdCBtaWRkbGVXYXJlID0gYXBwbHlNaWRkbGV3YXJlKHRodW5rKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDdXJyZW50VXNlclN0b3JlID0gY3JlYXRlU3RvcmU8Q3VycmVudFVzZXJTdG9yZVN0YXRlPihVc2VyUmVkdWNlciwge1xyXG4gICAgZW1haWxBZGRyZXNzOiBcIlwiLFxyXG4gICAgdXNlclByb2ZpbGVJbWFnZVVSTDogXCJcIixcclxufSwgbWlkZGxlV2FyZSk7XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1N0b3Jlcy9DdXJyZW50VXNlclN0b3JlLnRzeCIsImltcG9ydCB7IEN1cnJlbnRVc2VyU3RvcmVTdGF0ZSB9IGZyb20gJy4uL1R5cGVzL0N1cnJlbnRVc2VyU3RvcmVTdGF0ZSdcclxuaW1wb3J0IHsgTE9HSU4sIFRPR0dMRV9QQVNTV09SRF9SRVZFQUwgfSBmcm9tICcuLi9Db25zdGFudHMvVXNlckxvZ2luQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgQ3VycmVudFVzZXJBY3Rpb24gfSBmcm9tICcuLi9BY3Rpb25zL0N1cnJlbnRVc2VyQWN0aW9ucyc7XHJcbmltcG9ydCB7IFNFVF9DVVJSRU5UX1VTRVIsIFNJR05fT1VUIH0gZnJvbSAnLi4vQ29uc3RhbnRzL0N1cnJlbnRVc2VyQ29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBVc2VyUmVkdWNlcihzdGF0ZTogQ3VycmVudFVzZXJTdG9yZVN0YXRlLCBhY3Rpb246IEN1cnJlbnRVc2VyQWN0aW9uKTogQ3VycmVudFVzZXJTdG9yZVN0YXRlIHtcclxuICAgIHZhciB0ZXN0ID0gXCJcIjtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6IHtcclxuICAgICAgICAgICAgdmFyIGVtYWlsQWRkcmVzcyA9IGFjdGlvbi5wYXlsb2FkW1wiZW1haWxcIl07XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczogZW1haWxBZGRyZXNzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBTSUdOX09VVDoge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbEFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB1c2VyUHJvZmlsZUltYWdlVVJMOiBcIlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0YXRlO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1JlZHVjZXJzL1VzZXJSZWR1Y2VyLnRzeCJdLCJzb3VyY2VSb290IjoiIn0=