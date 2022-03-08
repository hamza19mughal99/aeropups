import React from 'react';
import Aero2 from "../../images/Aero2.png";
import nft2 from "../../images/dog1.jpg";
import nft3 from "../../images/dog2.jpg";
import nft4 from "../../images/dog3.jpg";
import nft5 from "../../images/dog4.jpg";
import nft6 from "../../images/dog5.jpg";
import nft7 from "../../images/dog6.jpg";

const Tokenomics = () => {
    return (
        <div className="container ">
            <div className="tokenomics">
                <img className="main_img" src={Aero2} alt={'main'}/>

                <h5>TOKENOMICS</h5>

                <div className="container">
                    <div className="row d-flex justify-content-center align-items-center mt-5">
                        <div className="col-md-1 token_col">
                            <p>Airborne – V1 </p>
                        </div>
                        <div className="col-md-1 token_col">
                            <p>10,000 Tokens</p>
                        </div>
                        <div className="col-md-3 token_col">
                            <div className="row justify-content-center">
                                <div className="col-md-1 col-1 mr-2">
                                    <p>400:</p>
                                </div>
                                <div className="col-md-10 col-8">
                                    <p>VIP with future profit shared +
                                        Airshow meet and greets</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 token_col">
                            <div className="row justify-content-center">
                                <div className="col-md-1 col-1">
                                    <p>5:</p>
                                </div>
                                <div className="col-md-10 col-8 p-0">
                                    <p>A flight with Aero and
                                        the team</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row justify-content-center">
                                <div className="col-md-1 col-1">
                                    <p>9595:</p>
                                </div>
                                <div className="col-md-10 col-8 p-0">
                                    <p>Future profit shared</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="divider"/>
                    <div className="tokenomics_dsc">
                        <p>All 10,000 split 50% of Airborne profit, with the other 50% going directly to
                            purchasing
                            more aircraft</p>
                        <p>All Airborne tokens receive some of the future drops aircraft profit,
                            the 1st 400 minted will be VIP, with a larger portion of future profit.
                            VIP tokens will be the art of Aero. We want to give the first holders the absolute
                            most value for quite literally making AeroPups takeoff,
                            but every holder will be amazed with the Pup they own!</p>

                        <p className={'token_para'}> We'll be working with an attorney after the VIP tokens sell out when the DAO is
                            formed
                            so that there is a liquidity pool so that AeroPups leads to opportunities for
                            everyone.
                            Some projects have used their social token and a liquidity pool to accomplish this
                            goal.
                            This is no way investment advice or the guarantee of profit. As we form the DAO with
                            attorneys,
                            we'll be able to refine this language. All of this may be subject to change.
                        </p>
                    </div>

                    <div className="mt-5 token_images">
                        <img src={nft7} alt={'nft'} />
                        <img src={nft2} alt={'nft'} />
                        <img src={nft3} alt={'nft'} />
                        <img src={nft4} alt={'nft'} />
                        <img src={nft5} alt={'nft'} />
                        <img src={nft6} alt={'nft'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
