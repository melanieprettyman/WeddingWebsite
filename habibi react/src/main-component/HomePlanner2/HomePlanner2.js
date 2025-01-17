import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar'
import Hero9 from '../../components/hero9/hero9';
import About from '../../components/about/about';
import ServiceSectionS2 from '../../components/ServiceSection2/ServiceSection2';
import PortfolioSectionS3 from '../../components/PortfolioSectionS3/PortfolioSectionS3';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import TeamSection from '../../components/TeamSection/TeamSection';
import RsvpSectionS7 from '../../components/RsvpSectionS7/RsvpSectionS7';
import Product from '../../components/Product';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';



const HomePlanner2 = ({ addToCart, addToWishList }) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const addToWishListProduct = (product) => {
        addToWishList(product);
    };

    const products = productsArray

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <Hero9 />
            <About />
            <FunFact fClass={'section-padding pt-0'}/>
            <ServiceSectionS2 />
            <Testimonial2 tClass={'pb-0'}/>
            <PortfolioSectionS3/>
            <TeamSection/>
            <RsvpSectionS7/>
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <BlogSection bgClass={'section-bg'}/>
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(HomePlanner2);