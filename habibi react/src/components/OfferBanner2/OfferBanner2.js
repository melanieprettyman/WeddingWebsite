import React from "react";
import Bg from '../../images/offer2.jpg'
import { Link } from "react-router-dom";
import shape from '../../images/offer/shape.svg'
import shape2 from '../../images/slider/shape13.svg'
import conrner1 from '../../images/slider/corner1.svg'
import conrner2 from '../../images/slider/corner2.svg'
import conrner3 from '../../images/slider/corner3.svg'
import conrner4 from '../../images/slider/corner4.svg'

import offer1 from '../../images/offer/img-1.jpg'
import offer2 from '../../images/offer/img-2.jpg'
import offer3 from '../../images/offer/img-3.jpg'
import offer4 from '../../images/offer/img-4.jpg'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const OfferBanner2 = () => {
    return (
        <section className="wpo-offer-section-s2">
            <div className="container-fluid">
                <div className="wpo-offer-wrap">
                    <div className="left-img" style={{ background: `url(${Bg}) no-repeat center top / cover` }}>
                    </div>
                    <div className="wpo-offer-items">
                        <div className="wpo-offer-item">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="wpo-offer-left">
                                        <h2>Deal Of The Day</h2>
                                        <p>Our bracelets, necklaces, and rings feature a unique screw motif, symbolizing the idea of locking love in place.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="wpo-offer-right">
                                        <p>Discount for All Products</p>
                                        <h2>50% <span>OFF</span></h2>
                                        <Link onClick={ClickHandler} to="/shop" className="theme-btn">Shop Now</Link>
                                        <div className="middle-shape">
                                            <img src={shape} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shape-1"><img src={conrner1} alt="" />
                            </div>
                            <div className="shape-2"><img src={conrner2} alt="" />
                            </div>
                            <div className="shape-3"><img src={conrner3} alt="" />
                            </div>
                            <div className="shape-4"><img src={conrner4} alt="" />
                            </div>
                        </div>
                        <div className="frame-shape-1"><img src={shape2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="offer-product">
                    <div className="row">
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="offer-product-img">
                                <img src={offer1} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="offer-product-img">
                                <img src={offer2} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12" >
                            <div className="offer-product-img">
                                <img src={offer3} alt="" />
                            </div>
                        </div>
                        <div className="col col-lg-3 col-md-3 col-sm-6 col-12">
                            <div className="offer-product-img">
                                <img src={offer4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default OfferBanner2;