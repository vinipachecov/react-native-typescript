import React, {
  FunctionComponentElement,
  FunctionComponent,
  Component,
} from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

type ButtonProps = {
  children: string;
  onPress: function(event: GestureResponderEvent): void;
};

export default function Button({children, onPress}: ButtonProps) {
  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
}
