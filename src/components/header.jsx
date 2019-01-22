import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <Fragment>
            {/* Links (sit on top) */}
            <div className="w3-top">
                <div className="w3-row w3-padding w3-black">
                    <div className="w3-col s4">
                        <Link to="/" className="w3-button w3-block w3-black">HOME</Link>
                    </div>
                    <div className="w3-col s4">
                        <Link to="/terms" className="w3-button w3-block w3-black">TERMS</Link>
                    </div>
                    <div className="w3-col s4">
                        <Link to="/privacy" className="w3-button w3-block w3-black">PRIVACY</Link>
                    </div>
                </div>
            </div>
            {/* Header with image */}
            <header className="bgimg w3-display-container w3-grayscale-min" id="home">
                <div className="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
                    <span className="w3-tag">Open from 6am to 5pm</span>
                </div>
                <div className="w3-display-middle w3-center">
                    <span className="w3-text-white" style={{ fontSize: "90px" }}>the<br />Cafe</span>
                </div>
                <div className="w3-display-bottomright w3-center w3-padding-large">
                    <span className="w3-text-white">15 Adr street, 5015</span>
                </div>
            </header>
        </Fragment>
    );
};

export default HeaderComponent;