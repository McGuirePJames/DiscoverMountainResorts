"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
//export default function AddAntiForgeryToken(data) {
//    data.__RequestVerificationToken = $('#__AjaxAntiForgeryForm input[name=__RequestVerificationToken]').val();
//    return data;
//}
function GetAntiForgeryToken(data) {
    data.__RequestVerificationToken = $("[name='__RequestVerificationToken']").val();
    return data;
}
exports.default = GetAntiForgeryToken;
;
function GetAntiForgeryTokenWithoutData() {
    return $("[name='__RequestVerificationToken']").val();
}
exports.GetAntiForgeryTokenWithoutData = GetAntiForgeryTokenWithoutData;
;
//# sourceMappingURL=GetAntiForgeryToken.js.map