import React, { useRef, useEffect, useCallback, useState } from 'react';
import styled from 'styled-components';
import loadable from '@loadable/component';
import { useTranslation } from 'react-i18next';
import { SmallButton } from './ButtonStyle';
import { fileUpload } from '../../member/apis/apiFile';
import color from '../../styles/color';
const { dark } = color;

const MessageBox = loadable(() => import('./MessageBox'));

const DragDropBox = styled.div`
  border: 1px dashed ${dark};
  text-align: center;
  padding: 70px 10px;
  color: ${dark};
`;

const uploadProcess = (files, options, t) => {
  const { gid, location, single, imageOnly, onSuccess, onFailure } = options;
  if (!gid || !gid.trim()) {
    throw new Error(t('필수항목_gid_누락'));
  }

  if (!files || files.length === 0) {
    throw new Error(t('업로드할_파일을_선택하세요.'));
  }

  if (imageOnly) {
    // 이미지만 업로드 가능
    for (const file of files) {
      if (file.type.indexOf('image/') === -1) {
        throw new Error(t('이미지만_업로드_하세요.'));
      }
    }
  }

  const formData = new FormData();
  formData.append('gid', gid);
  if (location && location.trim()) formData.append('location', location);
  formData.append('single', Boolean(single));
  formData.append('imageOnly', Boolean(imageOnly));

  for (const file of files) {
    formData.append('file', file);
  }

  fileUpload(formData, onSuccess, onFailure);
};

const FileUpload = (props) => {
  const { single, type, children } = props;

  const [message, setMessage] = useState('');
  const { t } = useTranslation();

  const onClick = useCallback(() => {
    const fileEl = document.createElement('input');
    fileEl.type = 'file';
    fileEl.multiple = !Boolean(single);
    fileEl.click();

    fileEl.addEventListener('change', (e) => {
      const files = e.target.files;

      try {
        uploadProcess(files, props, t);
      } catch (err) {
        setMessage(err.message);
      }
    });
  }, [single, props, t]);

  return (
    <>
      {type && type === 'dragdrop' ? (
        <DragDropBox>{children}</DragDropBox>
      ) : (
        <SmallButton type="button" onClick={onClick}>
          {children}
        </SmallButton>
      )}

      {message && <MessageBox color="danger">{message}</MessageBox>}
    </>
  );
};

export default React.memo(FileUpload);
