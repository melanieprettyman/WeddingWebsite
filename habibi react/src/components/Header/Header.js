import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";


const Header = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <header id="header" className={props.topbarNone}>
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu/>
                                </div>
                            </div>
                            <div
                                className="col-lg-2 col-md-6 col-6"
                                style={{ marginRight: "20px" }} /* Adds spacing between this column and others */
                            >
                                <div className="navbar-header" style={{ marginRight: "10px" }}>
                                    <Link
                                        onClick={ClickHandler}
                                        className="navbar-brand"
                                        to="/home"
                                        style={{
                                            padding: "10px 20px", // Adds internal spacing
                                            display: "inline-block", // Ensures proper alignment
                                            fontSize: "24px", // Adjust font size if needed
                                        }}
                                    >
                                        Mitch&MelSayIDo
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-8">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link onClick={ClickHandler} to='/rsvp'>RSVP</Link></li>
                                        <li><Link onClick={ClickHandler} to='/event-details'>Event Details</Link></li>
                                        <li><Link onClick={ClickHandler} to='/dress-code'>Dress Code</Link></li> 
                                        <li><Link onClick={ClickHandler} to='/travel'>Travel</Link></li>
                                        <li><Link onClick={ClickHandler} to='/accommodations'>Accommodations</Link></li>  
                                        <li><Link onClick={ClickHandler} to='/gifts'>Gifts</Link></li>
                                        <li><Link onClick={ClickHandler} to='/about-the-couple'>About the Couple</Link></li>
                                    </ul>

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
export default connect(mapStateToProps, { removeFromCart })(Header);