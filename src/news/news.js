import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import './news.css';
import SingleNews from './singleNews';

class NewsComponent extends Component {

  render() {
    const { news } = this.props;
    console.log('NEWS', news);
    return (
      <div>
        <div className="splash-subscribe">
          <div className="splash-subscribe-inner">
            <h1 className="">You look like <span className="nowidow">someone who</span> <span className="nowidow">appreciates quality journalism.</span></h1>
            <p className="">If you value our reporting about the Asian tech scene, help us ensure it continues.</p>
            <a href="/subscription"><Button className="primarybtn" type="button">Subscribe today</Button></a>
          </div>
        </div>
        {news && news.data && news.data.map((post) => {
          return (
              <SingleNews post={post}/>
          )
        })}
      </div>
    );
  }

}

function mapDispatchToProps (dispatch) {
  return {
  }
}

function mapStateToProps (state) {
  return { news: state.news }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsComponent);
