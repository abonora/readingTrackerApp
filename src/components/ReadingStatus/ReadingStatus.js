import React from 'react';

class ReadingStatus extends React.Component {
    componentDidMount(){
        
    }
    render(){
        let currentBook = this.props.bookTitle;
        let readingNow = this.props.readingArray;
        let completed = this.props.completedArray;

        let readingStatusText = "Want To Read";
        let found = false;

        if (readingNow.filter(e => e.volumeInfo.title === currentBook).length > 0) {
            found = true;
            readingStatusText = "Found in Reading Now";
        } else if (!found && completed.filter(e => e.volumeInfo.title === currentBook).length > 0) {
            found = true;
            readingStatusText = "Found in Completed";
        }
        return(
            <div>
                <span>Reading Status: {readingStatusText}</span>
            </div>
        )
    }
}

export default ReadingStatus;