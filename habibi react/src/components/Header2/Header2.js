import React, { useState } from 'react'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';
import { totalPrice } from "../../utils";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'


const Header2 = (props) => {
    const [menuActive, setMenuState] = useState(false);
    const [cartActive, setcartState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const { carts } = props;

    return (
        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu2 />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-6">
                                <div className="navbar-header">
                                    <NavLink onClick={ClickHandler} className="navbar-brand" to="/home">Habibi</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li className="menu-item-has-children">
                                            <NavLink to="/">Home</NavLink>
                                            <ul className="sub-menu">
                                                <li><NavLink onClick={ClickHandler} className="active" to="/home">Wedding Home 1</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/home-2">Wedding Home 2</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/home-3">Announcement Home 1</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/home-4">Announcement Home 2</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/home-5">Muslim Wedding Home</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/home-6">Asian Wedding Home</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/home-rtl">Muslim Wedding Home(RTL)</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/invitation-1">Wedding Invitation 1</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/invitation-2">Wedding Invitation 2</NavLink></li>
                                                <li className="menu-item-has-children">
                                                    <NavLink onClick={ClickHandler} to="/">Event Planner Homes</NavLink>
                                                    <ul className="sub-menu">
                                                        <li><NavLink onClick={ClickHandler} to="/index-7">Wedding Planner 1</NavLink></li>
                                                        <li><NavLink onClick={ClickHandler} to="/index-8">Wedding Planner 2</NavLink></li>
                                                        <li><NavLink onClick={ClickHandler} to="/index-9">Wedding Planner 3</NavLink></li>
                                                    </ul>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <NavLink onClick={ClickHandler} to="/">Wedding Shop Homes</NavLink>
                                                    <ul className="sub-menu">
                                                        <li><NavLink onClick={ClickHandler} to="/shop-home">Bridal Shop</NavLink></li>
                                                        <li><NavLink onClick={ClickHandler} to="/shop-home-2">Wedding Bouquet Shop</NavLink></li>
                                                        <li><NavLink onClick={ClickHandler} to="/shop-home-video-bg">Bouquet Shop Video Bg</NavLink>
                                                        </li>
                                                        <li><NavLink onClick={ClickHandler} to="/shop-home-3">Wedding Cake Shop</NavLink></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100} duration={500} >Couple</Link></li>
                                        <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} offset={-100} >Story</Link></li>
                                        <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} offset={-50} >Gallery</Link></li>
                                        <li><Link activeClass="active" to="rsvp" spy={true} smooth={true} duration={500} offset={-100} >RSVP</Link></li>
                                        <li><Link activeClass="active" to="event" spy={true} smooth={true} offset={-80} duration={500} >Events</Link></li>
                                        <li className="menu-item-has-children">
                                            <NavLink onClick={ClickHandler} to="/blog">Blog</NavLink>
                                            <ul className="sub-menu">
                                                <li><NavLink onClick={ClickHandler} to="/blog">Blog right sidebar</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</NavLink></li>
                                                <li><NavLink onClick={ClickHandler} to="/blog-fullwidth">Blog fullwidth</NavLink></li>
                                                <li className="menu-item-has-children">
                                                    <NavLink onClick={ClickHandler} to="/">Blog details</NavLink>
                                                    <ul className="sub-menu">
                                                        <li><NavLink onClick={ClickHandler} to="/blog-single">Blog details right sidebar</NavLink>
                                                        </li>
                                                        <li><NavLink onClick={ClickHandler} to="/blog-single-left-sidebar">Blog details left
                                                            sidebar</NavLink></li>
                                                        <li><NavLink onClick={ClickHandler} to="/blog-single-fullwidth">Blog details
                                                            fullwidth</NavLink></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="header-search-form-wrapper">
                                        <div className="cart-search-contact">
                                            <button onClick={() => setMenuState(!menuActive)} className="search-toggle-btn"><i
                                                className={`ti-search ${menuActive ? "ti-close" : "ti-search"}`}></i></button>
                                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                                <form onSubmit={SubmitHandler}>
                                                    <div>
                                                        <input type="text" className="form-control"
                                                            placeholder="Search here..." />
                                                        <button type="submit"><i
                                                            className="fi ti-search"></i></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mini-cart">
                                        <button className="cart-toggle-btn" onClick={() => setcartState(!cartActive)}>
                                            {" "}
                                            <i className="fi flaticon-shopping-cart"></i>{" "}
                                            <span className="cart-count">{carts.length}</span>
                                        </button>
                                        <div className={`mini-cart-content ${cartActive ? "mini-cart-content-toggle" : ""}`}>
                                            <button className="mini-cart-close" onClick={() => setcartState(!cartActive)}><i className="ti-close"></i></button>
                                            <div className="mini-cart-items">
                                                {carts &&
                                                    carts.length > 0 &&
                                                    carts.map((catItem, crt) => (
                                                        <div className="mini-cart-item clearfix" key={crt}>
                                                            <div className="mini-cart-item-image">
                                                                <span>
                                                                    <img src={catItem.proImg} alt="icon" />
                                                                </span>
                                                            </div>
                                                            <div className="mini-cart-item-des">
                                                                <p>{catItem.title} </p>
                                                                <span className="mini-cart-item-price">
                                                                    ${catItem.price} x {" "} {catItem.qty}
                                                                </span>
                                                                <span className="mini-cart-item-quantity">
                                                                    <button
                                                                        onClick={() =>
                                                                            props.removeFromCart(catItem.id)
                                                                        }
                                                                        className="btn btn-sm btn-danger"
                                                                    >
                                                                        <i className="ti-close"></i>
                                                                    </button>{" "}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                            </div>
                                            <div className="mini-cart-action clearfix">
                                                <span className="mini-checkout-price">Subtotal: <span> ${totalPrice(carts)}</span></span>
                                                <div className="mini-btn">
                                                    <NavLink onClick={ClickHandler} to="/checkout" className="view-cart-btn s1">Checkout</NavLink>
                                                    <NavLink onClick={ClickHandler} to="/cart" className="view-cart-btn">View Cart</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
    };
};
export default connect(mapStateToProps, { removeFromCart })(Header2);