"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_slick_1 = require("react-slick");
var CarouselComponent = /** @class */ (function (_super) {
    __extends(CarouselComponent, _super);
    function CarouselComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarouselComponent.prototype.render = function () {
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
        return (React.createElement("div", { id: "CarouselComponent" },
            React.createElement("style", { dangerouslySetInnerHTML: {
                    __html: "\n                        #CarouselComponent {\n                            border-bottom: solid;\n                        }\n                        .carousel-container{\n                            background-color: #05202B; \n                        }\n                        #CarouselComponent .welcome-container {\n                            position: relative;\n                            display: flex;\n                        }\n\n                        #CarouselComponent .welcome-message {\n                            position: absolute;\n                            z-index: 10000;\n                            top: 50%;\n                            left: 50%;\n                            transform: translate(-50%, -50%);\n                            background-color: rgba(57, 57, 57, .6);\n                            height: 40%;\n                            width: 40%;\n                            display: flex;\n                            justify-content: center;\n                            align-items: center;\n                        }\n\n                            #CarouselComponent .welcome-message p {\n                                color: white;\n                                font-size: 15pt;\n                                margin-bottom: 0px;\n                            }\n\n                        #CarouselComponent .slick-dots {\n                            background-color: rgb(5, 32, 43);\n                            height: 35px;\n                            display: flex;\n                            align-items: center;\n                        }\n\n                            #CarouselComponent .slick-dots li button::before {\n                                color: white;\n                                opacity: 0.6;\n                            }\n\n                            #CarouselComponent .slick-dots .slick-active button::before {\n                                opacity: 1.00;\n                            }\n                        .slick-arrow {\n                            margin-top: -30px !important;\n                        }\n                        \n                        .slick-prev:before, .slick-next:before {\n                            font-size: 40px !important;\n                        }\n                        \n                        .slick-prev {\n                            margin-left: 40px !important;\n                            z-index: 100;\n                            color: red;\n                            background-color: red;\n                        }\n                        \n                        .slick-next {\n                            margin-right: 60px;\n                        }\n                        .slick-slide{\n                            height: 300px !important;\n                        }\n                        .slick-slide div{\n                            height: inherit;\n                        }\n                        .slick-slide .welcome-image{\n                          background-position: center center;\n                          background-repeat: no-repeat;\n                          background-image: url('https://storagewms.blob.core.windows.net/profilepictures/Brighton.jpg');\n                        }\n                "
                } }),
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.css" }),
            React.createElement("link", { rel: "stylesheet", type: "text/css", href: "//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick-theme.css" }),
            React.createElement("div", { className: "carousel-container" },
                React.createElement(react_slick_1.default, __assign({}, settings),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World "))),
                    React.createElement("div", { className: "welcome-container" },
                        React.createElement("div", { className: "welcome-image" }),
                        React.createElement("div", { className: "welcome-message" },
                            React.createElement("p", null, " Hello World ")))))));
    };
    return CarouselComponent;
}(React.Component));
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=CarouselComponent.js.map