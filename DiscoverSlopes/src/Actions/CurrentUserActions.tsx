import * as constants from '../Constants/CurrentUserConstants'
import { CurrentUserStoreState } from '../Types/CurrentUserStoreState'
import GetAntiForgeryToken from '../Misc/GetAntiForgeryToken'
import { GetAntiForgeryTokenWithoutData } from '../Misc/GetAntiForgeryToken'
import * as $ from 'jquery'
import axios from 'axios';
import { SET_CURRENT_USER } from '../Constants/CurrentUserConstants';


export interface SetCurrentUser {
    type: constants.SET_CURRENT_USER
    payload: string,
}
export interface SignOut {
    type: constants.SIGN_OUT
}

export type CurrentUserAction = SetCurrentUser | SignOut

export function getCurrentUserNew() {
    return function (dispatch) {
        $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/User/GetCurrentUser",
            type: "GET",
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()//GetAntiForgeryTokenWithoutData()
            },
            success: function (response) {
                //console.log(response.responseText)
                if (response.success) {
                    dispatch({ type: constants.SET_CURRENT_USER, payload: response.responseText })
                }
                else {
                    dispatch({ type: constants.SET_CURRENT_USER, payload: "{}" })
                }
            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })
    }
}
export function signOut() {
    var test = "";
    return function (dispatch) {
        $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/User/SignOutAsync",
            type: "POST",
            //dataType: "json",
            //contentType: "application/json; charset=utf-8",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()
            },
            success: function (response) {
                var testAgain = response;
                if (response.success) {
                    window.location.reload();
                    dispatch({ type: constants.SIGN_OUT });

                }
            },
            error: function (request, status, error) {

                var val = request.responseText;
                alert("error" + val);
            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })
    }
}

