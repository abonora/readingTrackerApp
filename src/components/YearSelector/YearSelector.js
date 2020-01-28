import React from 'react';
import './YearSelector.scss';

const yearSelector = (props) => {
    //console.log(props.years[1])
    return(
        <div className="yearWrapper">
            <h3>Years:</h3>
            <ul>
                {/* <li class="selected">2019</li> */}
                {props.years.map(function(item){
                    return <li className={item.year === props.currentYear ? 'selected' : ''} onClick={props.changeEvent} key={item.year} data-year={item.year} data-shelfid={item.bookShelf}>{item.year}</li>
                })}
            </ul>
        </div>
    )
}

export default yearSelector;