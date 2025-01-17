import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'
import thumb1 from '../../images/testimonial/thumb-1.jpg'
import thumb2 from '../../images/testimonial/thumb-2.jpg'
import thumb3 from '../../images/testimonial/thumb-3.jpg'
import shape from '../../images/testimonial/shape.svg'


const testimonial = [
    {
        id: '01',
        tImg: ts1,
        thumb: thumb1,
        Des: "Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.",
        Title: 'Marlin & Williamson',
        Date: "23.05.2023",
    },
    {
        id: '01',
        tImg: ts2,
        thumb: thumb2,
        Des: "Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.",
        Title: 'Rihanna & William',
        Date: "08.12.2023",
    },
    {
        id: '01',
        tImg: ts3,
        thumb: thumb3,
        Des: "Elementum viverra tortor rhoncus nunc. Nunc proin lacinia interdum nulla fusce nam. Sagittis dolor hendrerit donec in eu, facilisis lobortis. Hendr laoret pretium veslum egestas.",
        Title: 'Sarah & Daniel',
        Date: "12.08.2023",
    }
]

const Testimonial = () => {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();


    return (
        <section className="wpo-testimonial-section">
            <div className="container-fluid">
                <div className="wpo-testimonial-wrap">
                    <div className="row">
                        <div className="col col-lg-6">
                            <div className="slider-for">
                                <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)} dots={false} arrows={false}>
                                    {
                                        testimonial.map((tesmnl, tsm) => (
                                            <div className="testimonial-img" key={tsm}>
                                                <img src={tesmnl.tImg} alt="" />
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="col col-lg-6">
                            <div className="shape">
                                <img src={shape} alt=""/>
                            </div>
                            <div className="wpo-testimonial-items">
                                <div className="wpo-section-title">
                                    <span>Testimonials</span>
                                    <h2>What Our Client Says</h2>
                                </div>
                                <div className="slider-nav">
                                    <Slider
                                        asNavFor={nav1}
                                        ref={(slider2) => setNav2(slider2)}
                                        slidesToShow={1}
                                        fade={true}
                                        dots={true}
                                        swipeToSlide={true}
                                        focusOnSelect={true}
                                    >
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;