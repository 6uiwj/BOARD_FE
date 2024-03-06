import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

const BoardListPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('게시판_목록')}</title>
      </Helmet>
    </>
  );
};

export default React.memo(BoardListPage);
