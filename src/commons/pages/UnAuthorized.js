import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const UnAuthorized = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('페이지_접근권한_없음')}</title>
      </Helmet>
      <h1>{t('페이지_접근권한_없음')}</h1>
    </>
  );
};

export default React.memo(UnAuthorized);
