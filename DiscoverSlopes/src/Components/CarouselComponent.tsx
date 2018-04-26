import * as React from 'react'
import Slider from "react-slick";



export class CarouselComponent extends React.Component {
    render() {
        var settings = {
            accessibility: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            autoplay: false,
            autoplaySpeed: 8000,
            pauseOnFocus: true,
            pauseOnHover: true,
            swipe: true,
        };
        return (
            <div id="CarouselComponent">
                <style dangerouslySetInnerHTML={{
                    __html: `
                        #CarouselComponent {
                            border-bottom: solid;
                        }
                        .carousel-container{
                            background-color: #05202B; 
                        }
                        #CarouselComponent .welcome-container {
                            position: relative;
                            display: flex;
                        }

                        #CarouselComponent .welcome-message {
                            position: absolute;
                            z-index: 10000;
                            top: 50%;
                            left: 50%;
                            transform: translate(-50%, -50%);
                            background-color: rgba(57, 57, 57, .6);
                            height: 40%;
                            width: 40%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                        }

                            #CarouselComponent .welcome-message p {
                                color: white;
                                font-size: 15pt;
                                margin-bottom: 0px;
                            }

                        #CarouselComponent .slick-dots {
                            background-color: rgb(5, 32, 43);
                            height: 35px;
                            display: flex;
                            align-items: center;
                        }

                            #CarouselComponent .slick-dots li button::before {
                                color: white;
                                opacity: 0.6;
                            }

                            #CarouselComponent .slick-dots .slick-active button::before {
                                opacity: 1.00;
                            }
                        .slick-arrow {
                            margin-top: -30px !important;
                        }
                        
                        .slick-prev:before, .slick-next:before {
                            font-size: 40px !important;
                        }
                        
                        .slick-prev {
                            margin-left: 40px !important;
                            z-index: 100;
                            color: red;
                            background-color: red;
                        }
                        
                        .slick-next {
                            margin-right: 60px;
                        }
                        .slick-slide{
                            height: 300px !important;
                        }
                        .slick-slide div{
                            height: inherit;
                        }
                        .slick-slide .welcome-image{
                          background-position: center center;
                          background-repeat: no-repeat;
                          background-image: url('https://storagewms.blob.core.windows.net/profilepictures/Brighton.jpg');
                        }
                `}} />
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" />
                <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" />
                <div className="carousel-container">

                    <Slider {...settings}>
                        <div className="welcome-container">
                            <div className="welcome-image">
                            </div>
                            <div className="welcome-message">
                                <p> Hello World </p>
                            </div>
                        </div>
                        <div className="welcome-container">
                            <div className="welcome-image">
                            </div>
                            <div className="welcome-message">
                                <p> Hello World </p>
                            </div>
                        </div>
                        <div className="welcome-container">
                            <div className="welcome-image">
                            </div>
                            <div className="welcome-message">
                                <p> Hello World </p>
                            </div>
                        </div>
                        <div className="welcome-container">
                            <div className="welcome-image">
                            </div>
                            <div className="welcome-message">
                                <p> Hello World </p>
                            </div>
                        </div>
                        <div className="welcome-container">
                            <div className="welcome-image">
                            </div>
                            <div className="welcome-message">
                                <p> Hello World </p>
                            </div>
                        </div>
                        <div className="welcome-container">
                            <div className="welcome-image">
                            </div>
                            <div className="welcome-message">
                                <p> Hello World </p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        )
    }
}