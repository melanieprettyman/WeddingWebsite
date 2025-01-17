import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import thumb1 from '../../images/testimonial/thumb-1.jpg'
import thumb2 from '../../images/testimonial/thumb-2.jpg'
import thumb3 from '../../images/testimonial/thumb-3.jpg'

import shape1 from '../../images/testimonial/svg-1.svg'
import shape2 from '../../images/testimonial/svg-2.svg'
import shape3 from '../../images/testimonial/svg-3.svg'
import shape4 from '../../images/testimonial/svg-4.svg'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        thumb: thumb1,
        Des: "Suspendisse dui a hac ultricies integer. In mollis cras sollicitudin orci eget. Pellentesque et urna arcu pulvinar amet. Pretium aliquam nam imperdiet augue magna id nec aliquet consequat. Amet senectus faucibus urna integer ac elementum est purus venenatis.",
        Title: 'Marlin & Williamson',
        Date: "23.05.2023",
    },
    {
        id: '01',
        tImg: ts2,
        thumb: thumb2,
        Des: "Suspendisse dui a hac ultricies integer. In mollis cras sollicitudin orci eget. Pellentesque et urna arcu pulvinar amet. Pretium aliquam nam imperdiet augue magna id nec aliquet consequat. Amet senectus faucibus urna integer ac elementum est purus venenatis.",
        Title: 'Rihanna & William',
        Date: "08.12.2023",
    },
    {
        id: '01',
        tImg: ts3,
        thumb: thumb3,
        Des: "Suspendisse dui a hac ultricies integer. In mollis cras sollicitudin orci eget. Pellentesque et urna arcu pulvinar amet. Pretium aliquam nam imperdiet augue magna id nec aliquet consequat. Amet senectus faucibus urna integer ac elementum est purus venenatis.",
        Title: 'Sarah & Daniel',
        Date: "12.08.2023",
    }
]

const Testimonial2 = (props) => {

    const settings = {
        dots: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section className={`wpo-testimonial-section-s2 ${props.tClass}`}>
            <div className="container">
                <div className="wpo-testimonial-wrap">
                    <div className="row">
                        <div className="col col-lg-12">
                            <div className="wpo-testimonial-items">
                                <div className="wpo-section-title">
                                    <span>Testimonials</span>
                                    <h2>What Our Client Says</h2>
                                </div>
                                <div className="wpo-testimonial-active">
                                    <Slider {...settings}>
                                        {
                                            testimonial.map((tesmnl, tsm) => (
                                                <div className="wpo-testimonial-item" key={tsm}>
                                                    <div className="wpo-testimonial-text">
                                                        <p>"{tesmnl.Des}"</p>
                                                        <div className="wpo-testimonial-text-btm">
                                                            <div className="tsm-img">
                                                                <img src={tesmnl.thumb} alt="" />
                                                            </div>
                                                            <h3>{tesmnl.Title}</h3>
                                                            <span>Wedding- {tesmnl.Date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Slider>
                                </div>
                                <div className="corner-shape">
                                    <div className="shape-1"><img src={shape1} alt=""/></div>
                                    <div className="shape-2"><img src={shape2} alt=""/></div>
                                    <div className="shape-3"><img src={shape3} alt=""/></div>
                                    <div className="shape-4"><img src={shape4} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial2;