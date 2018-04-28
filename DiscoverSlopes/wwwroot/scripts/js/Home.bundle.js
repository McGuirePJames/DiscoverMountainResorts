webpackJsonp([1],{

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var ReactDOM = __webpack_require__(40);
var HOCHome_1 = __webpack_require__(308);
ReactDOM.render(React.createElement(HOCHome_1.HOCHome, null), document.getElementById('MountPoint'));


/***/ }),

/***/ 308:
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
var NavigationBarComponent_1 = __webpack_require__(87);
var CarouselComponent_1 = __webpack_require__(309);
var GoogleMapsComponent_1 = __webpack_require__(325);
var TrendingItemContainerComponent_1 = __webpack_require__(326);
var HOCHome = /** @class */ (function (_super) {
    __extends(HOCHome, _super);
    function HOCHome() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HOCHome.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(NavigationBarComponent_1.NavigationBarComponent, null),
            React.createElement(CarouselComponent_1.CarouselComponent, null),
            React.createElement(GoogleMapsComponent_1.GoogleMapsComponent, null),
            React.createElement(TrendingItemContainerComponent_1.TrendingItemContainerComponent, null)));
    };
    return HOCHome;
}(React.Component));
exports.HOCHome = HOCHome;


/***/ }),

/***/ 309:
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
var react_slick_1 = __webpack_require__(152);
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
                    __html: "\n                        #CarouselComponent {\n                            border-bottom: solid;\n                        }\n                        .carousel-container{\n                            background-color: #05202B; \n                        }\n                        #CarouselComponent .welcome-container {\n                            position: relative;\n                            display: flex;\n                        }\n\n                        #CarouselComponent .welcome-message {\n                            position: absolute;\n                            z-index: 10000;\n                            top: 50%;\n                            left: 50%;\n                            transform: translate(-50%, -50%);\n                            background-color: rgba(57, 57, 57, .6);\n                            height: 40%;\n                            width: 40%;\n                            display: flex;\n                            justify-content: center;\n                            align-items: center;\n                        }\n\n                            #CarouselComponent .welcome-message p {\n                                color: white;\n                                font-size: 15pt;\n                                margin-bottom: 0px;\n                            }\n\n                        #CarouselComponent .slick-dots {\n                            background-color: rgb(5, 32, 43);\n                            height: 35px;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                            #CarouselComponent .slick-dots li button::before {\n                                color: white;\n                                opacity: 0.6;\n                            }\n\n                            #CarouselComponent .slick-dots .slick-active button::before {\n                                opacity: 1.00;\n                            }\n                        .slick-arrow {\n                            margin-top: -30px !important;\n                        }\n                        \n                        .slick-prev:before, .slick-next:before {\n                            font-size: 40px !important;\n                        }\n                        \n                        .slick-prev {\n                            margin-left: 40px !important;\n                            z-index: 100;\n                            color: red;\n                            background-color: red;\n                        }\n                        \n                        .slick-next {\n                            margin-right: 60px;\n                        }\n                        .slick-slide{\n                            height: 300px !important;\n                        }\n                        .slick-slide div{\n                            height: inherit;\n                        }\n                        .slick-slide .welcome-image{\n                          background-position: center center;\n                          background-repeat: no-repeat;\n                          background-image: url('https://storagewms.blob.core.windows.net/profilepictures/Brighton.jpg');\n                        }\n                "
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

/***/ 325:
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
var $ = __webpack_require__(46);
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

/***/ 326:
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
var TrendingItemComponent_1 = __webpack_require__(327);
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

/***/ 327:
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
var FontAwesome = __webpack_require__(154);
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
                                React.createElement("p", null, "9990 Ski Lift "),
                                React.createElement("div", { className: "trending-product-icon-container" },
                                    React.createElement("i", { className: "fa fa-cutlery", "aria-hidden": "true" }))))),
                    React.createElement("div", { className: "trending-product-view" },
                        React.createElement("div", null, "View"))))));
    };
    return TrendingItemComponent;
}(React.Component));
exports.TrendingItemComponent = TrendingItemComponent;


/***/ }),

/***/ 87:
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


/***/ })

},[208]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvRW50cnkvSG9tZUVudHJ5LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9IT0NIb21lLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9DYXJvdXNlbENvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvR29vZ2xlTWFwc0NvbXBvbmVudC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudHMvVHJlbmRpbmdJdGVtQ29udGFpbmVyQ29tcG9uZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQudHN4Iiwid2VicGFjazovLy8uL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFZOztBQUNaLG1DQUE4QjtBQUM5Qix1Q0FBcUM7QUFFckMseUNBQStDO0FBRS9DLFFBQVEsQ0FBQyxNQUFNLENBQ1gsb0JBQUMsaUJBQU8sT0FBRSxFQUNWLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQ3hDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURCxtQ0FBK0I7QUFDL0IsdURBQTZFO0FBQzdFLG1EQUFtRTtBQUNuRSxxREFBdUU7QUFFdkUsZ0VBQTZGO0FBRTdGO0lBQTZCLDJCQUFlO0lBQTVDOztJQWNBLENBQUM7SUFiRyx3QkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUNIO1lBQ0ksb0JBQUMsK0NBQXNCLE9BQ0U7WUFDekIsb0JBQUMscUNBQWlCLE9BQ0U7WUFDcEIsb0JBQUMseUNBQW1CLE9BQ0U7WUFDdEIsb0JBQUMsK0RBQThCLE9BQUUsQ0FDL0IsQ0FDVDtJQUNMLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxDQWQ0QixLQUFLLENBQUMsU0FBUyxHQWMzQztBQWRZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BwQixtQ0FBOEI7QUFDOUIsNkNBQWlDO0FBSWpDO0lBQXVDLHFDQUFlO0lBQXREOztJQXFKQSxDQUFDO0lBcEpHLGtDQUFNLEdBQU47UUFDSSxJQUFJLFFBQVEsR0FBRztZQUNYLGFBQWEsRUFBRSxJQUFJO1lBQ25CLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLElBQUk7WUFDZCxLQUFLLEVBQUUsR0FBRztZQUNWLFlBQVksRUFBRSxDQUFDO1lBQ2YsY0FBYyxFQUFFLENBQUM7WUFDakIsTUFBTSxFQUFFLElBQUk7WUFDWixRQUFRLEVBQUUsS0FBSztZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFlBQVksRUFBRSxJQUFJO1lBQ2xCLEtBQUssRUFBRSxJQUFJO1NBQ2QsQ0FBQztRQUNGLE9BQU8sQ0FDSCw2QkFBSyxFQUFFLEVBQUMsbUJBQW1CO1lBQ3ZCLCtCQUFPLHVCQUF1QixFQUFFO29CQUM1QixNQUFNLEVBQUUsZ3VHQTRFWDtpQkFBQyxHQUFJO1lBQ04sOEJBQU0sR0FBRyxFQUFDLFlBQVksRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLElBQUksRUFBQyw4REFBOEQsR0FBRztZQUM3Ryw4QkFBTSxHQUFHLEVBQUMsWUFBWSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsSUFBSSxFQUFDLG9FQUFvRSxHQUFHO1lBQ25ILDZCQUFLLFNBQVMsRUFBQyxvQkFBb0I7Z0JBRS9CLG9CQUFDLHFCQUFNLGVBQUssUUFBUTtvQkFDaEIsNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsNkJBQUssU0FBUyxFQUFDLGVBQWUsR0FDeEI7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGlCQUFpQjs0QkFDNUIsK0NBQW9CLENBQ2xCLENBQ0o7b0JBQ04sNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsNkJBQUssU0FBUyxFQUFDLGVBQWUsR0FDeEI7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGlCQUFpQjs0QkFDNUIsK0NBQW9CLENBQ2xCLENBQ0o7b0JBQ04sNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsNkJBQUssU0FBUyxFQUFDLGVBQWUsR0FDeEI7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGlCQUFpQjs0QkFDNUIsK0NBQW9CLENBQ2xCLENBQ0o7b0JBQ04sNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsNkJBQUssU0FBUyxFQUFDLGVBQWUsR0FDeEI7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGlCQUFpQjs0QkFDNUIsK0NBQW9CLENBQ2xCLENBQ0o7b0JBQ04sNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsNkJBQUssU0FBUyxFQUFDLGVBQWUsR0FDeEI7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGlCQUFpQjs0QkFDNUIsK0NBQW9CLENBQ2xCLENBQ0o7b0JBQ04sNkJBQUssU0FBUyxFQUFDLG1CQUFtQjt3QkFDOUIsNkJBQUssU0FBUyxFQUFDLGVBQWUsR0FDeEI7d0JBQ04sNkJBQUssU0FBUyxFQUFDLGlCQUFpQjs0QkFDNUIsK0NBQW9CLENBQ2xCLENBQ0osQ0FDRCxDQUNQLENBRUosQ0FDVDtJQUNMLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQ0FySnNDLEtBQUssQ0FBQyxTQUFTLEdBcUpyRDtBQXJKWSw4Q0FBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTDlCLG1DQUE4QjtBQUM5QixnQ0FBMkI7QUFTM0IsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztBQUUxQztJQUF5Qyx1Q0FBeUI7SUFFOUQsNkJBQVksS0FBSztRQUFqQixZQUNJLGtCQUFNLEtBQUssQ0FBQyxTQVdmO1FBVEcsS0FBSSxDQUFDLEtBQUssR0FBRztZQUNULFNBQVMsRUFBRSxFQUFFO1NBQ2hCO1FBQ0QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUMzQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDO1FBQ3ZDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDM0MsS0FBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUM7UUFDL0QsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUNuRCxLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDOztJQUNyRCxDQUFDO0lBQ0QsdUNBQVMsR0FBVDtRQUNJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuQixDQUFDO0lBQ0QsMENBQVksR0FBWixVQUFhLEdBQVcsRUFBRSxHQUFXO1FBQ2pDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDaEMsUUFBUSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFO1lBQ2hDLElBQUksRUFBRTtnQkFDRixJQUFJLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUNyQyxVQUFVLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDO2dCQUMzQyxHQUFHLEVBQUUsMkVBQTJFO2FBQ25GO1lBQ0QsR0FBRyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQ3JCLEtBQUssRUFBRSxhQUFhO1NBQ3ZCLENBQUM7UUFDRixPQUFPLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBQ0ssaURBQW1CLEdBQXpCOzs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTs0QkFDakMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0NBQ2xDLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7NkJBQ3ZEO3dCQUNMLENBQUMsQ0FBQzs7d0JBSkYsU0FJRTs7Ozs7S0FDTDtJQUNELDJDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDVixVQUFVLEVBQUU7Z0JBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztZQUNELEdBQUcsRUFBRSwwQkFBMEI7WUFDL0IsSUFBSSxFQUFFLEtBQUs7WUFDWCxPQUFPLEVBQUUsVUFBVSxRQUFRO2dCQUN2QixPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDakMsQ0FBQztZQUNELFFBQVEsRUFBRTtnQkFDTixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2QyxDQUFDO1NBQ0osQ0FBQztJQUVOLENBQUM7SUFDRCx1Q0FBUyxHQUFULFVBQVUsR0FBVyxFQUFFLEdBQVc7UUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxRQUFRLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7WUFDaEMsSUFBSSxFQUFFO2dCQUNGLElBQUksRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQ3JDLFVBQVUsRUFBRSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUM7Z0JBQzNDLEdBQUcsRUFBRSwyRUFBMkU7YUFDbkY7WUFDRCxHQUFHLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDckIsS0FBSyxFQUFFLGFBQWE7U0FDdkIsQ0FBQztJQUNOLENBQUM7SUFDRCxzQkFBc0I7SUFFdEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsK0ZBQStGO0lBQy9GLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsK0ZBQStGO0lBQy9GLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsK0ZBQStGO0lBQy9GLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFFBQVE7SUFDUix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxxQkFBcUI7SUFDckIsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QiwrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsK0NBQStDO0lBQy9DLCtDQUErQztJQUMvQywrQ0FBK0M7SUFDL0MsOENBQThDO0lBQzlDLFFBQVE7SUFDUixnREFBZ0Q7SUFDaEQsMERBQTBEO0lBQzFELHlDQUF5QztJQUN6QyxpRUFBaUU7SUFDakUscUJBQXFCO0lBQ3JCLHFEQUFxRDtJQUNyRCwyREFBMkQ7SUFDM0Qsc0RBQXNEO0lBQ3RELGtHQUFrRztJQUNsRyxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLCtDQUErQztJQUMvQywrQkFBK0I7SUFDL0Isa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixTQUFTO0lBQ1Qsb0RBQW9EO0lBQ3BELG9DQUFvQztJQUNwQyx5REFBeUQ7SUFDekQsUUFBUTtJQUNSLHlDQUF5QztJQUN6QyxtRkFBbUY7SUFDbkYsd0dBQXdHO0lBRXhHLEdBQUc7SUFFSCxxQ0FBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDbkUsSUFBSSxFQUFFLENBQUM7WUFDUCxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRTtTQUNoRCxDQUFDO0lBQ04sQ0FBQztJQUNELCtDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBRS9CLENBQUM7SUFDRCxvQ0FBTSxHQUFOO1FBQ0ksT0FBTyxDQUNILDZCQUFLLEVBQUUsRUFBQyxxQkFBcUIsRUFBQyxTQUFTLEVBQUMsS0FBSztZQUN6QyxpQ0FBUyxTQUFTLEVBQUMsdUNBQXVDO2dCQUN0RCw2QkFBSyxTQUFTLEVBQUMsT0FBTztvQkFDbEI7O3dCQUFRLHNDQUFXOzBDQUFtQixDQUNwQztnQkFDTiw2QkFBSyxTQUFTLEVBQUMsa0JBQWtCLEdBRTNCO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxhQUFhO29CQUN4Qjt3QkFBRyx5Q0FBYzs7d0JBQTBDLDBDQUFlOzt3QkFBMkIsdUNBQVk7Z0ZBQXlELENBQ3hLLENBQ0E7WUFDVixpQ0FBUyxTQUFTLEVBQUMsb0JBQW9CLEVBQUMsRUFBRSxFQUFDLEtBQUssR0FFdEMsQ0FDUixDQUVULENBQUM7SUFDTixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQUFDLENBaEx3QyxLQUFLLENBQUMsU0FBUyxHQWdMdkQ7QUFoTFksa0RBQW1CO0FBZ0wvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1TEYsbUNBQStCO0FBQy9CLHVEQUEyRTtBQUUzRTtJQUFvRCxrREFBZTtJQUFuRTs7SUFpQkEsQ0FBQztJQWhCRywrQ0FBTSxHQUFOO1FBQ0ksT0FBTyxDQUNILDZCQUFLLFNBQVMsRUFBQyxtQ0FBbUM7WUFDOUMsNkJBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hCLG9CQUFDLDZDQUFxQixPQUFHO2dCQUN6QixvQkFBQyw2Q0FBcUIsT0FBRztnQkFDekIsb0JBQUMsNkNBQXFCLE9BQUc7Z0JBQ3pCLG9CQUFDLDZDQUFxQixPQUFHO2dCQUN6QixvQkFBQyw2Q0FBcUIsT0FBRztnQkFDekIsb0JBQUMsNkNBQXFCLE9BQUc7Z0JBQ3pCLG9CQUFDLDZDQUFxQixPQUFHO2dCQUN6QixvQkFBQyw2Q0FBcUIsT0FBRyxDQUN2QixDQUNKLENBQ1Q7SUFDTCxDQUFDO0lBQ0wscUNBQUM7QUFBRCxDQUFDLENBakJtRCxLQUFLLENBQUMsU0FBUyxHQWlCbEU7QUFqQlksd0VBQThCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIM0MsbUNBQStCO0FBQy9CLElBQUksV0FBVyxHQUFHLG1CQUFPLENBQUMsR0FBbUIsQ0FBQyxDQUFDO0FBRy9DO0lBQTJDLHlDQUFlO0lBQTFEOztJQXVDQSxDQUFDO0lBdENHLHNDQUFNLEdBQU47UUFDSSxPQUFPLENBQ0gsNkJBQUssU0FBUyxFQUFDLG9EQUFvRDtZQUMvRCw2QkFBSyxTQUFTLEVBQUMsZUFBZTtnQkFDMUIsNkJBQUssU0FBUyxFQUFDLEtBQUs7b0JBQ2hCLDZCQUFLLFNBQVMsRUFBQywrQkFBK0I7d0JBQzFDLDZCQUFLLFNBQVMsRUFBQywwQ0FBMEM7NEJBQ3JELDZCQUFLLEdBQUcsRUFBQyw0aEpBQTRoSixHQUFHLENBQ3RpSjt3QkFDTiw2QkFBSyxTQUFTLEVBQUMscUNBQXFDOzRCQUNoRCw2QkFBSyxHQUFHLEVBQUMscUVBQXFFLEdBQUcsQ0FDL0UsQ0FDSixDQUNKO2dCQUNOLDZCQUFLLFNBQVMsRUFBQyxRQUFRO29CQUNuQiw2QkFBSyxTQUFTLEVBQUMsd0NBQXdDO3dCQUNuRCw2QkFBSyxTQUFTLEVBQUMsOEJBQThCOzRCQUN6Qyw2QkFBSyxTQUFTLEVBQUMsNkJBQTZCO2dDQUN4Qyw2Q0FBa0IsQ0FDaEI7NEJBQ04sNkJBQUssU0FBUyxFQUFDLDRCQUE0QjtnQ0FDdkMsZ0RBQXFCO2dDQUNyQiw2QkFBSyxTQUFTLEVBQUMsaUNBQWlDO29DQUM1QywyQkFBRyxTQUFTLEVBQUMsZUFBZSxpQkFBYSxNQUFNLEdBQUssQ0FDbEQsQ0FDSixDQUNKLENBRUo7b0JBRU4sNkJBQUssU0FBUyxFQUFDLHVCQUF1Qjt3QkFDbEMsd0NBQWUsQ0FDYixDQUNKLENBQ0osQ0FDSixDQUNUO0lBQ0wsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxDQXZDMEMsS0FBSyxDQUFDLFNBQVMsR0F1Q3pEO0FBdkNZLHNEQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmxDLG1DQUE4QjtBQUU5QjtJQUE0QywwQ0FBZTtJQUEzRDs7SUF5RkEsQ0FBQztJQXhGRyx1Q0FBTSxHQUFOO1FBQ0ksT0FBTyxDQUdILDZCQUFLLFNBQVMsRUFBQyxzQ0FBc0M7WUFDakQsK0JBQU8sdUJBQXVCLEVBQUU7b0JBQzVCLE1BQU0sRUFBRSw0aEdBMERIO2lCQUFDLEdBQUk7WUFDZCwyQkFBRyxTQUFTLEVBQUMsY0FBYyxFQUFDLElBQUksRUFBQyxHQUFHLGdDQUE4QjtZQUNsRSxnQ0FBUSxTQUFTLEVBQUMsZ0JBQWdCLEVBQUMsSUFBSSxFQUFDLFFBQVEsaUJBQWEsVUFBVSxpQkFBYSxhQUFhLG1CQUFlLFlBQVksbUJBQWUsT0FBTyxnQkFBWSxtQkFBbUI7Z0JBQzdLLDhCQUFNLFNBQVMsRUFBQyxxQkFBcUIsR0FBUSxDQUN4QztZQUNULDZCQUFLLFNBQVMsRUFBQywwQkFBMEIsRUFBQyxFQUFFLEVBQUMsWUFBWTtnQkFDckQsNEJBQUksU0FBUyxFQUFDLG9CQUFvQixHQUU3QjtnQkFDTCw4QkFBTSxTQUFTLEVBQUMsYUFBYTtvQkFDekIsNkJBQUssU0FBUyxFQUFDLHdCQUF3Qjt3QkFDbkMsNkJBQUssU0FBUyxFQUFDLDhCQUE4Qjs0QkFDekMsNkJBQUssRUFBRSxFQUFDLG9CQUFvQixFQUFDLEdBQUcsRUFBQyxrRkFBa0YsR0FBRyxDQUNwSDt3QkFDTiw2QkFBSyxTQUFTLEVBQUMsNkJBQTZCOzRCQUN4QywyQkFBRyxFQUFFLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFBQyxtQkFBbUIsWUFBVTs0QkFDN0QsMkJBQUcsRUFBRSxFQUFDLGNBQWMsRUFBQyxTQUFTLEVBQUMsbUJBQW1CLGNBQVksQ0FDNUQsQ0FDSixDQUNILENBQ0wsQ0FDSixDQUNUO0lBQ0wsQ0FBQztJQUNMLDZCQUFDO0FBQUQsQ0FBQyxDQXpGMkMsS0FBSyxDQUFDLFNBQVMsR0F5RjFEO0FBekZZLHdEQUFzQiIsImZpbGUiOiJIb21lLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0ICogYXMgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xyXG5cclxuaW1wb3J0IHsgSE9DSG9tZSB9IGZyb20gJy4uL0NvbXBvbmVudHMvSE9DSG9tZSdcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxIT0NIb21lLz4sXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTW91bnRQb2ludCcpXHJcbilcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0VudHJ5L0hvbWVFbnRyeS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25CYXJDb21wb25lbnQgfSBmcm9tICcuLi9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQnXHJcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9DYXJvdXNlbENvbXBvbmVudCdcclxuaW1wb3J0IHsgR29vZ2xlTWFwc0NvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvR29vZ2xlTWFwc0NvbXBvbmVudCdcclxuaW1wb3J0IHsgVHJlbmRpbmdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQnXHJcbmltcG9ydCB7IFRyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4uL0NvbXBvbmVudHMvVHJlbmRpbmdJdGVtQ29udGFpbmVyQ29tcG9uZW50J1xyXG5cclxuZXhwb3J0IGNsYXNzIEhPQ0hvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJhckNvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDwvTmF2aWdhdGlvbkJhckNvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbENvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxDb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICA8R29vZ2xlTWFwc0NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDwvR29vZ2xlTWFwc0NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db250YWluZXJDb21wb25lbnQvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL0hPQ0hvbWUudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LXNsaWNrXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBhY2Nlc3NpYmlsaXR5OiB0cnVlLFxyXG4gICAgICAgICAgICBkb3RzOiB0cnVlLFxyXG4gICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxyXG4gICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDgwMDAsXHJcbiAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgcGF1c2VPbkhvdmVyOiB0cnVlLFxyXG4gICAgICAgICAgICBzd2lwZTogdHJ1ZSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJDYXJvdXNlbENvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2Fyb3VzZWwtY29udGFpbmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjAyQjsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC53ZWxjb21lLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLndlbGNvbWUtbWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LCA1NywgNTcsIC42KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjQ2Fyb3VzZWxDb21wb25lbnQgLndlbGNvbWUtbWVzc2FnZSBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAuc2xpY2stZG90cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNSwgMzIsIDQzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI0Nhcm91c2VsQ29tcG9uZW50IC5zbGljay1kb3RzIGxpIGJ1dHRvbjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICNDYXJvdXNlbENvbXBvbmVudCAuc2xpY2stZG90cyAuc2xpY2stYWN0aXZlIGJ1dHRvbjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxLjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stYXJyb3cge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLXByZXY6YmVmb3JlLCAuc2xpY2stbmV4dDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1wcmV2IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2stbmV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLXNsaWRle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljay1zbGlkZSBkaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNrLXNsaWRlIC53ZWxjb21lLWltYWdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL0JyaWdodG9uLmpwZycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfX0gLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L2doL2tlbndoZWVsZXIvc2xpY2tAMS44LjEvc2xpY2svc2xpY2suY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L2doL2tlbndoZWVsZXIvc2xpY2tAMS44LjEvc2xpY2svc2xpY2stdGhlbWUuY3NzXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udGFpbmVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3ZWxjb21lLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2VsY29tZS1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+IEhlbGxvIFdvcmxkIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL0NvbXBvbmVudHMvQ2Fyb3VzZWxDb21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzICQgZnJvbSAnanF1ZXJ5J1xyXG5pbXBvcnQgeyBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5kZWNsYXJlIHZhciBnb29nbGU6IGFueVxyXG5kZWNsYXJlIHZhciBNYXJrZXJDbHVzdGVyZXI6IGFueVxyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gICAgaW50ZXJmYWNlIFdpbmRvdyB7IEdvb2dsZU1hcDogYW55OyB9XHJcbn1cclxud2luZG93Lkdvb2dsZU1hcCA9IHdpbmRvdy5Hb29nbGVNYXAgfHwge307XHJcblxyXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwc0NvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIGFueT4ge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBnb29nbGVNYXA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWxlcnRVc2VyID0gdGhpcy5hbGVydFVzZXIuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxvYWRNYXAgPSB0aGlzLmxvYWRNYXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmFkZE1hcmtlciA9IHRoaXMuYWRkTWFya2VyLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5hZGRTa2lSZXNvcnRNYXJrZXJzID0gdGhpcy5hZGRTa2lSZXNvcnRNYXJrZXJzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5nZXRTa2lSZXNvcnRzID0gdGhpcy5nZXRTa2lSZXNvcnRzLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXJrZXIgPSB0aGlzLmNyZWF0ZU1hcmtlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgYWxlcnRVc2VyKCkge1xyXG4gICAgICAgIGFsZXJ0KCdoZWxsbycpO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlTWFya2VyKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xyXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHsgbGF0OiBsYXQsIGxuZzogbG5nIH0sXHJcbiAgICAgICAgICAgIGljb246IHtcclxuICAgICAgICAgICAgICAgIHNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcwLCA0NS41MCksXHJcbiAgICAgICAgICAgICAgICBzY2FsZWRTaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MCwgNDUuNTApLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL01vdW50YWluSWNvbi5wbmdcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtYXA6IHdpbmRvdy5Hb29nbGVNYXAsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkhlbGxvIFdvcmxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBtYXJrZXI7XHJcbiAgICB9XHJcbiAgICBhc3luYyBhZGRTa2lSZXNvcnRNYXJrZXJzKCkge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuZ2V0U2tpUmVzb3J0cygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE1hcmtlcihkYXRhW2ldLmxhdGl0dWRlLCBkYXRhW2ldLmxvbmdpdHVkZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgZ2V0U2tpUmVzb3J0cygpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgYmVmb3JlU2VuZDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnaHRtbCcpLmNzcygnY3Vyc29yJywgJ3dhaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXJsOiBcIi9Ta2lSZXNvcnQvR2V0U2tpUmVzb3J0c1wiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAkKCdodG1sJykuY3NzKCdjdXJzb3InLCAnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICBhZGRNYXJrZXIobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IGxhdCwgbG5nOiBsbmcgfSxcclxuICAgICAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzAsIDQ1LjUwKSxcclxuICAgICAgICAgICAgICAgIHNjYWxlZFNpemU6IG5ldyBnb29nbGUubWFwcy5TaXplKDcwLCA0NS41MCksXHJcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvTW91bnRhaW5JY29uLnBuZ1wiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1hcDogd2luZG93Lkdvb2dsZU1hcCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiSGVsbG8gV29ybGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICAvL2FkZE1hcmtlckNsdXN0ZXIoKSB7XHJcblxyXG4gICAgLy8gICAgdmFyIGNsdXN0ZXJTdHlsZXMgPSBbXHJcbiAgICAvLyAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAvLyAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9Nb3VudGFpbkljb24ucG5nXCIsXHJcbiAgICAvLyAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAvLyAgICAgICAgICAgIHdpZHRoOiA1MFxyXG4gICAgLy8gICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAvLyAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9Nb3VudGFpbkljb24ucG5nXCIsXHJcbiAgICAvLyAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAvLyAgICAgICAgICAgIHdpZHRoOiA1MFxyXG4gICAgLy8gICAgICAgIH0sXHJcbiAgICAvLyAgICAgICAge1xyXG4gICAgLy8gICAgICAgICAgICB0ZXh0Q29sb3I6ICd3aGl0ZScsXHJcbiAgICAvLyAgICAgICAgICAgIHVybDogXCJodHRwczovL3N0b3JhZ2V3bXMuYmxvYi5jb3JlLndpbmRvd3MubmV0L3Byb2ZpbGVwaWN0dXJlcy9Nb3VudGFpbkljb24ucG5nXCIsXHJcbiAgICAvLyAgICAgICAgICAgIGhlaWdodDogNTAsXHJcbiAgICAvLyAgICAgICAgICAgIHdpZHRoOiA1MFxyXG4gICAgLy8gICAgICAgIH1cclxuICAgIC8vICAgIF07XHJcbiAgICAvLyAgICB2YXIgbWNPcHRpb25zID0ge1xyXG4gICAgLy8gICAgICAgIGdyaWRTaXplOiA1MCxcclxuICAgIC8vICAgICAgICBzdHlsZXM6IGNsdXN0ZXJTdHlsZXMsXHJcbiAgICAvLyAgICAgICAgbWF4Wm9vbTogMTVcclxuICAgIC8vICAgIH07XHJcbiAgICAvLyAgICB2YXIgbG9jYXRpb25zID0gW1xyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzEuNTYzOTEwLCBsbmc6IDE0Ny4xNTQzMTIgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTMzLjcxODIzNCwgbG5nOiAxNTAuMzYzMTgxIH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zMy43MjcxMTEsIGxuZzogMTUwLjM3MTEyNCB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzMuODQ4NTg4LCBsbmc6IDE1MS4yMDk4MzQgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTMzLjg1MTcwMiwgbG5nOiAxNTEuMjE2OTY4IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zNC42NzEyNjQsIGxuZzogMTUwLjg2MzY1NyB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzUuMzA0NzI0LCBsbmc6IDE0OC42NjI5MDUgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM2LjgxNzY4NSwgbG5nOiAxNzUuNjk5MTk2IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zNi44Mjg2MTEsIGxuZzogMTc1Ljc5MDIyMiB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzcuNzUwMDAwLCBsbmc6IDE0NS4xMTY2NjcgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM3Ljc1OTg1OSwgbG5nOiAxNDUuMTI4NzA4IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zNy43NjUwMTUsIGxuZzogMTQ1LjEzMzg1OCB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzcuNzcwMTA0LCBsbmc6IDE0NS4xNDMyOTkgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM3Ljc3MzcwMCwgbG5nOiAxNDUuMTQ1MTg3IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zNy43NzQ3ODUsIGxuZzogMTQ1LjEzNzk3OCB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtMzcuODE5NjE2LCBsbmc6IDE0NC45NjgxMTkgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTM4LjMzMDc2NiwgbG5nOiAxNDQuNjk1NjkyIH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC0zOS45MjcxOTMsIGxuZzogMTc1LjA1MzIxOCB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtNDEuMzMwMTYyLCBsbmc6IDE3NC44NjU2OTQgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTQyLjczNDM1OCwgbG5nOiAxNDcuNDM5NTA2IH0sXHJcbiAgICAvLyAgICAgICAgeyBsYXQ6IC00Mi43MzQzNTgsIGxuZzogMTQ3LjUwMTMxNSB9LFxyXG4gICAgLy8gICAgICAgIHsgbGF0OiAtNDIuNzM1MjU4LCBsbmc6IDE0Ny40MzgwMDAgfSxcclxuICAgIC8vICAgICAgICB7IGxhdDogLTQzLjk5OTc5MiwgbG5nOiAxNzAuNDYzMzUyIH1cclxuICAgIC8vICAgIF07XHJcbiAgICAvLyAgICB2YXIgbGFiZWxzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcclxuICAgIC8vICAgIHZhciBtYXJrZXJzID0gbG9jYXRpb25zLm1hcChmdW5jdGlvbiAobG9jYXRpb24sIGkpIHtcclxuICAgIC8vICAgICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAvLyAgICAgICAgICAgIHBvc2l0aW9uOiB7IGxhdDogbG9jYXRpb24ubGF0LCBsbmc6IGxvY2F0aW9uLmxuZyB9LFxyXG4gICAgLy8gICAgICAgICAgICBpY29uOiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICBzaXplOiBuZXcgZ29vZ2xlLm1hcHMuU2l6ZSg3MCwgNjApLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgc2NhbGVkU2l6ZTogbmV3IGdvb2dsZS5tYXBzLlNpemUoNzAsIDYwKSxcclxuICAgIC8vICAgICAgICAgICAgICAgIG9yaWdpbjogbmV3IGdvb2dsZS5tYXBzLlBvaW50KDAsIDApLFxyXG4gICAgLy8gICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL01vdW50YWluSWNvbi5wbmdcIlxyXG4gICAgLy8gICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICAgICBtYXA6IHdpbmRvdy5Hb29nbGVNYXAsXHJcbiAgICAvLyAgICAgICAgICAgIGxhYmVsOiBsYWJlbHNbaSAlIGxhYmVscy5sZW5ndGhdLFxyXG4gICAgLy8gICAgICAgICAgICBvcHRpbWl6ZWQ6IGZhbHNlLFxyXG4gICAgLy8gICAgICAgICAgICB0aXRsZTogXCJIZWxsbyBXb3JsZFwiXHJcbiAgICAvLyAgICAgICAgfSlcclxuICAgIC8vICAgIH0pO1xyXG4gICAgLy8gICAgdmFyIG15b3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xyXG4gICAgLy8gICAgbXlvdmVybGF5LmRyYXcgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyAgICAgICAgdGhpcy5nZXRQYW5lcygpLm1hcmtlckxheWVyLmlkID0gJ21hcmtlckxheWVyJztcclxuICAgIC8vICAgIH07XHJcbiAgICAvLyAgICBteW92ZXJsYXkuc2V0TWFwKHdpbmRvdy5Hb29nbGVNYXApO1xyXG4gICAgLy8gICAgdmFyIG1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3RlcmVyKHdpbmRvdy5Hb29nbGVNYXAsIG1hcmtlcnMsIG1jT3B0aW9ucylcclxuICAgIC8vICAgICAgICAvL3sgaW1hZ2VQYXRoOiAnaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvTW91bnRhaW5JY29uLnBuZycgfSk7XHJcblxyXG4gICAgLy99XHJcblxyXG4gICAgbG9hZE1hcCgpIHtcclxuICAgICAgICB3aW5kb3cuR29vZ2xlTWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgICAgICAgICAgem9vbTogNyxcclxuICAgICAgICAgICAgY2VudGVyOiB7IGxhdDogNDAuNjYwMDYxLCBsbmc6IC0xMTEuNTg3NjMyOCB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMubG9hZE1hcCgpO1xyXG4gICAgICAgIHRoaXMuYWRkU2tpUmVzb3J0TWFya2VycygpO1xyXG5cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiR29vZ2xlTWFwc0NvbnRhaW5lclwiIGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sdW1uIGNvbHVtbi1sZWZ0IGNvbC1zbS0xMiBjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RmluZCA8Yj55b3VyPC9iPiBwZXJmZWN0IHJlc29ydDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1zZXBhcmF0b3JcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48Yj5FeHBsb3JlPC9iPiBzb21lIG9mIHRoZSB3b3JsZCdzIGxlYWRpbmcgc2tpIHJlc29ydHMsIDxiPmRpc2NvdmVyPC9iPiBoaWRkZW4gc3Rhc2hlcyBvZiBwb3dkZXIsIDxiPnJlbGF4PC9iPiBhdCB0aGUgY29tZmllc3Qgb24tbW91bnRhaW4gZGluaW5nLCBhbmQgbXVjaCBtb3JlISAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29sLXNtLTEyIGNvbC1tZC05XCIgaWQ9XCJtYXBcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9Hb29nbGVNYXBzQ29tcG9uZW50LnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVHJlbmRpbmdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQnXHJcblxyXG5leHBvcnQgY2xhc3MgVHJlbmRpbmdJdGVtQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyZW5kaW5nLWl0ZW0tY29udGFpbmVyLWNvbXBvbmVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUcmVuZGluZ0l0ZW1Db21wb25lbnQgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VHJlbmRpbmdJdGVtQ29tcG9uZW50IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRyZW5kaW5nSXRlbUNvbXBvbmVudCAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL1RyZW5kaW5nSXRlbUNvbnRhaW5lckNvbXBvbmVudC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbnZhciBGb250QXdlc29tZSA9IHJlcXVpcmUoJ3JlYWN0LWZvbnRhd2Vzb21lJyk7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRyZW5kaW5nSXRlbUNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWNvbnRhaW5lciBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pdGVtLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1pbWFnZS1za2ktcmVzb3J0LWxvZ28tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVVBQUFBQ1NDQU1BQUFBRHorTUlBQUFBWTFCTVZFWC8vLytYR3g1QlFVSnhjWEdnb0tEUHo5Q2VLU3o0OGZIcjFOV3JSa2pZcWFwTlRVN0xqWTZ4VkZiejgvTytjWE9rT0RyeTR1UGx4c2ZuNStlSmlZbFpXVnEzdDdqYjI5dmV0N2pSbTV5NFkyVmxaV2JGZjRIRHc4U1VsSlY5Zlgyc3JLeWJ6VGhVQUFBTTJVbEVRVlI0bk8xYzUyTGpyQksxM0d2Y0haYzQ4ZnMvNVkxb2dpa3d4RjRiMzAvbjE2NERDSTZtZytoMDNoYnJ6WFM2V1dmMU9KMG5sY1ppT1IzOXE0bTlCNmFHaXNsVTJtT3pxRUlzTi85eWdtVmp1bXA0V0IwbFBSQjlpc0wvcUJTT0FSbm5KQStqSlVIZkw0Yi9TU0djWXg3RzhSN0hJYzNmTHlRV1lEeWQvK0wvaGV2MUpKdUhMNWErWDZRTXdIaHAyUjh1czF4V29lQ0VpV2R3UkRMZVNHK1VGV0E2djk3ZWFHTDFUVEU0NXRWWFk4RS9iWDJHalNjSlkxRTRPRitnSklsZTJqUkJYNFQ2enBUZ1BtVnVpMFpjR1llVWVwM1MvRlVyNW1uMDIzcGpCaFBHak5MRmlNUjZJRVdRZGxZMTMrOXFCMVA4VmRVY2RwSHhWMDJJcDBWTVo4Um9sb3cwZjFVRnRFdklYMVhoRUM4U09WYlY2VWxMZmlnay9BRlJFdk5YTGVIVDRxNG5Idm1VQ1lxLzRYTDZ1NUxSMUF2VmZObWdJNTV6M2FjejJzejlBYUgvU2JsdVJIajV3S1dBUldQNjEwN1dQQ1lvRW9aemo2bjF2RkhUMEkya1E1KzNTK3VRTmk3Q0pXeXNQRG5ab0VpWUEwRWJPU0U5K3o4TFFzZDM4eU5RRzRjNDhMRDVyaUdXY0tJTHduSzVaaDYxREgrcnhjSlRnL2NTUWJna01pTTFmbFA3RVlJL0ZPTUVEWnVTQXFuNnk2Tis1TkZ5K0ZZaUNOZ1lNdldUc1M2eTFuNEV1NXdWbHo5czlOK2Q2aDhKMlR0NUwrdzBmRHNSSEsyQzVVellHRUxUOXV0SE1IOFRQbnZReVo1TjU3RG9Eb0hvbWhadkpJSmhSU1JXZmRiRWZYVlFEU1VhZG1pdDFLOEY4NGVmTjY2OERtK0F1WndLd3lEaWp6Wi9GbXRGbW5KTFFOaEpiMlZsOWwxaXdVMEdmNVlNZ0ZUVmZxN2xsakNkak9YVU12c2VOWVZRSnRKSktPRiswN3NlOVROcW13WkZsN09jYStGa1NrQ3dwaTlCQjVUQUNYYU5WT1NDdDA1NHo2TWV3cFFSeTBJUWxFbXNEcEpBMGI1N0xZSnJHQUJHUFBkSU5YaURTQ1l3YVJMK1JwQS9tWjdWM0tGc0oyYmpsdElKdlJoK0NVSEVIL1FDd2pVaTNsT1ZleFhLREdXRHZ4RCtoa1pFb1J3UWYrZDBIdzFjT2t6c2ZLZ25pYzZVdkJDK0FvczJJaUFORXRJMVVBS1hNcDNUZDlCaHp3T0x0c0lnZnhtN1A5QUFKdjM5NkExMDJKY0tpYkxBS0NSai94RTZZSUZvblFWNi9scjRoajJlaTJtZ01wUjhkVEQya2FqK1ZEcXZsOEVUS0lrdlFQeUpEMTZpREZpMFo2U3lrWkpMTXVObVFSSmJodmpMRUE2NDN5SVRYZVdINVE5NU9oWlpDeG9ERG5JY0pQUTlRdEZWR2xKdU11SjVFRUV5Z1JLNEROMzZnd05wK2hWYlVQRE1rc0FBSXY3a0FTQ1NYVEgxWStIa1hvTW1MaE1ZUU1SZnhza0JXRURNaUIzVm14SzNmaTY4WmFXdERPWlBIc0RBNUMvbjdKcFNFbm56cDZLeDYra1NJQ3JEWndRd3FJU2FZOU9VbXlzemxGNDN4aXpaRnUvQUdSSWt4Z3lkUHM4bXNNeDZRaU9BeVJlTStiTmVWTEJ0aHZmUWM2ck15azRYbVlzMEFwaWNIczlmWjVMc0RFc3c5VmdaZ1ozYml5b09UZ0NUQ2h6YlFWK2twQWs2bitING5CVkFLZ0pMVE9hYUtrSktIUEF4Wmk4QVBDZnNFM0xlUjZYU2NoRXNsa0JubVZMcWdiY3cvUUI2SG85eVVlZVR0aDN5eUU0NWtSSzM1cXhZUlhkMU91UXhGdDl2VEtPbkwramRrMG1WNFloMXRpNXQvVHc0RjVJSTV3aitBcCs5aWZrZ3hKOFd2Qk44Q3pHc0NpWFE3aVFsbENQRlgxMTBaMHZ1K0F5SGx2YXNJbDlWS0lHMmpoVzM1dmdyTEpTRnJWZ2hIcU16UkxhdklsWVcyMjBLSlhCazFoU1hBeHdDNHl6MnpIa0VMTHp1WlowRTc4NWdYaWlCUjdnbUNzUVhjRGhuT1RHajRHOW9Ha0VkTVMrRHdLUlFBcjhFQWtoOFFVTW9hMTJ3STBRUWsrK0hTN3E2SUhBazF0Y2xHejRiazZRQWp0QUJTc2JZMVpZTzJqT2ljMUNDTmdyQW55TzJzTzlCc0tUbklpbUExRGRMdExOUXdoeHE0d2JWdnFDUW1nWkpMYllEQ1piMFZHeGlqTlNndnFMa25DMWtZa1JjbmdDci83WVd6bjBMWU9DOG1IUmh6NEpXSWY3TUJQRVJPYjlVSlNYdVpwUFJuT0FlN1o0MG1YZzBtbkdTTEY3Wms2QUZnTTJDQ1JHS0tKdVJwdm9ybWZWMFNSMmZKam8zMnpHUit4SGNQSXJMaGZYMEdSZENmcklaTVZacjNEemQyVDlTd2wzUzBZU2h4VlZqNWhHOTJHVGZBVUg0NjNSbi82VFdFSDZmcU9CRlFzV2RjSXNVMmFqcmN4TE9ja04wU1hjT1BQVndEaU9hdFg4VXBMaVNQa3ZnbVBwaVBibUJqcU1XQWZtUTlyUHZwY1poRkYvY3BwTHl3a1QrUUg1K25qNkFFUG4wTnlLOFNOYUg1MU45VStGbStnWGZTSEZmMitpVEZsQnJpUGkza2wxZVIxMTZseVJmZEQrRFFuRk8yR1FpWVJnRGI3dXovRW1HNDZ6Z0lrcCs4cm9vaXdJMzVUUlpYbTV4WklRbzV4UmE5c0tKcjRaSkZIZ3d3Umk3eFdsVDM1SjZPak95SUw0NWtZd2QwNlpmY0c5Q1ZhUUc0Nk9TSkRJdVVjTWZjRktYSnlDSUdNdzRoZk04eENJUGkvU2RueDdnalFIQ2JUY0JneVVLWU95R1FJZk1jNkdqNElzeDhkbEI2dks3RU1VRmdRcWoxTFRaK3lONDJKc2k4aTd4Ukh0UEFNV2xjUVlKRWN4U1g0ZmpYNjZScGVxSERUTE9FVDhYK01Ta0I0RURmU1RvQ0w1cy9xSWxnTCtKM3oyWU1oUVdHRUkzNEpSWWRtZjVvekVsSXNuU0wwUW1iLzZETitBOEQrdFR3T0VLVmJqS0EzRlpPVm5hZkJyV3gvbGlNYXdtaStXcHdQU05BTERlcTlmUzk0NFl6YjJQbFlwTW1jckhlTDVjTE03ell5dDhMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMVnEwYU5HaVJZc1dMZjZFdm8vQjRDUGQ0MmNRKytzMkdQQXcrRXcxRFVlNzZuNmlxVnNNK2orOUdqOTlkbVo2TXRTUE5IQXpQTFJwMlFXNDlMZUo2WFo3OFQ4RHpINnUwYWJCWksrNkQxeHE3SG03bWYrMEhjMmgraHVjTjV5cEI3OVpULzJ5aDBNZXpKaEU3KytvR082NjNSakZpTUQ2NFRTRm1NQlBUY1l1OXZ4d2lCNTZXSSthM1QwRWJydG9ualgyNnRjQk9jbytwbmVKQlZJRS9yNFR2cWszc1krTCt1VVNHVDdFTi9Xc0dTRy85eEJZaTB3OWJDaFdXZ0IzekNnem5zRisvZmVJaU5JRWtwd2pBbitvbWZJd2ZHTmdCdThpY0R1REUvMTl0djV0YTBhWjlUU2NPZUdGWUliR0NqRUlCbXlXU0dneEpORElVOVJIK1d0b0J1L1Y1dnk3K1Q5aWtDU3c1NkI3N3BzZndvWjkvR0w3VGl6Q29iZmYzQlFNdE9RaWk5cGdBT1o2TmNzaXVnQUM5ZERkR3o5MkFNZmYzczMxbzI4bEFMNEVra0IySnVoUnlEVHJYMlpiWW1oanh6bUtlbkYrTVlIV2hCQmR3bW5uT2hDdDc5M1p6Zi94d3p3TTJ0ejdDT3pjOUtpTmUrbzNIZERReG9qUlZ2RFQ2a3hpTHNIZk5lay84V2wvYUs5MmtScEFFL0FnYTMxQXBOYTRrMERqY3QzTE5RTDRRUTk5aVdpU2VjRWN2eDJTd0NzajA4RzBOY3V6UkJBS2wwUjR1Ky91QmY5NEw0SFhjTldlQUJKRDkvblJQaXgvdktZUkJKcGUwV2xuT2hCck1La0E4MFlJOGIwRW12ZHJSdEJ1ZWYvQkRLM1pKaU0zeGEyV1FrN1ZDQUk3YVFJTkgvSVVEdWhVQ25jVE9QQmZzR2Jnd0EydDIyS1RaYWU5M2NlZTlpY0NqUU1objBuQzJHS3h3dDlOb1BGWmFnaWRtbGlUaEllK3NhTmRkVWVsYnJQb1hQSUl6SFVnMXN6SUNiK2Z3RzFqTXdJQkpJYmVzYVAxOUI4K2d3SEl1ZVE1RWVOQUlna2tPWk9NbXNQOUJCb3JmYkZVdWxRRERXMmlSc0tjYjYzYVhJSVJxTGtRWVF5MlYzYmEzODNMbGNJbFVrSThnRURIeTNmSUR4cmFSQ3FFT3UyczJodzRpanNVZ2F6RE5OTTI5bGxlZ3Vtd1JpSGUvajRDWGZZMkM4Y0NROXRRbmxpT2ZnVlg5eTk2eFpEQXJja1krRlRPSkRmeUVOQUdSdEc2WkloSEVHZ3M5UTFJajFib2djYkJWU2VKMWR3YUhuYThCdW01N0UxbHQ3YzM0MUh5YXR5OWJTR3ZZcEdlS29wSEVHaFVhV2IxMEI4YTRVYjA5NktYVC82QlREbUxzdmV3cVR3SzNMNkV3STZUQmw5MnlPWHkxVHZUVTdrUnNuQkhFMGo2UzlSVTdvWlZjeTZTNHRyZlRhQ2JzTThQc1ZxY2k5ZFFxbVpGOXlBV0t6VnptaG5YZEdiOHpGNGNDT3IyOHJqeE1RVGFXbFJndkRCOU85SzJiUVBLdEJ1aGFsNEVnVnlDTzJnYWFBOUg1NC84U3VTQno0TUlOQWxRMERCWTZyNzNmV1ZlSzBnL2RodzFnUk9aUldteEJONDY3dDFLS2RHeG1EenllUkNCMUxJVFExdG9rV3VvME8rQ3lLVUNCMmtFaTdGdGZnQm85aDJrK3lIWHJOYVBJN0QvWndLMWxibzB1d1o2OFZqYnd3aGpIeHRlTjczNER4Q250OFErVHd5dko1RFpBTVBhR1JKb2hJeE9Xc05wL3pUNkxJRFo1NkZrKzBBTThYSUNtZWlPVUNJUTQvWWl1aFpPMitTYXdvVEV0Q1lLT0oremJnLzkrbklDWFNrZjRrYlBwZG5tNi9KekE5TTJaWE5oZUd6TUsySlFsUlpuMEJtOW1zQXR4eCtPWkdDV1pSWkt5Uld6THl3MGJNYW9nQTJRcThsRmdXNi9tc0ErUllLV1N2aXVJWUZHMTZnbndHbWJiRjJZa0h6YXROMDdEV1VyRjQvZTFuVDRLNEZxWmRCQjBoazkrcFhmL2tIVE5uR3FzREx0R096KzNGUXBwTzg4SFZyUGl3azgwQlRzS2JuRXRKcmpZWmdWUE8yOGhLUmhFQUMvZ1JjVHFDakFlWnV1aklGMEFCTm9QRGllSGpGdEkwUEMzYzB0SFZ3UkNjcHJDZVNLVjdxc0NVSVVRckdOQzBkK2hKajJaMTVDMHVsaklTUVBJNzZXUUxaOHF2OXdJK1lTYnF3em01YlV0TTBwRlBGKzJ3ZWdjRTl0cS85VEFsVmVGamM2cWdrMStvRG8vRW44ZHRQWkgzd0Z1aW5JVW5aMDJ3aXUzM1pUb05mbkhIaGlsZVJNS0J4VVEvOHAvd094azRucHNKckw2Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctaW1hZ2UtaXRlbS1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vc3RvcmFnZXdtcy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJvZmlsZXBpY3R1cmVzL1NlbGZpZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1kZXNjcmlwdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1za2ktcmVzb3J0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRoZSBDYW55b25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1pdGVtLW5hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+OTk5MCBTa2kgTGlmdCA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJlbmRpbmctcHJvZHVjdC1pY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY3V0bGVyeVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmVuZGluZy1wcm9kdWN0LXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+VmlldzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvQ29tcG9uZW50cy9UcmVuZGluZ0l0ZW1Db21wb25lbnQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkJhckNvbXBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcblxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgX19odG1sOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2IGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MjAyQiAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAuY29udGFpbmVyLXVzZXItcHJvZmlsZSAuY29udGFpbmVyLXVzZXItcHJvZmlsZS1uYW1lIC51c2VyLXByb2ZpbGUtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2IC5jb250YWluZXItdXNlci1wcm9maWxlIC5jb250YWluZXItdXNlci1wcm9maWxlLW5hbWUgLnVzZXItcHJvZmlsZS1uYW1lOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXYgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUgLmNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZSAudXNlci1wcm9maWxlLW5hbWU6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdiAjVXNlclByb2ZpbGVQaWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sIG5hdi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHZpZXdCb3g9JzAgMCAzMiAzMicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggc3Ryb2tlPSdyZ2JhKDI1NSwyNTUsMjU1LCAxKScgc3Ryb2tlLXdpZHRoPScyJyBzdHJva2UtbGluZWNhcD0ncm91bmQnIHN0cm9rZS1taXRlcmxpbWl0PScxMCcgZD0nTTQgOGgyNE00IDE2aDI0TTQgMjRoMjQnLyUzRSUzQy9zdmclM0VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIi9cIj5EaXNjb3ZlciBNb3VudGFpbiBSZXNvcnRzPC9hPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyVGV4dFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJUZXh0XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItdXNlci1wcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGlkPVwiVXNlclByb2ZpbGVQaWN0dXJlXCIgc3JjPVwiaHR0cHM6Ly9zdG9yYWdld21zLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcm9maWxlcGljdHVyZXMvSU1HXzIwMTcxMjMwXzEwMjgwOS5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci11c2VyLXByb2ZpbGUtbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiVXNlckZpcnN0TmFtZVwiIGNsYXNzTmFtZT1cInVzZXItcHJvZmlsZS1uYW1lXCI+SmFtZXM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgaWQ9XCJVc2VyTGFzdE5hbWVcIiBjbGFzc05hbWU9XCJ1c2VyLXByb2ZpbGUtbmFtZVwiPk1jR3VpcmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9Db21wb25lbnRzL05hdmlnYXRpb25CYXJDb21wb25lbnQudHN4Il0sInNvdXJjZVJvb3QiOiIifQ==