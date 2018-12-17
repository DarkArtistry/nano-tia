import React, { Component } from 'react';
import { Button , Grid } from 'react-bootstrap';
import { connect } from 'react-redux';
import './news.css';
import SingleNews from './singleNews';
import { getNews } from '../actions'

class NewsComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allNews: [],
      newsDisplay: [],
      currentCount: 0,
      totalCount: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll (e) {
    let { pageNumber } = this.props;
    let { currentCount, newsDisplay, allNews } = this.state;
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    console.log('hi', window.scrollY, window.innerHeight, scrollHeight, newsDisplay.length)
    if(window.scrollY + window.innerHeight > scrollHeight - 100) {
      // NOTE : load next 5
      if (allNews.length - currentCount < 10 ) {
        this.props.getNews({ pageNumber })
      }
      let nextFive = allNews.slice(currentCount, currentCount + 5);
      this.setState({
        newsDisplay: [...newsDisplay,...nextFive],
        currentCount: currentCount + nextFive.length,
      });
    }
  }

  componentDidMount () {
    let { news } = this.props;
    if (news && news.data) {
      let { currentCount, newsDisplay } = this.state;
      let nextFive = news.data.slice(currentCount, currentCount + 5);
      this.setState({
        allNews: news.data,
        newsDisplay: [...newsDisplay,...nextFive],
        currentCount: currentCount + nextFive.length,
        totalCount: news.data.length
      });
    }
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount () {
    console.log('2')
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    let { news } = this.props;
    if (prevProps.news.isFetching !== news.isFetching) {
      let { currentCount, newsDisplay } = this.state;
      if (news && news.data) {
        let nextFive = news.data.slice(currentCount, currentCount + 5);
        this.setState({
          allNews: news.data,
          newsDisplay: [...newsDisplay,...nextFive],
          currentCount: currentCount + nextFive.length,
          totalCount: news.data.length
        });
      }
    }
  }

  render() {
    let { newsDisplay } = this.state;
    return (
      <div onScroll={(e) => { console.log('hi') }}>
        <div className="splash-subscribe">
          <div className="splash-subscribe-inner">
            <h1 className="">You look like <span className="nowidow">someone who</span> <span className="nowidow">appreciates quality journalism.</span></h1>
            <p className="">If you value our reporting about the Asian tech scene, help us ensure it continues.</p>
            <a href="/subscription"><Button className="primarybtn" type="button">Subscribe today</Button></a>
          </div>
        </div>
        <Grid>
          {newsDisplay && newsDisplay.map((post) => {
            return (
              <SingleNews post={post}/>
            )
          })}
        </Grid>
      </div>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return {
    getNews: function (params) {
      dispatch(getNews(params))
    }
  }
}

function mapStateToProps (state) {
  console.log('THE STATE', state);
  return {
    news: state.news,
    pageNumber: state.news.pageNumber
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsComponent);
