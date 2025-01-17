import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import StorySection6 from '../../components/StorySection6/StorySection6';

const StoryPage6 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Our Story'} pagesub={'Story'} />
            <StorySection6/>
            <PartnerSection pClass={'section-padding pt-0'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar/>
        </Fragment>
    )
};

export default StoryPage6;
