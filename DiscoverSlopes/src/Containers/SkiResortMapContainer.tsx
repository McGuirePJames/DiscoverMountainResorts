import { SkiResortMapComponent }  from '../Components/SkiResortMapComponent';
import * as SkiMapActions from '../Actions/SkiResortMapActions';
import * as ToolBarActions from '../Actions/SkiResortMapToolBarActions'
import {SkiResortsExploreHOC } from '../HOCs/SkiResortsExploreHOC'
import { SkiResortMapStoreState } from '../Types/SkiResortMapStoreState';
import { connect } from "react-redux"
import { Dispatch } from 'redux';


//export function mapStateToProps({ map, resortName, isAddTrailDisplayed, isFilterTrailsDisplayed, isSearchTrailDisplayed }) {
//    return {
//        map,
//        resortName,
//        isAddTrailDisplayed,
//        isFilterTrailsDisplayed,
//        isSearchTrailDisplayed
//    }
//}
export function mapStateToProps({ map, resortName, isAddTrailDisplayed, isFilterTrailsDisplayed, isSearchTrailDisplayed }){
    console.log("hey");
    return {
        map,
        resortName,
        isAddTrailDisplayed,
        isFilterTrailsDisplayed,
        isSearchTrailDisplayed
    }
}

export function mapDispatchToProps(dispatch) {
    return {
        loadMap: () => dispatch(SkiMapActions.loadMap()),
        displayAddNewTrail: () => dispatch(ToolBarActions.displayAddNewTrail()),
        displayFilterTrails: () => dispatch(ToolBarActions.displayFilterTrails()),
        displaySearchTrail: () => dispatch(ToolBarActions.displaySearchTrail()),
    };
}
export default connect(state => ({
    skiResortMapReducer: state.skiResortMapReducer,
    skiResortMapToolBarReducer: state.skiResortMapToolBarReducer
}), mapDispatchToProps)(SkiResortMapComponent as any as React.SFC);

