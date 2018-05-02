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
var React = require("react");
var $ = require("jquery");
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
//# sourceMappingURL=GoogleMapsComponent.js.map