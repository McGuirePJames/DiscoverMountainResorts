import { SkiResortMapStoreState } from '../Types/SkiResortMapStoreState'
import { LOAD_MAP } from '../Constants/SkiResortMapConstants';
import { SkiResortMapActions } from '../Actions/SkiResortMapActions';

declare var google: any

export function SkiResortMapReducer(state: SkiResortMapStoreState = { map: null, resortName: ""}, action: SkiResortMapActions): SkiResortMapStoreState {
    switch (action.type) {
        case LOAD_MAP:
            var styledMapType = new google.maps.StyledMapType(
                [

                ],
                { name: 'Styled Map' });

            window.GoogleMap = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: { lat: action.payload["latitude"], lng: action.payload["longitude"] },
                disableDefaultUI: true
            })
            window.GoogleMap.mapTypes.set('styled_map', styledMapType);
            //window.GoogleMap.setMapTypeId('styled_map');
            window.GoogleMap.setMapTypeId(google.maps.MapTypeId.TERRAIN);
            return {
                ...state, map: window.GoogleMap
            }        
    }
    return state;
}