import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import hero1 from '../../images/slider/hero-9.jpg'
import hero2 from '../../images/slider/hero-10.jpg'
import hero3 from '../../images/slider/hero-11.jpg'

const Hero9 = () => {
    return (
        <section className="wpo-static-hero-s8">
            <div className="container-fluid">
                <div className="wpo-hero-img-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <Slide direction="Left" duration="1000" triggerOnce="true">
                                <div className="wpo-hero-img">
                                    <img src={hero1} alt="" />
                                </div>
                            </Slide>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <Zoom direction="down" duration="1000" triggerOnce="true">
                                <div className="wpo-hero-img">
                                    <img src={hero2} alt="" />
                                </div>
                            </Zoom>
                        </div>
                        <div className="col col-lg-4 col-md-4 col-sm-4 col-12">
                            <Slide direction="right" duration="1000" triggerOnce="true">
                                <div className="wpo-hero-img">
                                    <img src={hero3} alt="" />
                                </div>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-text-bottom">
                <h2>Welcome To Habibi</h2>
            </div>
        </section>
    )
}

export default Hero9;