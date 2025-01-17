import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar'
import Hero10 from '../../components/hero10/hero10';
import About2 from '../../components/about2/about2';
import ServiceSectionS3 from '../../components/ServiceSection3/ServiceSection3';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import FunFact from '../../components/FunFact/FunFact';
import VideoSection from '../../components/VideoSection';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import TeamSection from '../../components/TeamSection/TeamSection';
import RsvpSectionS8 from '../../components/RsvpSectionS8/RsvpSectionS8';
import Product from '../../components/Product';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import vImg from '../../images/video-img/img-4.jpg'


const HomePlanner3 = ({ addToCart, addToWishList }) => {

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
            <Navbar hclass={'wpo-header-style-2'}/>
            <Hero10 />
            <FunFact fClass={'section-padding pb-0'}/>
            <About2 />
            <VideoSection vimg={vImg} vClass={'wpo-video-section-s2 pt-120'}/>
            <ServiceSectionS3 />
            <Testimonial2 tClass={'wpo-testimonial-section-s3'}/>
            <OfferBanner/>
            <TeamSection/>
            <RsvpSectionS8/>
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

export default connect(null, { addToCart, addToWishList })(HomePlanner3);