"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = require("redux-thunk");
var redux_1 = require("redux");
var UserReducer_1 = require("../Reducers/UserReducer");
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.CurrentUserStore = redux_1.createStore(UserReducer_1.UserReducer, {
    emailAddress: "",
    userProfileImageURL: "",
}, middleWare);
//# sourceMappingURL=CurrentUserStore.js.map