import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getSubMenus } from '../../admin/menus';
import classNames from 'classnames';

const NavBox = styled.nav`
  box-shadow: 2px 2px 10px #212121;
  height: 50px;
  border-radius: 5px;
  margin-bottom: 30px;
  display: flex;

  a {
    padding: 0 20px;
    line-height: 50px;
    font-size: 1.25rem;
  }

  &.on {
    background: #212121;
    color: #fff;
  }
`;

const SubMenu = () => {
  const [items, setItems] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    setItems(getSubMenus());
  }, []);

  return (
    items &&
    items.length > 0 && (
      <NavBox>
        {items.map(({ url, name }) => (
          <NavLink
            key={url.replace(/\//g, '_')}
            to={url}
            className={({ isActive }) => classNames({ on: isActive })}
          >
            {t(name)}
          </NavLink>
        ))}
      </NavBox>
    )
  );
};

export default React.memo(SubMenu);
