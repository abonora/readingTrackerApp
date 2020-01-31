import React from 'react';
import './Landing.scss';
//import bg from './../../landing-bg.png';

const Landing = (props) => {
    return(
        <div id="Landing" className="column">
            <div className="copyWrapper">
                <h1>albertobonora.com</h1>
                <h2>{props.year + " " + props.title}</h2>
            </div>
            {/* <img src={bg} alt="reading challenge"/> */}
        </div>
    )
}
export default Landing;