import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PartnerSection from '../../components/PartnerSection';
import StorySection2 from '../../components/StorySection2/StorySection2';

const StoryPage1 = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Our Story'} pagesub={'Story'} />
            <StorySection2/>
            <PartnerSection pClass={'section-padding'}/>
            <Footer footerClass={'wpo-site-footer-s2'}/>
            <Scrollbar />
        </Fragment>
    )
};

export default StoryPage1;
