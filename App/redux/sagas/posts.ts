import { put, call } from 'redux-saga/effects';
import PostService, { PostI } from '../../services/PostService';
import { AxiosResponse } from 'axios';
import { postActions } from '../ducks/post';

export function* getPostsSaga() {
  try {
    const response: AxiosResponse<PostI[]> = yield call(PostService.getPosts);
    yield put(postActions.getPostListSuccess(response.data));
  } catch (error) {
    return new Error('Something went wrong');
  }
}
