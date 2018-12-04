import { combineReducers } from 'redux';
import news from './news';

const allReducers = combineReducers({
  news,
});

export default allReducers;
