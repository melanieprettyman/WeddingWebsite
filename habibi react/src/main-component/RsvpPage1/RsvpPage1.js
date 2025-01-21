import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import RsvpSection from '../../components/RsvpSection/RsvpSection';

const RsvpPage1 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <RsvpSection rClass={'pt-120'}/>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage1;
