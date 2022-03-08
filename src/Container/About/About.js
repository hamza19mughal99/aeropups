import React from 'react';
import "../../App.css";
import Countdown from 'react-countdown';

const About = () => {
    const renderer = ({ hours, minutes, seconds }) => {
        return (
            <div className={'count_down'}>
                <ul className='p-0'>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            <span>{hours}</span>
                        </div>
                        <p>HOURS</p>
                    </li>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            <span>{minutes}</span>
                        </div>
                        <p>MINUTES</p>
                    </li>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            <span>{seconds}</span>
                        </div>
                        <p>SECONDS</p>
                    </li>
                </ul>
            </div>
        )
    };
    return (
        <div className="container about_section">
            <h3>ABOUT US</h3>
            <div className="row">
                <div className="col-md-5 about_section_col">
                    <p>The AeroPups mission is to help as many people as possible achieve their dreams through flight.
                        We see a huge gap in value in most NFT projects and decided to make AeroPups unique,
                        as it should be, to mold the NFT future for the world. The difference in value comes with our
                        business model in place,
                        coinciding with the community goals to bring massive value both in airdrops and experiences
                        forever.</p>
                    <div className="about_btn">
                        <button>MINT YOUR PUP</button>
                        <button>CONNECT WALLET</button>
                    </div>

                    <div className="progress">
                        <div className="progress-value" />
                    </div>

                    <div className="about_timer">
                        <h5>MAY 25th 2022</h5>
                    </div>
                    <Countdown
                        date={Date.now() + 50000000}
                        renderer={renderer}
                    />
                </div>
                <div className="col-md-1">

                </div>
                <div className="col-md-6">
                    <video style={{ width: '100%', height: '100%' }} controls>
                        <source src="https://www.youtube.com/watch?v=Oz9zw7-_vhM" type="video/mp4" />
                        <source src="https://www.youtube.com/watch?v=Oz9zw7-_vhM" type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
};

export default About;
