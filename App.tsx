/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainerComponent} from 'react-navigation';
import Root from './src/Navigation';
import NavigationService from './src/Navigation/NavigationService';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Root
        ref={(navigator: NavigationContainerComponent) => {
          NavigationService.setTopLevelNavigator(navigator);
        }}
      />
    </>
  );
};

export default App;
// export default from './storybook';
