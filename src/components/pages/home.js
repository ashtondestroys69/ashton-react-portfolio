import React from 'react';

import PortfolioContainer from "../portfolio/portfolio-container";
// import Flames from "../../../static/assets/images/gif/flameshell.mp4";

export default function() {
    return (
        <div>
            <div className="hell" hidden>
                <h2>Welcome to Hell; may you burn for eternity.</h2>

                {/* Questions:
                    - How to get gif or mp4 working
                    - how to get bottom border closer to text
                    - how to shorten length of bottom border */}

                {/* <video className="hell-vid" autoPlay loop muted>
                    <source src={`${Flames}`} type="video/mp4"></source>
                </video> */}

                {/* <video width="666px" height="45px" autoPlay muted loop>
                    <source src="..\images\gif\flameshell.mp4" type="video/mp4"></source>
                </video> */}

                 {/* <div className="hellgif">
                    <img src="../images/gif/burnhell.gif" alt="Burn in Hell"></img>
                </div> */}
            </div>
            
            <PortfolioContainer/>
        </div>
    );
}