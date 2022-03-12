import React from 'react';
import mainLogo from "../../images/main-logo.png";
import openSea from "../../images/open_sea.png";
import Instagram from "../../images/insta.png";
import Youtube from "../../images/youtube.png";
import Twitter from "../../images/twitter.png";
import "../../App.css";

const Footer = ({whitePaper, about, flight, team}) => {
    return (
        <footer style={{marginTop: '50px'}}>
            <div className="text-center">
                <img className={'footer_logo'} src={mainLogo} alt={'footer_logo'} />
                <div className="footer_links">
                    <h5 onClick={about} >aBOUT</h5>
                    <h5 onClick={whitePaper} >WHITE papER</h5>
                    <h5 onClick={flight} >FLIGHT pLaN</h5>
                    <h5 onClick={team}>TEaM</h5>
                </div>
                <div className="subscribe">
                    <p>Subscribe to get the updates</p>

                    <div className="subs_input">
                        <input placeholder="Enter phone number"/>
                        <button>Subscribe</button>
                    </div>

                    <div className="follow_us">
                        <p>FOLLOW US</p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="footer-nav-item-img">
                            <img src={openSea} alt="openSea" />
                        </div>
                        <div className="footer-nav-item-img">
                            <img src={Instagram} alt="Instagram" />
                        </div>
                        <div className="footer-nav-item-img">
                            <img src={Youtube} alt="Youtube" />
                        </div>
                        <div className="footer-nav-item-img">
                            <img src={Twitter} alt={'twitter'} />
                        </div>
                    </div>
                </div>

                <div className={'termsFeed'}>
                    <p>TermsFeed © 2021- 2022  <span> | Aeropups </span> </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
