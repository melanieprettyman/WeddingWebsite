import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sImg1 from '../../images/slider/hero-15.jpg'
import sImg2 from '../../images/slider/hero-16.jpg'
import sImg3 from '../../images/slider/hero-17.jpg'
import sImg4 from '../../images/slider/hero-20.jpg'


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:'0',
    autoplay: false,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
};


const hero14 = (props) => {

    return (

        <section className="static-hero-s9">
            <h2 className="hidden">some</h2>
            <div className="hero-items">
                <Slider {...settings}>
                    <div className="hero-item">
                        <div className="hero-item-img">
                            <img src={sImg1} alt=""/>
                        </div>
                    </div>
                    <div className="hero-item">
                        <div className="hero-item-img">
                            <img src={sImg2} alt=""/>
                        </div>
                    </div>
                    <div className="hero-item">
                        <div className="hero-item-img">
                            <img src={sImg3} alt=""/>
                        </div>
                    </div>
                    <div className="hero-item">
                        <div className="hero-item-img">
                            <img src={sImg4} alt=""/>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
}

export default hero14;