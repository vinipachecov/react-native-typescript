import {configure} from '@storybook/react-native';
const req = require.context('../App/components', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}
configure(loadStories, module);
