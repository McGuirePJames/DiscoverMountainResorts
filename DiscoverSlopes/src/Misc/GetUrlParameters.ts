export function getUrlParameters(parameterName) {
    var url = new URL(location.href);
    var paramValue = url.searchParams.get(parameterName);
    return paramValue
}