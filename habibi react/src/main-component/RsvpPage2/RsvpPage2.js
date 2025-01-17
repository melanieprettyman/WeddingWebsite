import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS2 from '../../components/RsvpSectionS2/RsvpSectionS2';
import EventSection from '../../components/EventSection/EventSection';

const RsvpPage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <RsvpSectionS2 rClass={'section-padding pb-0 pt-120'}/>
            <EventSection/>
            <PartnerSection pClass={'pb-120 pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage2;
