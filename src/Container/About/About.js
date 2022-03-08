import React from 'react';
import "../../App.css";
import Countdown from 'react-countdown';

const About = () => {
    const renderer = ({ hours, minutes, seconds }) => {
        var num = hours;
        var digits = num.toString().split('');
        var hourDigits = digits.map(Number)

        var num = minutes;
        var digits = num.toString().split('');
        var minDigits = digits.map(Number)

        var num = seconds;
        var digits = num.toString().split('');
        var secDigits = digits.map(Number)


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
