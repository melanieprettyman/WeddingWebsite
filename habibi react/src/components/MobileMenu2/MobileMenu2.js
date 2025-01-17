import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Wedding Home 1',
                link: '/home'
            },
            {
                id: 12,
                title: 'Wedding Home 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Announcement Home 1',
                link: '/home-3'
            },
            {
                id: 14,
                title: 'Announcement Home 2',
                link: '/home-4'
            },
            {
                id: 15,
                title: 'Muslim Wedding Home',
                link: '/home-5'
            },
            {
                id: 16,
                title: 'Asian Wedding Home',
                link: '/home-6'
            },
            {
                id: 17,
                title: 'Muslim Wedding Home(RTL)',
                link: '/home-rtl'
            },
            {
                id: 18,
                title: 'Wedding Invitation 1',
                link: '/invitation-1'
            },
            {
                id: 19,
                title: 'Wedding Invitation 2',
                link: '/invitation-2'
            },
        ]
    },
    {
        id: 11,
        title: 'Event Planner Homes',
        link: '/home',
        submenu: [
            {
                id: 111,
                title: 'Wedding Planner 1',
                link: '/home-7'
            },
            {
                id: 112,
                title: 'Wedding Planner 2',
                link: '/home-8'
            },
            {
                id: 113,
                title: 'Wedding Planner 3',
                link: '/home-9'
            }
        ]
    },
    {
        id: 21,
        title: 'Wedding Shop Homes',
        link: '/shop-home',
        submenu: [
            {
                id: 211,
                title: 'Bridal Shop',
                link: '/shop-home'
            },
            {
                id: 212,
                title: 'Wedding Bouquet Shop',
                link: '/shop-home-2'
            },
            {
                id: 212,
                title: 'Bouquet Shop Video Bg',
                link: '/shop-home-video-bg'
            },
            {
                id: 214,
                title: 'Wedding Cake Shop',
                link: '/shop-home-3'
            }
        ]
    },


]


const MobileMenu2 = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'fa fa-angle-up' : 'fa fa-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <NavLink onClick={ClickHandler}
                                                                    to={submenu.link}>{submenu.title}</NavLink>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                    <li><Link activeClass="active" to="couple" spy={true} smooth={true} offset={-100} duration={500} >Couple</Link></li>
                    <li><Link activeClass="active" to="story" spy={true} smooth={true} duration={500} offset={-100} >Story</Link></li>
                    <li><Link activeClass="active" to="gallery" spy={true} smooth={true} duration={500} offset={-100} >Gallery</Link></li>
                    <li><Link activeClass="active" to="rsvp" spy={true} smooth={true} duration={500} offset={-100} >RSVP</Link></li>
                    <li><Link activeClass="active" to="event" spy={true} smooth={true} offset={-80} duration={500} >Events</Link></li>
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu2;