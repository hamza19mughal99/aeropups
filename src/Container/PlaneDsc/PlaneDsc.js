import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import plane1 from "../../images/plane1.png";
import plane2 from "../../images/plane2.png"
import plane3 from "../../images/plane3.png"
import plane4 from "../../images/plane4.png"
import plane5 from "../../images/plane5.png"
import plane6 from "../../images/plane6.png"
import plane7 from "../../images/plane7.png"


const PlaneDsc = () => {
    AOS.init()

    return (
        <div className={'container-fluid'}>
            <div className="row plane_dsc_row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="plane_img">
                        <img data-aos="fade-right" data-aos-duration="2000" src={plane1} alt="plane1" />
                    </div>
                </div>
                <div className="col-md-6 plane_desc">
                    <h4>WHAT IS AEROPUPS </h4>
                    <p>AeroPups is an NFT project that will use 100% of the mint funds to lease aircraft across the U.S.
                        and use the profit to massively benefit the AeroPups community for a lifetime.</p>
                </div>
            </div>

            <div className="row plane_dsc_row">
                <div className="col-md-5 plane_desc2">
                    <h4>HOW dOES IT WORK? </h4>
                    <p>Modern aircraft are highly sought after for many reasons, including their safety, modernity, and
                        hightech features.
                        They range from $100,000-$10 million dollars depending on the age, condition and model. Since
                        many flight centers
                        cannot immediately afford to purchase aircraft with increasing
                        demand in their business and general aviation, they are looking for modern aircraft owners to
                        lease from.</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="plane_img">
                        <img data-aos="fade-left" data-aos-duration="2000" src={plane2} alt={'plane2'} />
                    </div>
                </div>

            </div>
            <div className="row plane_dsc_row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="plane_img">
                        <img data-aos="fade-left" data-aos-duration="2000" src={plane3} alt={'plane3'} />
                    </div>
                </div>
                <div className="col-md-6 plane_desc">
                    <h4>WHaT aRE THE RISKS? </h4>

                    <p>The main risk as an aircraft owner is unplanned maintenance.
                        Due to the nature of maintaining an aircraft it is possible to lose some money on each
                        investment at some point.</p>
                </div>
            </div>

            <div className="row plane_dsc_row">
                <div className="col-md-5 plane_desc2">
                    <h4>HOW WE addRESS THE RISKS </h4>

                    <p>AeroPups is a lifelong project so future proofing is essential. There will be 10,000 NFTs
                        released,
                        and these funds will be allocated to high-risk, high-reward aircraft as well as newer aircraft
                        with
                        fewer major maintenance needs. Through this balance we will have the ideal ROI for AeroPups
                        holders.
                        Every aircraft purchased will have a thorough pre-purchase inspection; the team has 12 years
                        of flying experience which ensures the best decisions possible will be made when evaluating an
                        aircraft.</p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="plane_img">
                        <img data-aos="fade-right" data-aos-duration="2000" src={plane4} alt={'plane4'} />
                    </div>
                </div>
            </div>

            <div className="row plane_dsc_row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="plane_img">
                        <img data-aos="fade-left" data-aos-duration="2000" src={plane5} alt="plane5"/>
                    </div>
                </div>
                <div className="col-md-6 plane_desc">
                    <h4>WHY AEROPUPS? </h4>

                    <p>AeroPups will serve as a foundation of NFTs in business for decades. Right now,
                        there is no way for thousands of people to come together to start a business in a
                        community environment while seeing everything the company is doing in real time. NFTs change
                        everything.</p>
                </div>
            </div>

            <div className="row plane_dsc_row">
                <div className="col-md-5 plane_desc2">
                    <h4>THE FUTURE OF AEROPUPS </h4>

                    <p>Beyond the initial 10,000 NFT launch, we will allocate 50% of revenue to expansion.
                        Through this we can grow our fleet, thus increasing the revenue of the company and
                        ultimately value back to AeroPups holders. We will plan to launch a V2 and V3 in 2023
                        when expanding into larger charter aircraft to diversify our fleet. The NFT art is also
                        a huge consideration for us; NFTs started as art and collectables,
                        and we want to carry on the tradition to bring massive value to our holders forever. </p>
                </div>
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="plane_img">
                        <img data-aos="fade-left" data-aos-duration="2000" src={plane6} alt={'plane6'}/>
                    </div>
                </div>

            </div>

            <div className="row plane_dsc_row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <div className="plane_img">
                        <img data-aos="fade-right" data-aos-duration="2000" src={plane7} alt={'plane_name'}/>
                    </div>
                </div>
                <div className="col-md-6 plane_desc">
                    <h4>BEYONd THE BUSINESS </h4>
                    <p>The founders of AeroPups are dedicated to building a non-profit organization that
                        teaches under-privileged teenagers how to fly; equipping them with a pilot's license
                        before the age of 18 and handing them the keys to their future success.
                        We plan to build this out simultaneously with AeroPups, adding value to both ventures.</p>
                </div>
            </div>
        </div>
    )
};
export default PlaneDsc;