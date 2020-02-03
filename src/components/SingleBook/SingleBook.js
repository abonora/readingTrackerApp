import React from 'react';
import './SingleBook.scss';

class SingleBook extends React.Component {
	// constructor(props){
	// 	super(props);
	// 	this.state = {
	// 		error: null,
	// 		isLoaded: false,
	// 		items: []
	// 	};
	// }
	componentDidMount(){
		// console.log(this.props.bookShelfId);
		// fetch("https://www.googleapis.com/books/v1/users/112937837834791569866/bookshelves/1001/volumes")
		// .then(res => res.json())
		// .then(
		// 	(result) => {
		// 		this.setState({
		// 			isLoaded: true,
		// 			items: result
		// 		});
		// 	},
		// 	(error) => {
		// 		this.setState({
		// 			isLoaded: true,
		// 			error
		// 		});
		// 	}
		// )
	}
	render() {
		//console.log(this.props.bookinfo.volumeInfo);
	  	return(
			<div className="bookshelf__book">
				<h3>{this.props.bookinfo.volumeInfo.title}</h3>
				<p><em>{this.props.bookinfo.volumeInfo.authors[0]}</em></p>
				<p>Pages: {this.props.bookinfo.volumeInfo.pageCount}</p>
			</div>
		);
	}
}
export default SingleBook;