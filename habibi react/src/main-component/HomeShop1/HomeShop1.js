import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar'
import Hero11 from '../../components/hero11/hero11';
import ServiceSectionS4 from '../../components/ServiceSection4/ServiceSection4';
import OfferBanner2 from '../../components/OfferBanner2/OfferBanner2';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import TeamSection from '../../components/TeamSection/TeamSection';
import Product from '../../components/Product';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';



const HomeShop1 = ({ addToCart, addToWishList }) => {

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
            <Navbar/>
            <Hero11 />
            <ServiceSectionS4 />
            <OfferBanner2/>
            <Product
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <Testimonial2 tClass={'wpo-testimonial-section-s3 pt-0'}/>
            <OfferBanner/>
            <TeamSection/>
            <BlogSection bgClass={'section-bg'}/>
            <Footer footerClass={'wpo-site-footer-s2'} />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(HomeShop1);