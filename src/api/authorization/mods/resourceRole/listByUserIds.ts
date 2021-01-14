/**
 * @description 根据用户id列表查询其所有角色
 */

import serverConfig from '../../../../../server.config';
import { initRequest } from '@/common';

const backEndUrl = serverConfig()['authorization'];

export const init = [];

export async function fetch(data = {}) {
  const request = await initRequest();
  const result = await request.post(
    backEndUrl + '/role/resource/listByUserIds',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    },
  );
  if (result) {
    if (!result.success) {
      throw new Error(JSON.stringify(result));
    } else {
      return result.data || [];
    }
  } else {
    throw new Error(JSON.stringify({ message: '接口未响应' }));
  }
}
