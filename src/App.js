import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Landing from './components/Landing/Landing';
import YearSelector from './components/YearSelector/YearSelector';

class App extends Component {
  
  state = {
    currentYear: new Date().getFullYear(),
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
    ]
  }

  changeYear = (event) => {
    let activeYear = parseInt(event.target.getAttribute('data-year'))
    this.setState({currentYear: activeYear});
    //console.log(event.target.getAttribute('data-shelfid'));
  }
  render (){
    return(
      <div className="App">
        <Landing
          title="book reading challenge"
          year={this.state.currentYear} />
        <YearSelector
          years={this.state.years}
          activeYear={this.state.activeYear}
          currentYear={this.state.currentYear}
          changeEvent={this.changeYear} />
          <div className="testContent">
            <h1>Test</h1>

            <h2>test</h2>

            <h3>test</h3>
          </div>
          {/* <div className="readingStatusIcons">
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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    )
  }
}

export default App;
