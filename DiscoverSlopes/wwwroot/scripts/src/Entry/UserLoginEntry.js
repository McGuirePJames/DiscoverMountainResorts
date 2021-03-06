"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var UserLoginContainer_1 = require("../Containers/UserLoginContainer");
var UserLoginStores_1 = require("../Stores/UserLoginStores");
var NavigationBarContainer_1 = require("../Containers/NavigationBarContainer");
var CurrentUserStore_1 = require("../Stores/CurrentUserStore");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
    React.createElement(NavigationBarContainer_1.default, null)), document.getElementById('NavigationBarMountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserLoginStores_1.UserLoginStore },
    React.createElement(UserLoginContainer_1.default, null)), document.getElementById('LoginMountPoint'));
//# sourceMappingURL=UserLoginEntry.js.map