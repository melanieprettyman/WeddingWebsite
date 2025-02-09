import React from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../MobileMenu/MobileMenu";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/action";

const Header = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <header id="header" className={props.topbarNone}>
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Mobile Menu */}
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>

              {/* Brand Name */}
              <div
                className="col-lg-2 col-md-6 col-6"
                style={{ marginRight: "20px" }}
              >
                <div className="navbar-header" style={{ marginRight: "10px" }}>
                  <Link
                    onClick={ClickHandler}
                    className="navbar-brand"
                    to="/home"
                    style={{
                      padding: "10px 20px",
                      display: "inline-block",
                      fontSize: "24px",
                    }}
                  >
                    Mitch&MelSayIDo
                  </Link>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="col-lg-9 col-md-8 col-8">
                <div
                  id="navbar"
                  className="collapse navbar-collapse navigation-holder"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end", // Align to the right
                  }}
                >
                  <button className="menu-close">
                    <i className="ti-close"></i>
                  </button>
                  <ul
                    className="nav navbar-nav mb-2 mb-lg-0"
                    style={{
                      padding: "0",
                      margin: "0",
                      listStyle: "none",
                    }}
                  >
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        to="/"
                        style={{ textDecoration: "none", fontSize: "14px" }}
                      >
                        Home
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/rsvp"
                        style={{ textDecoration: "none", fontSize: "14px" }}
                      >
                        RSVP
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/event-details"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Event Details
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/dress-code"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Dress Code
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/travel"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Travel
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/accommodations"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Accommodations
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/gifts"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Gifts
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/about-the-couple"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        About the Couple
                      </Link>
                    </li>
                    <li style={{ margin: "0 5px" }}>
                      <Link
                        onClick={ClickHandler}
                        to="/gallery"
                        style={{
                          textDecoration: "none",
                          fontSize: "14px",
                        }}
                      >
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};

export default connect(mapStateToProps, { removeFromCart })(Header);
