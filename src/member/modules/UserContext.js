// 전역에서 값을 조회할 수 있는 수단
// 컴포넌트의 depth에 상관없이 하위 컴포넌트를 조회할 수 있게
import { createContext, useState } from 'react';
//useState: 상태값과 행위에 대한 항목...?
const UserContext = createContext({
  state: {
    //상태 값
    isLogin: false,
    isAdmin: false,
    userInfo: {},
  },
  actions: {
    //상태 변경 함수 (동적으로 처리하기 위해 ) -> provider(값제공), consumer(값조회)
    setIsLogin: null, //함수형태로 업데이트 해줄 것임
    setIsAdmin: null,
    setUserInfo: null,
  },
});

const UserProvider = ({ children }) => {
  //children: 태그안쪽 내용
  const [isLogin, setIsLogin] = useState(true); //true: 로그인상태
  const [isAdmin, setIsAdmin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const value = {
    state: { isLogin, isAdmin, userInfo }, //상태값: 읽기전용
    actions: { setIsLogin, setIsAdmin, setUserInfo },
  }; //태그 안쪽 내용 children 그대로 전달
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext; //조회 consumer을 userConsumer에 담음

export { UserProvider, UserConsumer }; //보내서 값을 제공하고 변경

export default UserContext;
