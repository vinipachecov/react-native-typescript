import React from 'react';
import {Container, CenterView, Button} from '../../styles/styled/common';
import {Text} from 'react-native';
import {Routes} from '../../Navigation/Routes';
import {Navigationinterface} from '../../interfaces/NavigationInterface';

export default function B({navigation}: Navigationinterface) {
  function navigateToScreenA() {
    navigation.navigate(Routes.A);
    console.log('navigating to screen A');
  }
  return (
    <Container>
      <CenterView>
        <Text>Tela B</Text>
        <Button
          title={'Mudar para tela A'}
          onPress={() => navigateToScreenA()}
        />
      </CenterView>
    </Container>
  );
}
