import { extend, ExtendOptionsInit } from 'umi-request';

/** 这边可对接口请求做一些统一的封装 */
export const commonRequestOptions: ExtendOptionsInit = {
  useCache: false,
  ttl: 60000,
  credentials: 'include',
};
export const request = extend(commonRequestOptions);
