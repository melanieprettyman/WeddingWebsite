import React from "react";
import hero1 from '../../images/slider/hero-6.jpg'
import shape1 from '../../images/slider/date-shape.png'
import frame from '../../images/slider/frame.png'
import TimeCountDown from "../countdown";


const Hero6 = () => {
    return (

        <section className="static-hero-s5">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="hero-inner-wrap">
                            <div className="row align-items-center">
                                <div className="col col-xl-6 col-lg-6 col-12">
                                    <div className="wpo-static-hero-inner">
                                        <div className="slide-title">
                                            <h2>Ritesh & Joya</h2>
                                        </div>
                                        <div data-swiper-parallax="400" className="slide-text">
                                            <p>Our Big Day is November 15,2022</p>
                                        </div>
                                        <span className="shape"><img src={shape1} alt="" /> </span>
                                        <div className="wpo-wedding-date">
                                            <div className="clock-grids">
                                                <div id="clock">
                                                    <TimeCountDown/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="col col-xl-6 col-lg-6 col-12">
                                    <div className="wpo-hero-img">
                                        <img src={hero1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="shape-frame">
                    <img src={frame} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Hero6;