import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import BoardConfigContainer from '../containers/BoardConfigContainer';
import { MainTitle } from '../../../commons/components/TitleStyle';

const BoardAddPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('게시판_등록')}</title>
      </Helmet>
      <MainTitle>{t('게시판_등록')}</MainTitle>
      <BoardConfigContainer mode="add" />
    </>
  );
};

export default React.memo(BoardAddPage);
