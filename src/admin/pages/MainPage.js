import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import AdminOnlyContainer from '../../commons/container/AdminOnlyContainer';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('사이트_관리')}</title>
      </Helmet>
      <AdminOnlyContainer>
        <h1>관리자페이지....</h1>
      </AdminOnlyContainer>
    </>
  );
};

export default React.memo(MainPage);
