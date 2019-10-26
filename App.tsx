/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainerComponent} from 'react-navigation';
import Root from './App/Navigation';
import store from './App/redux/store';
import NavigationService from './App/Navigation/NavigationService';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <Root
          ref={(navigator: NavigationContainerComponent) => {
            NavigationService.setTopLevelNavigator(navigator);
          }}
        />
      </Provider>
    </>
  );
};

export default App;
// export default from './storybook';
