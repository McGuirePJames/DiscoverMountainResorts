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
import { NavigationBarComponent } from '../Components/NavigationBarComponent'
import { UserLoginStore } from '../Stores/UserLoginStores'


ReactDOM.render(
    <NavigationBarComponent />,
    document.getElementById('NavigationBarMountPoint')
)

ReactDOM.render(
    <Provider store={UserLoginStore}>
        <UserLoginContainer />
    </Provider>,
    document.getElementById('LoginMountPoint') as HTMLElement
);

