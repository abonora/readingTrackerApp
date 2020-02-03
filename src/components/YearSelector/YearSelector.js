import React from 'react';
import './YearSelector.scss';

const yearSelector = (props) => {
    //console.log(props.years[1])
    return(
        <div className="year">
            <h3 className="year__label">Years:</h3>
            <ul className="year__list">
                {/* <li class="selected">2019</li> */}
                {props.years.map(function(item){
                    return <li className={item.year === props.currentYear ? 'year__item year__item--selected' : 'year__item'} onClick={props.changeEvent} key={item.year} data-year={item.year} data-shelfid={item.bookShelf}>{item.year}</li>
                })}
            </ul>
        </div>
    )
}

export default yearSelector;