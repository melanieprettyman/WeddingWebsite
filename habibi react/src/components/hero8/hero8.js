import React from "react";
import { Link } from 'react-router-dom'
import hero1 from '../../images/slider/hero-7.jpg'
import hero2 from '../../images/slider/hero-8.jpg'
import vector from '../../images/slider/vector.svg'
import vector2 from '../../images/slider/shape-vector.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Hero8 = () => {
    return (
        <section className="static-hero-s7">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col col-xl-4 col-lg-4 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-sub-title">
                                        <span>Habibi Wedding</span>
                                    </div>
                                    <div className="slide-title">
                                        <h2>Making Your Dream Long Lasting.</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>Best wishes to your big day of life. Congratulation its your wedding time. We
                                            are happy to see you here. We must want that your dreamy wedding will made
                                            with us.</p>
                                    </div>
                                    <div className="shape">
                                        <Link onClick={ClickHandler} to="/contact" className="theme-btn-s2">Book An Appointment</Link>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col col-xl-8 col-lg-8 col-12">
                                <div className="wpo-hero-img-wrap">
                                    <div className="wpo-hero-img-item">
                                        <div className="wpo-hero-img">
                                            <img src={hero1} alt="" />
                                        </div>
                                    </div>
                                    <div className="wpo-hero-img-item">
                                        <div className="wpo-hero-img">
                                            <img src={hero2} alt="" />
                                        </div>
                                    </div>
                                    <div className="wpo-hero-img-topper">
                                        <div className="wpo-hero-img-topper-inner">
                                            <span>
                                                <img src={vector} alt="" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-vector">
                <img src={vector2} alt="" />
            </div>
        </section>
    )
}

export default Hero8;