import { ReactNode } from 'react';
import styled from 'styled-components/native';
import * as styledSystem from 'styled-system';

interface TextProps {
  textAlign?: string;
  fontSize?: number;
  fontWeight?: number;
  color?: string;
}
interface SpacingProps {
  height?: string | number;
  width?: string | number;
  p?: string;
  paddingTop?: number;
  paddingbottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  m?: number[] | string;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
}

interface PositionProps {
  position?: 'absolute' | 'relative';
  top?: string | number;
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
}

interface FlexProps {
  flex?: number;
  justifyContent?: string;
  alignItems?: string;
}
interface Borderprops {
  borderRadius?: number | string;
  borderWidth?: number | string;
  borderColor?: string;
  borderLeftWidth?: number;
}

interface StyledViewProps
  extends SpacingProps,
    FlexProps,
    Borderprops,
    PositionProps {
  children?: ReactNode | Element[];
  background?: string;
  overflow?: string;
}

export const StyledView = styled.View<StyledViewProps>`    
  ${styledSystem.width}
  ${styledSystem.height}  
  ${styledSystem.margin}
  ${styledSystem.position}
  ${styledSystem.marginRight}   
  ${styledSystem.marginBottom}
  ${styledSystem.marginLeft}
  ${styledSystem.marginTop}
  ${styledSystem.padding};
  ${styledSystem.paddingBottom}
  ${styledSystem.paddingRight}
  ${styledSystem.paddingTop}
  ${styledSystem.paddingLeft}
  ${styledSystem.flex}       
  ${styledSystem.justifyContent}   
  ${styledSystem.alignItems}     
  ${styledSystem.background}
  ${styledSystem.overflow}    
  ${({ borderLeftWidth }) => `border-left-width: ${borderLeftWidth}` || 0};
`;

export const StyledSafeAreaView = styled.SafeAreaView<StyledViewProps>`    
  ${styledSystem.width}
  ${styledSystem.height}  
  ${styledSystem.margin}
  ${styledSystem.marginRight}   
  ${styledSystem.marginBottom}
  ${styledSystem.marginLeft}
  ${styledSystem.marginTop}
  ${styledSystem.padding};
  ${styledSystem.paddingBottom}
  ${styledSystem.paddingRight}
  ${styledSystem.paddingTop}
  ${styledSystem.paddingLeft}
  ${styledSystem.justifyContent}   
  ${styledSystem.alignItems}     
  ${styledSystem.background}
  ${styledSystem.overflow}    
  ${({ borderLeftWidth }) => `border-left-width: ${borderLeftWidth}` || 0};
`;

export const StyledText = styled.Text<TextProps & SpacingProps>`
  ${styledSystem.fontSize}
  ${styledSystem.fontWeight}
  ${styledSystem.color}
`;
export const Container = styled(StyledView)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CenterView = styled(StyledView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const RowView = styled(StyledView)`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.Button`
  width: 100%;
  height: 60px;
  padding: 20px;
`;
