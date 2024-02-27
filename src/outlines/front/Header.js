import React, { useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUserPlus } from 'react-icons/fa';
import { FiLogIn, FiSearch, FiLogOut } from 'react-icons/fi';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import classNames from 'classnames';
import UserContext from '../../member/modules/UserContext';
import logo from '../../images/logo.png';
import color from '../../styles/color';
import { fontsize } from '../../styles/size';
import { logout } from '../../member/apis/apiLogin';

const { primary, secondary, dark } = color;
const { medium } = fontsize;

const HeaderBox = styled.header`
  background: #fff;

  .layout-width {
    display: flex;
    align-items: center;
    height: 115px;

    .logo,
    form,
    .links {
      flex-grow: 1;
      width: 0;
    }

    form {
      text-align: center;
      display: flex;

      button {
        background: ${dark};
        border: 0;
        color: #fff;
        width: 60px;
        height: 60px;

        svg {
          color: #fff;
          font-size: 2.25rem;
        }
      }

      input[type='text'] {
        flex-grow: 1;
        height: 60px;
        border: 2px solid ${dark};
        padding: 0 15px;
      }
    }

    .links {
      text-align: right;

      a,
      span {
        margin-left: 15px;
        fort-size: ${medium}rem;
        line-height: 1;
        cursor: pointer;
      }

      .icon {
        font-size: 2.25rem;
        color: ${secondary};
        vertical-align: middle;
      }

      .on {
        .icon {
          color: ${primary};
        }
      }
    }
  }
`;

const Header = () => {
  const { t } = useTranslation();

  const context = useContext(UserContext);
  const {
    state: { isLogin, isAdmin },
  } = context;
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    logout(context);
    navigate('/member/login');
  }, [navigate, context]);

  return (
    <HeaderBox>
      <div className="layout-width">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <form>
          <input type="text" name="skey" placeholder={t('검색어_입력')} />
          <button type="submit">
            <FiSearch />
          </button>
        </form>

        <div className="links">
          {/* 로그인 상태일때 */}
          {isLogin ? (
            <>
              <span onClick={onLogout}>
                <FiLogOut className="icon" /> {t('로그아웃')}
              </span>
              <NavLink
                to="/mypage"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                {t('마이페이지')}
              </NavLink>

              {isAdmin && (
                <NavLink
                  to="/member/login"
                  className={({ isActive }) => classNames({ on: isActive })}
                >
                  <HiOutlineCog6Tooth className="icon" /> {t('사이트_관리')}
                </NavLink>
              )}
            </>
          ) : (
            <>
              <NavLink
                to="/member/login"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <FiLogIn className="icon" /> {t('로그인')}
              </NavLink>
              <NavLink
                to="/member/join"
                className={({ isActive }) => classNames({ on: isActive })}
              >
                <FaUserPlus className="icon" /> {t('회원가입')}
              </NavLink>
            </>
          )}
        </div>
      </div>
    </HeaderBox>
  );
};

export default React.memo(Header);
