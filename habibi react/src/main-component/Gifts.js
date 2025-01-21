import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar'
import {GiftsConstants} from '../constants';
import PortfolioMasonaryPage from './PortfolioMasonaryPage/PortfolioMasonaryPage';



const Gifts = () => {

    return (
        <Fragment>
            <PortfolioMasonaryPage 
                pageTitle={GiftsConstants.pageTitle} 
                subTitle={GiftsConstants.subTitle} 
                content={GiftsConstants.content} 
            />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default Gifts;

