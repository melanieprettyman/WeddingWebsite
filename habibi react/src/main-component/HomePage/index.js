import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/hero2';
import CoupleSection2 from '../../components/CoupleSection2/CoupleSection2';
import StorySection2 from '../../components/StorySection2/StorySection2';
import PortfolioSection from '../../components/PortfolioSection';
import RsvpSection from '../../components/RsvpSection/RsvpSection';
import EventSection from '../../components/EventSection/EventSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioMasonaryPage from '../PortfolioMasonaryPage/PortfolioMasonaryPage';



const HomePage = () => {

    return (
        <Fragment>
            <Navbar />
            <Hero2 />
            <CoupleSection2 />
            <StorySection2 />
            <PortfolioSection />
            <RsvpSection/>
            <PortfolioMasonaryPage />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;

// <EventSection/> Event Details 
