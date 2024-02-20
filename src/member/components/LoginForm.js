import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; //페이지 이동에 필요한 링크
import { useTranslation } from 'react-i18next';
import { FiLock, FiKey, FiUserPlus } from 'react-icons/fi';
import { InputText } from '../../commons/components/InputBoxStyle';
import { MediumButton } from '../../commons/components/ButtonStyle';
import { fontsize } from '../../styles/size';
const { medium } = fontsize;

const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  height: calc(100%-315px);
  left: 0;
  top: 191px;

  .inner {
    width: 350px;

    h1 {
      text-align: center;
      color: ${medium};
      margin-bottom: 10px;
    }

    .links {
      display: flex;
      margin-top: 10px;
      padding: 15px 0;
      border: 1px solid #d5d5d5;
      border-left: 0;
      border-right: 0;
    }

    a {
      width: 0;
      flex-grow: 1;
      text-align: center;

      svg {
        vertical-align: middle;
      }
    }

    button {
      margin-top: 10px;
    }
  }
`;

const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <LoginBox>
      <div className="inner">
        <h1>{t('로그인')}</h1>
        <InputText type="text" name="eamil" placeholder={t('이메일')} />
        <InputText
          type="password"
          name="password"
          placeholder={t('비밀번호')}
        />

        <MediumButton type="submit" bcolor="primary" fcolor="#fff">
          {t('로그인')}
        </MediumButton>

        <div className="links">
          <Link to="/member/find_id">
            <FiLock /> {t('아이디_찾기')}
          </Link>

          <Link to="/member/find_pw">
            <FiKey /> {t('비밀번호_찾기')}
          </Link>

          <Link to="/member/join">
            <FiUserPlus />
            {t('회원가입')}
          </Link>
        </div>
      </div>
    </LoginBox>
  );
};

export default React.memo(LoginForm);
