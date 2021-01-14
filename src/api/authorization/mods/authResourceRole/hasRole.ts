/**
 * @description 校验用户是否已经绑定该角色
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = false;

export async function fetch(params = {}) {
  const request = await initRequest();
  const result = await request.get(backEndUrl + '/auth/role/resource/hasRole', {
    headers: {
      'Content-Type': 'application/json',
    },
    params,
  });
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || false;
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
