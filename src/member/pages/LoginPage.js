import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import LoginContainer from '../containers/LoginContainer';

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('로그인')}</title>
      </Helmet>
      {/* 전역 상태값 변경  */}
      {/* 첫번째 중괄호: jsx문법인식 / 두번쨰중괄호 : 값
      <UserContext.Provider
        value={{ userInfo: { email: 'user02@text.org', name: '사용자02' } }}
      >
        <LoginContainer />
      </UserContext.Provider> */}
    </>
  );
};

export default React.memo(LoginPage);
