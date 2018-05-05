"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = require("redux-thunk");
var redux_1 = require("redux");
var SkiResortMapReducer_1 = require("../Reducers/SkiResortMapReducer");
var SkiResortMapToolBarReducer_1 = require("../Reducers/SkiResortMapToolBarReducer");
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
var combinedReducers = redux_1.combineReducers({
    SkiResortMapReducer: SkiResortMapReducer_1.SkiResortMapReducer,
    skiResortMapToolBarReducer: SkiResortMapToolBarReducer_1.skiResortMapToolBarReducer
});
exports.SkiResortMapStore = redux_1.createStore(combinedReducers, {}, middleWare);
//# sourceMappingURL=SkiResortMapStore.js.map