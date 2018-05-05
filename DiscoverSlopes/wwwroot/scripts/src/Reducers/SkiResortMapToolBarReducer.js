"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SkiResortMapToolBarConstants_1 = require("../Constants/SkiResortMapToolBarConstants");
function skiResortMapToolBarReducer(state, action) {
    switch (action.type) {
        case SkiResortMapToolBarConstants_1.DISPLAY_ADD_NEW_TRAIL: {
            return __assign({}, state, { isAddTrailDisplayed: true, isFilterTrailsDisplayed: false, isSearchTrailDisplayed: false });
        }
        case SkiResortMapToolBarConstants_1.DISPLAY_FILTER_TRAILS: {
            return __assign({}, state, { isAddTrailDisplayed: false, isFilterTrailsDisplayed: true, isSearchTrailDisplayed: false });
        }
        case SkiResortMapToolBarConstants_1.DISPLAY_SEARCH_TRAIL: {
            return __assign({}, state, { isAddTrailDisplayed: false, isFilterTrailsDisplayed: false, isSearchTrailDisplayed: true });
        }
    }
    return state;
}
exports.skiResortMapToolBarReducer = skiResortMapToolBarReducer;
//# sourceMappingURL=SkiResortMapToolBarReducer.js.map