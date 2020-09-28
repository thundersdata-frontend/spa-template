/**
 * @description 添加或修改黑白名单,0:设备黑名单，1:消费黑名单,2:IP黑名单,3:设备白名单,4:消费白名单
 */

import serverConfig from '../../../../../server.config';
import { request } from '@/common';

const backEndUrl = serverConfig()['mankeUser'];

export const init = undefined;

export async function fetch(data = {}) {
  const result = await request().post(backEndUrl + '/filter/set', {
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  });
  if (result) {
    if (!result.success) throw new Error(result.message);
    return result.data || undefined;
  } else {
    throw new Error();
  }
}
