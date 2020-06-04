/*
 * @文件描述: 
 * @公司: thundersdata
 * @作者: 黄姗姗
 * @Date: 2020-05-25 14:34:43
 * @LastEditors: 黄姗姗
 * @LastEditTime: 2020-06-04 15:13:59
 */ 
/**
 * @description 获取所有字典
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['recruitment'];

export const init = undefined;

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/dict/getAllDict', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || undefined;
  } else {
    throw new Error();
  }
}
