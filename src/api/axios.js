import axios from 'axios';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

const instance = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

instance.interceptors.request.use(
  function (config) {
    const asscess_token = getCookie('access_token');
    if (asscess_token) {
      config.headers['Authorization'] = `Bearer ${asscess_token}`;
    }

    return config;
  },
  function (error) {
    return error;
  },
);

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.data?.code === 500) {
      deleteCookie('access_token');
      deleteCookie('user_avatar');
      deleteCookie('user_name');
      deleteCookie('user_id');
      window.location.href = `${process.env.REACT_APP_BASE_HREF}/`;
    }
    return error;
  },
);
export default instance;
