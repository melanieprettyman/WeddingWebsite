import React from 'react'
import SectionTitle from "../SectionTitle";
import abimg from '../../images/about/img-1.jpg'
import abimg2 from '../../images/about/img-2.jpg'
import sign from '../../images/about/signature.png'

const About = (props) => {
    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8 col-md-10 col-12">
                        <SectionTitle subTitle={'Who We Are?'} MainTitle={'We are The World Best Wedding Agency'} />
                    </div>
                </div>
                <div className="wpo-about-wrap">
                    <div className="row align-items-center">
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-text">
                                <p><small>M</small>ignissim adipiscing pretium libero at tristique. Diam sit mauris a
                                    interdum. In tristique eu vestibulum id amet malesuada. Quis morbi morbi sed
                                    volutpat tristique. Lacinia praesent dictum morbi et fermentum. Blandit cras ut sed
                                    quisque pellentesque iaculis elit. Lectus adipiscing semper odio lacus urna. Sit a
                                    sit ac blandit. Cursus donec mollis elit arcu donec aliquam.</p>
                                <div className="about-info">
                                    <h5>Kristin Watson</h5>
                                    <span>- CEO of the company</span>
                                </div>
                                <div className="about-sign">
                                    <img src={sign} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                            <div className="wpo-about-img">
                                <div className="about-right-img">
                                    <img src={abimg2} alt="" />

                                    <div className="about-right-img-inner">
                                        <img src={abimg} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;