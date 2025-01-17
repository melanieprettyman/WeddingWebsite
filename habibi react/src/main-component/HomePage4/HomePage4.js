import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero4 from '../../components/hero4/hero4';
import PartnerSection from '../../components/PartnerSection';
import CoupleSection4 from '../../components/CoupleSection4/CoupleSection4';
import VideoSection from '../../components/VideoSection';
import StorySection4 from '../../components/StorySection4/StorySection4';
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';
import BrideGrooms2 from '../../components/BrideGrooms2';
import RsvpSectionS3 from '../../components/RsvpSectionS3/RsvpSectionS3';
import EventSectionS3 from '../../components/EventSection3/EventSection3';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import vImg from '../../images/video-img/img-2.jpg'
import bg from '../../images/rsvp/bg.jpg'


const HomePage4 = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <Hero4 />
            <PartnerSection />
            <CoupleSection4 />
            <VideoSection vimg={vImg}/>
            <StorySection4 />
            <PortfolioSectionS2 />
            <BrideGrooms2 />
            <RsvpSectionS3 bg={bg}/>
            <EventSectionS3/>
            <BlogSection bgClass={'section-bg'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage4;