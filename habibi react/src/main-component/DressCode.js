import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer';
import Scrollbar from '../components/scrollbar/scrollbar'
import { DresscodeConstants} from '../constants';
import PortfolioMasonaryPage from './PortfolioMasonaryPage/PortfolioMasonaryPage';



const DressCode = () => {

    return (
        <Fragment>
            <PortfolioMasonaryPage 
                pageTitle={DresscodeConstants.pageTitle} 
                subTitle={DresscodeConstants.subTitle} 
                content={DresscodeConstants.content} 
                link={DresscodeConstants.link} 
                linkText={DresscodeConstants.linkText} 
            />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default DressCode;

