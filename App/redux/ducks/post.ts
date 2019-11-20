import { Interface } from 'readline';

export const PostTypes = {
  GET_LIST: 'get/POSTS',
  ADD: 'add/POST',
  REMOVE: 'remove/POST',
};

export function addPost(payload: string): PostActions {
  return {
    type: PostTypes.ADD,
    payload,
  };
}
interface addPostAction {
  type: string;
  payload: string;
}

export function removePost(payload: string): PostActions {
  return {
    type: PostTypes.REMOVE,
    payload,
  };
}
interface removePostAction {
  type: string;
  payload: string;
}

interface getPostsAction {
  type: string;
}
export const getPosts = (): getPostsAction => ({
  type: PostTypes.GET_LIST,
});

const initialState: PostState = {
  postList: [],
};

export interface PostState {
  postList: string[];
}

export interface withPostsActions {
  getPosts: () => getPostsAction;
  addPost: (payload: string) => addPostAction;
  removePost: (payload: string) => removePostAction;
}

export interface withPostProps {
  posts: PostState;
}

type PostActions = addPostAction | removePostAction;

export default function(state = initialState, action: PostActions): PostState {
  switch (action.type) {
    case PostTypes.ADD:
      return { ...state, postList: [...state.postList, action.payload] };
    case PostTypes.REMOVE:
      return { ...state, postList: [...state.postList, action.payload] };
    default:
      return state;
  }
}
