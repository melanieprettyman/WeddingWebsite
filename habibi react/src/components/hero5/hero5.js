import React from "react";
import hero1 from '../../images/slider/hero-4.jpg'
import hero2 from '../../images/slider/hero-5.jpg'
import flower from '../../images/slider/rose.svg'
import bg from '../../images/slider/hero-bg2.png'


const Hero5 = () => {
    return (

        <section className="static-hero-s4" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-container">
                <div className="hero-inner scene" id="scene">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col col-xl-4 col-lg-4 col-12 layer" data-depth="0.10">
                                <div className="wpo-hero-img">
                                    <img src={hero1} alt="" />
                                    <h3>Hamdan Mehra</h3>
                                </div>
                            </div>
                            <div className="col col-xl-4 col-lg-4 col-12">
                                <div className="wpo-static-hero-inner">
                                    <div className="slide-title">
                                        <h2>Save the Date</h2>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-text">
                                        <p>We Are Getting Married November 15,2024</p>
                                    </div>
                                    <div data-swiper-parallax="400" className="slide-flower">
                                        <img src={flower} alt="" />
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                            <div className="col col-xl-4 col-lg-4 col-12 layer" data-depth="0.15">
                                <div className="wpo-hero-img">
                                    <img src={hero2} alt="" />
                                    <h3>Muhammad Yasir</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero5;