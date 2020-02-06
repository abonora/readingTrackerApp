import React from 'react';
import YearSelector from './../YearSelector/YearSelector';
import Footer from './../Footer/Footer';
import SingleBook from './../SingleBook/SingleBook';
import './Books.scss';

const Books = (props) => {
	const array = props.booksArray;
	return(
		<div className="bookshelf">
			<YearSelector
				years={props.years}
				activeYear={props.activeYear}
				currentYear={props.currentYear}
				changeEvent={props.changeEvent} />
			<div className="bookshelf__wrapper">
				{/* {!isLoaded >
					<div className="bookshelf_loading"><i className="gg-loadbar"></i></div> */}
				<div>Shelf ID: {props.bookShelfId}</div>
				<div className="bookshelf__list">
					{array.map((item, index) => (
					<SingleBook 
						key={index}
						bookinfo={item}
						completedArray={props.completedArray}
						readingArray={props.readingArray}/>
					))}
				</div>
				
			</div>
			<Footer/>
		</div>
	);
}
export default Books;