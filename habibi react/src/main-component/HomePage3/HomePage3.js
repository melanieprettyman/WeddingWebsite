import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero3 from '../../components/hero3/hero3';
import WeddingDate from '../../components/WeddingDate/WeddingDate';
import CoupleSection3 from '../../components/CoupleSection3/CoupleSection3';
import VideoSection from '../../components/VideoSection';
import StorySection3 from '../../components/StorySection3/StorySection3';
import RsvpSectionS2 from '../../components/RsvpSectionS2/RsvpSectionS2';
import EventSectionS2 from '../../components/EventSection2/EventSection2';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import vImg from '../../images/video-img/img-1.jpg'



const HomePage3 = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <Hero3 />
            <WeddingDate />
            <CoupleSection3 />
            <VideoSection vimg={vImg}/>
            <StorySection3 />
            <RsvpSectionS2/>
            <EventSectionS2/>
            <BlogSection bgClass={'section-bg'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage3;