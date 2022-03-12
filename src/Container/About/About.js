import React from 'react';
import "../../App.css";
import Countdown from 'react-countdown';

const About = () => {
    const renderer = ({ hours, minutes, seconds }) => {
        let digits = hours.toString().split('');
        let hourDigits = digits.map(Number)

        let digits1 = minutes.toString().split('');
        let minDigits = digits1.map(Number)

        let digits2 = seconds.toString().split('');
        let secDigits = digits2.map(Number)


        let hourCheck;
        if (hourDigits.length === 1) {
            hourCheck = (
                <>
                    <span>0</span>
                    <span>{hourDigits[0]}</span>
                </>
            )
        }
        else {
            hourCheck = (
                <>
                    <span>{hourDigits[0]}</span>
                    <span>{hourDigits[1]}</span>
                </>
            )
        }

        let minCheck;
        if (minDigits.length === 1) {
            minCheck = (
                <>
                    <span>0</span>
                    <span>{minDigits[0]}</span>
                </>
            )
        }
        else {
            minCheck = (
                <>
                    <span>{minDigits[0]}</span>
                    <span>{minDigits[1]}</span>
                </>
            )
        }


        let secCheck;
        if (secDigits.length === 1) {
            secCheck = (
                <>
                    <span>0</span>
                    <span>{secDigits[0]}</span>
                </>
            )
        }
        else {
            secCheck = (
                <>
                    <span>{secDigits[0]}</span>
                    <span>{secDigits[1]}</span>
                </>
            )
        }


        return (
            <div className={'count_down'}>
                <ul className='p-0'>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            {hourCheck}
                        </div>
                        <p>HOURS</p>
                    </li>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            {minCheck}
                        </div>
                        <p>MINUTES</p>
                    </li>
                    <li>
                        <div className={'d-flex justify-content-center'}>
                            {secCheck}
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
                        coinciding with the community goals to bring massive value both in AeroDrops and experiences
                        forever.</p>
                    <div className="about_btn">
                        <button>MINT YOUR pUp</button>
                        <button>CONNECT WaLLET</button>
                    </div>

                    <div className="progress">
                        <div className="progress-value" />
                    </div>

                    <div className="about_timer">
                        <h5>MaY 25th 2022</h5>
                    </div>
                    <Countdown
                        date={Date.now() + 50000000}
                        renderer={renderer}
                    />
                </div>
                <div className="col-md-1" />

                <div className="col-md-6">
                    <iframe className={'iframe_video'} src="https://player.vimeo.com/video/685716661?h=d684d30403&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" >
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default About;