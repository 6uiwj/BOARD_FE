import React, { useContext } from 'react';
import LoginContainer from '../../member/containers/LoginContainer';
import UserContext from '../../member/modules/UserContext';

/**
 * 회원 전용페이지 컨테이너
 *  - 미로그인 상태 -> 로그인 화면
 *  - 로그인 상태 -> 원래 페이지
 */
const MemberOnlyContainer = ({ children }) => {
  const {
    state: { isLogin },
  } = useContext(UserContext);

  return isLogin ? children : <LoginContainer />;
};

export default React.memo(MemberOnlyContainer);
