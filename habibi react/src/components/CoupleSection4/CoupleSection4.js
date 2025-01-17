import React from 'react';
import { Link } from 'react-router-dom'
import coupleImg1 from '../../images/couple/4.jpg'
import coupleImg2 from '../../images/couple/5.jpg'

const CoupleSection4 = (props) => {

    return (
        <section className="wpo-couple-section-s4 section-padding" id="couple">
            <div className="container-fluid">
                <div className="couple-area clearfix">
                    <div className="row align-items-center">
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Sophia Miles</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    fringilla pellesque amet tempus.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-6 col-lg-4 col-12">
                            <div className="middle-couple-pic-wrap">
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <img src={coupleImg1} alt="" />
                                    </div>
                                </div>
                                <div className="middle-couple-pic">
                                    <div className="middle-couple-pic-inner">
                                        <img src={coupleImg2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-xl-3 col-lg-4 col-12">
                            <div className="text-grid">
                                <h3>Oliver Zonas</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl.
                                    fringilla pellesque amet tempus.</p>
                                <div className="social">
                                    <ul>
                                        <li><Link to="/home3"><i className="ti-facebook"></i></Link></li>
                                        <li><Link to="/home3"><i className="ti-twitter-alt"></i></Link></li>
                                        <li><Link to="/home3"><i className="ti-instagram"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CoupleSection4;