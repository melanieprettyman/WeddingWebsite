import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/Hero';
import StorySection from '../../components/StorySection';
import PortfolioSection from '../../components/PortfolioSection';
import BrideGrooms from '../../components/BrideGrooms';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
import EventSection from '../../components/EventSection/EventSection';
import CoupleSection from '../../components/CoupleSection/CoupleSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'



const HomePage2 = () => {

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-2'}/>
            <Hero />
            <CoupleSection />
            <StorySection />
            <PortfolioSection />
            <BrideGrooms brClass={'pt-0'}/>
            <RsvpSection rClass={'wpo-contact-section-s2'}/>
            <EventSection/>
            <BlogSection />
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage2;