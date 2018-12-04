const GET_NEWS_REQUEST = 'GET_NEWS_REQUEST';
const GET_NEWS_SUCCESS = 'GET_NEWS_SUCCESS';

export function getNews () {
  console.log('action file 1');
    return {
    type: GET_NEWS_REQUEST
  }
}
