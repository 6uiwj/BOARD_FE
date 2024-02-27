import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { apiJoin } from '../apis/apiJoin';
import JoinForm from '../components/JoinForm';
import { produce } from 'immer';
import { useNavigate } from 'react-router-dom';

const JoinContainer = () => {
  const [form, setForm] = useState({}); // 양식 항목 데이터
  const [errors, setErrors] = useState({}); // 유효성 검사 실패시 필드, 메세지
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      /* 필수 항목 S */
      const requiredFields = {
        email: t('이메일을_입력하세요.'),
        password: t('비밀번호를_입력하세요'),
        confirmPassword: t('비밀번호를_확인하세요.'),
        name: t('회원명을_입력하세요.'),
        agree: t('가입약관에_동의하세요.'),
      };
      /* 필수 항목 E */

      const _errors = {}; // 검증 실패시 담아주는 에러 객체
      let hasErrors = false; // 에러 유무

      /* 필수 항목 검증 S */
      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];

        const fieldValue =
          key === 'agree' ? form[key] : form[key] ? form[key].trim() : '';

        if (!fieldValue) {
          _errors[key].push(value);
          hasErrors = true;
        }
      }
      /* 필수 항목 검증 E */
      setErrors(_errors);

      /* 회원가입 요청 처리 S */
      if (!hasErrors) {
        apiJoin(form)
          .then(() => {
            navigate('/member/login'); // 회원 가입 성공시 로그인 페이지 이동
          })
          .catch((err) => {
            if (err.message) {
              err.messages = err.messages || {};
              err.messages.global = err.messages.global || [];
              err.messages.global.push(err.message);
            }

            if (err.messages) {
              for (const [key, values] of Object.entries(err.messages)) {
                if (values && values.length > 0) {
                  _errors[key] = values;
                }
              }

              setErrors({ ..._errors });
            }
          });
      }
      /* 회원가입 요청 처리 E */
    },
    [t, form, navigate],
  );

  const onChange = useCallback((e) => {
    setForm(
      produce((draft) => {
        draft[e.target.name] = e.target.value.trim();
      }),
    );
  }, []);

  const onToggle = useCallback(
    () =>
      setForm(
        produce((draft) => {
          draft.agree = draft.agree || false;
          draft.agree = !draft.agree;
        }),
      ),
    [],
  );

  return (
    <JoinForm
      onSubmit={onSubmit}
      onChange={onChange}
      onToggle={onToggle}
      form={form}
      errors={errors}
    />
  );
};

export default React.memo(JoinContainer);
