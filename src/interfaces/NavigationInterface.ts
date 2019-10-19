import {NavigationAction} from 'react-navigation';

export interface Navigationinterface {
  navigation: {
    actions: Function;
    addListener: Function;
    goBack: Function;
    navigate: Function;
    state: {
      key: string;
      routeName: string;
      params: any;
    };
  };
}
