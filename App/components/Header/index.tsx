import React from 'react';
import { StyledSafeAreaView, RowView } from '../../styles/styled/common';

export const Header = ({ Left, Right, Center }) => {
  return (
    <StyledSafeAreaView>
      <RowView justifyContent="space-between">
        <RowView>{Left && Left}</RowView>
        <RowView position="absolute" width="100%" justifyContent="center">
          {Center && Center}
        </RowView>
        <RowView>{Right && Right}</RowView>
      </RowView>
    </StyledSafeAreaView>
  );
};
