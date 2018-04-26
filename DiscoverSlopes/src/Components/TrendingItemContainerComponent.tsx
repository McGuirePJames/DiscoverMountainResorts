import * as React from 'react';
import { TrendingItemComponent } from '../Components/TrendingItemComponent'

export class TrendingItemContainerComponent extends React.Component {
    render() {
        return (
            <div className="trending-item-container-component">
                <div className="row">
                    <TrendingItemComponent />
                    <TrendingItemComponent />
                    <TrendingItemComponent />
                    <TrendingItemComponent />
                    <TrendingItemComponent />
                    <TrendingItemComponent />
                    <TrendingItemComponent />
                    <TrendingItemComponent />
                </div>
            </div>
        )
    }
}