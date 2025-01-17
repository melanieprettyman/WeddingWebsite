import React from 'react'
import cimg from '../../images/rsvp/img-1.jpg'
import cimg2 from '../../images/rsvp/img-2.jpg'
import cimg3 from '../../images/rsvp/img-3.jpg'

import RSVPFrom from '../RSVPFrom/RSVPFrom'


const RsvpSectionS2 = (props) => {
    return (
        <section className={`wpo-contact-section-s3 section-padding ${props.rClass}`} id="rsvp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title">
                                    <h2>Are You Attending?</h2>
                                </div>
                                <RSVPFrom />
                            </div>
                        </div>
                    </div>
                    <div className="col col-xl-7 col-lg-7 col-md-12 col-12">
                        <div className="contact-img">
                            <div className="contact-img-left">
                                <img src={cimg} alt="" />
                                <img src={cimg2} alt="" />
                            </div>
                            <div className="contact-img-right">
                                <img src={cimg3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS2;