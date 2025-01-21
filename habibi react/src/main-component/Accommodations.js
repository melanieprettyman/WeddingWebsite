import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar'
import {AccommodationsConstants} from '../constants';
import PortfolioMasonaryPage from './PortfolioMasonaryPage/PortfolioMasonaryPage';



const Accommodations = () => {

    return (
        <Fragment>
            <PortfolioMasonaryPage 
                pageTitle={AccommodationsConstants.pageTitle} 
                subTitle={AccommodationsConstants.subTitle} 
                content={AccommodationsConstants.content} 
                link={AccommodationsConstants.link} 
                linkText={AccommodationsConstants.linkText} 
            />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Accommodations;

