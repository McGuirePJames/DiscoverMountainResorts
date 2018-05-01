import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { default as thunk } from "redux-thunk";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import NavigationBarContainer from '../Containers/NavigationBarContainer'
import UserSignUpContainer from '../Containers/UserSignUpContainer'
import { UserSignUpStore } from '../Stores/UserSignUpStore'
import { CurrentUserStore } from '../Stores/CurrentUserStore'

ReactDOM.render(
    <Provider store={CurrentUserStore} >
        <NavigationBarContainer />
    </Provider>,
    document.getElementById('NavigationBarMountPoint')
)

ReactDOM.render(
    <Provider store={UserSignUpStore}>
        <UserSignUpContainer />
    </Provider>,
    document.getElementById('UserSignUpMountPoint') as HTMLElement
);

