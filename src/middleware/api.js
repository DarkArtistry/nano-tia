import axios from 'axios';
import { tiahost } from '../core/utils';

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

function callApi(store, endpoint, method, data) {
  switch (method) {
    case 'get':
      let data = axios.get(`${tiahost}/${endpoint}`);
      return data
      break;
    default:

  }
}

export default store => next => (action) => {
  console.log('action IN API MIDDLEWARE is', action);

  const callAPI = action[CALL_API]
  // console.log('thus callAPI is ...', callAPI)
  if (typeof callAPI === 'undefined') {
    return next({ type: action })
  }
  const { method, types } = action;
  // NOTE: not done to find out how to generalize success and failure response
  // NOTE: we fire off the request state to the reducer first to set isFetching to true. and then fire off the callAPI
  next({ type: types[0] })
  return callApi(store, callAPI, method).then(
    response => next({
      response,
      type: types[1],
    }), error => next({
      error: (error && error.message) || 'Something bad happened',
      type: types[2]
    })
  )
}
