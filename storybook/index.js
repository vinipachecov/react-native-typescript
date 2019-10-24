import {AppRegistry} from 'react-native';
import {getStorybookUI, configure} from '@storybook/react-native';

// import './config';
import './rn-addons';

// import stories
configure(() => {
  require('../src/components');
}, module);

const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
