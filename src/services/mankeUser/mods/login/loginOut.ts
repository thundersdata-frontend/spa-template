/**
 * @description 退出登录
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = false;

export async function fetch(params = {}) {
  const result = await request().get(backEndUrl + '/logout', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || false;
  } else {
    throw new Error();
  }
}
