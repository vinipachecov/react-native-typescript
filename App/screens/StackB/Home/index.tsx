import React from 'react';
import { StyledView, StyledText, RowView } from '../../../styles/styled/common';
import { Routes } from 'Navigation/Routes';
import { Header } from '../../../components/Header';

export const Home = props => {
  return (
    <StyledView>
      <Header
        Left={
          <StyledView>
            <StyledText>Esquerdo</StyledText>
          </StyledView>
        }
        Right={
          <RowView>
            <StyledText>Botão 1</StyledText>
          </RowView>
        }
        Center={
          <StyledView>
            <StyledText>Titulo muito extenso</StyledText>
          </StyledView>
        }
      />
    </StyledView>
  );
};
