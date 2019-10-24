/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const STORYBOOK_START = true;
export default STORYBOOK_START
  ? require('./storybook').default
  : require('./App').default;

AppRegistry.registerComponent(appName, () => App);
