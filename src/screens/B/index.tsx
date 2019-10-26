import React from 'react';
import {Container, CenterView, Button} from '../../styles/styled/common';
import {Text} from 'react-native';
import {Routes} from '../../Navigation/Routes';
import {useNavigation} from 'react-navigation-hooks';

export default function B() {
  const {navigate} = useNavigation();

  function navigateToScreenA() {
    navigate(Routes.A);
    console.log('navigating to screen A');
  }
  return (
    <Container>
      <CenterView>
        <Text>Tela B</Text>
        <Text>Agora um texto mucho loco</Text>
        <Button
          title={'Mudar para tela A'}
          onPress={() => navigateToScreenA()}
        />
      </CenterView>
    </Container>
  );
}
