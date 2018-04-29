import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as thunk } from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import UserSignUpContainer from '../Containers/UserSignUpContainer';
import { UserSignUpReducer } from '../Reducers/UserSignUpReducers';
import { UserSignUpStoreState } from '../Types/UserSignUpStoreState';
import * as Actions from '../Actions/UserSignUpActions';
import ReduxPromise from 'redux-promise';

const middleWare = applyMiddleware(thunk);

export const UserSignUpStore = createStore<UserSignUpStoreState>(UserSignUpReducer, {
    signUpError: "",
    isPasswordRevealed: false,
}, middleWare);


