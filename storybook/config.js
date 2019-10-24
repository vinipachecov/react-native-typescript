import {configure} from '@storybook/react-native';
import 'babel-plugin-require-context-hook/register';
const req = require.context('../src/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
