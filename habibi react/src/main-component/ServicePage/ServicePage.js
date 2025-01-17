import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import PartnerSection from '../../components/PartnerSection';


const ServicePage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Service'} pagesub={'Service'}/> 
            <ServiceSection/> 
            <PartnerSection pClass={'pb-120 pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default ServicePage;
