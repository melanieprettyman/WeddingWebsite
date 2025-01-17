import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar'
import Hero13 from '../../components/hero13/hero13';
import PartnerSection from '../../components/PartnerSection';
import Categorys from '../../components/Categorys/Categorys';
import OfferBanner3 from '../../components/OfferBanner3/OfferBanner3';
import Product2 from '../../components/Product2/Product2';
import BlogSection from '../../components/BlogSection/BlogSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';



const HomeShop4 = ({ addToCart, addToWishList }) => {

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
            <Navbar hclass={'wpo-header-style-4'}/>
            <Hero13 />
            <PartnerSection  pClass={'pb-0'}/>
            <Categorys />
            <OfferBanner3/>
            <Product2
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <BlogSection bgClass={'section-bg'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(HomeShop4);