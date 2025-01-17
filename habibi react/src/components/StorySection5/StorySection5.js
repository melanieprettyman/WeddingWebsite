import React from 'react'
import sImg1 from '../../images/story/1.png'
import sImg2 from '../../images/story/2.png'
import sImg3 from '../../images/story/3.png'

import shape1 from '../../images/story/s-shape3.png'
import shape2 from '../../images/story/s-shape4.png'
import shape3 from '../../images/story/s-shape5.png'
import SectionTitle from '../SectionTitle'


const StorySection5 = (props) => {
    return (

        <section className="wpo-story-section-s5 section-padding" id="story">
            <div className="container">
                <SectionTitle subTitle={'Our Story'} MainTitle={'How it Happened'} />
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="story-timeline">
                            <div className="round-shape"></div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder right-align-text left-site">
                                        <img src={sImg1} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <img src={shape1} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <span className="date">22 Feb, 2019</span>
                                        <h3>How we meet</h3>
                                        <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                                            Enim tortor, faucibus netus orci donec volutpat adipiscing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12 order-lg-1 order-2 text-holder right-heart">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text right-align-text">
                                        <span className="date">02 Nov, 2020</span>
                                        <h3>He proposed, I said Yes</h3>
                                        <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                                            Enim tortor, faucibus netus orci donec volutpat adipiscing.</p>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 order-lg-2 order-1">
                                    <div className="img-holder right-align-img">
                                        <img src={sImg2} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <img src={shape2} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-12">
                                    <div className="img-holder video-holder left-site">
                                        <img src={sImg3} alt="" className="img img-responsive" />
                                        <div className="story-shape-img-1">
                                            <img src={shape3} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-lg-6 col-12 text-holder">
                                    <span className="heart">
                                        <i className="fi flaticon-heart"></i>
                                    </span>
                                    <div className="story-text">
                                        <span className="date"> 15 Apr, 2021</span>
                                        <h3>Our Engagement Day</h3>
                                        <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed.
                                            Enim tortor, faucibus netus orci donec volutpat adipiscing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col offset-lg-6 col-lg-6 col-12 text-holder">
                                    <div className="round-shape-2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StorySection5;