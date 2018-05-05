"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SkiResortMapComponent_1 = require("../Components/SkiResortMapComponent");
var Actions = require("../Actions/SkiResortMapActions");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var map = _a.map, resortName = _a.resortName;
    return {
        map: map,
        resortName: resortName,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        loadMap: function () { return dispatch(Actions.loadMap()); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SkiResortMapComponent_1.SkiResortMapComponent);
//# sourceMappingURL=SkiResortMapContainer.js.map