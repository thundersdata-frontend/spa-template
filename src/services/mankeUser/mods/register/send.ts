/**
 * @description 发送短信
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = '';

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/send', {
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
