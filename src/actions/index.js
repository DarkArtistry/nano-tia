import { CALL_API } from '../middleware/api';
import { newsActions } from './newsActions';

function fetchActionSection (section, route, params) {
  switch (section) {
    case 'news':
      let actionObject = newsActions(params, route)
      actionObject = actionObject.types.length > 1 ? actionObject : actionObject.types[0];
      return async (dispatch, getState) => {
        dispatch(actionObject)
      }
      break;
    default:

  }
}

export function getNews (params) {
  return fetchActionSection('news', 'getNews', params);
}

export function plusNewsViewed () {
  return fetchActionSection('news', 'plusNewsViewed');
}
