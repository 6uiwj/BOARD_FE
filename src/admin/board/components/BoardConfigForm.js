import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { IoIosRadioButtonOff, IoIosRadioButtonOn } from 'react-icons/io';
import { TableCols } from '../../../commons/components/admin/TableStyle';
import { InputText, Textarea } from '../../../commons/components/InputBoxStyle';
import { SubTitle } from '../../../commons/components/TitleStyle';
import { BigButton } from '../../../commons/components/ButtonStyle';
import loadable from '@loadable/component';
const MessageBox = loadable(() =>
  import('../../../commons/components/MessageBox'),
);

const FormBox = styled.form`
  .btns {
    display: flex;
    width: 500px;
    margin: 25px auto;

    button + button {
      margin-left: 5px;
    }
  }
`;

const BoardConfigForm = ({ form, onChange, onActive, onAuthority, errors }) => {
  const { t } = useTranslation();
  form = form || {};
  errors = errors || {};

  return (
    <FormBox>
      {errors.global && <MessageBox color="danger" messages={errors.global} />}
      <SubTitle>{t('일반설정')}</SubTitle>
      <TableCols className="mb30">
        <tr>
          <th>{t('게시판_아이디')}</th>
          <td>
            <InputText
              type="text"
              name="bid"
              value={form.bid}
              onChange={onChange}
            />
            {errors.bid && <MessageBox color="danger" messages={errors.bid} />}
          </td>
        </tr>
        <tr>
          <th>{t('게시판_이름')}</th>
          <td>
            <InputText
              type="text"
              name="bName"
              value={form.bName}
              onChange={onChange}
            />
            {errors.bName && (
              <MessageBox color="danger" messages={errors.bName} />
            )}
          </td>
        </tr>
        <tr>
          <th>{t('사용_여부')}</th>
          <td>
            <span onClick={() => onActive(true)}>
              {form.active ? <IoIosRadioButtonOn /> : <IoIosRadioButtonOff />}{' '}
              {t('사용')}
            </span>
            <span onClick={() => onActive(false)}>
              {form.active ? <IoIosRadioButtonOff /> : <IoIosRadioButtonOn />}{' '}
              {t('미사용')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('한페이지_게시글_수')}</th>
          <td>
            <InputText
              type="number"
              name="pagePerRows"
              value={form.pagePerRows}
              onChange={onChange}
            />
            {errors.pagePerRows && (
              <MessageBox color="danger" messages={errors.pagePerRows} />
            )}
          </td>
        </tr>
        <tr>
          <th>{t('페이지_구간_갯수')}</th>
          <td>
            <InputText
              type="number"
              name="pageRanges"
              value={form.pageRanges}
              onChange={onChange}
            />
            {errors.pageRanges && (
              <MessageBox color="danger" messages={errors.pageRanges} />
            )}
          </td>
        </tr>
      </TableCols>

      <SubTitle>{t('분류설정')}</SubTitle>
      <TableCols className="mb30">
        <tr>
          <th>{t('분류')}</th>
          <td>
            <Textarea
              name="category"
              placeholder={t('분류가_여러개일때_줄개행하여_입력')}
              onChange={onChange}
            >
              {form.category}
            </Textarea>
            {errors.category && (
              <MessageBox color="danger" messages={errors.category} />
            )}
          </td>
        </tr>
      </TableCols>

      <SubTitle>{t('권한설정')}</SubTitle>
      <TableCols>
        <tr>
          <th>{t('글쓰기')}</th>
          <td>
            <span onClick={() => onAuthority('write', 'ALL')}>
              {form.writeAuthority === 'ALL' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('전체(비회원+회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('write', 'USER')}>
              {form.writeAuthority === 'USER' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('회원(회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('write', 'ADMIN')}>
              {form.writeAuthority === 'ADMIN' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('관리자')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('글목록')}</th>
          <td>
            <span onClick={() => onAuthority('list', 'ALL')}>
              {form.listAuthority === 'ALL' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('전체(비회원+회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('list', 'USER')}>
              {form.listAuthority === 'USER' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('회원(회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('list', 'ADMIN')}>
              {form.listAuthority === 'ADMIN' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}
              {t('관리자')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('글보기')}</th>
          <td>
            <span onClick={() => onAuthority('view', 'ALL')}>
              {form.viewAuthority === 'ALL' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}

              {t('전체(비회원+회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('view', 'USER')}>
              {form.viewAuthority === 'USER' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}

              {t('회원(회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('view', 'ADMIN')}>
              {form.viewAuthority === 'ADMIN' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}

              {t('관리자')}
            </span>
          </td>
        </tr>
        <tr>
          <th>{t('댓글')}</th>
          <td>
            <span onClick={() => onAuthority('comment', 'ALL')}>
              {form.commentAuthority === 'ALL' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}

              {t('전체(비회원+회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('comment', 'USER')}>
              {form.commentAuthority === 'USER' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}

              {t('회원(회원+관리자)')}
            </span>
            <span onClick={() => onAuthority('comment', 'ADMIN')}>
              {form.commentAuthority === 'ADMIN' ? (
                <IoIosRadioButtonOn />
              ) : (
                <IoIosRadioButtonOff />
              )}

              {t('관리자')}
            </span>
          </td>
        </tr>
      </TableCols>
      <div class="btns">
        <BigButton type="reset" bcolor="info" fcolor="#fff">
          {t('다시입력')}
        </BigButton>
        <BigButton type="submit" bcolor="primary" fcolor="#fff">
          {form.mode === 'edit' ? t('수정하기') : t('등록하기')}
        </BigButton>
      </div>
    </FormBox>
  );
};

export default React.memo(BoardConfigForm);
