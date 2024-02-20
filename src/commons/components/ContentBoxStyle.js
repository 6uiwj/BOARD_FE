import styled from 'styled-components';
import color from '../../styles/color';

const { dark } = color;

export const ShadowBox = styled.section`
  width: ${({ width }) => (width ? width : 1000)}px;
  // width가 없으면 1000px 로 고정
  // 스타일컴포넌트에서 함수를 정의하면 첫번째 매개변수는 props이다.
  margin: 50px auto;
  background: #fff;
  padding: 60px 50px;
  border-radius: 30px;
  box-shadow: 3px 3px 10px ${dark};
`;
