import React from 'react'
import { JackInTheBox } from "react-awesome-reveal";
import shape1 from '../../images/rsvp/shape.svg'
import shape2 from '../../images/rsvp/shape2.svg'
import shape3 from '../../images/rsvp/shape3.svg'
import shape4 from '../../images/rsvp/shape4.svg'
import shape5 from '../../images/rsvp/shape5.svg'
import shape6 from '../../images/rsvp/shape6.svg'
import RSVPFrom from '../RSVPFrom/RSVPFrom'


const RsvpSection = (props) => {
    return (
        <section className={`wpo-contact-section ${props.rClass} section-padding`}>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-section-title">
                                <h2>Are You Attending?</h2>
                                <p><b>RSVP Deadline: </b>May 24th, 2025.</p>
                            </div>
                            <div className="wpo-contact-form-area">
                                <RSVPFrom />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-bg">
                <svg viewBox="0 0 1920 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="bg-path"
                        d="M207 286C162.2 87.6 39 44.6667 -17 48L-91 22L-71 726H13L1977 670L1957 424C1926.6 318.4 1815 392 1763 442C1619.8 570 1503.33 495.333 1463 442C1270.2 162.8 1197.33 325.667 1185 442C1159.4 584.4 1117 537.333 1099 496C953.4 192.8 868.333 328.333 844 434C791.2 649.2 649.333 555.667 585 482C455.4 356.4 380.333 429.667 359 482C315 616.4 273.333 547.333 258 496L207 286Z"
                        fill="" />
                    <path className="bg-stroke"
                        d="M207 266C162.2 67.6 39 24.6667 -17 28L-91 2L-71 706H13L1977 650L1957 404C1926.6 298.4 1815 372 1763 422C1619.8 550 1503.33 475.333 1463 422C1270.2 142.8 1197.33 305.667 1185 422C1159.4 564.4 1117 517.333 1099 476C953.4 172.8 868.333 308.333 844 414C791.2 629.2 649.333 535.667 585 462C455.4 336.4 380.333 409.667 359 462C315 596.4 273.333 527.333 258 476L207 266Z"
                        stroke="" strokeWidth="2" />
                </svg>

                <div className="shape-1">
                    <img src={shape1} alt="" />
                </div>
                <div className="shape-2">
                    <JackInTheBox direction="up" duration="2000" triggerOnce="true">
                        <img src={shape2} alt="" />
                    </JackInTheBox>
                </div>
                <div className="shape-3">
                    <JackInTheBox direction="up" duration="3000" triggerOnce="true">
                        <img src={shape3} alt="" />
                    </JackInTheBox>
                </div>
                <div className="shape-4">
                    <img src={shape4} alt="" />
                </div>
                <div className="shape-5">
                    <JackInTheBox direction="up" duration="3500" triggerOnce="true">
                        <img src={shape5} alt="" />
                    </JackInTheBox>
                </div>
                <div className="shape-6">
                    <JackInTheBox direction="up" duration="4000" triggerOnce="true">
                        <img src={shape6} alt="" />
                    </JackInTheBox>
                </div>
            </div>
        </section>
    )
}

export default RsvpSection;