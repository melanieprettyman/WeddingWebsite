import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import CoupleSection2 from '../components/CoupleSection2/CoupleSection2';
import StorySection2 from '../components/StorySection2/StorySection2';
import PortfolioSection from '../components/PortfolioSection';
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar'


const AboutTheCouple = () => {

    return (
        <Fragment>
            <Navbar/>
            <CoupleSection2 /> 
            <StorySection2 /> 
            <PortfolioSection /> 
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default AboutTheCouple;

// <EventSection/> Event Details 
