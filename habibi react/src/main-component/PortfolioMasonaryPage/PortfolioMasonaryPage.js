import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';

const PortfolioMasonaryPage = (props) => {
    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={props.pageTitle} pagesub={'Portfolio'} content={props.subTitle} />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: '20px',
                    padding: '20px 40px',
                }}
            >
                <p className="wpo-breadcumb-wrap">{props.content.p1}</p>
                <p className="wpo-breadcumb-wrap">{props.content.p2}</p>
                <p className="wpo-breadcumb-wrap">
                    {props.content.p3}{' '}
                    <a href={props.link}>{props.linkText}</a>
                </p>
            </div>
        </Fragment>
    );
};

export default PortfolioMasonaryPage;
