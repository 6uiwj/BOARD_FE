import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import { produce } from 'immer';

const LoginContainer = () => {
  const [form, setForm] = useState({});

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => (draft[e.target.name] = e.target.value.trim())),
      ),
    [],
  );
  //  기존객체를 가지고 새로운 객체를 만들필요 없이 기존객체를 가지고..변경..?

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
  return <LoginForm onChange={onSubmit} form={form} />;
};

export default React.memo(LoginContainer);
