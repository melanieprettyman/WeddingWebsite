import React, { Fragment } from 'react';
import { connect } from "react-redux";
import { addToCart, addToWishList } from "../../store/actions/action";
import api from "../../api";
import Navbar from '../../components/Navbar/Navbar'
import Hero14 from '../../components/hero14/hero14';
import FunFact from '../../components/FunFact/FunFact';
import Categorys2 from '../../components/Category2/Categorys2';
import OrderProcess from '../../components/OrderProcess/OrderProcess';
import Product3 from '../../components/Product3/Product3';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
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
            <Navbar hclass={'wpo-header-style-5'}/>
            <Hero14 />
            <FunFact fClass={'section-padding'}/>
            <Categorys2 />
            <OrderProcess/>
            <Product3
                addToCartProduct={addToCartProduct}
                addToWishListProduct={addToWishListProduct}
                products={products}
            />
            <Testimonial2 tClass={'wpo-testimonial-section-s3  pt-1 pb-120'}/>
            <BlogSection bgClass={'section-bg'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default connect(null, { addToCart, addToWishList })(HomeShop4);