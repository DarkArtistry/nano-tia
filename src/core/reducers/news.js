
const news = (state = { news: [], newsViewed: 0 }, action) => {

  console.log('reducer1', action.type, state );
  switch (action.type) {
    case 'GET_NEWS_REQUEST':
      return {
        ...state,
        isFetching: true,
      }
      break;
    case 'GET_NEWS_SUCCESS':
    return {
      ...state,
      data: action.news,
      isFetching: false,
    }
      break;
    case 'PLUS_NEWS_VIEWED':
      let newViewsCount = state.newsViewed ? state.newsViewed + 1 : 1;
      return {
        ...state,
        newsViewed: newViewsCount
      }
      break;
    default:
    return state
  }
}

export default news;
