import { PostState, withPostsActions } from '../redux/ducks/post';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import { ReactNode } from 'react';

export interface AppProps extends withPostsActions {
  posts: PostState;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  children: ReactNode;
}
