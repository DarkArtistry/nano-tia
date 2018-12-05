import React, { Component } from 'react';
import './singleNews.css';

class SingleNews extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.post.title,
      author: props.post.author,
      exerpt: props.post.exerpt,
      date_gmt: props.post.date_gmt,
      read_time: props.post.read_time,
      featured_image: props.post.featured_image,
    };
  }

  render() {
    const { title , author , exerpt, date_gmt, read_time, featured_image } = this.state;
    console.log('featured_image', featured_image);
    const thumbnail = (
      (featured_image.attachment_meta.sizes.thumbnail && featured_image.attachment_meta.sizes.thumbnail.url) ||
      (featured_image.attachment_meta.sizes.medium && featured_image.attachment_meta.sizes.medium.url) ||
      (featured_image.attachment_meta.sizes.large && featured_image.attachment_meta.sizes.large.url) ||
      featured_image.source
    )
    return (
      <div className="post-item">
        <div className="image">
          <img src={thumbnail} />
        </div>
      </div>
    );
  }

}

export default SingleNews;
