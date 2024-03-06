import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaWindowClose } from 'react-icons/fa';
import ConfirmBox from './ConfirmBox';
import { fileDelete } from '../apis/apiFile';

const Box = styled.div``;

const ImageBox = ({ image, thumb }) => {
  const [open, setOpen] = useState(false);
  const [img, setImg] = useState(image);
  const { t } = useTranslation();

  let imageUrl = null;
  if (img) {
    imageUrl = thumb ? img.thumbUrl : img.fileUrl;
    imageUrl = imageUrl || img.fileUrl;
  }

  // 파일 삭제
  const onClick = useCallback(() => setOpen(true), []);

  const onConfirm = useCallback(() => {
    fileDelete(image.seq, () => setImg(null));
  }, [image]);

  const onCancel = useCallback(() => setOpen(false), []);

  return (
    <>
      {imageUrl && (
        <Box>
          <FaWindowClose onClick={onClick} />
          <img src={imageUrl} alt="img" />
          {open && (
            <ConfirmBox open={open} onConfirm={onConfirm} onCancel={onCancel}>
              {t('정말_이미지를_삭제하겠습니까?')}
            </ConfirmBox>
          )}
        </Box>
      )}
    </>
  );
};

export default React.memo(ImageBox);
