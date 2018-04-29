"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_thunk_1 = require("redux-thunk");
var redux_1 = require("redux");
var UserSignUpReducers_1 = require("../Reducers/UserSignUpReducers");
var middleWare = redux_1.applyMiddleware(redux_thunk_1.default);
exports.UserSignUpStore = redux_1.createStore(UserSignUpReducers_1.UserSignUpReducer, {
    signUpError: "",
    isPasswordRevealed: false,
}, middleWare);
//# sourceMappingURL=UserSignUpStore.js.map