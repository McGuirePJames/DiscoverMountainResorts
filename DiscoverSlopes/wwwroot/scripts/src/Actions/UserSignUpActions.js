"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants = require("../Constants/UserSignUpConstants");
var GetAntiForgeryToken_1 = require("../Misc/GetAntiForgeryToken");
var $ = require("jquery");
function signUpAction() {
    if (isFormComplete) {
        signUp();
    }
    else {
        return { type: constants.RETURN_ERROR, payload: "Passwords do not match" };
    }
}
exports.signUpAction = signUpAction;
function isFormComplete() {
    if (document.getElementById('CreateUserPassword').value === document.getElementById('CreateUserConfirmPassword').value) {
        return true;
    }
    return false;
}
function signUp() {
    var emailAddress = document.getElementById('CreateUserUsername').value;
    var password = document.getElementById('CreateUserPassword').value;
    var confirmPassword = document.getElementById('CreateUserConfirmPassword').value;
    return function (dispatch) {
        if (password != confirmPassword) {
            dispatch({ type: constants.RETURN_ERROR, payload: "Passwords don't match" });
        }
        else {
            $.ajax({
                beforeSend: function () {
                    $('html').css('cursor', 'wait');
                },
                url: "/User/CreateUserAsync",
                type: "POST",
                dataType: "json",
                data: GetAntiForgeryToken_1.default({ emailAddress: emailAddress, password: password }),
                success: function (response) {
                    if (response.success) {
                        window.location.href = "/";
                    }
                    else {
                        dispatch({ type: constants.RETURN_ERROR, payload: response.responseText });
                    }
                },
                complete: function () {
                    $('html').css('cursor', 'default');
                }
            });
        }
    };
}
exports.signUp = signUp;
function revealPassword() {
    return {
        type: constants.TOGGLE_PASSWORD_REVEAL
    };
}
exports.revealPassword = revealPassword;
//# sourceMappingURL=UserSignUpActions.js.map