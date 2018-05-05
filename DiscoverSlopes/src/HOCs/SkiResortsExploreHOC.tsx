import * as React from 'react';
import  NavigationBarContainer  from '../Containers/NavigationBarContainer'
import { CarouselComponent } from '../Components/CarouselComponent'
import  SkiResortMapContainer  from '../Containers/SkiResortMapContainer'
import { Provider } from 'react-redux';
import { CurrentUserStore } from '../Stores/CurrentUserStore'
import { SkiResortMapStore } from '../Stores/SkiResortMapStore'

export interface Props {

}
export class SkiResortsExploreHOC extends React.Component<Props, object> {
    render() {
        return (
            <div>
                <Provider store={CurrentUserStore} >
                    <NavigationBarContainer />
                </Provider>
                <Provider store={SkiResortMapStore} >
                    <SkiResortMapContainer />
                </Provider>
            </div>
        )
    }
}

