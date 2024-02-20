import styled from 'styled-components';
import color from '../../styles/color';
import { fontsize } from '../../styles/size';
const { dark } = color;
const { size } = fontsize;

const Message = styled.div`
  padding: 7px 15px;
  border-radius: 5px;
  color: ${({ color: c }) => color[c] || color.dark};
  box-shadow: 3px 3px 5px ${({ color: c }) => color[c] || dark};
  font-size: ${{ size }} => fontsize[size] || small}rem;
  margin-bottom: 3px;
`;

const MessageBox = ({ messages, children, color, size }) => {
  //chilren: 태그 사이에 있는 내용일 때(메시지 하나), messages:배열 형태일 때(메시지 여러개)? -> 처리는 통일성있게 하기 위해 children는 통합시킬 것임
  messages = messages || [];
  if (children) messages.push(children);

  return messages.map((m, i) => (
    <Message key={i} color={color} size={size}>
      {m}
    </Message>
  ));
};

export default MessageBox;
