import { PostI } from 'services/PostService';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const postTypes = {
  GET_POST_LIST_REQUEST: 'GET_POST_LIST_REQUEST',
  GET_POST_LIST_SUCCESS: 'GET_POST_LIST_SUCCESS',
};

const getPostListRequest = () => ({
  type: postTypes.GET_POST_LIST_REQUEST,
});

const getPostListSuccess = (posts: PostI[]) => ({
  type: postTypes.GET_POST_LIST_SUCCESS,
  posts,
});

export const postActions = {
  getPostListRequest,
  getPostListSuccess,
};

interface getPostsListRequestAction {
  type: string;
}
interface getPostsSucessAction {
  type: string;
  posts: PostI[];
}

export interface withPostsActions {
  getPostListRequest: () => getPostsListRequestAction;
  getPostListSuccess: (data: PostI[]) => getPostsSucessAction;
}

const initialState: ImmutableObject<PostState> = Immutable({
  postList: [],
});

export interface PostState {
  postList: PostI[];
}

export const reducer = createReducer(initialState, {
  [postTypes.GET_POST_LIST_SUCCESS]: (
    state: ImmutableObject<PostState>,
    { posts }: getPostsSucessAction,
  ) => state.update('postList', postList => [...posts, ...postList]),
});
