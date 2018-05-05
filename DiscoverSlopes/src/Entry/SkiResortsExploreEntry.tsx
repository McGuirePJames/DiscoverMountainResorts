import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as thunk } from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { SkiResortsExploreHOC } from '../HOCs/SkiResortsExploreHOC'
import { CurrentUserStore } from '../Stores/CurrentUserStore'


ReactDOM.render(
        <SkiResortsExploreHOC  />,
    document.getElementById('MountPoint')
)