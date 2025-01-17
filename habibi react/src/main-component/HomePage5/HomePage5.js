import React, { Fragment } from 'react';
import Navbar3 from '../../components/Navbar3/Navbar3'
import Hero5 from '../../components/hero5/hero5';
import WeddingDate2 from '../../components/WeddingDate2/WeddingDate2';
import CoupleSection5 from '../../components/CoupleSection5/CoupleSection5';
import StorySection5 from '../../components/StorySection5/StorySection5';
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS4 from '../../components/RsvpSectionS4/RsvpSectionS4';
import EventSectionS4 from '../../components/EventSection4/EventSection4';
import BlogSection2 from '../../components/BlogSection2/BlogSection2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'



const HomePage5 = () => {

    return (
        <Fragment>
            <Navbar3 hclass={'wpo-header-style-2'}/>
            <Hero5 />
            <WeddingDate2 pbClass={'pb-0'}/>
            <CoupleSection5 />
            <StorySection5 />
            <PartnerSection  pClass={'p-0'}/>
            <RsvpSectionS4/>
            <EventSectionS4/>
            <BlogSection2 bgClass={'section-bg'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage5;