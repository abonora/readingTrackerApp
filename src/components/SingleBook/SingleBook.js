import React from 'react';
import './SingleBook.scss';
import ReadingStatus from './../ReadingStatus/ReadingStatus';

class SingleBook extends React.Component {
	componentDidMount(){}
	render() {
		const authorsArray = this.props.bookinfo.volumeInfo.authors;
	  	return(
			<div className="bookshelf__book">
				<img className="bookshelf__bookImg" src={this.props.bookinfo.volumeInfo.imageLinks.thumbnail} alt={this.props.bookinfo.volumeInfo.title} title={this.props.bookinfo.volumeInfo.title}/>
				<div className="bookshelf__bookInfo">
					<h3 className="bookshelf__bookTitle">{this.props.bookinfo.volumeInfo.title}</h3>
					<ul className="bookshelf__bookAuthorList">
					{authorsArray.map((item, index) => (
					<li className="bookshelf__bookAuthor" key={index}>{item}</li>
					))}
					</ul>
					<p className="bookshelf__bookPages">Pages: {this.props.bookinfo.volumeInfo.pageCount}</p>
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