import React from 'react';
import {storiesOf} from '@storybook/react-native';

import {DesignIcon} from './Icon';
import CenterView from '../CenterView';

storiesOf('Icon', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Rocket Icon', () => <DesignIcon name="rocket" />);
