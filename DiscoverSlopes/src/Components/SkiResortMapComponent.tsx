import * as React from 'react'
import { SkiResortMapToolBarComponent }from '../Components/SkiResortMapToolBarComponent'
import SkiResortMapContainer from '../Containers/SkiResortMapContainer';
import * as Actions from '../Actions/SkiResortMapToolBarActions'

export interface Props {
    loadMap?: () => void;
    isAddTrailDisplayed: boolean,
    isSearchTrailDisplayed: boolean,
    isFilterTrailsDisplayed: boolean,
    displayAddNewTrail: () => void,
    displayFilterTrails: () => void,
    displaySearchTrail: () => void,
}



export class SkiResortMapComponent extends React.Component<Props, object> {
    componentDidMount() {

        const { loadMap, isAddTrailDisplayed, isSearchTrailDisplayed, isFilterTrailsDisplayed, displayAddNewTrail, displaySearchTrail, displayFilterTrails } = this.props;
        loadMap();
    }
    render() {
        
        const { isSearchTrailDisplayed, isFilterTrailsDisplayed, displayAddNewTrail } = this.props;
        var test = this.props["skiResortMapReducer"].isAddTrailDisplayed;
        return (           
            <div id="SkiResortMapComponent">                
                <div id="map">
                    <button type="button">Begin</button>
                </div>
                <SkiResortMapToolBarComponent {...this.props} />
            </div>
        )
    }
}
//{...{ isAddTrailDisplayed: false, isSearchTrailDisplayed: false, isFilterTrailsDisplayed: false } }