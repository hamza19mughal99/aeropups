import React from 'react';
import Header from "../../Components/Header/Header";
import About from "../About/About";
import PlaneDsc from "../PlaneDsc/PlaneDsc";
import Timeline from "../TimeLine/TimeLine";
import Team from "../Team/Team";
import Tokenomics from "../Tokenomics/Tokenomics";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
    return(
        <div className={'main_background'}>
            <Header />
            <About />
            <PlaneDsc />
            <Timeline />
            <Team />
            <Tokenomics />
            <Footer />
        </div>
    )
}
export default Home