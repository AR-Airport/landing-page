import React from "react";
import styled from "styled-components";
import {} from "@material-ui/core";
import "./App.css";
import BackgroundImg from "./Assets/DetroitBackground.jpg";
import HUD from "./Assets/HUDMap.svg";
import GateA53 from "./Assets/GateA53.svg";
import Feet from "./Assets/Footprint.svg";
import AppStoreBadge from "./Assets/AppStoreBadge.svg";
import ScreenShot from "./Assets/IphoneScreenShot.png";

function App() {
    return (
        <AppCSS>
            <Top>
                <HUDCSS src={HUD} />
                <Flex>
                    <GateCSS src={GateA53} />
                    <FeetCSS src={Feet} />
                    <FeetCSS src={Feet} />
                    <FeetCSS src={Feet} />
                    <FeetCSS src={Feet} />
                </Flex>
            </Top>
            <Middle>
                <H2>Airport Guidance</H2>
                <AppStore src={AppStoreBadge} />
                <ScreenShotCSS src={ScreenShot} />
            </Middle>
            <Bottom>
                <H2B>Our Story</H2B>
                <H3B>A love for travel.</H3B>
                <H3B>A simple idea.</H3B>
                <H3B> A better airport experience.</H3B>
                <H3B>We built Airport AR for your adventures.</H3B>
                <H3B>Enjoy your trip!</H3B>
                <AppStoreB src={AppStoreBadge} />
            </Bottom>
        </AppCSS>
    );
}

export default App;

const AppCSS = styled.div``;

const Top = styled.div`
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: cover;
    height: 100vh;
    width: 100%;
`;
const Flex = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-top: 245px;
    right: 155px;
`;
const HUDCSS = styled.img`
    width: 10rem;
    height: 10rem;
    margin: 1rem;
    border-radius: 50%;
`;

const GateCSS = styled.img`
    width: 6rem;
    height: 6rem;
`;
const FeetCSS = styled.img`
    width: 5rem;
    height: 5rem;
    margin-bottom: 2rem;
`;

const Middle = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const H2 = styled.h2`
    align-self: center;
    font-size: 2.5rem;
    margin-top: 5rem;
`;

const AppStore = styled.img`
    width: 16rem;
    height: 5rem;
    margin-top: 2rem;
    align-self: center;
`;

const ScreenShotCSS = styled.img`
    width: 20rem;
    margin-top: 1rem;
    align-self: center;
`;

const Bottom = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const H2B = styled.h2`
    align-self: center;
    font-size: 2.5rem;
    margin-top: 10rem;
`;

const H3B = styled.h3`
    align-self: center;
    font-size: 1.5;
    margin: 1.5rem;
`;

const AppStoreB = styled.img`
    width: 16rem;
    height: 5rem;
    margin-top: 4rem;
    align-self: center;
`;
