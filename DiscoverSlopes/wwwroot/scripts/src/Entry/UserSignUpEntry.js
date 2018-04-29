"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var NavigationBarComponent_1 = require("../Components/NavigationBarComponent");
var UserSignUpContainer_1 = require("../Containers/UserSignUpContainer");
var UserSignUpStore_1 = require("../Stores/UserSignUpStore");
ReactDOM.render(React.createElement(NavigationBarComponent_1.NavigationBarComponent, null), document.getElementById('NavigationBarMountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserSignUpStore_1.UserSignUpStore },
    React.createElement(UserSignUpContainer_1.default, null)), document.getElementById('UserSignUpMountPoint'));
//# sourceMappingURL=UserSignUpEntry.js.map