import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS3 from '../../components/RsvpSectionS3/RsvpSectionS3';
import EventSection from '../../components/EventSection/EventSection';
import bg from '../../images/rsvp/bg.jpg'

const RsvpPage3 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <RsvpSectionS3 bg={bg} rClass={'pt-120'}/>
            <EventSection/>
            <PartnerSection pClass={'pb-120 pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage3;
