import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Scrollbar from '../../components/scrollbar/scrollbar'
import PortfolioSectionS2 from '../../components/PortfolioSectionS2/PortfolioSectionS2';

const GalleryPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Gallery'} pagesub={'Gallery'} />
            <PortfolioSectionS2 prClass={'pb-0 pt-120'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default GalleryPage;
