import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const BasicConfigPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('기본설정')}</title>
      </Helmet>
    </>
  );
};

export default React.memo(BasicConfigPage);
