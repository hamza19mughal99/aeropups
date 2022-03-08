import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Logo from "../../images/main-logo.png";
import openSea from "../../images/open_sea.png";
import Instagram from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import "../../App.css";

const Header = () => {

    return (
        <Navbar style={{maxWidth: "100%"}} className={'container'} expand="lg">
                <Navbar.Brand className={'mr-4'} href="/"><img src={Logo} alt={'main_logo'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className={'nav-link'} to={'/'}>ABOUT</NavLink>
                        <NavLink className={'nav-link'} to={'/'}>WHITEPAPER</NavLink>
                        <NavLink className={'nav-link'} to={'/'}>FLIGHT PLAN</NavLink>
                        <NavLink className={'nav-link'} to={'/'}>TEAM</NavLink>
                        <NavLink className={'nav-link'} to={'/'}>FAQ</NavLink>
                        <div className={'header_social'}>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={openSea} alt={'social'}/></NavLink>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={Instagram} alt={'social'}/></NavLink>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={Youtube} alt={'social'}/></NavLink>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={Twitter} alt={'social'}/></NavLink>
                        </div>
                    </Nav>
                    <button className={'nav-button'}>JOIN OUR DISCORD</button>
                </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;