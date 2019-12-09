import { all, takeLeading } from 'redux-saga/effects';
import { postTypes } from '../ducks/post';
import * as PostSagas from './posts';

export default function* rootSaga() {
  yield all([
    takeLeading(postTypes.GET_POST_LIST_REQUEST, PostSagas.getPostsSaga),
  ]);
}
