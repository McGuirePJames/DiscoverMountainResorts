import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as thunk } from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import SkiResortMapContainer from '../Containers/SkiResortMapContainer';
import { SkiResortMapReducer } from '../Reducers/SkiResortMapReducer';
import { SkiResortMapStoreState } from '../Types/SkiResortMapStoreState';
import SkiResortMapToolBarContainer from '../Containers/SkiResortMapToolBarContainer';
import { skiResortMapToolBarReducer } from '../Reducers/SkiResortMapToolBarReducer';
import { SkiResortMapToolBarStoreState } from '../Types/SkiResortMapToolBarStoreState';
import ReduxPromise from 'redux-promise';
import { compose } from 'redux';

const middleWare = applyMiddleware(thunk);
declare var window: any


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var combinedReducers = combineReducers({
    skiResortMapReducer: SkiResortMapReducer,
    skiResortMapToolBarReducer: skiResortMapToolBarReducer
});

export const SkiResortMapStore = createStore(combinedReducers, {
    
}, composeEnhancers(applyMiddleware(thunk)))



