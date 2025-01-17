import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import RsvpSectionS5 from '../../components/RsvpSectionS5/RsvpSectionS5';
import WeddingDate2 from '../../components/WeddingDate2/WeddingDate2';

const RsvpPage5 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'R.S.V.P'} pagesub={'RSVP'} />
            <WeddingDate2 pbClass={'pb-120'}/>
            <RsvpSectionS5/>
            <PartnerSection pClass={'section-padding'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default RsvpPage5;
