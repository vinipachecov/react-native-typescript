import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Home } from '../screens/StackB/Home';
import { ExportData } from '../screens/StackB/ExportData';
import { Reports } from '../screens/StackB/Reports';
import React from 'react';
import { View, Text } from 'react-native';
import { RowView } from '../styles/styled/common';
import Button from '../components/Button';
import { Routes } from './Routes';

const BottomNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Reports: Reports,
});

export const StackB = createStackNavigator(
  {
    Home: {
      screen: BottomNavigator,
      navigationOptions: {
        header: null,
      },
    },
    ExportData,
  },
  {
    headerMode: 'screen',
  },
);
