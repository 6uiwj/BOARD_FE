import React from 'react';
import MemberOnlyContainer from '../../commons/container/MemberOnlyContainer';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('마이페이지')}</title>
      </Helmet>
      <MemberOnlyContainer>
        <h1>마이페이지</h1>
      </MemberOnlyContainer>
    </>
  );
};

export default React.memo(MainPage);
