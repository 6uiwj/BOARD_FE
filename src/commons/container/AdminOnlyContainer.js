import React, { useContext, useEffect } from 'react';
import UserContext from '../../member/modules/UserContext';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const AdminOnlyContainer = ({ children }) => {
  const {
    state: { isAdmin },
  } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAdmin) navigate(-1);
  }, [isAdmin, navigate]);

  return children;
};

export default React.memo(AdminOnlyContainer);
