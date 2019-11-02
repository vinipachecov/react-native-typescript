import React from 'react';
import { Container, CenterView, Button } from '../../styles/styled/common';
import { Text } from 'react-native';
import { Routes } from '../../Navigation/Routes';
import NavigationService from '../../Navigation/NavigationService';
import withTodos from '../../containers/todos';
import { ScreenAprops } from '../../interfaces/ScreenProps';
import Env from '../../../env';

export function A(props: ScreenAprops) {
  console.log(Env.DB);
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

export default withTodos(A);
