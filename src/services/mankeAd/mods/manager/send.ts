/**
 * @description 获取验证码
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = '';

export async function fetch(data = {}) {
  const result = await request().get(backEndUrl + '/manager/verifyCode', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || '';
  } else {
    throw new Error();
  }
}
