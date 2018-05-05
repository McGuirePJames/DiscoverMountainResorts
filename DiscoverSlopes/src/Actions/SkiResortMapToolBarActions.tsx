import * as constants from '../Constants/SkiResortMapToolBarConstants'
import { SkiResortMapToolBarStoreState } from '../Types/SkiResortMapToolBarStoreState'
import GetAntiForgeryToken from '../Misc/GetAntiForgeryToken'
import * as $ from 'jquery'
import axios from 'axios';
import { Dispatch } from 'redux';
import { DISPLAY_ADD_NEW_TRAIL, DISPLAY_FILTER_TRAILS, DISPLAY_SEARCH_TRAIL } from '../Constants/SkiResortMapToolBarConstants';

export interface DisplayAddNewTrail {
    type: constants.DISPLAY_ADD_NEW_TRAIL
}
export interface DisplayFilterTrails {
    type: constants.DISPLAY_FILTER_TRAILS
}
export interface DisplaySearchTrail {
    type: constants.DISPLAY_SEARCH_TRAIL
}
export type SkiResortMapToolBarActions = DisplayAddNewTrail | DisplayFilterTrails | DisplaySearchTrail

export function displayAddNewTrail() {
    return {
        type: constants.DISPLAY_ADD_NEW_TRAIL
    }
}
export function displayFilterTrails() {
    return {
        type: constants.DISPLAY_FILTER_TRAILS
    }
}
export function displaySearchTrail() {
    return {
        type: constants.DISPLAY_SEARCH_TRAIL
    }
}