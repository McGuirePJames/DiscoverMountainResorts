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
var UserSignUpConstants_1 = require("../Constants/UserSignUpConstants");
function UserSignUpReducer(state, action) {
    switch (action.type) {
        case UserSignUpConstants_1.SIGN_UP:
            return __assign({}, state, { signUpError: action.payload });
        case UserSignUpConstants_1.TOGGLE_PASSWORD_REVEAL: {
            if (state.isPasswordRevealed) {
                return __assign({}, state, { isPasswordRevealed: false });
            }
            return __assign({}, state, { isPasswordRevealed: true });
        }
        case UserSignUpConstants_1.RETURN_ERROR: {
            return __assign({}, state, { signUpError: action.payload });
        }
    }
    return state;
}
exports.UserSignUpReducer = UserSignUpReducer;
//# sourceMappingURL=UserSignUpReducers.js.map