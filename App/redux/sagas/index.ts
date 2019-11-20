import { all, takeLeading } from 'redux-saga/effects';
import { PostTypes } from '../ducks/post';
import * as PostSagas from './posts';

export default function* rootSaga() {
  yield all([takeLeading(PostTypes.GET_LIST, PostSagas.getPostsSaga)]);
}
