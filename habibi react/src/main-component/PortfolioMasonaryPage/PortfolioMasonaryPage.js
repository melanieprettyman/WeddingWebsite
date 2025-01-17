import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';
import PartnerSection from '../../components/PartnerSection';

const PortfolioMasonaryPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Dress Code'} pagesub={'Portfolio'}/> 
            <PortfolioSectionS2 prClass={'pt-120'}/>
            <PartnerSection pClass={'pb-120 pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PortfolioMasonaryPage;
