import { createStackNavigator } from 'react-navigation-stack';
import A from '../screens/A';
import B from '../screens/B';
import { Routes } from './Routes';
import C from '../screens/C';
import { StackB } from './StackB';

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
    D: {
      path: Routes.D,
      screen: StackB,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    headerMode: 'screen',
    initialRouteName: Routes.D,
  },
);

export default stack;
