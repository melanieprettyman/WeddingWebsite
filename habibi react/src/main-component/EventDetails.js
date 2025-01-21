import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar'
import EventSection from '../components/EventSection/EventSection';



const EventDetails = () => {

    return (
        <Fragment>
            <Navbar />
            <EventSection/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default EventDetails;

// <EventSection/> Event Details 
