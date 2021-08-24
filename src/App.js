import React from 'react';
import {  } from '@material-ui/core'
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="sub-page">
                &nbsp;<h1 className="main-title">AR Airport</h1>
                <h4 className="sub-title">Your Personal Augmented Reality GPS</h4>
                <img src={require("./iphonex.png").default}></img>
            </div>
        </div>
    );
}

export default App;
