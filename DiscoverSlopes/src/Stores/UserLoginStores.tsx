import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as thunk } from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import UserLoginContainer from '../Containers/UserLoginContainer';
import { UserLoginReducer } from '../Reducers/UserLoginReducer';
import { UserLoginStoreState } from '../Types/UserLoginStoreState';
import * as Actions from '../Actions/UserLoginActions';
import ReduxPromise from 'redux-promise';

const middleWare = applyMiddleware(thunk);

export const UserLoginStore = createStore<UserLoginStoreState>(UserLoginReducer, {
    loginError: "",
    isPasswordRevealed: false,
}, middleWare);


