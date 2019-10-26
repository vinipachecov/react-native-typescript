import {TodoState} from '../redux/ducks/todos';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {ReactNode} from 'react';

export interface AppProps {
  todos: TodoState;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  children: ReactNode;
}
