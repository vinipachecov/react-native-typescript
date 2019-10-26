import React from 'react';
import {Container, CenterView, Button} from '../../styles/styled/common';
import {Text} from 'react-native';
import {Routes} from '../../Navigation/Routes';
import {useNavigation} from 'react-navigation-hooks';
import NavigationService from '../../Navigation/NavigationService';

export default function A() {
  const {navigate} = useNavigation();

  function navigateToScreenB() {
    NavigationService.navigate(Routes.B, {});
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
