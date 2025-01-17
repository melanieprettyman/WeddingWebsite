import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useParams } from 'react-router-dom'
import Services from '../../api/service';
import Benefits from './benefits'
import ServiceSidebar from './sidebar'
import Footer from '../../components/footer/Footer';
import VideoModal from '../../components/ModalVideo/VideoModal';

const SeviceSinglePage = (props) => {
    const { slug } = useParams()

    const serviceDetails = Services.find(item => item.slug === slug)

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={serviceDetails.title} pagesub={'Service'} />
            <div className="wpo-service-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <img src={serviceDetails.ssImg} alt="" />
                                    <VideoModal/>
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h5>Project Requirement</h5>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form, by injected humour, or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden in the middle.</p>
                                <p>The majority have suffered alteration in some form or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden.</p>

                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.sinnerImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={serviceDetails.sinnerImg2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <p>The majority have suffered alteration in some form or randomised words which don't
                                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you
                                    need to be sure there isn't anything embarrassing hidden.</p>

                                <div className="process-wrap">
                                    <h5>Our work process</h5>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="process-item">
                                                <div className="process-icon">
                                                    <i className="fi flaticon-dove"></i>
                                                </div>
                                                <div className="process-text">
                                                    <h3>Research and analytics</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="process-item">
                                                <div className="process-icon">
                                                    <i className="fi flaticon-edit"></i>
                                                </div>
                                                <div className="process-text">
                                                    <h3>Design and Idea</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-12">
                                            <div className="process-item">
                                                <div className="process-icon">
                                                    <i className="fi flaticon-wedding"></i>
                                                </div>
                                                <div className="process-text">
                                                    <h3>All Event Manage</h3>
                                                    <p>If you are going to use a passage of Lorem Ipsum, you
                                                        need to be sure there isn't.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Benefits />
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};
export default SeviceSinglePage;
