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
var SkiResortMapConstants_1 = require("../Constants/SkiResortMapConstants");
function SkiResortMapReducer(state, action) {
    switch (action.type) {
        case SkiResortMapConstants_1.LOAD_MAP:
            var styledMapType = new google.maps.StyledMapType([], { name: 'Styled Map' });
            window.GoogleMap = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: action.payload["latitude"], lng: action.payload["longitude"] },
            });
            window.GoogleMap.mapTypes.set('styled_map', styledMapType);
            //window.GoogleMap.setMapTypeId('styled_map');
            window.GoogleMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
            return __assign({}, state, { map: window.GoogleMap });
    }
    return state;
}
exports.SkiResortMapReducer = SkiResortMapReducer;
//# sourceMappingURL=SkiResortMapReducer.js.map