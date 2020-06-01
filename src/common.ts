import { extend, ExtendOptionsInit } from 'umi-request';

/** 这边可对接口请求做一些统一的封装 */
export const commonRequestOptions: ExtendOptionsInit = {
  useCache: false,
  ttl: 60000,
  credentials: 'same-origin',
  headers: {
    access_token: sessionStorage.getItem('accessToken')!,
  },
};
export const request = () => extend(commonRequestOptions);
