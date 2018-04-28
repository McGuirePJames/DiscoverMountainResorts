"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var UserLoginContainer_1 = require("../Containers/UserLoginContainer");
var NavigationBarComponent_1 = require("../Components/NavigationBarComponent");
var UserLoginStores_1 = require("../Stores/UserLoginStores");
//const middleWare = applyMiddleware(thunk);
//const store = createStore<UserLoginStoreState>(UserLoginReducer, {
//    loginError: "",
//    isPasswordRevealed: false,
//}, middleWare);
ReactDOM.render(React.createElement(NavigationBarComponent_1.NavigationBarComponent, null), document.getElementById('MountPoint'));
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: UserLoginStores_1.UserLoginStore },
    React.createElement(UserLoginContainer_1.default, null)), document.getElementById('LoginMountPoint'));
//# sourceMappingURL=UserLoginEntry.js.map