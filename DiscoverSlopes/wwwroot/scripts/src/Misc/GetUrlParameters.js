"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getUrlParameters(parameterName) {
    var url = new URL(location.href);
    var paramValue = url.searchParams.get(parameterName);
    return paramValue;
}
exports.getUrlParameters = getUrlParameters;
//# sourceMappingURL=GetUrlParameters.js.map