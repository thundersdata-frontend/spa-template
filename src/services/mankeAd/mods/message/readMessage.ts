/**
 * @description 读取消息
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeAd'];

export const init = false;

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/message/readMessage', {
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
