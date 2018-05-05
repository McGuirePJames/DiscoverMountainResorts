import * as constants from '../Constants/UserSignUpConstants'
import { UserSignUpStoreState } from '../Types/UserSignUpStoreState'
import GetAntiForgeryToken from '../Misc/GetAntiForgeryToken'
import * as $ from 'jquery'
import { Dispatch } from 'redux';
import { RETURN_ERROR } from '../Constants/UserSignUpConstants';


export interface SignUp {
    type: constants.SIGN_UP,
    payload: string,
}

export interface TogglePasswordReveal {
    type: constants.TOGGLE_PASSWORD_REVEAL
}
export interface ReturnError {
    type: constants.RETURN_ERROR,
    payload: string
}

export type UserSignUpAction = SignUp | TogglePasswordReveal | ReturnError


export function signUpAction(): ReturnError{
    if (isFormComplete) {
        signUp();
    }
    else {
        return { type: constants.RETURN_ERROR, payload: "Passwords do not match" }
    }

}

function isFormComplete() {
    if ((document.getElementById('CreateUserPassword') as HTMLInputElement).value === (document.getElementById('CreateUserConfirmPassword') as HTMLInputElement).value) {
        return true;
    }
    return false;
}

export function signUp(): Dispatch<any> {
    var emailAddress: string = (document.getElementById('CreateUserUsername') as HTMLInputElement).value
    var password: string = (document.getElementById('CreateUserPassword') as HTMLInputElement).value
    var confirmPassword: string = (document.getElementById('CreateUserConfirmPassword') as HTMLInputElement).value
    return function (dispatch) {
        if (password != confirmPassword) {
            dispatch({ type: constants.RETURN_ERROR, payload: "Passwords don't match" })
        }
        else {
            $.ajax({
                beforeSend: () => {
                    $('html').css('cursor', 'wait');
                },
                url: "/User/CreateUserAsync",
                type: "POST",
                dataType: "json",
                data: GetAntiForgeryToken({ emailAddress: emailAddress, password: password }),
                success: function (response) {
                    if (response.success) {
                        window.location.href = "/"
                    }
                    else {
                        dispatch({ type: constants.RETURN_ERROR, payload: response.responseText })
                    }

                },
                complete: () => {
                    $('html').css('cursor', 'default');
                }
            })
        }
    }
}
export function revealPassword(): TogglePasswordReveal {
    return {
        type: constants.TOGGLE_PASSWORD_REVEAL
    };
}
