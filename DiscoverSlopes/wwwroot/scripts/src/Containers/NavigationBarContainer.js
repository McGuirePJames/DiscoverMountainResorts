"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavigationBarComponent_1 = require("../Components/NavigationBarComponent");
var Actions = require("../Actions/CurrentUserActions");
var react_redux_1 = require("react-redux");
function mapStateToProps(_a) {
    var emailAddress = _a.emailAddress, userProfileImageURL = _a.userProfileImageURL;
    return {
        emailAddress: emailAddress,
        userProfileImageURL: userProfileImageURL,
    };
}
exports.mapStateToProps = mapStateToProps;
function mapDispatchToProps(dispatch) {
    return {
        getCurrentUserNew: function () { return dispatch(Actions.getCurrentUserNew()); },
        signOut: function () { return dispatch(Actions.signOut()); }
    };
}
exports.mapDispatchToProps = mapDispatchToProps;
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NavigationBarComponent_1.NavigationBarComponent);
//# sourceMappingURL=NavigationBarContainer.js.map