import { CALL_API } from '../middleware/api';

const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';
const GET_NEWS_FAILURE = 'GET_NEWS_FAILURE';

const PLUS_NEWS_VIEWED = 'PLUS_NEWS_VIEWED';

export function newsActions (params, route) {
  return {
    getNews: {
      types: [GET_NEWS_REQUEST, GET_NEWS_SUCCESS, GET_NEWS_FAILURE],
      [CALL_API]: `/wp-json/techinasia/2.0/posts?page=${(params && params.pageNumber + 1) || 1}`,
      method: 'get'
    },
    plusNewsViewed: {
      types: [PLUS_NEWS_VIEWED]
    }
  }[route]
}
