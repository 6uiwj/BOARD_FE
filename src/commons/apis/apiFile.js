import apiRequest from '../libs/apiRequest';

/**
 *
 * @param {*} form : file - 파일, gid, location, imageOnly, single
 * @param {*} onSuccess : 파일 업로드 성공시 호출되는 콜백 함수
 * @param {*} onFailure : 파일 업로드 실패시 호출되는 콜백 함수
 */
export const fileUpload = (form, onSuccess, onFailure) => {
  apiRequest('/file', 'POST', form)
    .then((res) => {
      if (res.data.success) {
        if (typeof onSuccess === 'function') {
          onSuccess(res.data.data);
        }
      } else {
        if (typeof onFailure === 'function') {
          onFailure(res.data);
        }
      }
    })
    .catch((err) => {
      if (typeof onFailure === 'function') {
        onFailure(err);
      }
    });
};

/**
 * 파일 삭제
 *
 * @param {*} seq : 파일 등록번호
 * @param {*} onSuccess : 삭제 성공시
 * @param {*} onFailure : 실패 시
 */
export const fileDelete = (seq, onSuccess, onFailure) => {
  apiRequest(`/file?seq=${seq}`, 'DELETE')
    .then(() => {
      if (typeof onSuccess === 'function') onSuccess(seq);
    })
    .catch((err) => {
      if (typeof onFailure === 'function') onFailure(err);
    });
};

export const fileDeleteByGid = (gid, location, onSuccess, onFailure) => {
  let url = `/file?gid=${gid}`;
  if (location && location.trim()) url += `&location=${location.trim()}`;

  apiRequest(url, 'DELETE')
    .then(() => {
      if (typeof onSuccess === 'function') onSuccess(gid, location);
    })
    .catch((err) => {
      if (typeof onFailure === 'function') onFailure(err);
    });
};

/**
 * 파일 조회
 *
 * @param {*} search : 숫자 -> 파일 번호 : 단일 조회, 객체 -> gid, location, Mode 목록 조회
 */
export const fileInfo = (search, onSuccess, onFailure) => {
  let url = '/file';
  if (typeof search === 'number') {
    // 단일 조회
    url += `/${search}`;
    search = null;
  }

  apiRequest(url, 'GET', search)
    .then((res) => {
      if (res.data.success) {
        if (typeof onSuccess === 'function') onSuccess(res.data.data);
      } else {
        if (typeof onFailure === 'function') onFailure(res.data);
      }
    })
    .catch((err) => {
      if (typeof onFailure === 'function') onFailure(err);
    });
};

export const fileDownload = (seq) => {
  const url = process.env.REACT_APP_API_URL + `/download/${seq}`;
  const aLink = document.createElement('a');
  aLink.href = url;
  aLink.click();
};
