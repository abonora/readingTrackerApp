import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing/Landing';
import YearSelector from './components/YearSelector/YearSelector';
import Books from './components/Books/Books';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      currentYear: new Date().getFullYear(),
      currentShelfId: null,
      //years: [2020, 2019, 2018, 2017]
      years: [
        {
          year: 2020,
          bookShelf: 1001
        },
        {
          year: 2019,
          bookShelf: 1002
        },
        {
          year: 2018,
          bookShelf: 1003
        }
      ],
      error: null,
			isLoaded: false,
      readingChallengeArray: [],
      readingArray: [],
      completedArray: []
    }
  }

  //api fetch has to happen in here and not in books.js that way it can update the feed.

  componentDidMount(){

    //get default bookshelf
    this.fetchBooks(1001);

    //get currently reading and want to read books
    const currentlyReadingUrl = 'https://www.googleapis.com/books/v1/users/112937837834791569866/bookshelves/3/volumes';
    const completedUrl = 'https://www.googleapis.com/books/v1/users/112937837834791569866/bookshelves/4/volumes?maxResults=40';
    this.getShelfData(currentlyReadingUrl,completedUrl);
		
  }
  //Methods
  getShelfData = (reading, completed) => {
    Promise.all([fetch(reading), fetch(completed)])

      .then(([res1, res2]) => { 
         return Promise.all([res1.json(), res2.json()]) 
      })
      .then(([res1, res2]) => {
        // set state in here
        this.setState({
					readingArray: res1.items,
					completedArray: res2.items
				});
      });
  }
  fetchBooks = (shelfId) => {
    console.log(shelfId);
    fetch('https://www.googleapis.com/books/v1/users/112937837834791569866/bookshelves/'+shelfId+'/volumes')
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					readingChallengeArray: result.items
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
  getCurrentShelfId = (year) => {
    let years = this.state.years
    let obj = years.find(o => o.year === year);
    
    this.setState({
      currentShelfId: obj.bookShelf
    });
  }
  changeYear = (event) => {
    let activeYear = parseInt(event.target.getAttribute('data-year'));
    let activeShelfId = parseInt(event.target.getAttribute('data-shelfid'));

    if(activeYear!= this.state.currentYear){
      this.setState({
        currentYear: activeYear,
        currentShelfId: activeShelfId
      });
      this.fetchBooks(activeShelfId);
    }
    
  }
  //output
  render (){
    return(
      <div className="App">
        <Landing
          title="book reading challenge"
          year={this.state.currentYear} />
          <Books
          years={this.state.years}
          //activeYear={this.state.activeYear}
          currentYear={this.state.currentYear}
          changeEvent={this.changeYear}
          bookShelfId={this.state.currentShelfId}
          booksArray={this.state.readingChallengeArray}
          completedArray={this.state.completedArray}
          readingArray={this.state.readingArray}
          />
		
          {/* 
          IDEAS
          -------
          * potentially add a modal that the user will click the book tile to activate and it just displays more info regarding that book?? 

          * potentially add a filter so that you can filter whats been completed, in progess or to do
          
          <div className="readingStatusIcons">
            <div>Not Read: <br /><i className="gg-radio-check"></i><br /><i className="gg-file"></i></div>
            <div>Currently Reading:<br /><i className="gg-radio-checked"></i><br /><i className="gg-loadbar-doc"></i></div>
            <div>Completed: <br /><i className="gg-check-o"></i><br /><i className="gg-file-document"></i></div>
            <div>Loading: <br /><i className="gg-loadbar"></i></div>
            <div>Info: <br /><i className="gg-info"></i></div>
          </div> */}
          {/*
            fetch Currently Reading and Completed books in app.js and pass in arrays into bookslist as a prop
            possibily look into multiple fetch calls async await
            landing
            bookslist - in here you'll need to compare the book title or ISBN number to those that have been read or in progress to determine the status
              - year selector
              - book repeater
          */}
      </div>
    )
  }
}

export default App;
