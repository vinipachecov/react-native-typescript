import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';
import './rn-addons';

import {loadStories} from './storyLoader';

configure(() => {
  loadStories();
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
