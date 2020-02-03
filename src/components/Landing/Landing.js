import React from 'react';
import './Landing.scss';
//import bg from './../../landing-bg.png';

const Landing = (props) => {
    return(
        <div className="landing">
            <div className="landing__copyWrapper">
                <h1 className="landing__siteTitle">albertobonora.com</h1>
                <h2 className="landing__appTitle">{props.year + " " + props.title}</h2>
            </div>
        </div>
    )
}
export default Landing;