/*
 * @文件描述:
 * @公司: thundersdata
 * @作者: 廖军
 * @Date: 2020-05-20 17:08:10
 * @LastEditors: 廖军
 * @LastEditTime: 2020-06-01 17:30:59
 */

import { request } from '@/common';

export interface StateType {
  status?: 'ok' | 'error';
  currentAuthority?: 'user' | 'guest' | 'admin';
}

export interface UserRegisterParams {
  mail: string;
  password: string;
  confirm: string;
  mobile: string;
  captcha: string;
  prefix: string;
}

export async function fakeRegister(params: UserRegisterParams) {
  return request()('/api/register', {
    method: 'POST',
    data: params,
  });
}
