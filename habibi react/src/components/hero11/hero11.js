import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/hero-12.jpg'
import hero2 from '../../images/slider/hero-13.jpg'
import hero3 from '../../images/slider/hero-14.jpg'


const SlideArray = [
    {
        id: '1',
        sImg: hero1,
        Title: 'Light Lace Dress',
        price: '850',
        Des: "Here we have the best wedding gown you have ever seen. The elegant and brand new look is waiting for you in your big day. Lets Ready with Habibi.",
    },
    {
        id: '2',
        sImg: hero2,
        Title: 'White Ball Dress',
        price: '730',
        Des: "Here we have the best wedding gown you have ever seen. The elegant and brand new look is waiting for you in your big day. Lets Ready with Habibi.",
    },
    {
        id: '3',
        sImg: hero3,
        Title: 'Designer Gown',
        price: '960',
        Des: "Here we have the best wedding gown you have ever seen. The elegant and brand new look is waiting for you in your big day. Lets Ready with Habibi.",
    }
]




const Hero10 = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    return (

        <section className="static-hero-s6">
            <div className="hero-container">
                <div className="hero-inner">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-5 col-lg-5 col-12">
                                <div className="slider-for">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={1}
                                        dots={true}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                    >
                                        {
                                            SlideArray.map((hero, sld) => (
                                                <div className="wpo-static-hero-inner" key={sld}>
                                                    <div className="slide-title">
                                                        <h2>{hero.Title}</h2>
                                                    </div>
                                                    <div className="slide-price">
                                                        <h4>${hero.price}</h4>
                                                    </div>
                                                    <div data-swiper-parallax="400" className="slide-text">
                                                        <p>{hero.Des}</p>
                                                    </div>
                                                    <div data-swiper-parallax="400" className="slide-btn-wtap">
                                                        <ul>
                                                            <li><Link to="/shop" className="theme-btn">Shop Now</Link></li>
                                                            <li><Link to="/wishlist"><i className="fi flaticon-heart"></i></Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="static-hero-right">
                                    <div className="slider-nav">
                                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false} fade={true}>
                                            {
                                                SlideArray.map((hero, sld) => (
                                                    <div className={`static-hero-img s${hero.id}`} key={sld}>
                                                        <img src={hero.sImg} alt="" />
                                                    </div>
                                                ))
                                            }
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="left-shape">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 442 221" fill="none">
                    <path
                        d="M441.502 73.7667C439.939 62.4507 433.798 50.2456 421.784 37.1245C400.961 14.3579 372.677 0.994284 347.625 -15.4408C303.367 -44.4581 253.641 -80.2112 200.224 -82.8246C132.557 -86.1386 73.4569 -41.7908 16.5114 -8.75899C-8.91747 5.95176 -52.7715 25.3775 -49.8622 63.6631C-48.5962 80.2599 -37.1747 93.6774 -25.9688 105.182C13.1173 145.354 55.4089 185.956 105.943 208.534C175.469 239.572 247.903 206.271 312.822 178.008C350.346 161.681 449.879 133.903 441.502 73.7667Z"
                        fill="" />
                </svg>
            </div>
        </section>
    )
}

export default Hero10;