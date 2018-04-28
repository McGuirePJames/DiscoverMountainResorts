"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants = require("../Constants/UserLoginConstants");
var GetAntiForgeryToken_1 = require("../Misc/GetAntiForgeryToken");
var $ = require("jquery");
function loginAsync() {
    var username = document.getElementById('LoginUsername').value;
    var password = document.getElementById('LoginPassword').value;
    return function (dispatch) {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/User/LoginAsync",
            type: "POST",
            dataType: "json",
            data: GetAntiForgeryToken_1.default({ username: username, password: password }),
            success: function (response) {
                if (response.success) {
                    window.location.href = "/";
                }
                else {
                    dispatch({ type: constants.LOGIN, payload: response.responseText });
                }
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
}
exports.loginAsync = loginAsync;
function revealPassword() {
    return {
        type: constants.TOGGLE_PASSWORD_REVEAL
    };
}
exports.revealPassword = revealPassword;
//# sourceMappingURL=UserLoginActions.js.map