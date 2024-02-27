import React from 'react';
import classNames from 'classnames';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import { FiUsers, FiEdit } from 'react-icons/fi';

const AsideBox = styled.aside`
  a {
    display: block;
    padding: 30px 10px;
    text-align: center;
    font-size: 1.35rem;
    font-weight: 700;
    background: #ccc;
    line-height: 1;

    &:hover,
    &.on {
      backgroung: #212121;
      color: #fff;
    }

    // 첫번째 것만 빼고 경계선 주기
    a + a {
      border-top: 1px solid #212121;
    }

    svg {
      vertical-align: middle;
      margin-right: 5px;
    }
  }
`;

const Side = () => {
  const { t } = useTranslation();
  return (
    <AsideBox>
      <NavLink
        to="/admin/config"
        classNames={({ isActive }) => classNames({ on: isActive })}
      >
        <HiOutlineCog6Tooth />
        {t('기본설정')}
      </NavLink>
      <NavLink
        to="/admin/member"
        classNames={({ isActive }) => classNames({ on: isActive })}
      >
        <FiUsers />
        {t('회원관리')}
      </NavLink>
      <NavLink
        to="/admin/board"
        classNames={({ isActive }) => classNames({ on: isActive })}
      >
        {t('게시판_관리')}
        <FiUsers />
      </NavLink>
    </AsideBox>
  );
};

export default React.memo(Side);
