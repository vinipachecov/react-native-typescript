import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainerComponent } from 'react-navigation';
import Root from './App/Navigation';
import { store, persistor } from './App/redux/store';
import NavigationService from './App/Navigation/NavigationService';
import { initFirebase } from './App/helpers/firebase';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  useEffect(() => {
    initFirebase();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root
            ref={(navigator: NavigationContainerComponent) => {
              NavigationService.setTopLevelNavigator(navigator);
            }}
          />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
