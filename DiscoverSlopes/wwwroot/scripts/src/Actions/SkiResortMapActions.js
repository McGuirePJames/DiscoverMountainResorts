"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants = require("../Constants/SkiResortMapConstants");
var $ = require("jquery");
var GetUrlParameters_1 = require("../Misc/GetUrlParameters");
function loadMap() {
    var skiResortId = GetUrlParameters_1.getUrlParameters('skiResortId');
    var data = { 'id': skiResortId };
    return function (dispatch) {
        $.ajax({
            beforeSend: function () {
                $('html').css('cursor', 'wait');
            },
            url: "/SkiResorts/GetSkiResortById",
            type: "GET",
            data: data,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()
            },
            success: function (response) {
                var test = "";
                dispatch({ type: constants.LOAD_MAP, payload: response });
            },
            complete: function () {
                $('html').css('cursor', 'default');
            }
        });
    };
}
exports.loadMap = loadMap;
//# sourceMappingURL=SkiResortMapActions.js.map