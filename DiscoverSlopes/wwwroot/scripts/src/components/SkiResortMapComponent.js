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
var SkiResortMapComponent = /** @class */ (function (_super) {
    __extends(SkiResortMapComponent, _super);
    function SkiResortMapComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkiResortMapComponent.prototype.componentDidMount = function () {
        var loadMap = this.props.loadMap;
        loadMap();
    };
    SkiResortMapComponent.prototype.render = function () {
        return (React.createElement("div", { id: "SkiResortMapComponent" },
            React.createElement("div", { id: "map" },
                React.createElement("button", { type: "button" }, "Begin")),
            React.createElement("div", { id: "MapButtonsContainer" },
                React.createElement("button", { type: "button" }, "Begin"))));
    };
    return SkiResortMapComponent;
}(React.Component));
exports.SkiResortMapComponent = SkiResortMapComponent;
//# sourceMappingURL=SkiResortMapComponent.js.map