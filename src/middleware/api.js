const apiRoot = 'https://www.techinasia.com';

export default store => next => (action) => {
  console.log('action is', action);
  return next(action);
}
