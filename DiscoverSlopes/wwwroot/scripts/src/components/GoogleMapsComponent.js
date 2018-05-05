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
//# sourceMappingURL=GoogleMapsComponent.js.map