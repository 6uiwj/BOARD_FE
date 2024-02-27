import apiRequest from '../../commons/libs/apiRequest';

export const apiJoin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/member', 'POST', formData)
      .then((res) => {
        if (
          (res.status >= 200 && res.status < 300 && !res.data) ||
          res.data.success
        ) {
          resolve(res.data ? res.data.data : 'success');
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });
