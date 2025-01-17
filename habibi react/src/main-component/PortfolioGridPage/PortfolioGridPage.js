import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSection from '../../components/PortfolioSection';
import PartnerSection from '../../components/PartnerSection';

const PortfolioGridPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Portfolio Grid'} pagesub={'Portfolio'}/> 
            <PortfolioSection ptClass={'pt-120'}/>
            <PartnerSection pClass={'pb-120 pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioGridPage;
