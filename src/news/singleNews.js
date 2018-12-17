import React, { Component } from 'react';
import { Row , Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './singleNews.css';
var moment = require('moment');

class SingleNews extends Component {

  render() {
    const { title , author , excerpt, date_gmt, read_time, featured_image, seo } = this.props.post;
    let singlePostItem = this.props.post;
    const thumbnail = (
      (seo && seo.image) ||
      (featured_image && featured_image.source) ||
      (featured_image && featured_image.attachment_meta.sizes.medium && featured_image.attachment_meta.sizes.medium.url) ||
      (featured_image && featured_image.attachment_meta.sizes.thumbnail && featured_image.attachment_meta.sizes.thumbnail.url) ||
      (featured_image && featured_image.attachment_meta.sizes.large && featured_image.attachment_meta.sizes.large.url)
    )
    const mobileThumbnail = (
      (featured_image && featured_image.attachment_meta.sizes.thumbnail && featured_image.attachment_meta.sizes.thumbnail.url) ||
      (seo && seo.image) ||
      (featured_image && featured_image && featured_image.source) ||
      (featured_image && featured_image.attachment_meta.sizes.medium && featured_image.attachment_meta.sizes.medium.url) ||
      (featured_image && featured_image.attachment_meta.sizes.large && featured_image.attachment_meta.sizes.large.url)
    )
    const mobileView = window.innerWidth < 500;

    return (
      <Row>
        <div className="post-item">
          <Col className="image" xs={6} md={4}>
            {mobileView ? <img src={mobileThumbnail} alt={title + ' image'}/> : <img src={thumbnail} alt={title + ' image'}/>}
          </Col>
          <Col xs={12} md={8}>
            <div className="body">
              <h2 className="title"><Link to={{ pathname: "/newsdetail", state: singlePostItem }} >{title}</Link></h2>
              <div className="excerpt"><Link to={{ pathname: "/newsdetail", state: singlePostItem }} >{excerpt}</Link></div>
              <div className="container">
                <a>
                  <img src={author.avatar_url}/>
                  {author.display_name} .
                </a> {moment(date_gmt).fromNow()} . {read_time} min read
              </div>
            </div>
          </Col>
        </div>
      </Row>
    );
  }

}

export default SingleNews;
