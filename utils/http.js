import axios from 'axios';
import { cookie } from '~/utils';

// 添加请求拦截器
const BASE_URL = 'https://jv.mind-erp.com/';
const http = axios.create({
  baseURL: BASE_URL,
  timeout: 1000 * 60,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  }
});

// http request 拦截器
http.interceptors.request.use(
  config => {
    const token = cookie.getCookie(
      process.server ? process.token : document.cookie,
      'token'
    );
    // 添加从Url获取token
    if (token) {
      config.headers.common['token'] = token;
    }
    return config;
  },
  err => {
    console.log('请求的错误信息 err ', err);
    return Promise.reject(err);
  }
);

http.interceptors.response.use(
  response => {
    const isServer = process.server;
    const { redirect, routeName } = isServer
      ? process.routerMessage
      : {
          redirect: window.$nuxt.$router.redirect,
          routeName: window.$nuxt.$route.name
        };
    if (routeName !== 'login' && response.data.code === 400) {
      redirect('/login');
    }
    return response;
  },
  err => {
    console.log('响应的错误信息 err ', err);
    return Promise.reject(err); // 返回接口返回的错误信息
  }
);

export default http;
