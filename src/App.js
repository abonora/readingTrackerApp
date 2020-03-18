import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing/Landing';
import YearSelector from './components/YearSelector/YearSelector';
import Books from './components/Books/Books';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-683832-1', {
  //debug: true,
  titleCase: false
});

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
    
    
    // ReactGA.pageview('/reading-tracker-app/'+this.state.currentYear);
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
        ReactGA.pageview('/reading-tracker-app/'+this.state.currentYear, '', 'Reading Tracker App Year: '+this.state.currentYear);
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

    if(activeYear!== this.state.currentYear){
      this.setState({
        currentYear: activeYear,
        currentShelfId: activeShelfId
      });
      this.fetchBooks(activeShelfId);
      // ReactGA.pageview('/reading-tracker-app/'+activeYear, '', 'Reading Tracker App Year: '+activeYear);
    }
    
  }
  //output
  render (){
    if(this.state.error){
      return <p>Error: {this.state.error.message}</p>;
    }else if(!this.state.isLoaded){
      return <p>Loading.....</p>;
    }else{
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
            loading={this.state.isLoaded}
            />
        </div>
      )
    }
    
  }
}

export default App;
