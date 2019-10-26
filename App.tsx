/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StatusBar} from 'react-native';
import Root from './src/Navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Root />
    </>
  );
};

export default App;
// export default from './storybook';
