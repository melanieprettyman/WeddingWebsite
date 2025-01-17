import React from "react";
import Services from '../../api/service'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
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
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            }
        }
    ]
};


const ServiceSectionS4 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className="wpo-service-section-s4 section-padding">
            <h2 className="hidden">Service</h2>
            <div className="container">
                <div className="wpo-service-wrap">
                    <Slider {...settings}>
                        {Services.slice(0, 4).map((service, sitem) => (
                            <div className="wpo-service-item" key={sitem}>
                                <div className="wpo-service-img">
                                    <img src={service.simg1} alt="" />
                                </div>
                                <div className="wpo-service-text">
                                    <Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ServiceSectionS4;