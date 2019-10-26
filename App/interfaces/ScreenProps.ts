import {TodoState} from '../redux/ducks/todos';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

export interface ScreenAprops {
  todos: TodoState;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export interface ScreenBprops {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

export type ScreenDefaultProps = ScreenAprops | ScreenBprops;
