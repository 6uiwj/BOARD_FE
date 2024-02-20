import React, { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import JoinForm from '../components/JoinForm';

const JoinContainer = () => {
  const [form, setForm] = useState({}); //양식 항목 데이터
  const [errors, setErrors] = useState({}); //유효성 검사 실패시 필드, 메시지
  const { t } = useTranslation();

  const onSubmit = useCallback(
    (e) => {
      //e: event
      e.preventDefault(); //기본동작 차단

      // 필수항목 S
      const requiredFields = {
        email: t('이메일을_입력하세요'),
        password: t('비밀번호를_입력하세요'),
        confirmPassword: t('비밀번호를 확인하세요.'),
        name: t('회원명을_입력하세요'),
        agree: t('가입약관에_동의하세요.'),
      };
      // 필수항목 E

      const _errors = {}; //검증 실패시 담아주는 에러 객체

      /* 필수 항목 검증 S (form 데이터를 가져와서) */
      for (const [key, value] of Object.entries(requiredFields)) {
        _errors[key] = _errors[key] || [];

        //있을 때는 trim,  없을 때에는 비어있는 값으로
        const fieldValue =
          key === 'agree' ? form[key] : form[key] ? form[key].trim() : '';

        //가입약관 동의 여부
        if (!fieldValue) _errors[key].push(value); //'약관에 동의하세요' 메시지가 들어감
      }

      /* 필수 항목 검증 E */

      setErrors(_errors);
    },
    [t, form],
  );

  //입력할 때마다 form에 값을 업데이트
  // onchange 이벤트가 발생하면 메인값을 가져와서 폼에 업데이트
  const onChange = useCallback((e) => {
    //함수형업데이트 사용 (기존 넘어온 값을 가지고..(다시 함수가 만들어지지 않게끔))
    setForm((form) => ({ ...form, [e.target.name]: e.target.value.trim() })); //소괄호로 감싸줘야 반환값으로 인식함 (아니면 구현체로 인식함..)
  }, []);

  const onToggle = useCallback(
    () =>
      setForm((form) => {
        form.agree = form.agree || false; //agree가 없으면 false
        return { ...form, agree: !form.agree };
      }),
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
