import React from 'react'
import cimg from '../../images/rsvp/img-4.jpg'
import RSVPFrom from '../RSVPFrom/RSVPFrom';
import VideoModal from '../ModalVideo/VideoModal';

const RsvpSectionS4 = (props) => {
    return (
        <section className="wpo-contact-section-s5 section-padding pt-120" id="rsvp">
            <div className="container">
                <div className="wpo-contact-section-wrap">
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
                                <img src={cimg} alt=""/>
                                 <VideoModal/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RsvpSectionS4;