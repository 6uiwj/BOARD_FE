import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import LoginForm from '../components/LoginForm';
import { produce } from 'immer';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const { t } = useTranslation();

  const onChange = useCallback(
    (e) =>
      setForm(
        produce((draft) => {
          draft[e.target.name] = e.target.value.trim();
        }),
      ),
    [],
  );
  //  기존객체를 가지고 새로운 객체를 만들필요 없이 기존객체를 가지고..변경..?

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault(); //기본기능 차단

      /* 필수 입력 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요.'),
      };
      /* 필수 입력 항목 E */

      // 검증 실패시 메시지
      const _errors = {};

      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];
        form[key] = form[key] || '';
        if (!form[key].trim()) {
          //값이 없을 때에는 검증메시지를 넣어줌
          //필수항목이 누락된 경우
          _errors[key].push(value);
        }
      }

      setErrors(_errors);
    },
    [form, t],
  );
  return (
    <LoginForm
      onChange={onChange}
      onSubmit={onSubmit}
      form={form}
      errors={errors}
    />
  );
};

export default React.memo(LoginContainer);
