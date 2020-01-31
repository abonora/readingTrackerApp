import React from 'react';
import YearSelector from './../YearSelector/YearSelector';
import Footer from './../Footer/Footer';
import './Books.scss';

const Books = (props) => {
    return(
        <div id="Books" className="column">
            <YearSelector
                years={props.years}
                activeYear={props.activeYear}
                currentYear={props.currentYear}
                changeEvent={props.changeEvent} />
			<div className="booksWrapper">
				<div className="innerBooksWrapper">
					<div className="bookCard"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookCard"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookCard"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookCard"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookCard"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookCard"><h3>Book Title</h3><p><em>Author</em></p></div>
					<div className="bookCard"><h3>Book Title</h3><p><em>Author</em></p></div>
				</div>
				
			</div>
			<Footer/>
        </div>
    );
}

export default Books;