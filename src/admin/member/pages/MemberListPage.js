import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const MemberListPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('회원목록')}</title>
      </Helmet>
    </>
  );
};

export default React.memo(MemberListPage);
