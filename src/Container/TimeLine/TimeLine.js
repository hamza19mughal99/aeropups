import React from 'react';
import TimeLine from "../../images/time_line.png";
import plane1 from "../../images/plane1.png";
import { FaArrowDown } from 'react-icons/fa';


const Timeline = () => {
    const timeLineDetails = [
        {
            flightName: 'Q3 2025-FOrEVER',
            flightDsc: 'TEND TO THE FLEET, MANAGE AND GROW AEROPUPS BRAND AND CULTIVATE VALUE WITHIN OUR COMMUNITY'
        },
        {
            flightName: 'Q2 2025',
            flightDsc: 'AQUIRE AIRCRAFT AND PLACE INTO LEASE'
        },
        {
            flightName: 'Q1 2025',
            flightDsc: 'LAUNCH FINAL VERSION'
        },
        {
            flightName: 'Q3/Q4 2024',
            flightDsc: 'BUILD AND NURTURE NON PROFIT'
        },
        {
            flightName: 'Q2 2024',
            flightDsc: 'LAUNCH NON PROFIT'
        },
        {
            flightName: 'Q1 2024',
            flightDsc: 'LAUNCH V3'
        },
        {
            flightName: 'Q4 2023',
            flightDsc: 'LAUNCH V2'
        },
        {
            flightName: 'Q2/Q3 2023',
            flightDsc: 'CONCLUDE ALL ACCESS FLIGHTS AND MEET AND GREETS AT AIRSHOWS, PREPARE V2/V3'
        },
        {
            flightName: 'Q1 2023',
            flightDsc: 'BEGIN ACCESS FLIGHTS. CONTINUE PLACING AIRCRAFT IN IDEAL SITUATIONS, REFLECT AND FIX ALL PROCESSES TO FLOW SEAMLESLY.'
        },
        {
            flightName: 'Q3/Q4 2022',
            flightDsc: 'ACQUIRE AIRCRAFT AND PLACE INTO LEASE.'
        },
    ]

    return (
        <>

        <div className="time_line d-none d-sm-block">
            <img src={TimeLine} alt={'timeline_img'} />
        </div>

        <div className={'time_line_mob_view .d-block .d-sm-none'}>
            <h4 className={'mb-4'}>aEROPUPS OFFICIAL FLIGHT PLAN</h4>

            <div className={'container'}>
                <div className={'row'}>
                    {
                        timeLineDetails.map((detail) => (
                            <div className={'col-12 flight_col'}>
                                <img src={plane1} alt={'plane1'} />
                                <h5>{detail.flightName}</h5>
                                <p>{detail.flightDsc}</p>
                                <FaArrowDown />
                            </div>
                        ))
                    }
                    <div className={'col-12 flight_col'}>
                        <img src={plane1} alt={'plane1'} />
                        <h5>Q2 2022 (MaY 28)</h5>
                        <p>LAUNCH AEROPUPS - AIRBORNE</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Timeline;