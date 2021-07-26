import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 750,
    autoplay: true,
    mouseDrag: false,
    navText: [
        "<i class='fas fa-arrow-left'></i>",
        "<i class='fas fa-arrow-right'></i>"
    ]
}

class Banner extends Component {
    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }
    render() {
        return (
            <>
                {this.state.display ? <OwlCarousel 
                    className="home-slides owl-carousel owl-theme"
                    {...options}
                >
                    <div className="main-banner-two">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="banner-image">
                                                        <div 
                                                            className={
                                                                `circle ${isVisible ? "animated zoomIn" : ''}`
                                                            }
                                                        ></div>
                                                        <img 
                                                            src={require("../../images/home/banner/1.webp")} 
                                                            alt="image"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner-two">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="banner-image">
                                                        <div 
                                                            className={
                                                                `circle ${isVisible ? "animated zoomIn" : ''}`
                                                            }
                                                        ></div>
                                                        <img 
                                                            src={require("../../images/home/banner/2.webp")} 
                                                            alt="image"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main-banner-two">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <div className="container">
                                    <VisibilitySensor>
                                        {({ isVisible }) => (
                                            <div className="row align-items-center">
                                                <div className="col-lg-12">
                                                    <div className="banner-image">
                                                        <div 
                                                            className={
                                                                `circle ${isVisible ? "animated zoomIn" : ' '}`
                                                            }
                                                        ></div>
                                                        <img 
                                                            src={require("../../images/home/banner/3.webp")} 
                                                            alt="image" 
                                                            // className={
                                                            //     isVisible ? "animated fadeInUp" : ''
                                                            // }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </>
        );
    }
}

export default Banner;
