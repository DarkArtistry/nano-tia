import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './navbar/navbar.js';
import NewsComponent from './news/news.js';
import Bio from './bio/bio.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavbarComponent />
            <Route exact path="/" component={NewsComponent} />
            <Route path="/news" component={NewsComponent} />
            <Route path="/bio" component={Bio} />
          </header>

        </div>
      </Router>
    );
  }
}

export default App;
