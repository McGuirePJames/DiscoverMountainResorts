import * as constants from '../Constants/SkiResortMapConstants'
import { SkiResortMapStoreState } from '../Types/SkiResortMapStoreState'
import GetAntiForgeryToken from '../Misc/GetAntiForgeryToken'
import * as $ from 'jquery'
import axios from 'axios';
import { Dispatch } from 'redux';
import { LOAD_MAP } from '../Constants/SkiResortMapConstants';
import { getUrlParameters }  from '../Misc/GetUrlParameters'


export interface LoadMap {
    type: constants.LOAD_MAP,
    payload: Object
}
export type SkiResortMapActions = LoadMap 

export function loadMap() {
    var skiResortId = getUrlParameters('skiResortId');
    var data = { 'id': skiResortId }
    return function (dispatch) {
        $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/SkiResorts/GetSkiResortById",
            type: "GET",
            data: data,
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()
            },
            success: function (response) {
                var test = "";
                dispatch({ type: constants.LOAD_MAP, payload: response })
            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })
    }
}