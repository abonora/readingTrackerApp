import React from 'react';
import './Legend.scss';

const Legend = () => {
    return(
        <div className="iconLegend">
            <ul className="iconLegend__list">
                <li className="iconLegend__item"><i className="gg-check-o"></i> <span>Completed</span></li>
                <li className="iconLegend__item"><i className="gg-loadbar-doc"></i> <span>Currently Reading</span></li>
                <li className="iconLegend__item"><i className="gg-file"></i> <span>Want to Read</span></li>
            </ul>
        </div>
    )
}

export default Legend;