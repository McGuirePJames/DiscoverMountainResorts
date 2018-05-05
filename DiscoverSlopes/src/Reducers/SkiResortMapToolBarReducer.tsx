import { SkiResortMapToolBarStoreState } from '../Types/SkiResortMapToolBarStoreState'
import { DISPLAY_ADD_NEW_TRAIL, DISPLAY_FILTER_TRAILS, DISPLAY_SEARCH_TRAIL } from '../Constants/SkiResortMapToolBarConstants';
import { SkiResortMapToolBarActions } from '../Actions/SkiResortMapToolBarActions';



export function skiResortMapToolBarReducer(state: SkiResortMapToolBarStoreState = { isAddTrailDisplayed: false, isSearchTrailDisplayed: false, isFilterTrailsDisplayed: false}, action: SkiResortMapToolBarActions): SkiResortMapToolBarStoreState {
    switch (action.type) {
        case DISPLAY_ADD_NEW_TRAIL:{
            return {
                ...state, 
                isAddTrailDisplayed: true,
                isFilterTrailsDisplayed: false,
                isSearchTrailDisplayed: false
            }
        }
        case DISPLAY_FILTER_TRAILS: {
            return {
                ...state,
                isAddTrailDisplayed: false,
                isFilterTrailsDisplayed: true,
                isSearchTrailDisplayed: false
            }
        }
        case DISPLAY_SEARCH_TRAIL: {
            return {
                ...state,
                isAddTrailDisplayed: false,
                isFilterTrailsDisplayed: false,
                isSearchTrailDisplayed: true
            }
        }
        
    }
    return state;
}