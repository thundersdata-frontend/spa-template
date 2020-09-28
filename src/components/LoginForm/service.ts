/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 陈杰
 * @Date: 2020-04-26 20:43:30
 * @LastEditors: 廖军
 * @LastEditTime: 2020-06-01 17:31:09
 */
import { initRequest } from '@/common';

export interface StateType {
  status?: 'ok' | 'error';
  type?: string;
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  const request = await initRequest();
  return request('/account', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  const request = await initRequest();
  return request(`/captcha?mobile=${mobile}`);
}
