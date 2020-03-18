import React from 'react';
import './SingleBook.scss';
import ReadingStatus from './../ReadingStatus/ReadingStatus';

class SingleBook extends React.Component {
	componentDidMount(){}
	fixImagePath = (imgPath) => {
		let newPath = imgPath;
		newPath = newPath.replace('http://', 'https://');
		return newPath;
	}
	render() {
		const authorsArray = this.props.bookinfo.volumeInfo.authors;
		const googleBookUrl = "https://books.google.ca/books?id=";
	  	return(
			<div className="bookshelf__book">
				<div className="bookshelf__bookImg">
					<a href={googleBookUrl+this.props.bookinfo.id} target="_blank" rel="noopener noreferrer" title={this.props.bookinfo.volumeInfo.title}><img src={this.fixImagePath(this.props.bookinfo.volumeInfo.imageLinks.thumbnail)} alt={this.props.bookinfo.volumeInfo.title} title={this.props.bookinfo.volumeInfo.title}/></a> 
				</div>
				<div className="bookshelf__bookInfo">
					<h3 className="bookshelf__bookTitle">{this.props.bookinfo.volumeInfo.title}</h3>
					<ul className="bookshelf__bookAuthorList">
					{authorsArray.map((item, index) => (
					<li className="bookshelf__bookAuthor" key={index}>{item}</li>
					))}
					</ul>
					{/* <p className="bookshelf__bookPages">Pages: {this.props.bookinfo.volumeInfo.pageCount}</p> */}
					<p className={"bookshelf__bookPages" + (this.props.bookinfo.volumeInfo.pageCount ? '' : ' hidden')}>Pages: {this.props.bookinfo.volumeInfo.pageCount}</p>
					<ReadingStatus
						bookTitle={this.props.bookinfo.volumeInfo.title}
						completedArray={this.props.completedArray}
						readingArray={this.props.readingArray}/>
				</div>
				
			</div>
		);
	}
}
export default SingleBook;