import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { InputText, Textarea } from '../../commons/components/InputBoxStyle';
import { SubTitle } from '../../commons/components/TitleStyle';
import { FiSquare, FiCheckSquare } from 'react-icons/fi';
import { MediumButton } from '../../commons/components/ButtonStyle';
import MessageBox from '../../commons/components/MessageBox';
import FileUpload from '../../commons/components/FileUpload';
import ImageBox from '../../commons/components/ImageBox';

const TermsBox = styled.div`
  margin: 10px 0;
  text-align: center;
  cursor: pointer;

  svg {
    font-size: 1.5rem;
    vertical-align: middle;
  }
`;

const JoinForm = ({
  onSubmit,
  onChange,
  onToggle,
  form,
  errors,
  fileUploadCallback,
}) => {
  const { t } = useTranslation();

  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <InputText
        type="text"
        name="email"
        placeholder={t('이메일')}
        onChange={onChange}
        value={form.email}
      />

      <MessageBox messages={errors.email} color="danger" />

      <InputText
        type="password"
        name="password"
        placeholder={t('비밀번호')}
        onChange={onChange}
        value={form.password}
      />

      <MessageBox messages={errors.password} color="danger" />

      <InputText
        type="password"
        name="confirmPassword"
        placeholder={t('비밀번호_확인')}
        onChange={onChange}
        value={form.confirmPassword}
      />

      <MessageBox messages={errors.confirmPassword} color="danger" />

      <InputText
        type="text"
        name="name"
        placeholder={t('회원명')}
        onChange={onChange}
        value={form.name}
      />

      <MessageBox messages={errors.name} color="danger" />

      {form.profileImage && <ImageBox image={form.profileImage} thumb={true} />}

      <FileUpload
        gid={form.gid}
        imageOnly={true}
        single={true}
        onSuccess={fileUploadCallback}
      >
        {t('프로필_이미지_업로드')}
      </FileUpload>

      <SubTitle align="center" className="mt20">
        {t('가입약관')}
      </SubTitle>
      <Textarea defaultValue="약관..." />
      <TermsBox onClick={onToggle}>
        {form.agree ? <FiCheckSquare /> : <FiSquare />}
        {t('가입약관에_동의합니다.')}
      </TermsBox>

      <MessageBox messages={errors.agree} color="danger" />

      <MessageBox messages={errors.global} color="danger" />

      <MediumButton
        type="submit"
        bcolor="primary"
        fcolor="#fff"
        className="mt20"
      >
        {t('가입하기')}
      </MediumButton>
    </form>
  );
};

export default React.memo(JoinForm);
