import React, { Component, Fragment } from 'react';
import { Grid, Row , Col } from 'react-bootstrap';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './newsDetail.css';
var moment = require('moment');

class NewsDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.history.location && props.history.location.state && props.history.location.state.title,
      author: props.history.location && props.history.location.state && props.history.location.state.author,
      excerpt: props.history.location && props.history.location.state && props.history.location.state.excerpt,
      date_gmt: props.history.location && props.history.location.state && props.history.location.state.date_gmt,
      read_time: props.history.location && props.history.location.state && props.history.location.state.read_time,
      featured_image: props.history.location && props.history.location.state && props.history.location.state.featured_image,
      content: props.history.location && props.history.location.state && props.history.location.state.content,
    };
  }

  render() {
    const { title , author, date_gmt, read_time, content } = this.state;
    return (
      <div>
        <Grid>
          <Col xs={12} md={8}>
            <div className="container2">
              <a>
                <img src={author && author.avatar_url} alt="animage"/>
                {author && author.display_name} .
              </a> {moment(date_gmt).fromNow()} . {read_time} min read
              <h1>
                {title}
              </h1>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div>
              {ReactHtmlParser(content)}
            </div>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default NewsDetail;
