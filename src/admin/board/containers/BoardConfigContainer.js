import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import BoardConfigForm from '../components/BoardConfigForm';

const BoardConfigContainer = ({ mode }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    mode,
    active: false,
    writeAuthority: 'ALL',
    listAuthority: 'ALL',
    viewAuthority: 'ALL',
    commentAuthority: 'ALL',
  });

  const [errors, setErrors] = useState({});

  const onChange = useCallback(
    (e) =>
      setForm((form) => ({ ...form, [e.target.name]: e.target.value.trim() })),
    [],
  );

  const onActive = useCallback(
    (active) => setForm((form) => ({ ...form, active })),
    [],
  );

  const onAuthority = useCallback(
    (mode, authority) =>
      setForm((form) => ({ ...form, [`${mode}Authority`]: authority })),
    [],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const required = {
        bid: t('게시판_아이디를_입력하세요'),
        bName: t('게시판_이름을_입력하세요.'),
      };

      const _errors = {};
      let hasErrors = false;
      for (const [key, value] of Object.entries(required)) {
        _errors[key] = _errors[key] || [];

        if (!form[key] || !form[key].trim()) {
          _errors[key].push(value);
          hasErrors = true;
        }
      }
      setErrors(_errors);
      if (hasErrors) {
        return;
      }
    },
    [t, form],
  );

  return (
    <BoardConfigForm
      form={form}
      onChange={onChange}
      onActive={onActive}
      onAuthority={onAuthority}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};

export default React.memo(BoardConfigContainer);
