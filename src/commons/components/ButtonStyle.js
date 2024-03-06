import styled, { css } from 'styled-components';
import { fontsize, buttonSize } from '../../styles/size';
import color from '../../styles/color';

const { small, normal, medium, big } = buttonSize;

const commonStyle = css`
  width: ${({ width }) => width || '100%'};
  background: ${({ bcolor }) => color[bcolor] || bcolor};
  color: ${({ fcolor }) => color[fcolor] || fcolor};
  border: 0;
  cursor: pointer;
  border-radius: 5px;
`;

export const SmallButton = styled.button`
  min-width: ${small.width}px;
  height: ${small.height}px;
  font-size: ${({ size }) => fontsize[size] || fontsize.small}rem;
  ${commonStyle}
`;

export const NormalButton = styled.button`
  min-width: ${normal.width}px;
  height: ${normal.height}px;
  font-size: ${({ size }) => fontsize[size] || fontsize.normal}rem;
  ${commonStyle}
`;

export const MediumButton = styled.button`
  min-width: ${medium.width}px;
  height: ${medium.height}px;
  font-size: ${({ size }) => fontsize[size] || fontsize.medium}rem;
  ${commonStyle}
`;

export const BigButton = styled.button`
  min-width: ${big.width}px;
  height: ${big.height}px;
  font-size: ${({ size }) => fontsize[size] || fontsize.big}rem;
  ${commonStyle}
`;
