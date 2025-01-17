import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import StorySection4 from '../../components/StorySection4/StorySection4';

const StoryPage4 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Our Story'} pagesub={'Story'} />
            <StorySection4/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default StoryPage4;
