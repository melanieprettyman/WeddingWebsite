import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import Hero6 from '../../components/hero6/hero6';
import WeddingDate2 from '../../components/WeddingDate2/WeddingDate2';
import CoupleSection6 from '../../components/CoupleSection6/CoupleSection6';
import VideoSection2 from '../../components/VideoSection2';
import StorySection6 from '../../components/StorySection6/StorySection6';
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS3 from '../../components/RsvpSectionS3/RsvpSectionS3';
import EventSectionS4 from '../../components/EventSection4/EventSection4';
import BlogSection3 from '../../components/BlogSection3/BlogSection3';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import vImg from '../../images/video-img/img-3.jpg'
import bg from '../../images/rsvp/bg2.jpg'

const HomePage6 = () => {

    return (
        <Fragment>
            <Navbar3/>
            <Hero6 />
            <WeddingDate2 pbClass={'pb-0'}/>
            <CoupleSection6 />
            <VideoSection2 vimg={vImg}/>
            <StorySection6 />
            <PartnerSection  pClass={'section-padding pt-0'}/>
            <RsvpSectionS3 bg={bg}/>
            <EventSectionS4/>
            <BlogSection3 bgClass={'section-bg'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage6;