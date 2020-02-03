import React from 'react';
import YearSelector from './../YearSelector/YearSelector';
import Footer from './../Footer/Footer';
import SingleBook from './../SingleBook/SingleBook';
import './Books.scss';

class Books extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			error: null,
			isLoaded: false,
			items: [],
			thisYear: this.props.currentYear
		};
	}
	//api fetch has to happen in app.js and not in here that way it can update the feed.
	componentDidMount(){
		console.log(this.state.thisYear);
		fetch("https://www.googleapis.com/books/v1/users/112937837834791569866/bookshelves/1001/volumes")
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					items: result.items
				});
			},
			(error) => {
				this.setState({
					isLoaded: true,
					error
				});
			}
		)
	}
	componentDidUpdate(){
		//console.log(this.props.currentYear);
	}
	render() {
		const{ error, isLoaded, items } = this.state;
	  	return(
			<div className="bookshelf">
				<YearSelector
					years={this.props.years}
					activeYear={this.props.activeYear}
					currentYear={this.props.currentYear}
					changeEvent={this.props.changeEvent} />
				<div className="bookshelf__wrapper">
					{/* {!isLoaded >
						<div className="bookshelf_loading"><i className="gg-loadbar"></i></div> */}
					<div>Shelf ID: {this.props.bookShelfId}</div>
					<div className="bookshelf__list">
						{}
					{items.map((item, index) => (
                       <SingleBook key={index} bookinfo={item}/>
                    ))}
						
						{/* <div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
						<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
						<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em><i className="gg-info"></i></p></div>
						<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
						<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
						<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div>
						<div className="bookshelf__book"><h3>Book Title</h3><p><em>Author</em></p></div> */}
					</div>
					
				</div>
				<Footer/>
			</div>
		);
	}
}
export default Books;