import React from 'react';
import {Container, CenterView, Button} from '../../styles/styled/common';
import {Text} from 'react-native';
import {Navigationinterface} from '../../interfaces/NavigationInterface';
import {Routes} from '../../Navigation/Routes';

export default function A({navigation}: Navigationinterface) {
  function navigateToScreenB() {
    navigation.navigate(Routes.B);
    console.log('navigating to screen B');
  }
  return (
    <Container>
      <CenterView>
        <Text>Tela A</Text>
        <Button
          title={'Mudar para tela B'}
          onPress={() => navigateToScreenB()}
        />
      </CenterView>
    </Container>
  );
}
