import { createStackNavigator } from 'react-navigation-stack';
import A from '../screens/A';
import B from '../screens/B';
import { Routes } from './Routes';
import C from '../screens/C';

const stack = createStackNavigator(
  {
    A: {
      path: Routes.A,
      screen: A,
    },
    B: {
      path: Routes.B,
      screen: B,
    },
    C: {
      path: Routes.C,
      screen: C,
      navigationOptions: () => ({
        title: 'Screen C',
      }),
    },
  },
  {
    headerMode: 'screen',
  },
);

export default stack;
