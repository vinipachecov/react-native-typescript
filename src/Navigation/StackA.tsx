import {createSwitchNavigator} from 'react-navigation';
import A from '../screens/A';
import B from '../screens/B';
import {Routes} from './Routes';

const stack = createSwitchNavigator({
  A: {
    path: Routes.A,
    screen: A,
  },
  B: {
    path: Routes.B,
    screen: B,
  },
});

export default stack;
