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
var SkiResortMapToolBarComponent = /** @class */ (function (_super) {
    __extends(SkiResortMapToolBarComponent, _super);
    function SkiResortMapToolBarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkiResortMapToolBarComponent.prototype.render = function () {
        return (React.createElement("div", { id: "SkiResortMapToolBarComponent" },
            React.createElement("div", { id: "MapToolBar" },
                React.createElement("div", { className: "toolbar-action" },
                    React.createElement("i", { className: "fa fa-plus", "aria-hidden": "true" })),
                React.createElement("div", { className: "toolbar-action" },
                    React.createElement("i", { className: "fa fa-search", "aria-hidden": "true" })),
                React.createElement("div", { className: "toolbar-action" },
                    React.createElement("i", { className: "fa fa-filter", "aria-hidden": "true" })))));
    };
    return SkiResortMapToolBarComponent;
}(React.Component));
exports.SkiResortMapToolBarComponent = SkiResortMapToolBarComponent;
//# sourceMappingURL=SkiResortMapToolBarComponent.js.map