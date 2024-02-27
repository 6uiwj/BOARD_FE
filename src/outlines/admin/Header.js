import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import logo from '../../images/logo.png';
import { Link, useNavigate } from 'react-router-dom'; //관리자로 링크 이동, 로그아웃 처리 후 로그인 페이지로 이동하기 위헤ㅐ
import { SmallButton } from '../../commons/components/ButtonStyle';
import { useTranslation } from 'react-i18next';
import UserContext from '../../member/modules/UserContext';
import { logout } from '../../member/apis/apiLogin';

const HeaderBox = styled.header`
  display: flox;
  justify-content: space-between; //좌우끝으로 배치
  align-items: center;
  height: 100px;
  padding: 0 20px; //좌우 패딩

  .links {
    button {
      margin-left: 5px;
    }
  }
`;
const Header = () => {
  const { t } = useTranslation();
  const context = useContext(UserContext);
  const { state: isLogin } = context; //로그인 상태
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    logout(context);
    navigate('/member/login?redirectURL=/admin'); //로그인하면 다시 관리지페이지로 이동
  }, [navigate, context]);

  return (
    <HeaderBox>
      <Link to="/admin" className="logo">
        <img src={logo} alt="logo" />
        {/* 링크쪽에 로고 추가 */}
      </Link>

      <div className="links">
        {/* 로그인 상태일 때에는 로그아웃 버튼 */}
        {isLogin ? (
          <>
            <SmallButton
              width="120px"
              bcolor="primary"
              color="#fff"
              onClick={onLogout}
            >
              {t('로그아웃')}
            </SmallButton>
          </>
        ) : (
          <>
            <Link to="/member/login">
              <SmallButton width="120px">{t('로그인')}</SmallButton>
            </Link>
            <Link to="/member/join">
              <SmallButton width="120px">{t('회원가입')}</SmallButton>
            </Link>
          </>
        )}

        <Link to="/">
          <SmallButton width="120px" bcolor="info" fcolor="#fff">
            {t('사이트_이동')}
          </SmallButton>
        </Link>
      </div>
    </HeaderBox>
  );
};

export default React.memo(Header);
