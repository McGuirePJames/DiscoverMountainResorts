import * as constants from '../Constants/UserLoginConstants'
import { User } from '../Types/UserLoginStoreState'
import GetAntiForgeryToken from '../Misc/GetAntiForgeryToken'
import * as $ from 'jquery'
import axios from 'axios';
import { Dispatch } from 'redux';


export interface Login {
    type: constants.LOGIN
    payload: string,
}

export interface TogglePasswordReveal {
    type: constants.TOGGLE_PASSWORD_REVEAL
}

export type UserLoginAction = Login | TogglePasswordReveal 


export function loginAsync(): Dispatch<any>{
    var username: string = (document.getElementById('LoginUsername') as HTMLInputElement).value
    var password: string = (document.getElementById('LoginPassword') as HTMLInputElement).value
    return function (dispatch) {
        $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/User/LoginAsync",
            type: "POST",
            dataType: "json",
            data: GetAntiForgeryToken({username: username, password: password }),
            success: function (response) {
                if (response.success) {
                    window.location.href = "/"
                }
                else {
                    dispatch({ type: constants.LOGIN, payload: response.responseText })
                }

            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })
    }
}
export function revealPassword(): TogglePasswordReveal {
    return {
        type: constants.TOGGLE_PASSWORD_REVEAL
    };
}
