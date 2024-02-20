import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import JoinContainer from '../containers/JoinContainer';
import { MainTitle } from '../../commons/components/TitleStyle';
import { ShadowBox } from '../../commons/components/ContentBoxStyle';

const JoinPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        {/* 교체가 되는 부분 */}
        <title>{t('회원가입')}</title>
      </Helmet>
      <ShadowBox>
        <MainTitle>{t('회원가입')}</MainTitle>
        <JoinContainer />
      </ShadowBox>
    </>
  );
};

export default React.memo(JoinPage);
