import React, { useState, useCallback } from 'react';
import BoardConfigForm from '../components/BoardConfigForm';

const BoardConfigContainer = ({ mode }) => {
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

  const onSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);

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
