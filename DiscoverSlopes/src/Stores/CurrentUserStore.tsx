import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as thunk } from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import NavigationBarContainer from '../Containers/NavigationBarContainer';
import { UserReducer } from '../Reducers/UserReducer';
import { CurrentUserStoreState } from '../Types/CurrentUserStoreState';
import * as Actions from '../Actions/CurrentUserActions';
import ReduxPromise from 'redux-promise';

const middleWare = applyMiddleware(thunk);

export const CurrentUserStore = createStore<CurrentUserStoreState>(UserReducer, {
    emailAddress: "",
    userProfileImageURL: "",

}, middleWare);


