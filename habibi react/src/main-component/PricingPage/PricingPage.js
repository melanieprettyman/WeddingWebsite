import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PricingSection from '../../components/PricingSection/PricingSection';
import PartnerSection from '../../components/PartnerSection';


const PricingPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <PricingSection/> 
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default PricingPage;
