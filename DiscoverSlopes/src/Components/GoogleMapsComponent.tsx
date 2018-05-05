import * as React from 'react'
import * as $ from 'jquery'
import { PropTypes } from 'react';
import { GetAntiForgeryTokenWithoutData } from '../Misc/GetAntiForgeryToken';

declare var google: any
declare var MarkerClusterer: any

declare global {
    interface Window { GoogleMap: any; }
}
window.GoogleMap = window.GoogleMap || {};

export class GoogleMapsComponent extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            googleMap: ''
        }
        this.alertUser = this.alertUser.bind(this);
        this.loadMap = this.loadMap.bind(this);
        this.addMarker = this.addMarker.bind(this);
        this.addSkiResortMarkers = this.addSkiResortMarkers.bind(this);
        this.getSkiResorts = this.getSkiResorts.bind(this);
        this.createMarker = this.createMarker.bind(this);
        this.createInfoWindow = this.createInfoWindow.bind(this);
    }
    alertUser() {
        alert('hello');
    }
    createMarker(lat: number, lng: number) {
        var marker = new google.maps.Marker({
            position: { lat: lat, lng: lng },
            icon: {
                size: new google.maps.Size(70, 45.50),
                scaledSize: new google.maps.Size(70, 45.50),
                url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png"
            },
            map: window.GoogleMap,
            title: "Hello World"
        })
        return marker;
    }
    async addSkiResortMarkers() {
        await this.getSkiResorts().then((data) => {
            for (let i = 0; i < data.length; i++) {
                this.addMarker(data[i]);
            }
        })
    }
    getSkiResorts() {
        return $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/SkiResorts/GetSkiResorts",
            type: "GET",
            headers: {
                "RequestVerificationToken": $("[name='__RequestVerificationToken']").val()
            },
            success: function (response) {
                return response.responseText;
            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })
    }
    createInfoWindow(skiResort: Object) {
        var html = '<div class="info-window"> ' +
            '    <div class="info-window-container"> ' +
            '        <div class="report-details-container"> ' +
            '            <div class="resort-name-container"> ' +
            '                <p id="ResortName">' + skiResort["name"] + '</p> ' +
            '            </div> ' +
            '            <div class="resort-rating-container"> ' +
            '                <div id="ResortRatingNumber"> ' +
            '                    4.3 ' +
            '                </div> ' +
            '                <div class="resort-rating-stars"> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                    <div> ' +
            '                        <i class="fa fa-star-half-o" aria-hidden="true"></i> ' +
            '                    </div> ' +
            '                </div> ' +
            '                <div id="ResortTotalReviews"> ' +
            '                    377 ' +
            '                </div> ' +
            '            </div> ' +
            '            <div class="resort-trails-container"> ' +
            '                <div class="total-trails-container"> ' +
            '                    <p>Trails</p> ' +
            '                    <p id="ResortTotalTrails">750</p> ' +
            '                </div> ' +
            '                <div class="user-trails"> ' +
            '                    <p>User Trails</p> ' +
            '                    <p id="UserTrails">500</p> ' +
            '                </div> ' +
            '                <div class="resort-trails"> ' +
            '                    <p>Resort Trails</p> ' +
            '                    <p id="ResortTrails">500</p> ' +
            '                </div> ' +
            '            </div> ' +
            '            <div class="resort-explore-container"> ' +
            '                <a href="/SkiResorts/Explore?skiResortId=' + skiResort["skiResortsId"] + '">Explore</a> ' +
            '            </div> ' +
            '        </div> ' +
            '        <div class="resort-image"> ' +
            '            <img src="' + skiResort["logo"] +  '"> ' +
            '        </div> ' +
            '    </div> ' +
            '</div> ';

        var infowindow = new google.maps.InfoWindow({
            content: html
        });
        return infowindow;
    }
    addMarker(skiResort: Object) {        
        var marker = new google.maps.Marker({
            position: { lat: skiResort["latitude"], lng: skiResort["longitude"] },
            icon: {
                size: new google.maps.Size(70, 45.50),
                scaledSize: new google.maps.Size(70, 45.50),
                url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png"
            },
            map: window.GoogleMap
        });
        var infoWindow = this.createInfoWindow(skiResort);
        marker.addListener('click', function () {
            infoWindow.open(window.GoogleMap, marker);
        });
    }
    loadMap() {

        var styledMapType = new google.maps.StyledMapType(
            [
                
            ],
            { name: 'Styled Map' });


        window.GoogleMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 40.660061, lng: -111.5876328 },           
        })

        window.GoogleMap.mapTypes.set('styled_map', styledMapType);
        window.GoogleMap.setMapTypeId('styled_map');
    }
    componentDidMount() {
        this.loadMap();
        this.addSkiResortMarkers();
    }
    render() {
        return (
            <div id="GoogleMapsContainer" className="row">

                <style dangerouslySetInnerHTML={{
                    __html: `
                    #GoogleMapsContainer {
                        width: 90%;
                        margin-left: 5%;
                        margin-top: 45px;
                        border-radius: 2px;
                        -webkit-box-shadow: 1px 1px 6px 0 rgba(0,0,0,0.75);
                        -moz-box-shadow: 1px 1px 6px 0 rgba(0,0,0,0.75);
                        box-shadow: 1px 1px 6px 0 rgba(0,0,0,0.75);
                        margin-bottom: 20px;
                    }
                    
                        #GoogleMapsContainer .column-left {
                            background-color: white;
                            z-index: 1;
                            padding: 5px 25px 5px 25px;
                        }
                    
                    @media (max-width: 768px) {
                        #GoogleMapsContainer .column-left {
                            -webkit-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.75);
                            -moz-box-shadow: 0 2px 2px 0 rgba(0,0,0,0.75);
                            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.75);
                        }
                    }
                    
                    #GoogleMapsContainer .column-left b {
                        color: #38BBED;
                    }
                    
                    #GoogleMapsContainer .column-left .title {
                        margin-top: 15px;
                        font-size: 21pt;
                        line-height: 38px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }
                    
                    #GoogleMapsContainer .column-left .border-separator {
                        height: 3px;
                        width: 100%;
                        background-color: rgb(234, 233, 235);
                        background-color: #38bbed;
                        margin-bottom: 15px;
                        margin-top: 15px;
                    }
                    
                    #GoogleMapsContainer .column-left .description {
                        font-size: 15pt;
                    }
                    
                    #GoogleMapsContainer p {
                        margin-bottom: 0;
                        font-weight: 100;
                    }
                    
                    #map {
                        width: 100%;
                        height: 600px;
                    }
                        `}} />
                <section className="column column-left col-sm-12 col-md-3">
                    <div className="title">
                        <p>Find <b>your</b> perfect resort</p>
                    </div>
                    <div className="border-separator">

                    </div>
                    <div className="description">
                        <p><b>Explore</b> some of the world's leading ski resorts, <b>discover</b> hidden stashes of powder, <b>relax</b> at the comfiest on-mountain dining, and much more!  </p>
                    </div>
                </section>
                <section className="col-sm-12 col-md-9" id="map">

                </section>
            </div>

        );
    }
};
