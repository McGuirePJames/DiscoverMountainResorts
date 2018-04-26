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
var React = require("react");
var NavigationBarComponent_1 = require("../Components/NavigationBarComponent");
var CarouselComponent_1 = require("../Components/CarouselComponent");
var GoogleMapsComponent_1 = require("../Components/GoogleMapsComponent");
var TrendingItemContainerComponent_1 = require("../Components/TrendingItemContainerComponent");
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
//# sourceMappingURL=HOCHome.js.map