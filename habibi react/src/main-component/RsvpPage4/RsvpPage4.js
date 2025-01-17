import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS4 from '../../components/RsvpSectionS4/RsvpSectionS4';

const RsvpPage4 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <RsvpSectionS4/>
            <PartnerSection pClass={'pb-120'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage4;
