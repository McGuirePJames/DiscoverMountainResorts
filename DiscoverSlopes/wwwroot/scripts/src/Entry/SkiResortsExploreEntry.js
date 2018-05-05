"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var SkiResortsExploreHOC_1 = require("../HOCs/SkiResortsExploreHOC");
var CurrentUserStore_1 = require("../Stores/CurrentUserStore");
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: CurrentUserStore_1.CurrentUserStore },
    React.createElement(SkiResortsExploreHOC_1.SkiResortsExploreHOC, null)), document.getElementById('MountPoint'));
//# sourceMappingURL=SkiResortsExploreEntry.js.map