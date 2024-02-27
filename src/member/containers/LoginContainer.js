import React, { useState, useCallback, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import { produce } from 'immer';
// import UserContext from '../modules/UserContext';
// import { UserConsumer } from '../modules/UserContext'; //
import { apiLogin, updateMemberInfo } from '../apis/apiLogin';
import cookies from 'react-cookies';
import { useNavigate, useSearchParams } from 'react-router-dom';
import UserContext from '../modules/UserContext';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  // const {
  //   state : {isLogin},
  //   actions : { setIsLogin},
  // } = useContext(UserContext);

  // const value = useContext(UserContext);
  // console.log(value);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectURL = searchParams.get('redirectURL') || '/';

  const userContext = useContext(UserContext);

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => {
          draft[e.target.name] = e.target.value.trim();
        }),
      ),
    [],
  );
  //  기존객체를 가지고 새로운 객체를 만들필요 없이 기존객체를 가지고..변경..?

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); //기본기능 차단

      /* 필수 입력 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
      };
      /* 필수 입력 항목 E */

      // 검증 실패시 메시지
      const _errors = {};
      let hasErrors = false;

      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];
        if (!form[key] || !form[key].trim()) {
          _errors[key].push(value);
          hasErrors = true;
        }
      }

      setErrors(_errors);

      if (hasErrors) {
        return;
      }

      apiLogin(form)
        .then((token) => {
          cookies.save('token', token, {
            path: '/',
          });

          updateMemberInfo(userContext); // 회원정보, 로그인 상태, 관리자 여부 업데이트

          navigate(redirectURL);
        })
        .catch((err) => {
          _errors.global = _errors.global || [];
          _errors.global.push(err.messages);
          setErrors({ ..._errors });
        });
    },
    [form, t, navigate, redirectURL, userContext],
  );

  return (
    <>
      <LoginForm
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />

      {/* <UserConsumer>
        {({ state, actions }) => (
          <>
            <div>로그인 상태 : {state.isLogin ? '로그인' : '미로그인'}</div>
            <button
              type="button"
              onClick={() => actions.setIsLogin(!state.isLogin)}
            >
              변경
            </button>
          </>
        )}
      </UserConsumer> */}
      {/* 
      <UserContext.Consumer>
        {/* //값을 담고 있는 value 값이 넘어옴 */}
      {/* 컨슈머랑 컨테이너에서 함수형태로 넘어옴? value 계속 쓰기 귀찮으니까 비구조할당으로....넣어줌 */}
      {/* 값을 바꾸기 위해 provide 사용 */}
      {/* {({value}) => ( */}
      {/*
      {({ isLogin, userInfo }) => (
        <>
          <div>Login: {isLogin}</div>
          <div>email: {userInfo.email}</div>
        </>
      )}
       </UserContext.Consumer> */}

      {/* <div>로그인: {isLogin ? "로그인" : "미로그인"}</div>
       <button type="button" onClick={() => setIsLogin(!isLogin)}>
       확인
       </button> */}
    </>
  );
};

export default React.memo(LoginContainer);
