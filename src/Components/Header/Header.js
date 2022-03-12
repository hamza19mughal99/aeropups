import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import Logo from "../../images/main-logo.png";
import openSea from "../../images/open_sea.png";
import Instagram from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import "../../App.css";

const Header = ({whitePaper, about, flight, team}) => {

    return (
        <Navbar style={{maxWidth: "92%"}} className={'container'} expand="lg">
                <Navbar.Brand className={'mr-4'} href="/"><img src={Logo} alt={'main_logo'} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink onClick={about} className={'nav-link'} to={'/'}>aBOUT</NavLink>
                        <NavLink onClick={whitePaper} className={'nav-link'} to={'/'}>WHITE papER</NavLink>
                        <NavLink onClick={flight} className={'nav-link'} to={'/'}>FLIGHT pLaN</NavLink>
                        <NavLink onClick={team} className={'nav-link'} to={'/'}>TEaM</NavLink>
                        {/*<NavLink onClick={faq} className={'nav-link'} to={'/'}>FaQ</NavLink>*/}
                        <div className={'header_social'}>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={openSea} alt={'social'}/></NavLink>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={Instagram} alt={'social'}/></NavLink>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={Youtube} alt={'social'}/></NavLink>
                            <NavLink to={'/'}><img className={'nav-item-img'} src={Twitter} alt={'social'}/></NavLink>
                        </div>
                    </Nav>
                    <button className={'nav-button'}>JOIN OUR dISCORd</button>
                </Navbar.Collapse>
        </Navbar>
    );
};
export default Header;