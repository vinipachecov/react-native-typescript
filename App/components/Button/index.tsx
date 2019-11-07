import React, { FunctionComponentElement, ReactNode } from 'react';
import { GestureResponderEvent, TouchableOpacity } from 'react-native';

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
};

export default function Button({
  children,
  onPress,
}: ButtonProps): FunctionComponentElement<{}> {
  return (
    <TouchableOpacity onPress={() => onPress()}>{children}</TouchableOpacity>
  );
}
