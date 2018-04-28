"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
//export default function AddAntiForgeryToken(data) {
//    data.__RequestVerificationToken = $('#__AjaxAntiForgeryForm input[name=__RequestVerificationToken]').val();
//    return data;
//}
function AddAntiForgeryToken(data) {
    return $('#__AjaxAntiForgeryForm input[name=__RequestVerificationToken]').val();
}
exports.default = AddAntiForgeryToken;
//# sourceMappingURL=AddAntiForgeryToken.js.map