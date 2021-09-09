import React from "react";
import styled from "styled-components";
import {} from "@material-ui/core";
import "./App.css";
import BackgroundImg from "./Assets/DetroitBackground.jpg";

function App() {
    return (
        <AppCSS>
            <Top></Top>
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
