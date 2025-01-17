import React from "react";
import hero1 from '../../images/slider/hero-3.jpg'
import hero2 from '../../images/slider/hero4-flower.png'
import bg from '../../images/slider/hero-bg22.png'
import TimeCountDown from '../countdown'


const Hero4 = () => {
    return (

        <section className="static-hero-s3" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-title">
                                        <h2>Save <span>the</span> Date</h2>
                                        <div className="shape"><img src={hero2} alt="" />
                                        </div>
                                    </div>
                                    <div className="slide-sub-title">
                                        <h3>Sophia & Oliver</h3>
                                    </div>
                                    <div className="slide-text">
                                        <p>We Are Getting Married November 15,2024</p>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <img className="zoom" src={hero1} alt="" />
                    </div>
                </div>
                <div className="wpo-wedding-date">
                    <div className="clock-grids">
                        <div id="clock">
                            <TimeCountDown />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero4;