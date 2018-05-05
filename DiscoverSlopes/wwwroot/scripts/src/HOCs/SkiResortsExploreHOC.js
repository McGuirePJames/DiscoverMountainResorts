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
var NavigationBarContainer_1 = require("../Containers/NavigationBarContainer");
var SkiResortMapContainer_1 = require("../Containers/SkiResortMapContainer");
var react_redux_1 = require("react-redux");
var CurrentUserStore_1 = require("../Stores/CurrentUserStore");
var SkiResortMapStore_1 = require("../Stores/SkiResortMapStore");
var SkiResortsExploreHOC = /** @class */ (function (_super) {
    __extends(SkiResortsExploreHOC, _super);
    function SkiResortsExploreHOC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkiResortsExploreHOC.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
                React.createElement(NavigationBarContainer_1.default, null)),
            React.createElement(react_redux_1.Provider, { store: SkiResortMapStore_1.SkiResortMapStore },
                React.createElement(SkiResortMapContainer_1.default, null))));
    };
    return SkiResortsExploreHOC;
}(React.Component));
exports.SkiResortsExploreHOC = SkiResortsExploreHOC;
//# sourceMappingURL=SkiResortsExploreHOC.js.map