import axios from 'axios';
import {tiahost} from '../core/utils';

const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

const PLUS_NEWS_VIEWED = 'PLUS_NEWS_VIEWED';

export function getNews () {
  return async (dispatch) => {
    dispatch({
      type: GET_NEWS_REQUEST,
    });
    let allPost = await axios.get(`${tiahost}/wp-json/techinasia/2.0/posts`);
    console.log('allPost', allPost);
    dispatch({
      type: GET_NEWS_SUCCESS,
      news: allPost.data.posts,
    });
    console.log('ok done with actions');
  }
}

export function plusNewsViewed () {
  return async (dispatch) => {
    dispatch({
      type: PLUS_NEWS_VIEWED,
    });
    console.log('ok done with actions');
  }
}
