import React from 'react';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaUserPlus } from 'react-icons/fa';
import { FiLogIn, FiSearch } from 'react-icons/fi';
import classNames from 'classnames';
import logo from '../../images/logo.png';
import color from '../../styles/color';

const { primary, secondary, dark } = color;

const HeaderBox = styled.header`
  background: #fff;
  height: 115px;

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
      a {
        margin-left: 15px;
      }

      .icon {
        font-size: 2.25rem;
        color: ${secondary};
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
          <NavLink
            to="/member/login"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <FiLogIn className="icon" />
          </NavLink>
          <NavLink
            to="/member/join"
            className={({ isActive }) => classNames({ on: isActive })}
          >
            <FaUserPlus className="icon" />
          </NavLink>
        </div>
      </div>
    </HeaderBox>
  );
};

export default React.memo(Header);
