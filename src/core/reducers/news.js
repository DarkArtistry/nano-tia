
const news = (state = { news: []}, action) => {

  console.log('reducer1', action.type);
  switch (action.type) {
    case 'GET_NEWS_REQUEST':
      return {
        isFetching: true,
      }
      break;
    case 'GET_NEWS_SUCCESS':
    console.log('reducer result', action);
    return {
      ...state,
      data: action.news,
      isFetching: false,
    }
      break;
    default:
    return state
  }
}

export default news;
