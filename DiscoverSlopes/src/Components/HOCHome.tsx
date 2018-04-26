import * as React from 'react';
import { NavigationBarComponent } from '../Components/NavigationBarComponent'
import { CarouselComponent } from '../Components/CarouselComponent'
import { GoogleMapsComponent } from '../Components/GoogleMapsComponent'
import { TrendingItemComponent } from '../Components/TrendingItemComponent'
import { TrendingItemContainerComponent } from '../Components/TrendingItemContainerComponent'

export class HOCHome extends React.Component {
    render() {
        return (
            <div>
                <NavigationBarComponent>
                </NavigationBarComponent>
                <CarouselComponent>
                </CarouselComponent>
                <GoogleMapsComponent>
                </GoogleMapsComponent>
                <TrendingItemContainerComponent/>
            </div>
        )
    }
}

