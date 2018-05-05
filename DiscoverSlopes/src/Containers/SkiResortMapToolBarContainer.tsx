import { SkiResortMapToolBarComponent }  from '../Components/SkiResortMapToolBarComponent';
import * as Actions from '../Actions/SkiResortMapToolBarActions';
import { SkiResortMapToolBarStoreState } from '../Types/SkiResortMapToolBarStoreState';
import { connect } from "react-redux"
import { Dispatch } from 'redux';


export function mapStateToProps({ isAddTrailDisplayed, isFilterTrailsDisplayed, isSearchTrailDisplayed }: SkiResortMapToolBarStoreState) {
    return {
        isAddTrailDisplayed: false,
        isFilterTrailsDisplayed: false,
        isSearchTrailDisplayed: false,
    }
}

export function mapDispatchToProps(dispatch: Dispatch<Actions.SkiResortMapToolBarActions>) {
    return {
        displayAddNewTrail: () => (Actions.displayAddNewTrail()),
        displayFilterTrails: () => (Actions.displayFilterTrails()),
        displaySearchTrail: () => (Actions.displaySearchTrail()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SkiResortMapToolBarComponent as any as React.SFC);

