import axios from 'axios';
import cookies from 'react-cookies';

export default function apiRequest(url, method = 'GET', data, headers = {}) {
  // /member/join -> http://localhost:3001/api/v1/member/join
  // https://주소/api/....

  if (!url || !url.trim()) return;

  if (!/^http[s]?:/i.test(url)) {
    url = process.env.REACT_APP_API_URL + url;
  }

  // GET -> ?키=값&키=값
  method = method.toUpperCase();
  if (method === 'GET' && data) {
    const params = new URLSearchParams(data);
    url += '?' + params.toString();
    data = null;
  }

  const token = cookies.load('token');
  if (token && token.trim()) {
    headers.Authorization = `Bearer ${token}`;
  }

  return axios({
    method,
    url,
    data,
    headers,
    validateStatus: (state) => state < 500,
  });
}
