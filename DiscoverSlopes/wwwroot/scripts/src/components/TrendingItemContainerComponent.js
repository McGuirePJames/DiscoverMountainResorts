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
var TrendingItemComponent_1 = require("../Components/TrendingItemComponent");
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
//# sourceMappingURL=TrendingItemContainerComponent.js.map