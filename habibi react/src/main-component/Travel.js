import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar'
import EventSection2 from '../components/EventSection2/EventSection2';



const Travel = () => {

    return (
        <Fragment>
            <Navbar />
            <EventSection2/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Travel;

