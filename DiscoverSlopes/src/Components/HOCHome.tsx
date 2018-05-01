import * as React from 'react';
import  NavigationBarContainer  from '../Containers/NavigationBarContainer'
import { CarouselComponent } from '../Components/CarouselComponent'
import { GoogleMapsComponent } from '../Components/GoogleMapsComponent'
import { TrendingItemComponent } from '../Components/TrendingItemComponent'
import { TrendingItemContainerComponent } from '../Components/TrendingItemContainerComponent'
import { Provider } from 'react-redux';
import { CurrentUserStore } from '../Stores/CurrentUserStore'

export class HOCHome extends React.Component {
    render() {
        return (
            <div>
                <Provider store={CurrentUserStore} >
                    <NavigationBarContainer />
                </Provider>
                <CarouselComponent>
                </CarouselComponent>
                <GoogleMapsComponent>
                </GoogleMapsComponent>
                <TrendingItemContainerComponent/>
            </div>
        )
    }
}

