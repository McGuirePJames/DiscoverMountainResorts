"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = require("redux-thunk");
var redux_1 = require("redux");
var UserLoginReducer_1 = require("../Reducers/UserLoginReducer");
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.UserLoginStore = redux_1.createStore(UserLoginReducer_1.UserLoginReducer, {
    loginError: "",
    isPasswordRevealed: false,
}, middleWare);
//# sourceMappingURL=UserLoginStores.js.map