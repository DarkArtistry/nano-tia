
const news = (state = { news: [], newsViewed: 0 }, action) => {

  // console.log('reducer1', action.type, state, 'ACTION', action );
  switch (action.type) {
    case 'GET_NEWS_REQUEST':
      return {
        ...state,
        isFetching: true,
      }
      break;
    case 'GET_NEWS_SUCCESS':
    let currentData = state.data || [];
    return {
      ...state,
      data: [...currentData,...action.response.data.posts],
      pageNumber: action.response.data.current_page,
      isFetching: false,
    }
    // NOTE: not done to handle last page/ last post
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
