import React from 'react';
import { Slide } from "react-awesome-reveal";
import shape1 from '../../images/footer-shape-1.svg';
import shape2 from '../../images/footer-shape-2.svg';

const Footer = (props) => {
    return (
        <footer className={`wpo-site-footer ${props.footerClass}`} >
            <div className="wpo-upper-footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12">
                            <div className="widget wpo-service-link-widget text-center">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="contact-ft">
                                    <p>melanie.prettyman98@gmail.com | 240-587-8545</p>
                                    <p>mjwopat@gmail.com | 414-469-5269</p>
                                    <p>1405 S 1500 E #A, Salt Lake City, UT 84105</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ft-shape-1">
                <Slide direction="left" duration="1000" triggerOnce="true">
                    <img src={shape1} alt="" />
                </Slide>
            </div>
            <div className="ft-shape-2">
                <Slide direction="right" duration="1200" triggerOnce="true">
                    <img src={shape2} alt="" />
                </Slide>
            </div>
        </footer>
    );
};

export default Footer;
