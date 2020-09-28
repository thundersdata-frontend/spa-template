/**
 * @description 绑定微信
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = false;

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/user/bindWeChat', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || false;
  } else {
    throw new Error();
  }
}
