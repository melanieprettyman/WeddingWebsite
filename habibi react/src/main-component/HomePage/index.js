import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/hero2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar'

const HomePage = () => {

    return (
        <Fragment>
            <Navbar />
            <Hero2 /> 
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;

