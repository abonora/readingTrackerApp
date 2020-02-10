import React from 'react';
import './ReadingStatus.scss';

class ReadingStatus extends React.Component {
    componentDidMount(){
        
    }
    render(){
        let currentBook = this.props.bookTitle;
        let readingNow = this.props.readingArray;
        let completed = this.props.completedArray;

        let readingStatusText = "Want To Read";
        let readingStatusIcon = "gg-file";
        let found = false;

        if (readingNow.filter(e => e.volumeInfo.title === currentBook).length > 0) {
            found = true;
            readingStatusText = "Found in Reading Now";
            readingStatusIcon = "gg-loadbar-doc";
        } else if (!found && completed.filter(e => e.volumeInfo.title === currentBook).length > 0) {
            found = true;
            readingStatusText = "Completed";
            readingStatusIcon = "gg-file-document";
        }
        return(
            <div>
                <span className="bookshelf__readingStatus">Reading Status: {readingStatusText}<i className={readingStatusIcon}></i></span>
            </div>
        )
    }
}

export default ReadingStatus;