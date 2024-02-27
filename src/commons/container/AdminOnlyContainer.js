import React, { useContext } from 'react';
import UserContext from '../../member/modules/UserContext';
import loadable from '@loadable/component'; //지연로딩

const UnAuthorized = loadable(() => import('../pages/UnAuthorized'));

const AdminOnlyContainer = ({ children }) => {
  const {
    state: { isAdmin },
  } = useContext(UserContext);

  return isAdmin ? children : <UnAuthorized />;
};

export default React.memo(AdminOnlyContainer);
