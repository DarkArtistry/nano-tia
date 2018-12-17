import React, { Component, Fragment } from 'react';
import { Grid, Row , Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { plusNewsViewed } from '../actions'
import './newsDetail.css';
var moment = require('moment');

class NewsDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paywalled: false
    };
  }

  componentDidMount () {
    // NOTE: +1 to newsViewed
    // window.addEventListener('scroll', this.handleScroll)
    let { news } = this.props;
    if (news.newsViewed && news.newsViewed >= 5) {
      this.setState({
        paywalled: true
      });
    }
    this.props.plusNewsViewed();
  }

  render() {
    const { title , author, date_gmt, read_time, content } = this.props.history.location.state;
    const { paywalled } = this.state;
    // const articleLength = document.body.scrollHeight;
    // console.log(articleLength);
    return (
      <div>
        <Grid>
          <Col xs={12} md={8}>
            <div className="container2">
              <a>
                <img src={author && author.avatar_url} alt={title + ' image'}/>
                {author && author.display_name} .
              </a> {moment(date_gmt).fromNow()} . {read_time} min read
              <h1>
                {title}
              </h1>
            </div>
          </Col>
          <Col xs={12} md={8}>
            { paywalled &&
                <div>
                  <div className="paywalled">
                    <div className="article">
                      {ReactHtmlParser(content)}
                    </div>
                  </div>
                </div>
            }
            { !paywalled &&
              <div>
                <div className="article">
                  {ReactHtmlParser(content)}
                </div>
              </div>
            }
          </Col>
        </Grid>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    plusNewsViewed: function (params) {
      dispatch(plusNewsViewed(params))
    }
  }
}

function mapStateToProps (state) {
  return {
    news: state.news,
    newsViewed: state.newsViewed
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
