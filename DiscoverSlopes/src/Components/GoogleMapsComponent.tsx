import * as React from 'react'
import * as $ from 'jquery'
import { PropTypes } from 'react';

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
                this.addMarker(data[i].latitude, data[i].longitude);
            }
        })
    }
    getSkiResorts() {
        return $.ajax({
            beforeSend: () => {
                $('html').css('cursor', 'wait');
            },
            url: "/SkiResort/GetSkiResorts",
            type: "GET",
            success: function (response) {
                return response.responseText;
            },
            complete: () => {
                $('html').css('cursor', 'default');
            }
        })

    }
    addMarker(lat: number, lng: number) {
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
    }
    //addMarkerCluster() {

    //    var clusterStyles = [
    //        {
    //            textColor: 'white',
    //            url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png",
    //            height: 50,
    //            width: 50
    //        },
    //        {
    //            textColor: 'white',
    //            url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png",
    //            height: 50,
    //            width: 50
    //        },
    //        {
    //            textColor: 'white',
    //            url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png",
    //            height: 50,
    //            width: 50
    //        }
    //    ];
    //    var mcOptions = {
    //        gridSize: 50,
    //        styles: clusterStyles,
    //        maxZoom: 15
    //    };
    //    var locations = [
    //        { lat: -31.563910, lng: 147.154312 },
    //        { lat: -33.718234, lng: 150.363181 },
    //        { lat: -33.727111, lng: 150.371124 },
    //        { lat: -33.848588, lng: 151.209834 },
    //        { lat: -33.851702, lng: 151.216968 },
    //        { lat: -34.671264, lng: 150.863657 },
    //        { lat: -35.304724, lng: 148.662905 },
    //        { lat: -36.817685, lng: 175.699196 },
    //        { lat: -36.828611, lng: 175.790222 },
    //        { lat: -37.750000, lng: 145.116667 },
    //        { lat: -37.759859, lng: 145.128708 },
    //        { lat: -37.765015, lng: 145.133858 },
    //        { lat: -37.770104, lng: 145.143299 },
    //        { lat: -37.773700, lng: 145.145187 },
    //        { lat: -37.774785, lng: 145.137978 },
    //        { lat: -37.819616, lng: 144.968119 },
    //        { lat: -38.330766, lng: 144.695692 },
    //        { lat: -39.927193, lng: 175.053218 },
    //        { lat: -41.330162, lng: 174.865694 },
    //        { lat: -42.734358, lng: 147.439506 },
    //        { lat: -42.734358, lng: 147.501315 },
    //        { lat: -42.735258, lng: 147.438000 },
    //        { lat: -43.999792, lng: 170.463352 }
    //    ];
    //    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //    var markers = locations.map(function (location, i) {
    //        return new google.maps.Marker({
    //            position: { lat: location.lat, lng: location.lng },
    //            icon: {
    //                size: new google.maps.Size(70, 60),
    //                scaledSize: new google.maps.Size(70, 60),
    //                origin: new google.maps.Point(0, 0),
    //                url: "https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png"
    //            },
    //            map: window.GoogleMap,
    //            label: labels[i % labels.length],
    //            optimized: false,
    //            title: "Hello World"
    //        })
    //    });
    //    var myoverlay = new google.maps.OverlayView();
    //    myoverlay.draw = function () {
    //        this.getPanes().markerLayer.id = 'markerLayer';
    //    };
    //    myoverlay.setMap(window.GoogleMap);
    //    var markerCluster = new MarkerClusterer(window.GoogleMap, markers, mcOptions)
    //        //{ imagePath: 'https://storagewms.blob.core.windows.net/profilepictures/MountainIcon.png' });

    //}

    loadMap() {
        window.GoogleMap = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 40.660061, lng: -111.5876328 }
        })
    }
    componentDidMount() {
        this.loadMap();
        this.addSkiResortMarkers();

    }
    render() {
        return (
            <div id="GoogleMapsContainer" className="row">
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
