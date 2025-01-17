import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import bg from '../../images/slider/invitation-bg2.jpg'
import cImg1 from '../../images/slider/shape15.svg'
import cn1 from '../../images/slider/corner1.svg'
import cn2 from '../../images/slider/corner2.svg'
import cn3 from '../../images/slider/corner3.svg'
import cn4 from '../../images/slider/corner4.svg'

import shape1 from '../../images/slider/shape13.svg'
import shape2 from '../../images/slider/shape14.svg'

import LocationMap from './Modal';

const InvitationPage2 = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-4'} />
            <section className="wpo-invitation-area-s2" style={{ backgroundImage: `url(${bg})` }}>
                <div className="hero-container">
                    <div className="hero-inner">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12">
                                    <div className="wpo-event-wrap">
                                        <div className="wpo-event-item">
                                            <div className="wpo-event-text">
                                                <h2>James & Amelia</h2>
                                                <p>Our Big Day is November 15,2022</p>
                                                <div className="inner-shape">
                                                    <img src={cImg1} alt="" />
                                                </div>
                                                <ul>
                                                    <li>Monday, 12 Apr. 2022 <br />
                                                        1:00 PM – 2:30 PM </li>
                                                    <li>4517 Washington Ave. Manchester, Kentucky 39495</li>
                                                    <li>+1 234-567-8910</li>
                                                    <li><LocationMap /></li>
                                                </ul>
                                            </div>
                                            <div className="shape-1"><img src={cn1} alt="" />
                                            </div>
                                            <div className="shape-2"><img src={cn2} alt="" />
                                            </div>
                                            <div className="shape-3"><img src={cn3} alt="" />
                                            </div>
                                            <div className="shape-4"><img src={cn4} alt="" />
                                            </div>
                                        </div>
                                        <div className="frame-shape-1"><img src={shape1} alt="" />
                                        </div>
                                        <div className="frame-shape-2"><img src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
};

export default InvitationPage2;