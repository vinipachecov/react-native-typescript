import { PostState, withPostsActions } from '../redux/ducks/post';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface ScreenAprops {
  posts: PostState;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface ScreenBprops {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface ScreenCprops extends withPostsActions {
  posts: PostState;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export type ScreenDefaultProps = ScreenAprops | ScreenBprops;
