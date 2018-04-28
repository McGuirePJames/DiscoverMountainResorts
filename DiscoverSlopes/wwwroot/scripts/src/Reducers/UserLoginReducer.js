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
var UserLoginConstants_1 = require("../Constants/UserLoginConstants");
function UserLoginReducer(state, action) {
    switch (action.type) {
        case UserLoginConstants_1.LOGIN:
            return __assign({}, state, { loginError: action.payload });
        case UserLoginConstants_1.TOGGLE_PASSWORD_REVEAL: {
            if (state.isPasswordRevealed) {
                return __assign({}, state, { isPasswordRevealed: false });
            }
            return __assign({}, state, { isPasswordRevealed: true });
        }
    }
    return state;
}
exports.UserLoginReducer = UserLoginReducer;
//# sourceMappingURL=UserLoginReducer.js.map