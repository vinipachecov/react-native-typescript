import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

type IconProps = {
  name: string;
};

export function DesignIcon({name}: IconProps) {
  return <Icon name={name} size={30} color="#900" />;
}
