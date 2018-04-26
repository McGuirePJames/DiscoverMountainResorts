import * as React from 'react';
var FontAwesome = require('react-fontawesome');


export class TrendingItemComponent extends React.Component {
    render() {
        return (
            <div className="trending-item-container col-sm-6 col-md-4 col-lg-3">
                <div className="trending-item">
                    <div className="top">
                        <div className="trending-item-image-container">
                            <div className="trending-image-ski-resort-logo-container">
                                <img src="data:image/png;base64,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" />
                            </div>
                            <div className="trending-image-item-image-container">
                                <img src="https://storagewms.blob.core.windows.net/profilepictures/Selfie.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="trending-product-description-container">
                            <div className="trending-product-description">
                                <div className="trending-product-ski-resort">
                                    <p>The Canyons</p>
                                </div>
                                <div className="trending-product-item-name">
                                    <p>9990 Ski Lift </p>
                                    <div className="trending-product-icon-container">
                                        <i className="fa fa-cutlery" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="trending-product-view">
                            <div>View</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}