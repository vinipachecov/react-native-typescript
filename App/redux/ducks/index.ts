import { combineReducers } from 'redux';
import { reducer as posts } from './post';

export default combineReducers({
  posts,
});
