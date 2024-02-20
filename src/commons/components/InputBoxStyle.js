import styled, { css } from 'styled-components';
import { fontsize } from '../../styles/size';
const { medium } = fontsize;

const commonStyle = css`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: ${medium}rem;
  width: 100%;
`;

// 한줄 텍스트 일 때
export const InputText = styled.input`
  ${commonStyle}
  height: 45px;
  padding: 0 10px;

  & + & {
    margin-top: 5px;
  }
`;

export const Textarea = styled.textarea`
  ${commonStyle}
  padding: 10px;
  min-height: 150px;
  resize: none;
`;
