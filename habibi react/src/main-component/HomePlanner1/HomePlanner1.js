import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar'
import Hero8 from '../../components/hero8/hero8';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import FunFact from '../../components/FunFact/FunFact';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import RsvpSectionS5 from '../../components/RsvpSectionS5/RsvpSectionS5';
import Product from '../../components/Product';
import BlogSection from '../../components/BlogSection/BlogSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';



const HomePlanner1 = ({ addToCart, addToWishList }) => {

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
            <HeaderTopbar />
            <Navbar hclass={'wpo-header-style-3'}/>
            <Hero8 />
            <ServiceSection sClass={'pt-0'}/>
            <ProjectSection prClass={'section-bg'}/>
            <FunFact fClass={'pt-120'}/>
            <Testimonial/>
            <TeamSection/>
            <RsvpSectionS5/>
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <PricingSection pClass={'pt-0'}/>
            <BlogSection bgClass={'section-bg'}/>
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(HomePlanner1);