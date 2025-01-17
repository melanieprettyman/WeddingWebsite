import React, { Fragment } from 'react';
import Navbar4 from '../../components/Navbar4/Navbar4';
import Hero7 from '../../components/hero7/hero7';
import CoupleSection7 from '../../components/CoupleSection7/CoupleSection7';
import StorySection7 from '../../components/StorySection7/StorySection7';
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS6 from '../../components/RsvpSectionS6/RsvpSectionS6';
import EventSectionS5 from '../../components/EventSection5/EventSection5';
import BlogSection4 from '../../components/BlogSection4/BlogSection4';
import FooterRtl from '../../components/footerRtl/FooterRtl';
import Scrollbar from '../../components/scrollbar/scrollbar'



const HomePage7 = () => {

    return (
        <Fragment>
            <div dir="rtl" className="rtl-page">
                <Navbar4 hclass={'wpo-header-style-2'} />
                <Hero7 />
                <CoupleSection7 />
                <StorySection7 />
                <PartnerSection />
                <RsvpSectionS6 />
                <EventSectionS5 />
                <BlogSection4 bgClass={'section-bg'} />
                <FooterRtl footerClass={'wpo-site-footer-s2'} />
                <Scrollbar />
            </div>
        </Fragment>
    )
};

export default HomePage7;