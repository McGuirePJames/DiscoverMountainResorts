"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SkiResortMapToolBarComponent_1 = require("../Components/SkiResortMapToolBarComponent");
var Actions = require("../Actions/SkiResortMapToolBarActions");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var isAddTrailDisplayed = _a.isAddTrailDisplayed, isFilterTrailsDisplayed = _a.isFilterTrailsDisplayed, isSearchTrailDisplayed = _a.isSearchTrailDisplayed;
    return {
        isAddTrailDisplayed: false,
        isFilterTrailsDisplayed: false,
        isSearchTrailDisplayed: false,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        displayAddNewTrail: function () { return (Actions.displayAddNewTrail()); },
        displayFilterTrails: function () { return (Actions.displayFilterTrails()); },
        displaySearchTrail: function () { return (Actions.displaySearchTrail()); },
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SkiResortMapToolBarComponent_1.SkiResortMapToolBarComponent);
//# sourceMappingURL=SkiResortMapToolBarContainer.js.map