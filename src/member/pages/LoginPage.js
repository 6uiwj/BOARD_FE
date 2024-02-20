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
      <LoginContainer />
    </>
  );
};

export default React.memo(LoginPage);
