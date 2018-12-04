import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import NavbarComponent from './navbar/navbar.js';
import NewsComponent from './news/news.js';
import Bio from './bio/bio.js';
import { getNews } from './actions'

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadInitialData();
  }

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

function mapDispatchToProps (dispatch) {
  return {
    loadInitialData: function (params) {
      dispatch(getNews(params))
    }
  }
}

function mapStateToProps (state) {
  return { news: state.news }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
