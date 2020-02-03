import React from 'react';
import YearSelector from './../YearSelector/YearSelector';
import Footer from './../Footer/Footer';
import './Books.scss';

const Books = (props) => {
    return(
        <div className="bookshelf">
            <YearSelector
                years={props.years}
                activeYear={props.activeYear}
                currentYear={props.currentYear}
                changeEvent={props.changeEvent} />
			<div className="bookshelf__wrapper">
				<div className="bookshelf_loading"><i className="gg-loadbar"></i></div>
				<div>Shelf ID: {props.bookShelfId}</div>
				<div className="bookshelf__list">
					<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em><i className="gg-info"></i></p></div>
					<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
				</div>
				
			</div>
			<Footer/>
        </div>
    );
}

export default Books;